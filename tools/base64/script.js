// ============================================
// BASE64 ENCODER/DECODER - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const modeTabs = document.querySelectorAll('.mode-tab');
const encodeMode = document.getElementById('encodeMode');
const decodeMode = document.getElementById('decodeMode');

// Encode elements
const inputTypeRadios = document.querySelectorAll('input[name="inputType"]');
const textInputSection = document.getElementById('textInput');
const fileInputSection = document.getElementById('fileInput');
const encodeText = document.getElementById('encodeText');
const encodeCharCount = document.getElementById('encodeCharCount');
const fileUploadArea = document.getElementById('fileUploadArea');
const fileInputElement = document.getElementById('fileInputElement');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const removeFileBtn = document.getElementById('removeFileBtn');
const encodeBtn = document.getElementById('encodeBtn');
const encodeOutput = document.getElementById('encodeOutput');
const encodeOutputText = document.getElementById('encodeOutputText');
const encodeOutputCount = document.getElementById('encodeOutputCount');
const copyEncodeBtn = document.getElementById('copyEncodeBtn');
const downloadEncodeBtn = document.getElementById('downloadEncodeBtn');

// Decode elements
const decodeText = document.getElementById('decodeText');
const decodeCharCount = document.getElementById('decodeCharCount');
const decodeBtn = document.getElementById('decodeBtn');
const decodeOutput = document.getElementById('decodeOutput');
const decodeOutputText = document.getElementById('decodeOutputText');
const decodeOutputCount = document.getElementById('decodeOutputCount');
const copyDecodeBtn = document.getElementById('copyDecodeBtn');
const downloadDecodeBtn = document.getElementById('downloadDecodeBtn');

// State
let currentFile = null;
let currentMode = 'encode';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadSavedData();
});

function setupEventListeners() {
    // Mode tabs
    modeTabs.forEach(tab => {
        tab.addEventListener('click', () => switchMode(tab.dataset.mode));
    });
    
    // Input type selector
    inputTypeRadios.forEach(radio => {
        radio.addEventListener('change', handleInputTypeChange);
    });
    
    // Text inputs
    encodeText.addEventListener('input', () => {
        updateCharCount(encodeText, encodeCharCount);
        saveData('encode-text', encodeText.value);
    });
    
    decodeText.addEventListener('input', () => {
        updateCharCount(decodeText, decodeCharCount);
        saveData('decode-text', decodeText.value);
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
    
    // Encode/Decode buttons
    encodeBtn.addEventListener('click', handleEncode);
    decodeBtn.addEventListener('click', handleDecode);
    
    // Copy buttons
    copyEncodeBtn.addEventListener('click', () => copyOutput(encodeOutputText.value, copyEncodeBtn));
    copyDecodeBtn.addEventListener('click', () => copyOutput(decodeOutputText.value, copyDecodeBtn));
    
    // Download buttons
    downloadEncodeBtn.addEventListener('click', () => downloadOutput(encodeOutputText.value, 'encoded.txt'));
    downloadDecodeBtn.addEventListener('click', () => downloadOutput(decodeOutputText.value, 'decoded.txt'));
}

// ============================================
// MODE SWITCHING
// ============================================

function switchMode(mode) {
    currentMode = mode;
    
    // Update tabs
    modeTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });
    
    // Show/hide content
    if (mode === 'encode') {
        encodeMode.style.display = 'block';
        decodeMode.style.display = 'none';
    } else {
        encodeMode.style.display = 'none';
        decodeMode.style.display = 'block';
    }
    
    window.deepvlab.trackEvent('Base64', 'Switch Mode', mode);
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
    
    window.deepvlab.trackEvent('Base64', 'Input Type', type);
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
    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
        window.deepvlab.showToast('File too large (max 5MB)', 'error');
        return;
    }
    
    currentFile = file;
    
    // Show file info
    fileName.textContent = file.name;
    fileSize.textContent = window.deepvlab.formatBytes(file.size);
    
    fileUploadArea.querySelector('.upload-placeholder').style.display = 'none';
    fileInfo.style.display = 'flex';
    
    window.deepvlab.trackEvent('Base64', 'File Upload', 'Success');
}

function removeFile() {
    currentFile = null;
    fileInputElement.value = '';
    
    fileUploadArea.querySelector('.upload-placeholder').style.display = 'flex';
    fileInfo.style.display = 'none';
}

// ============================================
// ENCODING
// ============================================

async function handleEncode() {
    const inputType = document.querySelector('input[name="inputType"]:checked').value;
    
    if (inputType === 'text') {
        encodeTextData();
    } else {
        await encodeFileData();
    }
}

function encodeTextData() {
    const text = encodeText.value.trim();
    
    if (!text) {
        window.deepvlab.showToast('Please enter text to encode', 'warning');
        return;
    }
    
    try {
        const encoded = btoa(unescape(encodeURIComponent(text)));
        displayEncodeOutput(encoded);
        window.deepvlab.showToast('Text encoded successfully!', 'success');
        window.deepvlab.trackEvent('Base64', 'Encode', 'Text');
    } catch (error) {
        window.deepvlab.showToast('Failed to encode text', 'error');
        console.error(error);
    }
}

async function encodeFileData() {
    if (!currentFile) {
        window.deepvlab.showToast('Please select a file to encode', 'warning');
        return;
    }
    
    try {
        const dataUrl = await window.deepvlab.readFileAsDataURL(currentFile);
        const base64 = dataUrl.split(',')[1]; // Remove data:...;base64, prefix
        
        displayEncodeOutput(base64);
        window.deepvlab.showToast('File encoded successfully!', 'success');
        window.deepvlab.trackEvent('Base64', 'Encode', 'File');
    } catch (error) {
        window.deepvlab.showToast('Failed to encode file', 'error');
        console.error(error);
    }
}

function displayEncodeOutput(encoded) {
    encodeOutputText.value = encoded;
    encodeOutputCount.textContent = `${encoded.length.toLocaleString()} characters`;
    encodeOutput.style.display = 'block';
}

// ============================================
// DECODING
// ============================================

function handleDecode() {
    const text = decodeText.value.trim();
    
    if (!text) {
        window.deepvlab.showToast('Please enter Base64 to decode', 'warning');
        return;
    }
    
    try {
        const decoded = decodeURIComponent(escape(atob(text)));
        displayDecodeOutput(decoded);
        window.deepvlab.showToast('Base64 decoded successfully!', 'success');
        window.deepvlab.trackEvent('Base64', 'Decode', 'Success');
    } catch (error) {
        window.deepvlab.showToast('Invalid Base64 string', 'error');
        window.deepvlab.trackEvent('Base64', 'Decode', 'Error');
    }
}

function displayDecodeOutput(decoded) {
    decodeOutputText.value = decoded;
    decodeOutputCount.textContent = `${decoded.length.toLocaleString()} characters`;
    decodeOutput.style.display = 'block';
}

// ============================================
// COPY & DOWNLOAD
// ============================================

async function copyOutput(text, button) {
    if (!text) {
        window.deepvlab.showToast('Nothing to copy', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(text, button);
    window.deepvlab.trackEvent('Base64', 'Copy', currentMode);
}

function downloadOutput(text, filename) {
    if (!text) {
        window.deepvlab.showToast('Nothing to download', 'warning');
        return;
    }
    
    window.deepvlab.downloadFile(text, filename, 'text/plain');
    window.deepvlab.showToast('Downloaded!', 'success');
    window.deepvlab.trackEvent('Base64', 'Download', currentMode);
}

// ============================================
// UI HELPERS
// ============================================

function updateCharCount(textarea, countElement) {
    const count = textarea.value.length;
    countElement.textContent = `${count.toLocaleString()} characters`;
}

// ============================================
// PERSISTENCE
// ============================================

function saveData(key, value) {
    window.deepvlab.saveToLocalStorage(`base64-${key}`, value);
}

function loadSavedData() {
    const savedEncodeText = window.deepvlab.loadFromLocalStorage('base64-encode-text');
    const savedDecodeText = window.deepvlab.loadFromLocalStorage('base64-decode-text');
    
    if (savedEncodeText) {
        encodeText.value = savedEncodeText;
        updateCharCount(encodeText, encodeCharCount);
    }
    
    if (savedDecodeText) {
        decodeText.value = savedDecodeText;
        updateCharCount(decodeText, decodeCharCount);
    }
}

