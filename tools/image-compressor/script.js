// ============================================
// IMAGE COMPRESSOR - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const fileUploadArea = document.getElementById('fileUploadArea');
const fileInput = document.getElementById('fileInput');
const settingsSection = document.getElementById('settingsSection');
const qualitySlider = document.getElementById('qualitySlider');
const qualityValue = document.getElementById('qualityValue');
const compressBtn = document.getElementById('compressBtn');
const imagesGrid = document.getElementById('imagesGrid');
const batchActions = document.getElementById('batchActions');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

// State
let uploadedImages = [];
let compressedImages = [];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    // File upload
    fileUploadArea.addEventListener('click', () => fileInput.click());
    fileUploadArea.addEventListener('dragover', handleDragOver);
    fileUploadArea.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);
    
    // Quality slider
    qualitySlider.addEventListener('input', updateQualityValue);
    
    // Compress button
    compressBtn.addEventListener('click', compressImages);
    
    // Batch actions
    downloadAllBtn.addEventListener('click', downloadAll);
    clearAllBtn.addEventListener('click', clearAll);
}

// ============================================
// FILE HANDLING
// ============================================

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    fileUploadArea.style.borderColor = 'var(--color-primary-500)';
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    fileUploadArea.style.borderColor = 'var(--border-color)';
    
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    if (files.length > 0) {
        handleFiles(files);
    }
}

function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    handleFiles(files);
}

async function handleFiles(files) {
    // Filter and validate
    const validFiles = files.filter(file => {
        if (!file.type.startsWith('image/')) {
            window.deepvlab.showToast(`${file.name} is not an image`, 'warning');
            return false;
        }
        if (file.size > 10 * 1024 * 1024) {
            window.deepvlab.showToast(`${file.name} is too large (max 10MB)`, 'warning');
            return false;
        }
        return true;
    });
    
    if (validFiles.length === 0) return;
    
    // Load images
    for (const file of validFiles) {
        const imageData = await loadImage(file);
        uploadedImages.push(imageData);
    }
    
    // Show settings and grid
    settingsSection.style.display = 'block';
    imagesGrid.style.display = 'grid';
    
    // Display images
    displayImages();
    
    window.deepvlab.showToast(`${validFiles.length} image(s) loaded`, 'success');
}

function loadImage(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                resolve({
                    file,
                    img,
                    dataUrl: e.target.result,
                    originalSize: file.size
                });
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// ============================================
// COMPRESSION
// ============================================

async function compressImages() {
    if (uploadedImages.length === 0) return;
    
    const quality = qualitySlider.value / 100;
    compressedImages = [];
    
    compressBtn.disabled = true;
    compressBtn.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Compressing...</span>';
    
    for (const imageData of uploadedImages) {
        const compressed = await compressImage(imageData, quality);
        compressedImages.push(compressed);
    }
    
    compressBtn.disabled = false;
    compressBtn.innerHTML = '<span class="btn-icon">🗜️</span><span class="btn-text">Compress Images</span>';
    
    displayImages();
    batchActions.style.display = 'flex';
    
    window.deepvlab.showToast('Images compressed!', 'success');
    window.deepvlab.trackEvent('Image Compressor', 'Compress', `Quality: ${qualitySlider.value}`);
}

function compressImage(imageData, quality) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = imageData.img.width;
        canvas.height = imageData.img.height;
        
        ctx.drawImage(imageData.img, 0, 0);
        
        canvas.toBlob((blob) => {
            resolve({
                ...imageData,
                compressedBlob: blob,
                compressedSize: blob.size,
                savings: ((1 - blob.size / imageData.originalSize) * 100).toFixed(1)
            });
        }, imageData.file.type, quality);
    });
}

// ============================================
// DISPLAY
// ============================================

function displayImages() {
    imagesGrid.innerHTML = '';
    
    const imagesToDisplay = compressedImages.length > 0 ? compressedImages : uploadedImages;
    
    imagesToDisplay.forEach((imageData, index) => {
        const card = createImageCard(imageData, index);
        imagesGrid.appendChild(card);
    });
}

function createImageCard(imageData, index) {
    const card = document.createElement('div');
    card.className = 'image-card';
    
    const isCompressed = imageData.compressedBlob !== undefined;
    
    card.innerHTML = `
        <img src="${imageData.dataUrl}" alt="${imageData.file.name}" class="image-preview">
        <div class="image-info">
            <div class="image-name" title="${imageData.file.name}">${imageData.file.name}</div>
            <div class="image-stats">
                <div class="stat-item">
                    <span class="stat-label">Original</span>
                    <span class="stat-value">${window.deepvlab.formatBytes(imageData.originalSize)}</span>
                </div>
                ${isCompressed ? `
                    <div class="stat-item">
                        <span class="stat-label">Compressed</span>
                        <span class="stat-value">${window.deepvlab.formatBytes(imageData.compressedSize)}</span>
                    </div>
                ` : ''}
            </div>
            ${isCompressed ? `
                <div class="savings">Saved ${imageData.savings}%</div>
            ` : ''}
            ${isCompressed ? `
                <div class="image-actions">
                    <button class="btn btn-secondary download-btn" data-index="${index}">
                        <span class="btn-icon">💾</span>
                        <span class="btn-text">Download</span>
                    </button>
                </div>
            ` : ''}
        </div>
    `;
    
    // Add download listener
    if (isCompressed) {
        const downloadBtn = card.querySelector('.download-btn');
        downloadBtn.addEventListener('click', () => downloadImage(index));
    }
    
    return card;
}

// ============================================
// DOWNLOAD
// ============================================

function downloadImage(index) {
    const imageData = compressedImages[index];
    const url = URL.createObjectURL(imageData.compressedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed-${imageData.file.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    window.deepvlab.showToast('Downloaded!', 'success');
    window.deepvlab.trackEvent('Image Compressor', 'Download', 'Single');
}

function downloadAll() {
    if (compressedImages.length === 0) return;
    
    compressedImages.forEach((imageData, index) => {
        setTimeout(() => downloadImage(index), index * 100);
    });
    
    window.deepvlab.showToast(`Downloading ${compressedImages.length} images...`, 'success');
    window.deepvlab.trackEvent('Image Compressor', 'Download', 'All');
}

// ============================================
// CLEAR
// ============================================

function clearAll() {
    uploadedImages = [];
    compressedImages = [];
    imagesGrid.innerHTML = '';
    imagesGrid.style.display = 'none';
    settingsSection.style.display = 'none';
    batchActions.style.display = 'none';
    fileInput.value = '';
    
    window.deepvlab.showToast('Cleared!', 'success');
}

// ============================================
// UI HELPERS
// ============================================

function updateQualityValue() {
    qualityValue.textContent = `${qualitySlider.value}%`;
}

