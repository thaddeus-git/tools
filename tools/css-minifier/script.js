// CSS Minifier Tool
(function() {
    'use strict';

    // DOM Elements
    const cssInput = document.getElementById('cssInput');
    const cssOutput = document.getElementById('cssOutput');
    const minifyBtn = document.getElementById('minifyBtn');
    const beautifyBtn = document.getElementById('beautifyBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Stats elements
    const inputSize = document.getElementById('inputSize');
    const inputChars = document.getElementById('inputChars');
    const outputSize = document.getElementById('outputSize');
    const outputChars = document.getElementById('outputChars');
    const savings = document.getElementById('savings');

    // Initialize
    function init() {
        loadFromStorage();
        updateInputStats();
        attachEventListeners();
        trackPageView();
    }

    // Event Listeners
    function attachEventListeners() {
        cssInput.addEventListener('input', handleInput);
        minifyBtn.addEventListener('click', handleMinify);
        beautifyBtn.addEventListener('click', handleBeautify);
        clearBtn.addEventListener('click', handleClear);
        copyBtn.addEventListener('click', handleCopy);
        downloadBtn.addEventListener('click', handleDownload);
    }

    // Handle input
    function handleInput() {
        updateInputStats();
        saveToStorage();
    }

    // Handle minify
    function handleMinify() {
        const css = cssInput.value.trim();
        
        if (!css) {
            showToast('Please enter some CSS!', 'error');
            return;
        }

        const minified = minifyCSS(css);
        cssOutput.value = minified;
        updateOutputStats();
        calculateSavings();
        
        showToast('CSS minified successfully!');
        trackEvent('CSS Minifier', 'Minify', 'Success');
    }

    // Handle beautify
    function handleBeautify() {
        const css = cssInput.value.trim();
        
        if (!css) {
            showToast('Please enter some CSS!', 'error');
            return;
        }

        const beautified = beautifyCSS(css);
        cssOutput.value = beautified;
        updateOutputStats();
        calculateSavings();
        
        showToast('CSS beautified successfully!');
        trackEvent('CSS Minifier', 'Beautify', 'Success');
    }

    // Handle clear
    function handleClear() {
        cssInput.value = '';
        cssOutput.value = '';
        updateInputStats();
        updateOutputStats();
        savings.style.display = 'none';
        saveToStorage();
        showToast('Cleared!');
        trackEvent('CSS Minifier', 'Clear', 'Success');
    }

    // Handle copy
    function handleCopy() {
        if (!cssOutput.value) {
            showToast('No CSS to copy!', 'error');
            return;
        }

        cssOutput.select();
        document.execCommand('copy');
        showToast('Copied to clipboard!');
        trackEvent('CSS Minifier', 'Copy', 'Success');
    }

    // Handle download
    function handleDownload() {
        if (!cssOutput.value) {
            showToast('No CSS to download!', 'error');
            return;
        }

        const blob = new Blob([cssOutput.value], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'styles.css';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('CSS downloaded!');
        trackEvent('CSS Minifier', 'Download', 'Success');
    }

    // Minify CSS
    function minifyCSS(css) {
        let minified = css;
        
        // Remove comments
        minified = minified.replace(/\/\*[\s\S]*?\*\//g, '');
        
        // Remove whitespace
        minified = minified.replace(/\s+/g, ' ');
        
        // Remove spaces around special characters
        minified = minified.replace(/\s*([{}:;,>+~])\s*/g, '$1');
        
        // Remove last semicolon in a block
        minified = minified.replace(/;}/g, '}');
        
        // Remove unnecessary semicolons
        minified = minified.replace(/;;+/g, ';');
        
        // Trim
        minified = minified.trim();
        
        return minified;
    }

    // Beautify CSS
    function beautifyCSS(css) {
        let beautified = css;
        
        // Remove existing formatting
        beautified = minifyCSS(beautified);
        
        // Add newlines after braces
        beautified = beautified.replace(/}/g, '}\n');
        beautified = beautified.replace(/{/g, ' {\n  ');
        
        // Add newlines after semicolons
        beautified = beautified.replace(/;/g, ';\n  ');
        
        // Fix indentation
        beautified = beautified.replace(/}\n\s+/g, '}\n');
        
        // Remove extra spaces
        beautified = beautified.replace(/\n\s+\n/g, '\n');
        
        // Trim each line
        beautified = beautified.split('\n').map(line => line.trim()).join('\n');
        
        // Remove empty lines
        beautified = beautified.replace(/\n\n+/g, '\n');
        
        return beautified.trim();
    }

    // Update input stats
    function updateInputStats() {
        const text = cssInput.value;
        const bytes = new Blob([text]).size;
        const chars = text.length;
        
        inputSize.textContent = formatBytes(bytes);
        inputChars.textContent = `${chars.toLocaleString()} characters`;
    }

    // Update output stats
    function updateOutputStats() {
        const text = cssOutput.value;
        const bytes = new Blob([text]).size;
        const chars = text.length;
        
        outputSize.textContent = formatBytes(bytes);
        outputChars.textContent = `${chars.toLocaleString()} characters`;
    }

    // Calculate savings
    function calculateSavings() {
        const inputBytes = new Blob([cssInput.value]).size;
        const outputBytes = new Blob([cssOutput.value]).size;
        
        if (inputBytes === 0) {
            savings.style.display = 'none';
            return;
        }
        
        const saved = ((inputBytes - outputBytes) / inputBytes * 100).toFixed(1);
        
        if (saved > 0) {
            savings.textContent = `${saved}% saved`;
            savings.style.display = 'inline-block';
        } else {
            savings.style.display = 'none';
        }
    }

    // Format bytes
    function formatBytes(bytes) {
        if (bytes === 0) return '0 bytes';
        if (bytes < 1024) return `${bytes} bytes`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    // Save to localStorage
    function saveToStorage() {
        try {
            localStorage.setItem('cssMinifier_input', cssInput.value);
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    }

    // Load from localStorage
    function loadFromStorage() {
        try {
            const saved = localStorage.getItem('cssMinifier_input');
            if (saved) {
                cssInput.value = saved;
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
            window.trackPageView('/tools/css-minifier/');
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

