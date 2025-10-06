// ============================================
// URL ENCODER/DECODER - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const modeTabs = document.querySelectorAll('.mode-tab');
const encodeMode = document.getElementById('encodeMode');
const decodeMode = document.getElementById('decodeMode');

// Encode elements
const encodeInput = document.getElementById('encodeInput');
const encodeCharCount = document.getElementById('encodeCharCount');
const encodeBtn = document.getElementById('encodeBtn');
const encodeComponentBtn = document.getElementById('encodeComponentBtn');
const encodeOutput = document.getElementById('encodeOutput');
const encodeOutputText = document.getElementById('encodeOutputText');
const encodeOutputCount = document.getElementById('encodeOutputCount');
const copyEncodeBtn = document.getElementById('copyEncodeBtn');

// Decode elements
const decodeInput = document.getElementById('decodeInput');
const decodeCharCount = document.getElementById('decodeCharCount');
const decodeBtn = document.getElementById('decodeBtn');
const decodeOutput = document.getElementById('decodeOutput');
const decodeOutputText = document.getElementById('decodeOutputText');
const decodeOutputCount = document.getElementById('decodeOutputCount');
const copyDecodeBtn = document.getElementById('copyDecodeBtn');

// State
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
    
    // Text inputs
    encodeInput.addEventListener('input', () => {
        updateCharCount(encodeInput, encodeCharCount);
        saveData('encode-input', encodeInput.value);
    });
    
    decodeInput.addEventListener('input', () => {
        updateCharCount(decodeInput, decodeCharCount);
        saveData('decode-input', decodeInput.value);
    });
    
    // Encode/Decode buttons
    encodeBtn.addEventListener('click', () => handleEncode('url'));
    encodeComponentBtn.addEventListener('click', () => handleEncode('component'));
    decodeBtn.addEventListener('click', handleDecode);
    
    // Copy buttons
    copyEncodeBtn.addEventListener('click', () => copyOutput(encodeOutputText.value, copyEncodeBtn));
    copyDecodeBtn.addEventListener('click', () => copyOutput(decodeOutputText.value, copyDecodeBtn));
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
    
    window.deepvlab.trackEvent('URL Encoder', 'Switch Mode', mode);
}

// ============================================
// ENCODING
// ============================================

function handleEncode(type) {
    const input = encodeInput.value.trim();
    
    if (!input) {
        window.deepvlab.showToast('Please enter text to encode', 'warning');
        return;
    }
    
    try {
        let encoded;
        
        if (type === 'url') {
            // encodeURI - encodes entire URL, preserves URL structure
            encoded = encodeURI(input);
        } else {
            // encodeURIComponent - encodes URL component, encodes all special chars
            encoded = encodeURIComponent(input);
        }
        
        displayEncodeOutput(encoded);
        window.deepvlab.showToast('URL encoded successfully!', 'success');
        window.deepvlab.trackEvent('URL Encoder', 'Encode', type);
    } catch (error) {
        window.deepvlab.showToast('Failed to encode URL', 'error');
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
    const input = decodeInput.value.trim();
    
    if (!input) {
        window.deepvlab.showToast('Please enter encoded URL to decode', 'warning');
        return;
    }
    
    try {
        // Try decodeURIComponent first (more comprehensive)
        let decoded;
        try {
            decoded = decodeURIComponent(input);
        } catch (e) {
            // Fallback to decodeURI if decodeURIComponent fails
            decoded = decodeURI(input);
        }
        
        displayDecodeOutput(decoded);
        window.deepvlab.showToast('URL decoded successfully!', 'success');
        window.deepvlab.trackEvent('URL Encoder', 'Decode', 'Success');
    } catch (error) {
        window.deepvlab.showToast('Invalid encoded URL', 'error');
        window.deepvlab.trackEvent('URL Encoder', 'Decode', 'Error');
    }
}

function displayDecodeOutput(decoded) {
    decodeOutputText.value = decoded;
    decodeOutputCount.textContent = `${decoded.length.toLocaleString()} characters`;
    decodeOutput.style.display = 'block';
}

// ============================================
// COPY FUNCTION
// ============================================

async function copyOutput(text, button) {
    if (!text) {
        window.deepvlab.showToast('Nothing to copy', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(text, button);
    window.deepvlab.trackEvent('URL Encoder', 'Copy', currentMode);
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
    window.deepvlab.saveToLocalStorage(`url-encoder-${key}`, value);
}

function loadSavedData() {
    const savedEncodeInput = window.deepvlab.loadFromLocalStorage('url-encoder-encode-input');
    const savedDecodeInput = window.deepvlab.loadFromLocalStorage('url-encoder-decode-input');
    
    if (savedEncodeInput) {
        encodeInput.value = savedEncodeInput;
        updateCharCount(encodeInput, encodeCharCount);
    }
    
    if (savedDecodeInput) {
        decodeInput.value = savedDecodeInput;
        updateCharCount(decodeInput, decodeCharCount);
    }
}

