// ============================================
// REGEX TESTER - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const regexInput = document.getElementById('regexInput');
const flagsInput = document.getElementById('flagsInput');
const testString = document.getElementById('testString');
const highlightedOutput = document.getElementById('highlightedOutput');
const matchCount = document.getElementById('matchCount');
const matchDetails = document.getElementById('matchDetails');
const matchList = document.getElementById('matchList');

// Flag checkboxes
const flagG = document.getElementById('flagG');
const flagI = document.getElementById('flagI');
const flagM = document.getElementById('flagM');
const flagS = document.getElementById('flagS');
const flagU = document.getElementById('flagU');

// Example buttons
const exampleBtns = document.querySelectorAll('.example-btn');

// State
let currentRegex = null;
let currentMatches = [];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadSavedData();
    testRegex();
});

function setupEventListeners() {
    // Input events with debounce
    const debouncedTest = window.deepvlab.debounce(testRegex, 300);
    
    regexInput.addEventListener('input', () => {
        saveData();
        debouncedTest();
    });
    
    testString.addEventListener('input', () => {
        saveData();
        debouncedTest();
    });
    
    // Flag checkboxes
    [flagG, flagI, flagM, flagS, flagU].forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateFlagsInput();
            saveData();
            testRegex();
        });
    });
    
    // Flags input (manual entry)
    flagsInput.addEventListener('input', () => {
        updateFlagsFromInput();
        saveData();
        testRegex();
    });
    
    // Example buttons
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => loadExample(btn));
    });
}

// ============================================
// REGEX TESTING
// ============================================

function testRegex() {
    const pattern = regexInput.value;
    const text = testString.value;
    const flags = flagsInput.value;
    
    // Clear previous results
    currentMatches = [];
    
    if (!pattern) {
        showPlaceholder();
        return;
    }
    
    if (!text) {
        showPlaceholder();
        return;
    }
    
    try {
        // Create regex
        currentRegex = new RegExp(pattern, flags);
        
        // Find matches
        if (flags.includes('g')) {
            // Global flag - find all matches
            let match;
            while ((match = currentRegex.exec(text)) !== null) {
                currentMatches.push({
                    value: match[0],
                    index: match.index,
                    groups: match.slice(1)
                });
                
                // Prevent infinite loop
                if (match.index === currentRegex.lastIndex) {
                    currentRegex.lastIndex++;
                }
            }
        } else {
            // No global flag - find first match
            const match = currentRegex.exec(text);
            if (match) {
                currentMatches.push({
                    value: match[0],
                    index: match.index,
                    groups: match.slice(1)
                });
            }
        }
        
        // Display results
        displayResults(text);
        
        window.deepvlab.trackEvent('RegEx Tester', 'Test', 'Success');
    } catch (error) {
        showError(error.message);
        window.deepvlab.trackEvent('RegEx Tester', 'Test', 'Error');
    }
}

// ============================================
// DISPLAY RESULTS
// ============================================

function displayResults(text) {
    // Update match count
    const count = currentMatches.length;
    matchCount.textContent = `${count} ${count === 1 ? 'match' : 'matches'}`;
    matchCount.className = 'match-count ' + (count > 0 ? 'has-match' : 'no-match');
    
    if (count === 0) {
        highlightedOutput.innerHTML = '<span class="placeholder-text">No matches found</span>';
        matchDetails.style.display = 'none';
        return;
    }
    
    // Highlight matches in text
    highlightMatches(text);
    
    // Show match details
    showMatchDetails();
}

function highlightMatches(text) {
    let highlighted = '';
    let lastIndex = 0;
    
    // Sort matches by index
    const sortedMatches = [...currentMatches].sort((a, b) => a.index - b.index);
    
    sortedMatches.forEach(match => {
        // Add text before match
        highlighted += escapeHtml(text.substring(lastIndex, match.index));
        
        // Add highlighted match
        highlighted += `<span class="match-highlight">${escapeHtml(match.value)}</span>`;
        
        lastIndex = match.index + match.value.length;
    });
    
    // Add remaining text
    highlighted += escapeHtml(text.substring(lastIndex));
    
    highlightedOutput.innerHTML = highlighted || '<span class="placeholder-text">No text</span>';
}

function showMatchDetails() {
    matchList.innerHTML = '';
    
    currentMatches.forEach((match, index) => {
        const item = document.createElement('div');
        item.className = 'match-item';
        
        let html = `
            <div class="match-index">Match ${index + 1} (index ${match.index})</div>
            <div class="match-value">${escapeHtml(match.value)}</div>
        `;
        
        // Show capture groups if any
        if (match.groups.length > 0 && match.groups.some(g => g !== undefined)) {
            html += '<div class="match-groups">';
            match.groups.forEach((group, i) => {
                if (group !== undefined) {
                    html += `<div class="group-item"><strong>Group ${i + 1}:</strong> ${escapeHtml(group)}</div>`;
                }
            });
            html += '</div>';
        }
        
        item.innerHTML = html;
        matchList.appendChild(item);
    });
    
    matchDetails.style.display = 'block';
}

function showPlaceholder() {
    highlightedOutput.innerHTML = '<span class="placeholder-text">Enter a regex and test string to see matches highlighted</span>';
    matchCount.textContent = '0 matches';
    matchCount.className = 'match-count no-match';
    matchDetails.style.display = 'none';
}

function showError(message) {
    highlightedOutput.innerHTML = `<span style="color: var(--color-error);">Invalid RegEx: ${escapeHtml(message)}</span>`;
    matchCount.textContent = 'Error';
    matchCount.className = 'match-count no-match';
    matchDetails.style.display = 'none';
}

// ============================================
// FLAGS MANAGEMENT
// ============================================

function updateFlagsInput() {
    let flags = '';
    if (flagG.checked) flags += 'g';
    if (flagI.checked) flags += 'i';
    if (flagM.checked) flags += 'm';
    if (flagS.checked) flags += 's';
    if (flagU.checked) flags += 'u';
    flagsInput.value = flags;
}

function updateFlagsFromInput() {
    const flags = flagsInput.value;
    flagG.checked = flags.includes('g');
    flagI.checked = flags.includes('i');
    flagM.checked = flags.includes('m');
    flagS.checked = flags.includes('s');
    flagU.checked = flags.includes('u');
}

// ============================================
// EXAMPLES
// ============================================

function loadExample(btn) {
    const regex = btn.dataset.regex;
    const flags = btn.dataset.flags;
    const test = btn.dataset.test;
    
    regexInput.value = regex;
    flagsInput.value = flags;
    testString.value = test;
    
    updateFlagsFromInput();
    saveData();
    testRegex();
    
    window.deepvlab.showToast('Example loaded!', 'success');
    window.deepvlab.trackEvent('RegEx Tester', 'Load Example', btn.querySelector('.example-title').textContent);
}

// ============================================
// PERSISTENCE
// ============================================

function saveData() {
    const data = {
        regex: regexInput.value,
        flags: flagsInput.value,
        test: testString.value
    };
    window.deepvlab.saveToLocalStorage('regex-tester-data', data);
}

function loadSavedData() {
    const data = window.deepvlab.loadFromLocalStorage('regex-tester-data');
    
    if (data) {
        regexInput.value = data.regex || '';
        flagsInput.value = data.flags || '';
        testString.value = data.test || '';
        updateFlagsFromInput();
    }
}

// ============================================
// UTILITIES
// ============================================

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

