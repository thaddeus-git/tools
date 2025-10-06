// ============================================
// HTML ENCODER - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const inputCount = document.getElementById('inputCount');
const outputCount = document.getElementById('outputCount');

const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const swapBtn = document.getElementById('swapBtn');

const clearInputBtn = document.getElementById('clearInputBtn');
const clearOutputBtn = document.getElementById('clearOutputBtn');
const copyInputBtn = document.getElementById('copyInputBtn');
const copyOutputBtn = document.getElementById('copyOutputBtn');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadSavedData();
});

function setupEventListeners() {
    // Text inputs
    inputText.addEventListener('input', () => {
        updateCharCount(inputText, inputCount);
        saveData();
    });
    
    outputText.addEventListener('input', () => {
        updateCharCount(outputText, outputCount);
    });
    
    // Action buttons
    encodeBtn.addEventListener('click', encodeHTML);
    decodeBtn.addEventListener('click', decodeHTML);
    swapBtn.addEventListener('click', swapTexts);
    
    // Clear buttons
    clearInputBtn.addEventListener('click', () => clearText(inputText, inputCount));
    clearOutputBtn.addEventListener('click', () => clearText(outputText, outputCount));
    
    // Copy buttons
    copyInputBtn.addEventListener('click', () => copyText(inputText));
    copyOutputBtn.addEventListener('click', () => copyText(outputText));
    
    // Update initial counts
    updateCharCount(inputText, inputCount);
    updateCharCount(outputText, outputCount);
}

// ============================================
// ENCODING/DECODING
// ============================================

function encodeHTML() {
    const input = inputText.value;
    
    if (!input) {
        window.deepvlab.showToast('Please enter text to encode', 'warning');
        return;
    }
    
    // Create a temporary div to use browser's built-in encoding
    const div = document.createElement('div');
    div.textContent = input;
    const encoded = div.innerHTML;
    
    outputText.value = encoded;
    updateCharCount(outputText, outputCount);
    
    window.deepvlab.showToast('HTML encoded!', 'success');
    window.deepvlab.trackEvent('HTML Encoder', 'Encode', 'Success');
}

function decodeHTML() {
    const input = inputText.value;
    
    if (!input) {
        window.deepvlab.showToast('Please enter HTML to decode', 'warning');
        return;
    }
    
    // Create a temporary div to use browser's built-in decoding
    const div = document.createElement('div');
    div.innerHTML = input;
    const decoded = div.textContent;
    
    outputText.value = decoded;
    updateCharCount(outputText, outputCount);
    
    window.deepvlab.showToast('HTML decoded!', 'success');
    window.deepvlab.trackEvent('HTML Encoder', 'Decode', 'Success');
}

function swapTexts() {
    const temp = inputText.value;
    inputText.value = outputText.value;
    outputText.value = temp;
    
    updateCharCount(inputText, inputCount);
    updateCharCount(outputText, outputCount);
    saveData();
    
    window.deepvlab.showToast('Swapped!', 'success');
    window.deepvlab.trackEvent('HTML Encoder', 'Swap', 'Success');
}

// ============================================
// UI HELPERS
// ============================================

function updateCharCount(textarea, countElement) {
    const count = textarea.value.length;
    countElement.textContent = `${count.toLocaleString()} ${count === 1 ? 'character' : 'characters'}`;
}

function clearText(textarea, countElement) {
    textarea.value = '';
    updateCharCount(textarea, countElement);
    
    if (textarea === inputText) {
        saveData();
    }
    
    window.deepvlab.showToast('Cleared!', 'success');
}

async function copyText(textarea) {
    const text = textarea.value;
    
    if (!text) {
        window.deepvlab.showToast('Nothing to copy', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(text);
    window.deepvlab.trackEvent('HTML Encoder', 'Copy', textarea === inputText ? 'Input' : 'Output');
}

// ============================================
// PERSISTENCE
// ============================================

function saveData() {
    window.deepvlab.saveToLocalStorage('html-encoder-input', inputText.value);
}

function loadSavedData() {
    const savedInput = window.deepvlab.loadFromLocalStorage('html-encoder-input');
    
    if (savedInput) {
        inputText.value = savedInput;
        updateCharCount(inputText, inputCount);
    }
}

