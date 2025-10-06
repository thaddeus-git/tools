// ============================================
// UUID GENERATOR - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const uuidText = document.getElementById('uuidText');
const uuidOutput = document.getElementById('uuidOutput');
const copyBtn = document.getElementById('copyBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const generateBtn = document.getElementById('generateBtn');

// Format options
const formatRadios = document.querySelectorAll('input[name="format"]');

// Bulk generation
const bulkCount = document.getElementById('bulkCount');
const bulkGenerateBtn = document.getElementById('bulkGenerateBtn');
const bulkOutput = document.getElementById('bulkOutput');
const bulkList = document.getElementById('bulkList');
const bulkCountDisplay = document.getElementById('bulkCountDisplay');
const copyAllBtn = document.getElementById('copyAllBtn');
const downloadBtn = document.getElementById('downloadBtn');

// State
let currentUuid = '';
let currentFormat = 'standard';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    generateUuid();
});

function setupEventListeners() {
    // Generate buttons
    generateBtn.addEventListener('click', generateUuid);
    regenerateBtn.addEventListener('click', generateUuid);
    
    // Copy button
    copyBtn.addEventListener('click', copyUuid);
    
    // Format options
    formatRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentFormat = e.target.value;
            if (currentUuid) {
                displayUuid(currentUuid);
            }
        });
    });
    
    // Bulk generation
    bulkGenerateBtn.addEventListener('click', generateBulk);
    copyAllBtn.addEventListener('click', copyAllUuids);
    downloadBtn.addEventListener('click', downloadUuids);
}

// ============================================
// UUID GENERATION
// ============================================

function generateUuid() {
    // Generate UUID v4 using crypto.randomUUID() if available
    let uuid;
    
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        uuid = crypto.randomUUID();
    } else {
        // Fallback for older browsers
        uuid = generateUuidFallback();
    }
    
    currentUuid = uuid;
    displayUuid(uuid);
    
    window.deepvlab.trackEvent('UUID Generator', 'Generate', 'Single');
}

function generateUuidFallback() {
    // UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function displayUuid(uuid) {
    const formatted = formatUuid(uuid, currentFormat);
    uuidText.textContent = formatted;
    uuidOutput.classList.add('generated');
    setTimeout(() => uuidOutput.classList.remove('generated'), 300);
}

function formatUuid(uuid, format) {
    switch(format) {
        case 'uppercase':
            return uuid.toUpperCase();
        case 'nohyphens':
            return uuid.replace(/-/g, '');
        case 'braces':
            return `{${uuid}}`;
        case 'standard':
        default:
            return uuid;
    }
}

// ============================================
// BULK GENERATION
// ============================================

function generateBulk() {
    const count = parseInt(bulkCount.value);
    
    if (count < 1 || count > 1000) {
        window.deepvlab.showToast('Please enter a number between 1 and 1000', 'warning');
        return;
    }
    
    const uuids = [];
    for (let i = 0; i < count; i++) {
        let uuid;
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            uuid = crypto.randomUUID();
        } else {
            uuid = generateUuidFallback();
        }
        uuids.push(formatUuid(uuid, currentFormat));
    }
    
    // Display
    bulkList.value = uuids.join('\n');
    bulkCountDisplay.textContent = `${count} UUID${count === 1 ? '' : 's'} generated`;
    bulkOutput.style.display = 'block';
    
    window.deepvlab.showToast(`Generated ${count} UUIDs!`, 'success');
    window.deepvlab.trackEvent('UUID Generator', 'Generate', 'Bulk');
}

// ============================================
// COPY FUNCTIONS
// ============================================

async function copyUuid() {
    if (!currentUuid) {
        window.deepvlab.showToast('Generate a UUID first', 'warning');
        return;
    }
    
    const formatted = formatUuid(currentUuid, currentFormat);
    await window.deepvlab.copyToClipboard(formatted, copyBtn);
    window.deepvlab.trackEvent('UUID Generator', 'Copy', 'Single');
}

async function copyAllUuids() {
    const uuids = bulkList.value;
    
    if (!uuids) {
        window.deepvlab.showToast('Generate UUIDs first', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(uuids, copyAllBtn);
    window.deepvlab.trackEvent('UUID Generator', 'Copy', 'Bulk');
}

// ============================================
// DOWNLOAD FUNCTION
// ============================================

function downloadUuids() {
    const uuids = bulkList.value;
    
    if (!uuids) {
        window.deepvlab.showToast('Generate UUIDs first', 'warning');
        return;
    }
    
    const filename = `uuids-${Date.now()}.txt`;
    window.deepvlab.downloadFile(uuids, filename, 'text/plain');
    window.deepvlab.showToast('Downloaded!', 'success');
    window.deepvlab.trackEvent('UUID Generator', 'Download', 'Success');
}

