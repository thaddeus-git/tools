// ============================================
// COLOR PICKER - MAIN JAVASCRIPT
// ============================================

// State
let currentColor = {
    h: 217,  // Hue (0-360)
    s: 91,   // Saturation (0-100)
    l: 60,   // Lightness (0-100)
    a: 1     // Alpha (0-1)
};

let isDragging = false;

// DOM Elements
const colorSquare = document.getElementById('colorSquare');
const colorCursor = document.getElementById('colorCursor');
const hueSlider = document.getElementById('hueSlider');
const opacitySlider = document.getElementById('opacitySlider');
const opacityValue = document.getElementById('opacityValue');
const colorPreview = document.getElementById('colorPreview');
const themeToggle = document.getElementById('themeToggle');
const toast = document.getElementById('toast');

// Input fields
const hexInput = document.getElementById('hexInput');
const rgbInput = document.getElementById('rgbInput');
const hslInput = document.getElementById('hslInput');
const rgbaInput = document.getElementById('rgbaInput');
const hslaInput = document.getElementById('hslaInput');
const cmykInput = document.getElementById('cmykInput');

// ============================================
// INITIALIZATION
// ============================================

function init() {
    // Draw initial color square
    drawColorSquare();
    
    // Set initial color
    updateColor();
    
    // Load theme
    loadTheme();
    
    // Load recent colors
    loadRecentColors();
    
    // Generate initial shades and harmony
    generateShades();
    generateHarmony('complementary');
    
    // Event listeners
    setupEventListeners();
}

// ============================================
// COLOR SQUARE
// ============================================

function drawColorSquare() {
    const ctx = colorSquare.getContext('2d');
    const width = colorSquare.width;
    const height = colorSquare.height;
    
    // Get current hue
    const hue = currentColor.h;
    
    // Create gradient from white to pure color (left to right)
    const saturationGradient = ctx.createLinearGradient(0, 0, width, 0);
    saturationGradient.addColorStop(0, 'white');
    saturationGradient.addColorStop(1, `hsl(${hue}, 100%, 50%)`);
    
    ctx.fillStyle = saturationGradient;
    ctx.fillRect(0, 0, width, height);
    
    // Create gradient from transparent to black (top to bottom)
    const lightnessGradient = ctx.createLinearGradient(0, 0, 0, height);
    lightnessGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    lightnessGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
    
    ctx.fillStyle = lightnessGradient;
    ctx.fillRect(0, 0, width, height);
}

// ============================================
// COLOR CONVERSIONS
// ============================================

function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    
    let r, g, b;
    
    if (h < 60) {
        [r, g, b] = [c, x, 0];
    } else if (h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (h < 180) {
        [r, g, b] = [0, c, x];
    } else if (h < 240) {
        [r, g, b] = [0, x, c];
    } else if (h < 300) {
        [r, g, b] = [x, 0, c];
    } else {
        [r, g, b] = [c, 0, x];
    }
    
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
}

function rgbToCmyk(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const k = 1 - Math.max(r, g, b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    
    return {
        c: Math.round(c * 100),
        m: Math.round(m * 100),
        y: Math.round(y * 100),
        k: Math.round(k * 100)
    };
}

// ============================================
// UPDATE COLOR
// ============================================

function updateColor() {
    const { h, s, l, a } = currentColor;
    const rgb = hslToRgb(h, s, l);
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    
    // Update preview
    colorPreview.style.background = `hsla(${h}, ${s}%, ${l}%, ${a})`;
    
    // Update inputs
    hexInput.value = hex;
    rgbInput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    hslInput.value = `hsl(${h}, ${s}%, ${l}%)`;
    rgbaInput.value = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`;
    hslaInput.value = `hsla(${h}, ${s}%, ${l}%, ${a})`;
    cmykInput.value = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
    
    // Update opacity slider track color
    const opacityTrack = document.querySelector('.opacity-slider-track');
    opacityTrack.style.color = `hsl(${h}, ${s}%, ${l}%)`;
    
    // Update shades and harmony
    generateShades();
    const activeHarmony = document.querySelector('.harmony-tab.active');
    if (activeHarmony) {
        generateHarmony(activeHarmony.dataset.harmony);
    }
}

// ============================================
// COLOR SQUARE INTERACTION
// ============================================

function handleColorSquareInteraction(e) {
    const rect = colorSquare.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
    
    // Calculate saturation and lightness
    const saturation = (x / rect.width) * 100;
    const lightness = 100 - (y / rect.height) * 100;
    
    // Update color
    currentColor.s = Math.round(saturation);
    currentColor.l = Math.round(lightness);
    
    // Update cursor position
    colorCursor.style.left = `${x}px`;
    colorCursor.style.top = `${y}px`;
    
    // Update color display
    updateColor();
}

colorSquare.addEventListener('mousedown', (e) => {
    isDragging = true;
    handleColorSquareInteraction(e);
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        handleColorSquareInteraction(e);
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        saveToRecent();
    }
});

// Touch support
colorSquare.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isDragging = true;
    const touch = e.touches[0];
    handleColorSquareInteraction(touch);
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        handleColorSquareInteraction(touch);
    }
});

document.addEventListener('touchend', () => {
    if (isDragging) {
        isDragging = false;
        saveToRecent();
    }
});

// ============================================
// SLIDERS
// ============================================

hueSlider.addEventListener('input', (e) => {
    currentColor.h = parseInt(e.target.value);
    drawColorSquare();
    updateColor();
});

hueSlider.addEventListener('change', () => {
    saveToRecent();
});

opacitySlider.addEventListener('input', (e) => {
    const opacity = parseInt(e.target.value);
    currentColor.a = opacity / 100;
    opacityValue.textContent = `${opacity}%`;
    updateColor();
});

opacitySlider.addEventListener('change', () => {
    saveToRecent();
});

// ============================================
// COPY FUNCTIONALITY
// ============================================

function setupCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            const value = input.value;

            try {
                await navigator.clipboard.writeText(value);
                showToast('Copied to clipboard!');

                // Visual feedback
                btn.classList.add('copied');
                const originalText = btn.querySelector('.copy-text').textContent;
                btn.querySelector('.copy-text').textContent = 'Copied!';
                btn.querySelector('.copy-icon').textContent = '✓';

                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.querySelector('.copy-text').textContent = originalText;
                    btn.querySelector('.copy-icon').textContent = '📋';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });
}

function showToast(message) {
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ============================================
// COLOR SHADES
// ============================================

function generateShades() {
    const shadesGrid = document.getElementById('shadesGrid');
    shadesGrid.innerHTML = '';

    const { h, s } = currentColor;

    // Generate 10 shades from light to dark
    for (let i = 0; i < 10; i++) {
        const lightness = 95 - (i * 9); // 95% to 5%
        const rgb = hslToRgb(h, s, lightness);
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

        const swatch = document.createElement('div');
        swatch.className = 'shade-swatch';
        swatch.style.background = `hsl(${h}, ${s}%, ${lightness}%)`;
        swatch.title = hex;

        swatch.addEventListener('click', () => {
            currentColor.l = lightness;
            updateColor();
            updateCursorPosition();
            saveToRecent();
        });

        shadesGrid.appendChild(swatch);
    }
}

// ============================================
// COLOR HARMONY
// ============================================

function generateHarmony(type) {
    const harmonyColors = document.getElementById('harmonyColors');
    harmonyColors.innerHTML = '';

    const { h, s, l } = currentColor;
    let hues = [];

    switch (type) {
        case 'complementary':
            hues = [h, (h + 180) % 360];
            break;
        case 'analogous':
            hues = [(h - 30 + 360) % 360, h, (h + 30) % 360];
            break;
        case 'triadic':
            hues = [h, (h + 120) % 360, (h + 240) % 360];
            break;
        case 'split-complementary':
            hues = [h, (h + 150) % 360, (h + 210) % 360];
            break;
        case 'tetradic':
            hues = [h, (h + 90) % 360, (h + 180) % 360, (h + 270) % 360];
            break;
    }

    hues.forEach(hue => {
        const rgb = hslToRgb(hue, s, l);
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);

        const colorDiv = document.createElement('div');
        colorDiv.className = 'harmony-color';

        const swatch = document.createElement('div');
        swatch.className = 'harmony-swatch';
        swatch.style.background = `hsl(${hue}, ${s}%, ${l}%)`;

        swatch.addEventListener('click', () => {
            currentColor.h = hue;
            hueSlider.value = hue;
            drawColorSquare();
            updateColor();
            updateCursorPosition();
            saveToRecent();
        });

        const label = document.createElement('div');
        label.className = 'harmony-label';
        label.textContent = hex;

        colorDiv.appendChild(swatch);
        colorDiv.appendChild(label);
        harmonyColors.appendChild(colorDiv);
    });
}

// Harmony tabs
function setupHarmonyTabs() {
    const harmonyTabs = document.querySelectorAll('.harmony-tab');

    harmonyTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            harmonyTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Generate harmony
            generateHarmony(tab.dataset.harmony);
        });
    });
}

// ============================================
// RECENT COLORS
// ============================================

function saveToRecent() {
    const { h, s, l, a } = currentColor;
    const colorString = `hsla(${h}, ${s}%, ${l}%, ${a})`;

    // Get recent colors from localStorage
    let recent = JSON.parse(localStorage.getItem('recentColors') || '[]');

    // Remove if already exists
    recent = recent.filter(c => c !== colorString);

    // Add to beginning
    recent.unshift(colorString);

    // Keep only last 10
    recent = recent.slice(0, 10);

    // Save to localStorage
    localStorage.setItem('recentColors', JSON.stringify(recent));

    // Update display
    loadRecentColors();
}

function loadRecentColors() {
    const recentColors = document.getElementById('recentColors');
    const recent = JSON.parse(localStorage.getItem('recentColors') || '[]');

    recentColors.innerHTML = '';

    if (recent.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'recent-empty';
        empty.textContent = 'No recent colors yet';
        recentColors.appendChild(empty);
        return;
    }

    recent.forEach(colorString => {
        const swatch = document.createElement('div');
        swatch.className = 'recent-swatch';
        swatch.style.background = colorString;
        swatch.title = colorString;

        swatch.addEventListener('click', () => {
            // Parse HSL from string
            const match = colorString.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/);
            if (match) {
                currentColor.h = parseInt(match[1]);
                currentColor.s = parseInt(match[2]);
                currentColor.l = parseInt(match[3]);
                currentColor.a = match[4] ? parseFloat(match[4]) : 1;

                hueSlider.value = currentColor.h;
                opacitySlider.value = currentColor.a * 100;
                opacityValue.textContent = `${Math.round(currentColor.a * 100)}%`;

                drawColorSquare();
                updateColor();
                updateCursorPosition();
            }
        });

        recentColors.appendChild(swatch);
    });
}

function clearRecentColors() {
    localStorage.removeItem('recentColors');
    loadRecentColors();
}

document.getElementById('clearRecent').addEventListener('click', clearRecentColors);

// ============================================
// THEME TOGGLE
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
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
}

themeToggle.addEventListener('click', toggleTheme);

// ============================================
// HELPER FUNCTIONS
// ============================================

function updateCursorPosition() {
    const { s, l } = currentColor;
    const rect = colorSquare.getBoundingClientRect();

    const x = (s / 100) * rect.width;
    const y = ((100 - l) / 100) * rect.height;

    colorCursor.style.left = `${x}px`;
    colorCursor.style.top = `${y}px`;
}

function setupEventListeners() {
    setupCopyButtons();
    setupHarmonyTabs();
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', init);

