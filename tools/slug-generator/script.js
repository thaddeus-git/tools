// Slug Generator Tool
(function() {
    'use strict';

    // DOM Elements
    const textInput = document.getElementById('textInput');
    const clearBtn = document.getElementById('clearBtn');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const slugText = document.getElementById('slugText');
    const previewUrl = document.getElementById('previewUrl');
    
    // Options
    const lowercaseOption = document.getElementById('lowercaseOption');
    const removeSpecialOption = document.getElementById('removeSpecialOption');
    const trimOption = document.getElementById('trimOption');
    const maxLengthOption = document.getElementById('maxLengthOption');
    const maxLengthInput = document.getElementById('maxLengthInput');
    const maxLength = document.getElementById('maxLength');
    
    // Batch elements
    const batchInput = document.getElementById('batchInput');
    const batchGenerateBtn = document.getElementById('batchGenerateBtn');
    const batchOutput = document.getElementById('batchOutput');
    const batchOutputText = document.getElementById('batchOutputText');
    const copyBatchBtn = document.getElementById('copyBatchBtn');

    // Initialize
    function init() {
        loadFromStorage();
        attachEventListeners();
        trackPageView();
    }

    // Event Listeners
    function attachEventListeners() {
        textInput.addEventListener('input', saveToStorage);
        clearBtn.addEventListener('click', handleClear);
        generateBtn.addEventListener('click', handleGenerate);
        copyBtn.addEventListener('click', handleCopy);
        maxLengthOption.addEventListener('change', toggleMaxLength);
        batchGenerateBtn.addEventListener('click', handleBatchGenerate);
        copyBatchBtn.addEventListener('click', handleCopyBatch);
        
        // Auto-generate on Enter key
        textInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleGenerate();
            }
        });
    }

    // Handle clear
    function handleClear() {
        textInput.value = '';
        slugText.textContent = 'your-slug-will-appear-here';
        previewUrl.textContent = 'https://example.com/your-slug-will-appear-here';
        saveToStorage();
        showToast('Cleared!');
        trackEvent('Slug Generator', 'Clear', 'Success');
    }

    // Handle generate
    function handleGenerate() {
        const text = textInput.value.trim();
        
        if (!text) {
            showToast('Please enter some text!', 'error');
            return;
        }

        const slug = generateSlug(text);
        slugText.textContent = slug;
        previewUrl.textContent = `https://example.com/${slug}`;
        
        showToast('Slug generated!');
        trackEvent('Slug Generator', 'Generate', 'Single');
    }

    // Handle copy
    function handleCopy() {
        const slug = slugText.textContent;
        
        if (slug === 'your-slug-will-appear-here') {
            showToast('Generate a slug first!', 'error');
            return;
        }

        navigator.clipboard.writeText(slug).then(() => {
            showToast('Copied to clipboard!');
            trackEvent('Slug Generator', 'Copy', 'Single');
        }).catch(() => {
            showToast('Failed to copy!', 'error');
        });
    }

    // Handle batch generate
    function handleBatchGenerate() {
        const text = batchInput.value.trim();
        
        if (!text) {
            showToast('Please enter some text!', 'error');
            return;
        }

        const lines = text.split('\n').filter(line => line.trim());
        const slugs = lines.map(line => generateSlug(line));
        
        batchOutputText.value = slugs.join('\n');
        batchOutput.style.display = 'block';
        
        showToast(`Generated ${slugs.length} slugs!`);
        trackEvent('Slug Generator', 'Generate', 'Batch');
    }

    // Handle copy batch
    function handleCopyBatch() {
        const text = batchOutputText.value;
        
        if (!text) {
            showToast('Generate slugs first!', 'error');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            showToast('All slugs copied!');
            trackEvent('Slug Generator', 'Copy', 'Batch');
        }).catch(() => {
            showToast('Failed to copy!', 'error');
        });
    }

    // Generate slug
    function generateSlug(text) {
        let slug = text;

        // Convert to lowercase
        if (lowercaseOption.checked) {
            slug = slug.toLowerCase();
        }

        // Remove special characters
        if (removeSpecialOption.checked) {
            // Keep only alphanumeric, spaces, and hyphens
            slug = slug.replace(/[^a-zA-Z0-9\s-]/g, '');
        }

        // Replace spaces with hyphens
        slug = slug.replace(/\s+/g, '-');

        // Remove multiple consecutive hyphens
        slug = slug.replace(/-+/g, '-');

        // Trim hyphens from start and end
        if (trimOption.checked) {
            slug = slug.replace(/^-+|-+$/g, '');
        }

        // Limit length
        if (maxLengthOption.checked) {
            const limit = parseInt(maxLength.value) || 60;
            if (slug.length > limit) {
                slug = slug.substring(0, limit);
                // Remove trailing hyphen if any
                slug = slug.replace(/-+$/, '');
            }
        }

        return slug || 'slug';
    }

    // Toggle max length input
    function toggleMaxLength() {
        maxLengthInput.style.display = maxLengthOption.checked ? 'flex' : 'none';
    }

    // Save to localStorage
    function saveToStorage() {
        try {
            localStorage.setItem('slugGenerator_input', textInput.value);
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    }

    // Load from localStorage
    function loadFromStorage() {
        try {
            const saved = localStorage.getItem('slugGenerator_input');
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
            window.trackPageView('/tools/slug-generator/');
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

