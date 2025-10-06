// ============================================
// LOREM IPSUM GENERATOR - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const typeRadios = document.querySelectorAll('input[name="type"]');
const countSlider = document.getElementById('countSlider');
const countValue = document.getElementById('countValue');
const startWithLorem = document.getElementById('startWithLorem');
const generateBtn = document.getElementById('generateBtn');
const outputSection = document.getElementById('outputSection');
const outputText = document.getElementById('outputText');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const copyBtn = document.getElementById('copyBtn');

// Lorem Ipsum text bank
const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
    'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
    'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
];

const classicStart = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    // Count slider
    countSlider.addEventListener('input', updateCountValue);
    
    // Generate button
    generateBtn.addEventListener('click', generateLoremIpsum);
    
    // Copy button
    copyBtn.addEventListener('click', copyOutput);
}

// ============================================
// GENERATION
// ============================================

function generateLoremIpsum() {
    const type = document.querySelector('input[name="type"]:checked').value;
    const count = parseInt(countSlider.value);
    const useClassicStart = startWithLorem.checked;
    
    let result = '';
    
    switch(type) {
        case 'paragraphs':
            result = generateParagraphs(count, useClassicStart);
            break;
        case 'sentences':
            result = generateSentences(count, useClassicStart);
            break;
        case 'words':
            result = generateWords(count, useClassicStart);
            break;
    }
    
    displayOutput(result);
    
    window.deepvlab.showToast('Lorem Ipsum generated!', 'success');
    window.deepvlab.trackEvent('Lorem Ipsum Generator', 'Generate', type);
}

function generateParagraphs(count, useClassicStart) {
    const paragraphs = [];
    
    for (let i = 0; i < count; i++) {
        if (i === 0 && useClassicStart) {
            paragraphs.push(classicStart);
        } else {
            const sentenceCount = Math.floor(Math.random() * 4) + 4; // 4-7 sentences
            const sentences = [];
            for (let j = 0; j < sentenceCount; j++) {
                sentences.push(generateSentence());
            }
            paragraphs.push(sentences.join(' '));
        }
    }
    
    return paragraphs.join('\n\n');
}

function generateSentences(count, useClassicStart) {
    const sentences = [];
    
    for (let i = 0; i < count; i++) {
        if (i === 0 && useClassicStart) {
            sentences.push(classicStart);
        } else {
            sentences.push(generateSentence());
        }
    }
    
    return sentences.join(' ');
}

function generateWords(count, useClassicStart) {
    const words = [];
    
    if (useClassicStart) {
        const classicWords = classicStart.replace(/[.,]/g, '').split(' ');
        words.push(...classicWords.slice(0, Math.min(count, classicWords.length)));
        count -= words.length;
    }
    
    for (let i = 0; i < count; i++) {
        words.push(getRandomWord());
    }
    
    return words.join(' ');
}

function generateSentence() {
    const wordCount = Math.floor(Math.random() * 10) + 5; // 5-14 words
    const words = [];
    
    for (let i = 0; i < wordCount; i++) {
        words.push(getRandomWord());
    }
    
    // Capitalize first word
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    
    return words.join(' ') + '.';
}

function getRandomWord() {
    return loremWords[Math.floor(Math.random() * loremWords.length)];
}

// ============================================
// DISPLAY
// ============================================

function displayOutput(text) {
    outputText.textContent = text;
    
    // Calculate stats
    const words = text.trim().split(/\s+/).length;
    const chars = text.length;
    
    wordCount.textContent = `${words} ${words === 1 ? 'word' : 'words'}`;
    charCount.textContent = `${chars} ${chars === 1 ? 'character' : 'characters'}`;
    
    outputSection.style.display = 'block';
}

// ============================================
// COPY
// ============================================

async function copyOutput() {
    const text = outputText.textContent;
    
    if (!text) {
        window.deepvlab.showToast('Generate text first', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(text, copyBtn);
    window.deepvlab.trackEvent('Lorem Ipsum Generator', 'Copy', 'Success');
}

// ============================================
// UI HELPERS
// ============================================

function updateCountValue() {
    countValue.textContent = countSlider.value;
}

