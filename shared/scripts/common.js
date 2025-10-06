// ============================================
// SHARED JAVASCRIPT - ALL TOOLS
// deepv lab - deepvcode.com
// ============================================

// ============================================
// THEME MANAGEMENT
// ============================================

function loadTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    if (toastMessage) {
        toastMessage.textContent = message;
    }
    
    // Set icon based on type
    if (toastIcon) {
        switch (type) {
            case 'success':
                toastIcon.textContent = '✓';
                toast.style.background = 'var(--color-success)';
                break;
            case 'error':
                toastIcon.textContent = '✕';
                toast.style.background = 'var(--color-error)';
                break;
            case 'warning':
                toastIcon.textContent = '⚠';
                toast.style.background = 'var(--color-warning)';
                break;
            default:
                toastIcon.textContent = 'ℹ';
                toast.style.background = 'var(--color-primary-500)';
        }
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

async function copyToClipboard(text, button = null) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!', 'success');
        
        // Visual feedback on button
        if (button) {
            const originalText = button.textContent;
            const originalIcon = button.querySelector('.copy-icon')?.textContent;
            
            button.classList.add('copied');
            if (button.querySelector('.copy-text')) {
                button.querySelector('.copy-text').textContent = 'Copied!';
            }
            if (button.querySelector('.copy-icon')) {
                button.querySelector('.copy-icon').textContent = '✓';
            }
            
            setTimeout(() => {
                button.classList.remove('copied');
                if (button.querySelector('.copy-text')) {
                    button.querySelector('.copy-text').textContent = originalText.includes('Copy') ? 'Copy' : originalText;
                }
                if (button.querySelector('.copy-icon') && originalIcon) {
                    button.querySelector('.copy-icon').textContent = originalIcon;
                }
            }, 2000);
        }
        
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy to clipboard', 'error');
        return false;
    }
}

// Setup copy buttons
document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('[data-copy]');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const targetId = button.dataset.copy;
            const target = document.getElementById(targetId);
            
            if (target) {
                const text = target.value || target.textContent;
                await copyToClipboard(text, button);
            }
        });
    });
});

// ============================================
// FILE HANDLING
// ============================================

function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file);
    });
}

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
    });
}

function downloadFile(content, filename, mimeType = 'text/plain') {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ============================================
// LOCAL STORAGE HELPERS
// ============================================

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (err) {
        console.error('Failed to save to localStorage:', err);
        return false;
    }
}

function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
        console.error('Failed to load from localStorage:', err);
        return defaultValue;
    }
}

function removeFromLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (err) {
        console.error('Failed to remove from localStorage:', err);
        return false;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ============================================
// ANALYTICS (Placeholder)
// ============================================

function trackEvent(category, action, label = null, value = null) {
    // Placeholder for analytics tracking
    // Implement with Google Analytics, Plausible, or other analytics service
    console.log('Event:', { category, action, label, value });
}

// Track page view
document.addEventListener('DOMContentLoaded', () => {
    trackEvent('Page', 'View', window.location.pathname);
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Optionally send to error tracking service
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // Optionally send to error tracking service
});

// ============================================
// EXPORT FOR USE IN TOOL-SPECIFIC SCRIPTS
// ============================================

window.deepvlab = {
    // Theme
    loadTheme,
    toggleTheme,
    updateThemeIcon,
    
    // Toast
    showToast,
    
    // Clipboard
    copyToClipboard,
    
    // File handling
    readFileAsText,
    readFileAsDataURL,
    downloadFile,
    
    // LocalStorage
    saveToLocalStorage,
    loadFromLocalStorage,
    removeFromLocalStorage,
    
    // Utilities
    debounce,
    throttle,
    formatBytes,
    formatNumber,
    
    // Analytics
    trackEvent
};

