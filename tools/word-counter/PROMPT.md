# Word Counter Tool - Comprehensive Prompt

## Tool Overview
A real-time word counter that counts words, characters, sentences, paragraphs, and calculates reading/speaking time.

## Complete File Structure

```
tools/word-counter/
├── index.html          # Main HTML file
├── style.css           # Tool-specific styles
├── script.js           # Tool functionality
└── PROMPT.md          # This file
```

## File Contents

### 1. index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Free online word counter. Count words, characters, sentences, paragraphs. Calculate reading time. No signup required.">
    <meta name="keywords" content="word counter, character counter, word count, character count, reading time, text statistics">
    
    <title>Word Counter | deepv lab</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/shared/styles/common.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header with logo, nav, theme toggle -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="/"><span class="logo-text">🔧 deepv lab</span></a>
                </div>
                <nav class="nav">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/tools" class="nav-link">All Tools</a>
                    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
                        <span class="theme-icon">🌙</span>
                    </button>
                </nav>
            </div>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <div class="tool-header">
                <h1>Word Counter</h1>
                <p class="tool-description">Count words, characters, sentences, and paragraphs. Calculate reading time instantly.</p>
            </div>

            <div class="tool-content">
                <!-- Statistics Grid (6 cards) -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value" id="wordCount">0</div>
                        <div class="stat-label">Words</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="charCount">0</div>
                        <div class="stat-label">Characters</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="charNoSpaceCount">0</div>
                        <div class="stat-label">Characters (no spaces)</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="sentenceCount">0</div>
                        <div class="stat-label">Sentences</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="paragraphCount">0</div>
                        <div class="stat-label">Paragraphs</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="readingTime">0 min</div>
                        <div class="stat-label">Reading Time</div>
                    </div>
                </div>

                <!-- Text Input -->
                <div class="input-section">
                    <div class="input-header">
                        <label for="textInput" class="section-label">Enter Your Text</label>
                        <button class="btn btn-secondary btn-small" id="clearBtn">
                            <span class="btn-icon">🗑️</span>
                            <span class="btn-text">Clear</span>
                        </button>
                    </div>
                    <textarea 
                        id="textInput" 
                        class="text-input" 
                        placeholder="Start typing or paste your text here..."
                        spellcheck="false"
                    ></textarea>
                </div>

                <!-- Additional Statistics -->
                <div class="additional-stats">
                    <h3>Additional Statistics</h3>
                    <div class="stats-list">
                        <div class="stat-item">
                            <span class="stat-item-label">Average Word Length:</span>
                            <span class="stat-item-value" id="avgWordLength">0</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-item-label">Longest Word:</span>
                            <span class="stat-item-value" id="longestWord">-</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-item-label">Speaking Time (slow):</span>
                            <span class="stat-item-value" id="speakingTimeSlow">0 min</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-item-label">Speaking Time (fast):</span>
                            <span class="stat-item-value" id="speakingTimeFast">0 min</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features, How to Use, About sections -->
            <section class="tool-info">
                <h2>Features</h2>
                <ul class="feature-list">
                    <li>📊 Real-time word counting</li>
                    <li>🔤 Character count (with and without spaces)</li>
                    <li>📝 Sentence and paragraph count</li>
                    <li>⏱️ Reading time estimate (200 words/min)</li>
                    <li>🗣️ Speaking time estimate (slow and fast)</li>
                    <li>📏 Average word length</li>
                    <li>🏆 Longest word detection</li>
                    <li>💾 Auto-save to localStorage</li>
                    <li>🌙 Dark mode support</li>
                </ul>
            </section>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>deepv lab</h3>
                    <p>Free online tools for developers</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 deepv lab. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <div class="toast" id="toast">
        <span class="toast-icon">✓</span>
        <span class="toast-message">Success!</span>
    </div>

    <script src="/shared/scripts/common.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### 2. style.css
```css
/* Statistics Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-4);
    margin-bottom: var(--space-6);
}

.stat-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    text-align: center;
    transition: all 0.2s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--space-2);
    font-family: var(--font-mono);
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* Text Input */
.text-input {
    width: 100%;
    min-height: 300px;
    padding: var(--space-4);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    font-family: var(--font-mono);
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-primary);
    resize: vertical;
}

.text-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-color-alpha);
}

/* Additional Statistics */
.additional-stats {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    margin-bottom: var(--space-6);
}

.stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3);
    background: var(--bg-primary);
    border-radius: var(--radius-md);
}

/* Animation */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.stat-value.updated {
    animation: pulse 0.3s ease;
}

/* Responsive */
@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

### 3. script.js
```javascript
(function() {
    'use strict';

    const textInput = document.getElementById('textInput');
    const clearBtn = document.getElementById('clearBtn');
    
    // Constants
    const READING_SPEED = 200; // words per minute
    const SPEAKING_SPEED_SLOW = 100;
    const SPEAKING_SPEED_FAST = 160;

    function init() {
        loadFromStorage();
        updateStats();
        textInput.addEventListener('input', handleInput);
        clearBtn.addEventListener('click', handleClear);
    }

    function handleInput() {
        updateStats();
        saveToStorage();
    }

    function updateStats() {
        const text = textInput.value;
        
        // Count words, chars, sentences, paragraphs
        const words = countWords(text);
        const chars = text.length;
        const charsNoSpace = text.replace(/\s/g, '').length;
        const sentences = countSentences(text);
        const paragraphs = countParagraphs(text);
        
        // Calculate times
        const readingTime = calculateReadingTime(words);
        const speakingTimeSlow = calculateSpeakingTime(words, SPEAKING_SPEED_SLOW);
        const speakingTimeFast = calculateSpeakingTime(words, SPEAKING_SPEED_FAST);
        
        // Word analysis
        const avgWordLength = calculateAverageWordLength(text);
        const longestWord = findLongestWord(text);
        
        // Update DOM
        updateStatElement(document.getElementById('wordCount'), words.toLocaleString());
        updateStatElement(document.getElementById('charCount'), chars.toLocaleString());
        // ... update all other stats
    }

    function countWords(text) {
        if (!text.trim()) return 0;
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    function countSentences(text) {
        if (!text.trim()) return 0;
        return text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    }

    function countParagraphs(text) {
        if (!text.trim()) return 0;
        return text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    }

    function calculateReadingTime(wordCount) {
        if (wordCount === 0) return '0 min';
        const minutes = Math.ceil(wordCount / READING_SPEED);
        return minutes === 1 ? '1 min' : `${minutes} min`;
    }

    init();
})();
```

## Key Features

1. **Real-time Counting**: Updates as you type
2. **Multiple Statistics**: Words, characters, sentences, paragraphs
3. **Time Calculations**: Reading time (200 wpm), speaking time (100/160 wpm)
4. **Word Analysis**: Average word length, longest word
5. **Auto-save**: Saves to localStorage
6. **Clear Button**: Reset all text
7. **Responsive**: Works on all devices
8. **Dark Mode**: Full dark mode support
9. **Animations**: Pulse animation on stat updates

## Usage
1. Type or paste text into textarea
2. See real-time statistics update
3. Click "Clear" to reset

## Dependencies
- `/shared/styles/common.css` - Shared design system
- `/shared/scripts/common.js` - Theme toggle, toast, analytics

## Browser Support
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile: ✅

## Performance
- Lightweight (~5KB total)
- No external libraries
- Instant updates
- Efficient regex patterns

---

**Use this prompt to recreate the Word Counter tool from scratch.**

