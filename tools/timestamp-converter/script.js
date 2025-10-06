// ============================================
// TIMESTAMP CONVERTER - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const currentTimestamp = document.getElementById('currentTimestamp');
const currentDate = document.getElementById('currentDate');
const timestampInput = document.getElementById('timestampInput');
const convertToDateBtn = document.getElementById('convertToDateBtn');
const timestampResult = document.getElementById('timestampResult');
const localTime = document.getElementById('localTime');
const utcTime = document.getElementById('utcTime');
const isoTime = document.getElementById('isoTime');
const relativeTime = document.getElementById('relativeTime');

const dateInput = document.getElementById('dateInput');
const convertToTimestampBtn = document.getElementById('convertToTimestampBtn');
const dateResult = document.getElementById('dateResult');
const unixTimestamp = document.getElementById('unixTimestamp');
const milliseconds = document.getElementById('milliseconds');
const copyTimestampBtn = document.getElementById('copyTimestampBtn');
const copyMillisecondsBtn = document.getElementById('copyMillisecondsBtn');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    // Set default date input to now
    const now = new Date();
    dateInput.value = formatDateTimeLocal(now);
});

function setupEventListeners() {
    convertToDateBtn.addEventListener('click', convertTimestampToDate);
    convertToTimestampBtn.addEventListener('click', convertDateToTimestamp);
    copyTimestampBtn.addEventListener('click', () => copyValue(unixTimestamp.textContent));
    copyMillisecondsBtn.addEventListener('click', () => copyValue(milliseconds.textContent));
}

// ============================================
// CURRENT TIME
// ============================================

function updateCurrentTime() {
    const now = Date.now();
    const timestamp = Math.floor(now / 1000);
    
    currentTimestamp.textContent = timestamp;
    currentDate.textContent = new Date(now).toLocaleString();
}

// ============================================
// TIMESTAMP TO DATE
// ============================================

function convertTimestampToDate() {
    const input = timestampInput.value.trim();
    
    if (!input) {
        window.deepvlab.showToast('Please enter a timestamp', 'warning');
        return;
    }
    
    const timestamp = parseInt(input);
    
    if (isNaN(timestamp)) {
        window.deepvlab.showToast('Invalid timestamp', 'error');
        return;
    }
    
    // Handle both seconds and milliseconds
    const ms = timestamp > 10000000000 ? timestamp : timestamp * 1000;
    const date = new Date(ms);
    
    if (isNaN(date.getTime())) {
        window.deepvlab.showToast('Invalid timestamp', 'error');
        return;
    }
    
    // Display results
    localTime.textContent = date.toLocaleString();
    utcTime.textContent = date.toUTCString();
    isoTime.textContent = date.toISOString();
    relativeTime.textContent = getRelativeTime(date);
    
    timestampResult.style.display = 'block';
    
    window.deepvlab.showToast('Converted!', 'success');
    window.deepvlab.trackEvent('Timestamp Converter', 'Convert', 'Timestamp to Date');
}

// ============================================
// DATE TO TIMESTAMP
// ============================================

function convertDateToTimestamp() {
    const input = dateInput.value;
    
    if (!input) {
        window.deepvlab.showToast('Please select a date', 'warning');
        return;
    }
    
    const date = new Date(input);
    
    if (isNaN(date.getTime())) {
        window.deepvlab.showToast('Invalid date', 'error');
        return;
    }
    
    const timestamp = Math.floor(date.getTime() / 1000);
    const ms = date.getTime();
    
    unixTimestamp.textContent = timestamp;
    milliseconds.textContent = ms;
    
    dateResult.style.display = 'block';
    
    window.deepvlab.showToast('Converted!', 'success');
    window.deepvlab.trackEvent('Timestamp Converter', 'Convert', 'Date to Timestamp');
}

// ============================================
// HELPERS
// ============================================

function getRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;
    if (months < 12) return `${months} months ago`;
    return `${years} years ago`;
}

function formatDateTimeLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

async function copyValue(value) {
    if (!value || value === '-') {
        window.deepvlab.showToast('No value to copy', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(value);
    window.deepvlab.trackEvent('Timestamp Converter', 'Copy', 'Success');
}

