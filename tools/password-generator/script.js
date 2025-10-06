// ============================================
// PASSWORD GENERATOR - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// Character sets
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const SIMILAR = 'il1Lo0O';
const AMBIGUOUS = '{}[]()/\\\'"`~,;:.<>';

// DOM Elements
const passwordText = document.getElementById('passwordText');
const passwordOutput = document.getElementById('passwordOutput');
const copyBtn = document.getElementById('copyBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');

// Options
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercaseCheck');
const lowercaseCheck = document.getElementById('lowercaseCheck');
const numbersCheck = document.getElementById('numbersCheck');
const symbolsCheck = document.getElementById('symbolsCheck');
const excludeSimilarCheck = document.getElementById('excludeSimilarCheck');
const excludeAmbiguousCheck = document.getElementById('excludeAmbiguousCheck');

// Buttons
const generateBtn = document.getElementById('generateBtn');
const batchGenerateBtn = document.getElementById('batchGenerateBtn');
const batchCount = document.getElementById('batchCount');
const batchOutput = document.getElementById('batchOutput');
const batchList = document.getElementById('batchList');
const copyAllBtn = document.getElementById('copyAllBtn');

// State
let currentPassword = '';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadOptions();
});

function setupEventListeners() {
    // Length slider
    lengthSlider.addEventListener('input', updateLength);
    
    // Checkboxes
    [uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck, 
     excludeSimilarCheck, excludeAmbiguousCheck].forEach(checkbox => {
        checkbox.addEventListener('change', saveOptions);
    });
    
    // Buttons
    generateBtn.addEventListener('click', generatePassword);
    regenerateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);
    batchGenerateBtn.addEventListener('click', generateBatch);
    copyAllBtn.addEventListener('click', copyAllPasswords);
    
    // Generate initial password
    generatePassword();
}

// ============================================
// PASSWORD GENERATION
// ============================================

function generatePassword() {
    const length = parseInt(lengthSlider.value);
    const options = {
        uppercase: uppercaseCheck.checked,
        lowercase: lowercaseCheck.checked,
        numbers: numbersCheck.checked,
        symbols: symbolsCheck.checked,
        excludeSimilar: excludeSimilarCheck.checked,
        excludeAmbiguous: excludeAmbiguousCheck.checked
    };
    
    // Build character set
    let charset = '';
    if (options.uppercase) charset += UPPERCASE;
    if (options.lowercase) charset += LOWERCASE;
    if (options.numbers) charset += NUMBERS;
    if (options.symbols) charset += SYMBOLS;
    
    // Remove excluded characters
    if (options.excludeSimilar) {
        charset = charset.split('').filter(char => !SIMILAR.includes(char)).join('');
    }
    if (options.excludeAmbiguous) {
        charset = charset.split('').filter(char => !AMBIGUOUS.includes(char)).join('');
    }
    
    // Validate
    if (charset.length === 0) {
        window.deepvlab.showToast('Please select at least one character type', 'warning');
        return;
    }
    
    // Generate password
    let password = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
        password += charset[array[i] % charset.length];
    }
    
    // Ensure at least one character from each selected type
    password = ensureComplexity(password, options, charset);
    
    // Display
    currentPassword = password;
    displayPassword(password);
    calculateStrength(password, options);
    
    window.deepvlab.trackEvent('Password Generator', 'Generate', 'Single');
}

function ensureComplexity(password, options, charset) {
    let hasUpper = !options.uppercase;
    let hasLower = !options.lowercase;
    let hasNumber = !options.numbers;
    let hasSymbol = !options.symbols;
    
    for (let char of password) {
        if (UPPERCASE.includes(char)) hasUpper = true;
        if (LOWERCASE.includes(char)) hasLower = true;
        if (NUMBERS.includes(char)) hasNumber = true;
        if (SYMBOLS.includes(char)) hasSymbol = true;
    }
    
    // If missing required types, regenerate
    if (!hasUpper || !hasLower || !hasNumber || !hasSymbol) {
        const array = new Uint32Array(password.length);
        crypto.getRandomValues(array);
        
        let newPassword = '';
        for (let i = 0; i < password.length; i++) {
            newPassword += charset[array[i] % charset.length];
        }
        return newPassword;
    }
    
    return password;
}

function displayPassword(password) {
    passwordText.textContent = password;
    passwordOutput.classList.add('generated');
    setTimeout(() => passwordOutput.classList.remove('generated'), 300);
}

// ============================================
// PASSWORD STRENGTH
// ============================================

function calculateStrength(password, options) {
    let score = 0;
    
    // Length score
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    
    // Variety score
    if (options.uppercase) score += 1;
    if (options.lowercase) score += 1;
    if (options.numbers) score += 1;
    if (options.symbols) score += 1;
    
    // Determine strength
    let strength = 'weak';
    if (score >= 7) strength = 'strong';
    else if (score >= 5) strength = 'good';
    else if (score >= 3) strength = 'fair';
    
    // Update UI
    strengthFill.className = 'strength-fill ' + strength;
    strengthText.className = 'strength-text ' + strength;
    strengthText.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
}

// ============================================
// BATCH GENERATION
// ============================================

function generateBatch() {
    const count = parseInt(batchCount.value);
    
    if (count < 1 || count > 50) {
        window.deepvlab.showToast('Please enter a number between 1 and 50', 'warning');
        return;
    }
    
    const passwords = [];
    for (let i = 0; i < count; i++) {
        // Generate without displaying
        const length = parseInt(lengthSlider.value);
        const options = {
            uppercase: uppercaseCheck.checked,
            lowercase: lowercaseCheck.checked,
            numbers: numbersCheck.checked,
            symbols: symbolsCheck.checked,
            excludeSimilar: excludeSimilarCheck.checked,
            excludeAmbiguous: excludeAmbiguousCheck.checked
        };
        
        let charset = '';
        if (options.uppercase) charset += UPPERCASE;
        if (options.lowercase) charset += LOWERCASE;
        if (options.numbers) charset += NUMBERS;
        if (options.symbols) charset += SYMBOLS;
        
        if (options.excludeSimilar) {
            charset = charset.split('').filter(char => !SIMILAR.includes(char)).join('');
        }
        if (options.excludeAmbiguous) {
            charset = charset.split('').filter(char => !AMBIGUOUS.includes(char)).join('');
        }
        
        if (charset.length === 0) continue;
        
        let password = '';
        const array = new Uint32Array(length);
        crypto.getRandomValues(array);
        
        for (let j = 0; j < length; j++) {
            password += charset[array[j] % charset.length];
        }
        
        passwords.push(password);
    }
    
    // Display
    batchList.value = passwords.join('\n');
    batchOutput.style.display = 'block';
    
    window.deepvlab.showToast(`Generated ${passwords.length} passwords!`, 'success');
    window.deepvlab.trackEvent('Password Generator', 'Generate', 'Batch');
}

// ============================================
// COPY FUNCTIONS
// ============================================

async function copyPassword() {
    if (!currentPassword) {
        window.deepvlab.showToast('Generate a password first', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(currentPassword, copyBtn);
    window.deepvlab.trackEvent('Password Generator', 'Copy', 'Single');
}

async function copyAllPasswords() {
    const passwords = batchList.value;
    
    if (!passwords) {
        window.deepvlab.showToast('Generate passwords first', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(passwords, copyAllBtn);
    window.deepvlab.trackEvent('Password Generator', 'Copy', 'Batch');
}

// ============================================
// OPTIONS
// ============================================

function updateLength() {
    const value = lengthSlider.value;
    lengthValue.textContent = value;
    saveOptions();
}

function saveOptions() {
    const options = {
        length: lengthSlider.value,
        uppercase: uppercaseCheck.checked,
        lowercase: lowercaseCheck.checked,
        numbers: numbersCheck.checked,
        symbols: symbolsCheck.checked,
        excludeSimilar: excludeSimilarCheck.checked,
        excludeAmbiguous: excludeAmbiguousCheck.checked
    };
    
    window.deepvlab.saveToLocalStorage('password-generator-options', options);
}

function loadOptions() {
    const options = window.deepvlab.loadFromLocalStorage('password-generator-options');
    
    if (options) {
        lengthSlider.value = options.length || 16;
        lengthValue.textContent = lengthSlider.value;
        uppercaseCheck.checked = options.uppercase !== false;
        lowercaseCheck.checked = options.lowercase !== false;
        numbersCheck.checked = options.numbers !== false;
        symbolsCheck.checked = options.symbols !== false;
        excludeSimilarCheck.checked = options.excludeSimilar || false;
        excludeAmbiguousCheck.checked = options.excludeAmbiguous || false;
    }
}

