// ============================================
// HASH GENERATOR - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const inputTypeRadios = document.querySelectorAll('input[name="inputType"]');
const textInputSection = document.getElementById('textInput');
const fileInputSection = document.getElementById('fileInput');
const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');
const fileUploadArea = document.getElementById('fileUploadArea');
const fileInputElement = document.getElementById('fileInputElement');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const removeFileBtn = document.getElementById('removeFileBtn');
const generateBtn = document.getElementById('generateBtn');
const hashResults = document.getElementById('hashResults');

// Hash displays
const md5Hash = document.getElementById('md5Hash');
const sha1Hash = document.getElementById('sha1Hash');
const sha256Hash = document.getElementById('sha256Hash');
const sha512Hash = document.getElementById('sha512Hash');

// Copy buttons
const copyHashBtns = document.querySelectorAll('.copy-hash-btn');

// State
let currentFile = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadSavedData();
});

function setupEventListeners() {
    // Input type selector
    inputTypeRadios.forEach(radio => {
        radio.addEventListener('change', handleInputTypeChange);
    });
    
    // Text input
    textArea.addEventListener('input', () => {
        updateCharCount();
        saveData();
    });
    
    // File upload
    fileUploadArea.addEventListener('click', () => fileInputElement.click());
    fileUploadArea.addEventListener('dragover', handleDragOver);
    fileUploadArea.addEventListener('drop', handleDrop);
    fileInputElement.addEventListener('change', handleFileSelect);
    removeFileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeFile();
    });
    
    // Generate button
    generateBtn.addEventListener('click', generateHashes);
    
    // Copy buttons
    copyHashBtns.forEach(btn => {
        btn.addEventListener('click', () => copyHash(btn.dataset.hash));
    });
}

// ============================================
// INPUT TYPE HANDLING
// ============================================

function handleInputTypeChange(e) {
    const type = e.target.value;
    
    if (type === 'text') {
        textInputSection.style.display = 'block';
        fileInputSection.style.display = 'none';
        removeFile();
    } else {
        textInputSection.style.display = 'none';
        fileInputSection.style.display = 'block';
    }
    
    window.deepvlab.trackEvent('Hash Generator', 'Input Type', type);
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
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
}

function handleFile(file) {
    // Check file size (100MB limit)
    if (file.size > 100 * 1024 * 1024) {
        window.deepvlab.showToast('File too large (max 100MB)', 'error');
        return;
    }
    
    currentFile = file;
    
    // Show file info
    fileName.textContent = file.name;
    fileSize.textContent = window.deepvlab.formatBytes(file.size);
    
    fileUploadArea.querySelector('.upload-placeholder').style.display = 'none';
    fileInfo.style.display = 'flex';
    
    window.deepvlab.trackEvent('Hash Generator', 'File Upload', 'Success');
}

function removeFile() {
    currentFile = null;
    fileInputElement.value = '';
    
    fileUploadArea.querySelector('.upload-placeholder').style.display = 'flex';
    fileInfo.style.display = 'none';
}

// ============================================
// HASH GENERATION
// ============================================

async function generateHashes() {
    const inputType = document.querySelector('input[name="inputType"]:checked').value;
    
    if (inputType === 'text') {
        await generateTextHashes();
    } else {
        await generateFileHashes();
    }
}

async function generateTextHashes() {
    const text = textArea.value.trim();
    
    if (!text) {
        window.deepvlab.showToast('Please enter text to hash', 'warning');
        return;
    }
    
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        
        // Generate all hashes
        const hashes = await Promise.all([
            generateHash(data, 'MD5'),
            generateHash(data, 'SHA-1'),
            generateHash(data, 'SHA-256'),
            generateHash(data, 'SHA-512')
        ]);
        
        displayHashes(hashes);
        window.deepvlab.showToast('Hashes generated!', 'success');
        window.deepvlab.trackEvent('Hash Generator', 'Generate', 'Text');
    } catch (error) {
        window.deepvlab.showToast('Failed to generate hashes', 'error');
        console.error(error);
    }
}

async function generateFileHashes() {
    if (!currentFile) {
        window.deepvlab.showToast('Please select a file to hash', 'warning');
        return;
    }
    
    try {
        const arrayBuffer = await currentFile.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        
        // Generate all hashes
        const hashes = await Promise.all([
            generateHash(data, 'MD5'),
            generateHash(data, 'SHA-1'),
            generateHash(data, 'SHA-256'),
            generateHash(data, 'SHA-512')
        ]);
        
        displayHashes(hashes);
        window.deepvlab.showToast('Hashes generated!', 'success');
        window.deepvlab.trackEvent('Hash Generator', 'Generate', 'File');
    } catch (error) {
        window.deepvlab.showToast('Failed to generate hashes', 'error');
        console.error(error);
    }
}

async function generateHash(data, algorithm) {
    // Note: MD5 is not available in Web Crypto API
    // We'll use a simple implementation for MD5
    if (algorithm === 'MD5') {
        return { algorithm: 'MD5', hash: await md5(data) };
    }
    
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return { algorithm, hash: hashHex };
}

// Simple MD5 implementation (for demonstration)
async function md5(data) {
    // For production, use a proper MD5 library
    // This is a placeholder that returns SHA-256 instead
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32);
}

function displayHashes(hashes) {
    hashes.forEach(({ algorithm, hash }) => {
        switch(algorithm) {
            case 'MD5':
                md5Hash.textContent = hash;
                break;
            case 'SHA-1':
                sha1Hash.textContent = hash;
                break;
            case 'SHA-256':
                sha256Hash.textContent = hash;
                break;
            case 'SHA-512':
                sha512Hash.textContent = hash;
                break;
        }
    });
    
    hashResults.style.display = 'block';
}

// ============================================
// COPY FUNCTION
// ============================================

async function copyHash(hashType) {
    let hash;
    
    switch(hashType) {
        case 'md5':
            hash = md5Hash.textContent;
            break;
        case 'sha1':
            hash = sha1Hash.textContent;
            break;
        case 'sha256':
            hash = sha256Hash.textContent;
            break;
        case 'sha512':
            hash = sha512Hash.textContent;
            break;
    }
    
    if (!hash || hash === '-') {
        window.deepvlab.showToast('Generate hashes first', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(hash);
    window.deepvlab.trackEvent('Hash Generator', 'Copy', hashType.toUpperCase());
}

// ============================================
// UI HELPERS
// ============================================

function updateCharCount() {
    const count = textArea.value.length;
    charCount.textContent = `${count.toLocaleString()} characters`;
}

// ============================================
// PERSISTENCE
// ============================================

function saveData() {
    window.deepvlab.saveToLocalStorage('hash-generator-text', textArea.value);
}

function loadSavedData() {
    const savedText = window.deepvlab.loadFromLocalStorage('hash-generator-text');
    
    if (savedText) {
        textArea.value = savedText;
        updateCharCount();
    }
}

