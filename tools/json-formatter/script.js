// ============================================
// JSON FORMATTER - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const inputEditor = document.getElementById('inputEditor');
const outputEditor = document.getElementById('outputEditor');
const inputLineNumbers = document.getElementById('inputLineNumbers');
const outputLineNumbers = document.getElementById('outputLineNumbers');
const inputCharCount = document.getElementById('inputCharCount');
const outputCharCount = document.getElementById('outputCharCount');
const statusBadge = document.getElementById('statusBadge');
const errorPanel = document.getElementById('errorPanel');
const errorMessage = document.getElementById('errorMessage');

// Buttons
const formatBtn = document.getElementById('formatBtn');
const minifyBtn = document.getElementById('minifyBtn');
const validateBtn = document.getElementById('validateBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const fileInput = document.getElementById('fileInput');

// State
let currentOutput = '';
let isValid = false;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load saved JSON from localStorage
    const savedJson = window.deepvlab.loadFromLocalStorage('json-formatter-input');
    if (savedJson) {
        inputEditor.value = savedJson;
        updateCharCount();
        updateLineNumbers();
    }
    
    // Event listeners
    setupEventListeners();
    
    // Initial update
    updateCharCount();
    updateLineNumbers();
});

function setupEventListeners() {
    // Input editor
    inputEditor.addEventListener('input', () => {
        updateCharCount();
        updateLineNumbers();
        saveToLocalStorage();
    });
    
    inputEditor.addEventListener('scroll', syncScroll);
    
    // Buttons
    formatBtn.addEventListener('click', formatJSON);
    minifyBtn.addEventListener('click', minifyJSON);
    validateBtn.addEventListener('click', validateJSON);
    clearBtn.addEventListener('click', clearAll);
    copyBtn.addEventListener('click', copyOutput);
    downloadBtn.addEventListener('click', downloadJSON);
    
    // File upload
    fileInput.addEventListener('change', handleFileUpload);
}

// ============================================
// JSON OPERATIONS
// ============================================

function formatJSON() {
    const input = inputEditor.value.trim();
    
    if (!input) {
        showError('Please enter some JSON to format');
        return;
    }
    
    try {
        const parsed = JSON.parse(input);
        const formatted = JSON.stringify(parsed, null, 2);
        
        displayOutput(formatted);
        setStatus('valid', 'Valid JSON');
        hideError();
        
        window.deepvlab.showToast('JSON formatted successfully!', 'success');
        window.deepvlab.trackEvent('JSON Formatter', 'Format', 'Success');
    } catch (error) {
        showError(error.message);
        setStatus('invalid', 'Invalid JSON');
        window.deepvlab.trackEvent('JSON Formatter', 'Format', 'Error');
    }
}

function minifyJSON() {
    const input = inputEditor.value.trim();
    
    if (!input) {
        showError('Please enter some JSON to minify');
        return;
    }
    
    try {
        const parsed = JSON.parse(input);
        const minified = JSON.stringify(parsed);
        
        displayOutput(minified);
        setStatus('valid', 'Valid JSON');
        hideError();
        
        window.deepvlab.showToast('JSON minified successfully!', 'success');
        window.deepvlab.trackEvent('JSON Formatter', 'Minify', 'Success');
    } catch (error) {
        showError(error.message);
        setStatus('invalid', 'Invalid JSON');
        window.deepvlab.trackEvent('JSON Formatter', 'Minify', 'Error');
    }
}

function validateJSON() {
    const input = inputEditor.value.trim();
    
    if (!input) {
        showError('Please enter some JSON to validate');
        return;
    }
    
    try {
        JSON.parse(input);
        setStatus('valid', 'Valid JSON ✓');
        hideError();
        window.deepvlab.showToast('JSON is valid!', 'success');
        window.deepvlab.trackEvent('JSON Formatter', 'Validate', 'Valid');
    } catch (error) {
        showError(error.message);
        setStatus('invalid', 'Invalid JSON ✗');
        window.deepvlab.showToast('JSON is invalid', 'error');
        window.deepvlab.trackEvent('JSON Formatter', 'Validate', 'Invalid');
    }
}

// ============================================
// OUTPUT DISPLAY
// ============================================

function displayOutput(json) {
    currentOutput = json;
    
    // Apply syntax highlighting
    const highlighted = syntaxHighlight(json);
    outputEditor.innerHTML = highlighted;
    
    // Update character count
    outputCharCount.textContent = `${json.length.toLocaleString()} characters`;
    
    // Update line numbers
    updateOutputLineNumbers(json);
    
    isValid = true;
}

function syntaxHighlight(json) {
    // Simple syntax highlighting using regex
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'json-number';
        
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
            } else {
                cls = 'json-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-boolean';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        }
        
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

// ============================================
// UI UPDATES
// ============================================

function updateCharCount() {
    const count = inputEditor.value.length;
    inputCharCount.textContent = `${count.toLocaleString()} characters`;
}

function updateLineNumbers() {
    const lines = inputEditor.value.split('\n').length;
    let lineNumbersHtml = '';
    
    for (let i = 1; i <= lines; i++) {
        lineNumbersHtml += i + '\n';
    }
    
    inputLineNumbers.textContent = lineNumbersHtml;
}

function updateOutputLineNumbers(text) {
    const lines = text.split('\n').length;
    let lineNumbersHtml = '';
    
    for (let i = 1; i <= lines; i++) {
        lineNumbersHtml += i + '\n';
    }
    
    outputLineNumbers.textContent = lineNumbersHtml;
}

function syncScroll() {
    inputLineNumbers.scrollTop = inputEditor.scrollTop;
}

function setStatus(type, text) {
    statusBadge.className = 'status-badge ' + type;
    statusBadge.querySelector('.status-text').textContent = text;
    
    if (type === 'valid') {
        statusBadge.querySelector('.status-icon').textContent = '✓';
    } else if (type === 'invalid') {
        statusBadge.querySelector('.status-icon').textContent = '✗';
    } else {
        statusBadge.querySelector('.status-icon').textContent = '⏳';
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorPanel.style.display = 'block';
}

function hideError() {
    errorPanel.style.display = 'none';
}

// ============================================
// ACTIONS
// ============================================

function clearAll() {
    inputEditor.value = '';
    outputEditor.innerHTML = '';
    currentOutput = '';
    isValid = false;
    
    updateCharCount();
    updateLineNumbers();
    outputCharCount.textContent = '0 characters';
    outputLineNumbers.textContent = '';
    
    setStatus('', 'Ready');
    hideError();
    
    window.deepvlab.removeFromLocalStorage('json-formatter-input');
    window.deepvlab.showToast('Cleared!', 'success');
}

async function copyOutput() {
    if (!currentOutput) {
        window.deepvlab.showToast('Nothing to copy', 'warning');
        return;
    }
    
    const success = await window.deepvlab.copyToClipboard(currentOutput, copyBtn);
    
    if (success) {
        window.deepvlab.trackEvent('JSON Formatter', 'Copy', 'Success');
    }
}

function downloadJSON() {
    if (!currentOutput) {
        window.deepvlab.showToast('Nothing to download', 'warning');
        return;
    }
    
    const filename = 'formatted-' + Date.now() + '.json';
    window.deepvlab.downloadFile(currentOutput, filename, 'application/json');
    window.deepvlab.showToast('Downloaded!', 'success');
    window.deepvlab.trackEvent('JSON Formatter', 'Download', 'Success');
}

async function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (!file) return;
    
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
        window.deepvlab.showToast('File too large (max 10MB)', 'error');
        return;
    }
    
    try {
        const content = await window.deepvlab.readFileAsText(file);
        inputEditor.value = content;
        
        updateCharCount();
        updateLineNumbers();
        saveToLocalStorage();
        
        window.deepvlab.showToast('File uploaded!', 'success');
        window.deepvlab.trackEvent('JSON Formatter', 'Upload', 'Success');
        
        // Auto-format after upload
        setTimeout(formatJSON, 100);
    } catch (error) {
        window.deepvlab.showToast('Failed to read file', 'error');
        window.deepvlab.trackEvent('JSON Formatter', 'Upload', 'Error');
    }
    
    // Reset file input
    fileInput.value = '';
}

function saveToLocalStorage() {
    window.deepvlab.saveToLocalStorage('json-formatter-input', inputEditor.value);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to format
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        formatJSON();
    }
    
    // Ctrl/Cmd + M to minify
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        minifyJSON();
    }
    
    // Ctrl/Cmd + K to validate
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        validateJSON();
    }
});

