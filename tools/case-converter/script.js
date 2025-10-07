// Case Converter Tool
(function() {
    'use strict';

    // DOM Elements
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('textOutput');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const charCount = document.getElementById('charCount');
    const conversionBtns = document.querySelectorAll('.conversion-btn');

    // Initialize
    function init() {
        loadFromStorage();
        updateCharCount();
        attachEventListeners();
        trackPageView();
    }

    // Event Listeners
    function attachEventListeners() {
        textInput.addEventListener('input', handleInput);
        clearBtn.addEventListener('click', handleClear);
        copyBtn.addEventListener('click', handleCopy);
        
        conversionBtns.forEach(btn => {
            btn.addEventListener('click', () => handleConversion(btn.dataset.case));
        });
    }

    // Handle input
    function handleInput() {
        updateCharCount();
        saveToStorage();
    }

    // Handle clear
    function handleClear() {
        textInput.value = '';
        textOutput.value = '';
        updateCharCount();
        saveToStorage();
        showToast('Text cleared!');
        trackEvent('Case Converter', 'Clear', 'Success');
    }

    // Handle copy
    function handleCopy() {
        if (!textOutput.value) {
            showToast('No text to copy!', 'error');
            return;
        }

        textOutput.select();
        document.execCommand('copy');
        showToast('Copied to clipboard!');
        trackEvent('Case Converter', 'Copy', 'Success');
    }

    // Handle conversion
    function handleConversion(caseType) {
        const text = textInput.value;
        
        if (!text.trim()) {
            showToast('Please enter some text first!', 'error');
            return;
        }

        let converted = '';
        
        switch(caseType) {
            case 'upper':
                converted = text.toUpperCase();
                break;
            case 'lower':
                converted = text.toLowerCase();
                break;
            case 'title':
                converted = toTitleCase(text);
                break;
            case 'sentence':
                converted = toSentenceCase(text);
                break;
            case 'camel':
                converted = toCamelCase(text);
                break;
            case 'pascal':
                converted = toPascalCase(text);
                break;
            case 'snake':
                converted = toSnakeCase(text);
                break;
            case 'kebab':
                converted = toKebabCase(text);
                break;
            case 'constant':
                converted = toConstantCase(text);
                break;
            case 'dot':
                converted = toDotCase(text);
                break;
            default:
                converted = text;
        }

        textOutput.value = converted;
        showToast(`Converted to ${getCaseLabel(caseType)}!`);
        trackEvent('Case Converter', 'Convert', caseType);
    }

    // Case conversion functions
    function toTitleCase(text) {
        return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    }

    function toSentenceCase(text) {
        return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
    }

    function toCamelCase(text) {
        return text
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
    }

    function toPascalCase(text) {
        const camel = toCamelCase(text);
        return camel.charAt(0).toUpperCase() + camel.slice(1);
    }

    function toSnakeCase(text) {
        return text
            .replace(/\s+/g, '_')
            .replace(/[A-Z]/g, char => '_' + char.toLowerCase())
            .replace(/^_/, '')
            .replace(/_+/g, '_')
            .toLowerCase();
    }

    function toKebabCase(text) {
        return text
            .replace(/\s+/g, '-')
            .replace(/[A-Z]/g, char => '-' + char.toLowerCase())
            .replace(/^-/, '')
            .replace(/-+/g, '-')
            .toLowerCase();
    }

    function toConstantCase(text) {
        return toSnakeCase(text).toUpperCase();
    }

    function toDotCase(text) {
        return text
            .replace(/\s+/g, '.')
            .replace(/[A-Z]/g, char => '.' + char.toLowerCase())
            .replace(/^\./, '')
            .replace(/\.+/g, '.')
            .toLowerCase();
    }

    // Get case label
    function getCaseLabel(caseType) {
        const labels = {
            'upper': 'UPPERCASE',
            'lower': 'lowercase',
            'title': 'Title Case',
            'sentence': 'Sentence case',
            'camel': 'camelCase',
            'pascal': 'PascalCase',
            'snake': 'snake_case',
            'kebab': 'kebab-case',
            'constant': 'CONSTANT_CASE',
            'dot': 'dot.case'
        };
        return labels[caseType] || caseType;
    }

    // Update character count
    function updateCharCount() {
        const count = textInput.value.length;
        charCount.textContent = `${count.toLocaleString()} character${count !== 1 ? 's' : ''}`;
    }

    // Save to localStorage
    function saveToStorage() {
        try {
            localStorage.setItem('caseConverter_input', textInput.value);
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    }

    // Load from localStorage
    function loadFromStorage() {
        try {
            const saved = localStorage.getItem('caseConverter_input');
            if (saved) {
                textInput.value = saved;
            }
        } catch (e) {
            console.error('Failed to load from localStorage:', e);
        }
    }

    // Show toast notification
    function showToast(message, type = 'success') {
        if (window.showToast) {
            window.showToast(message, type);
        }
    }

    // Track page view
    function trackPageView() {
        if (window.trackPageView) {
            window.trackPageView('/tools/case-converter/');
        }
    }

    // Track event
    function trackEvent(category, action, label) {
        if (window.trackEvent) {
            window.trackEvent(category, action, label);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

