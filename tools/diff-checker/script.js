// ============================================
// DIFF CHECKER - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const originalText = document.getElementById('originalText');
const modifiedText = document.getElementById('modifiedText');
const originalLineCount = document.getElementById('originalLineCount');
const modifiedLineCount = document.getElementById('modifiedLineCount');
const compareBtn = document.getElementById('compareBtn');
const ignoreWhitespace = document.getElementById('ignoreWhitespace');
const ignoreCase = document.getElementById('ignoreCase');
const resultsSection = document.getElementById('resultsSection');
const diffOutput = document.getElementById('diffOutput');
const addedCount = document.getElementById('addedCount');
const removedCount = document.getElementById('removedCount');
const unchangedCount = document.getElementById('unchangedCount');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadSavedData();
});

function setupEventListeners() {
    // Text inputs
    originalText.addEventListener('input', () => {
        updateLineCount(originalText, originalLineCount);
        saveData();
    });
    
    modifiedText.addEventListener('input', () => {
        updateLineCount(modifiedText, modifiedLineCount);
        saveData();
    });
    
    // Compare button
    compareBtn.addEventListener('click', compareTexts);
    
    // Update initial line counts
    updateLineCount(originalText, originalLineCount);
    updateLineCount(modifiedText, modifiedLineCount);
}

// ============================================
// COMPARISON
// ============================================

function compareTexts() {
    let text1 = originalText.value;
    let text2 = modifiedText.value;
    
    if (!text1 && !text2) {
        window.deepvlab.showToast('Please enter texts to compare', 'warning');
        return;
    }
    
    // Apply options
    if (ignoreWhitespace.checked) {
        text1 = text1.replace(/\s+/g, ' ').trim();
        text2 = text2.replace(/\s+/g, ' ').trim();
    }
    
    if (ignoreCase.checked) {
        text1 = text1.toLowerCase();
        text2 = text2.toLowerCase();
    }
    
    // Calculate diff
    const diff = Diff.diffLines(text1, text2);
    
    // Display results
    displayDiff(diff);
    
    window.deepvlab.showToast('Comparison complete!', 'success');
    window.deepvlab.trackEvent('Diff Checker', 'Compare', 'Success');
}

function displayDiff(diff) {
    let added = 0;
    let removed = 0;
    let unchanged = 0;
    let html = '';
    let lineNumber = 1;
    
    diff.forEach((part) => {
        const lines = part.value.split('\n').filter(line => line.length > 0 || part.value.endsWith('\n'));
        
        lines.forEach((line, index) => {
            // Skip empty last line
            if (index === lines.length - 1 && line === '') return;
            
            let className = 'unchanged';
            let prefix = ' ';
            
            if (part.added) {
                className = 'added';
                prefix = '+';
                added++;
            } else if (part.removed) {
                className = 'removed';
                prefix = '-';
                removed++;
            } else {
                unchanged++;
            }
            
            html += `<div class="diff-line ${className}">`;
            html += `<span class="diff-line-number">${lineNumber}</span>`;
            html += `<span>${prefix} ${escapeHtml(line)}</span>`;
            html += `</div>`;
            
            lineNumber++;
        });
    });
    
    // Update stats
    addedCount.textContent = `+${added}`;
    removedCount.textContent = `-${removed}`;
    unchangedCount.textContent = `${unchanged} unchanged`;
    
    // Display diff
    diffOutput.innerHTML = html || '<p style="color: var(--text-secondary);">No differences found</p>';
    resultsSection.style.display = 'block';
}

// ============================================
// UI HELPERS
// ============================================

function updateLineCount(textarea, countElement) {
    const lines = textarea.value.split('\n').length;
    countElement.textContent = `${lines} ${lines === 1 ? 'line' : 'lines'}`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// PERSISTENCE
// ============================================

function saveData() {
    const data = {
        original: originalText.value,
        modified: modifiedText.value
    };
    window.deepvlab.saveToLocalStorage('diff-checker-data', data);
}

function loadSavedData() {
    const data = window.deepvlab.loadFromLocalStorage('diff-checker-data');
    
    if (data) {
        originalText.value = data.original || '';
        modifiedText.value = data.modified || '';
        updateLineCount(originalText, originalLineCount);
        updateLineCount(modifiedText, modifiedLineCount);
    }
}

