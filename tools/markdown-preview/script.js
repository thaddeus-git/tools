// ============================================
// MARKDOWN PREVIEW - TOOL-SPECIFIC JAVASCRIPT
// Shared utilities available as window.deepvlab
// ============================================

// DOM Elements
const markdownInput = document.getElementById('markdownInput');
const previewContent = document.getElementById('previewContent');
const htmlContent = document.getElementById('htmlContent');
const wordCount = document.getElementById('wordCount');
const viewBtns = document.querySelectorAll('.view-btn');
const referenceToggle = document.getElementById('referenceToggle');
const referenceContent = document.getElementById('referenceContent');

// Toolbar buttons
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const headingBtn = document.getElementById('headingBtn');
const linkBtn = document.getElementById('linkBtn');
const imageBtn = document.getElementById('imageBtn');
const codeBtn = document.getElementById('codeBtn');
const listBtn = document.getElementById('listBtn');
const copyHtmlBtn = document.getElementById('copyHtmlBtn');
const copyMarkdownBtn = document.getElementById('copyMarkdownBtn');
const clearBtn = document.getElementById('clearBtn');

// State
let currentView = 'preview';
let currentHtml = '';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Configure marked.js for GitHub Flavored Markdown
    marked.setOptions({
        breaks: true,
        gfm: true
    });
    
    setupEventListeners();
    loadSavedMarkdown();
    updatePreview();
});

function setupEventListeners() {
    // Markdown input with debounce
    const debouncedUpdate = window.deepvlab.debounce(() => {
        updatePreview();
        saveMarkdown();
    }, 300);
    
    markdownInput.addEventListener('input', debouncedUpdate);
    
    // View toggle
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => switchView(btn.dataset.view));
    });
    
    // Toolbar buttons
    boldBtn.addEventListener('click', () => insertMarkdown('**', '**', 'bold text'));
    italicBtn.addEventListener('click', () => insertMarkdown('*', '*', 'italic text'));
    headingBtn.addEventListener('click', () => insertMarkdown('## ', '', 'Heading'));
    linkBtn.addEventListener('click', () => insertMarkdown('[', '](url)', 'link text'));
    imageBtn.addEventListener('click', () => insertMarkdown('![', '](url)', 'alt text'));
    codeBtn.addEventListener('click', () => insertMarkdown('`', '`', 'code'));
    listBtn.addEventListener('click', () => insertMarkdown('- ', '', 'list item'));
    
    copyHtmlBtn.addEventListener('click', copyHtml);
    copyMarkdownBtn.addEventListener('click', copyMarkdown);
    clearBtn.addEventListener('click', clearEditor);
    
    // Reference toggle
    referenceToggle.addEventListener('click', toggleReference);
    
    // Keyboard shortcuts
    markdownInput.addEventListener('keydown', handleKeyboard);
}

// ============================================
// MARKDOWN RENDERING
// ============================================

function updatePreview() {
    const markdown = markdownInput.value;
    
    try {
        // Convert markdown to HTML
        currentHtml = marked.parse(markdown);
        
        // Update preview
        if (currentView === 'preview') {
            previewContent.innerHTML = currentHtml;
        } else {
            htmlContent.value = currentHtml;
        }
        
        // Update word count
        const words = markdown.trim().split(/\s+/).filter(w => w.length > 0).length;
        wordCount.textContent = `${words} ${words === 1 ? 'word' : 'words'}`;
        
    } catch (error) {
        console.error('Markdown parsing error:', error);
        previewContent.innerHTML = '<p style="color: var(--color-error);">Error parsing markdown</p>';
    }
}

// ============================================
// VIEW SWITCHING
// ============================================

function switchView(view) {
    currentView = view;
    
    // Update buttons
    viewBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    // Show/hide content
    if (view === 'preview') {
        previewContent.style.display = 'block';
        htmlContent.style.display = 'none';
        previewContent.innerHTML = currentHtml;
    } else {
        previewContent.style.display = 'none';
        htmlContent.style.display = 'block';
        htmlContent.value = currentHtml;
    }
    
    window.deepvlab.trackEvent('Markdown Preview', 'Switch View', view);
}

// ============================================
// MARKDOWN INSERTION
// ============================================

function insertMarkdown(before, after, placeholder) {
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;
    const text = markdownInput.value;
    const selectedText = text.substring(start, end) || placeholder;
    
    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    
    markdownInput.value = newText;
    markdownInput.focus();
    
    // Set cursor position
    const newCursorPos = start + before.length + selectedText.length;
    markdownInput.setSelectionRange(newCursorPos, newCursorPos);
    
    updatePreview();
    saveMarkdown();
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

function handleKeyboard(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
            case 'b':
                e.preventDefault();
                insertMarkdown('**', '**', 'bold text');
                break;
            case 'i':
                e.preventDefault();
                insertMarkdown('*', '*', 'italic text');
                break;
        }
    }
}

// ============================================
// COPY FUNCTIONS
// ============================================

async function copyHtml() {
    if (!currentHtml) {
        window.deepvlab.showToast('No HTML to copy', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(currentHtml, copyHtmlBtn);
    window.deepvlab.trackEvent('Markdown Preview', 'Copy', 'HTML');
}

async function copyMarkdown() {
    const markdown = markdownInput.value;
    
    if (!markdown) {
        window.deepvlab.showToast('No Markdown to copy', 'warning');
        return;
    }
    
    await window.deepvlab.copyToClipboard(markdown, copyMarkdownBtn);
    window.deepvlab.trackEvent('Markdown Preview', 'Copy', 'Markdown');
}

// ============================================
// CLEAR EDITOR
// ============================================

function clearEditor() {
    if (markdownInput.value && !confirm('Clear all content?')) {
        return;
    }
    
    markdownInput.value = '';
    updatePreview();
    saveMarkdown();
    window.deepvlab.showToast('Editor cleared', 'success');
}

// ============================================
// REFERENCE TOGGLE
// ============================================

function toggleReference() {
    const isVisible = referenceContent.style.display !== 'none';
    referenceContent.style.display = isVisible ? 'none' : 'block';
    referenceToggle.textContent = isVisible ? '📚 Markdown Quick Reference' : '📚 Hide Reference';
}

// ============================================
// PERSISTENCE
// ============================================

function saveMarkdown() {
    window.deepvlab.saveToLocalStorage('markdown-preview-content', markdownInput.value);
}

function loadSavedMarkdown() {
    const saved = window.deepvlab.loadFromLocalStorage('markdown-preview-content');
    
    if (saved) {
        markdownInput.value = saved;
    } else {
        // Load default example
        markdownInput.value = markdownInput.placeholder;
    }
}

