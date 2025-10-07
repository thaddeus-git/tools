// Word Counter Tool
(function() {
    'use strict';

    // DOM Elements
    const textInput = document.getElementById('textInput');
    const clearBtn = document.getElementById('clearBtn');
    
    // Stat elements
    const wordCountEl = document.getElementById('wordCount');
    const charCountEl = document.getElementById('charCount');
    const charNoSpaceCountEl = document.getElementById('charNoSpaceCount');
    const sentenceCountEl = document.getElementById('sentenceCount');
    const paragraphCountEl = document.getElementById('paragraphCount');
    const readingTimeEl = document.getElementById('readingTime');
    const avgWordLengthEl = document.getElementById('avgWordLength');
    const longestWordEl = document.getElementById('longestWord');
    const speakingTimeSlowEl = document.getElementById('speakingTimeSlow');
    const speakingTimeFastEl = document.getElementById('speakingTimeFast');

    // Constants
    const READING_SPEED = 200; // words per minute
    const SPEAKING_SPEED_SLOW = 100; // words per minute
    const SPEAKING_SPEED_FAST = 160; // words per minute
    const STORAGE_KEY = 'wordCounter_text';

    // Initialize
    function init() {
        loadFromStorage();
        updateStats();
        attachEventListeners();
        trackPageView();
    }

    // Event Listeners
    function attachEventListeners() {
        textInput.addEventListener('input', handleInput);
        clearBtn.addEventListener('click', handleClear);
    }

    // Handle input
    function handleInput() {
        updateStats();
        saveToStorage();
    }

    // Handle clear
    function handleClear() {
        textInput.value = '';
        updateStats();
        saveToStorage();
        showToast('Text cleared!');
        trackEvent('Word Counter', 'Clear', 'Success');
    }

    // Update all statistics
    function updateStats() {
        const text = textInput.value;
        
        // Basic counts
        const words = countWords(text);
        const chars = text.length;
        const charsNoSpace = text.replace(/\s/g, '').length;
        const sentences = countSentences(text);
        const paragraphs = countParagraphs(text);
        
        // Time calculations
        const readingTime = calculateReadingTime(words);
        const speakingTimeSlow = calculateSpeakingTime(words, SPEAKING_SPEED_SLOW);
        const speakingTimeFast = calculateSpeakingTime(words, SPEAKING_SPEED_FAST);
        
        // Word analysis
        const avgWordLength = calculateAverageWordLength(text);
        const longestWord = findLongestWord(text);
        
        // Update DOM with animation
        updateStatElement(wordCountEl, words.toLocaleString());
        updateStatElement(charCountEl, chars.toLocaleString());
        updateStatElement(charNoSpaceCountEl, charsNoSpace.toLocaleString());
        updateStatElement(sentenceCountEl, sentences.toLocaleString());
        updateStatElement(paragraphCountEl, paragraphs.toLocaleString());
        updateStatElement(readingTimeEl, readingTime);
        updateStatElement(avgWordLengthEl, avgWordLength);
        updateStatElement(longestWordEl, longestWord);
        updateStatElement(speakingTimeSlowEl, speakingTimeSlow);
        updateStatElement(speakingTimeFastEl, speakingTimeFast);
    }

    // Update stat element with animation
    function updateStatElement(element, value) {
        if (element.textContent !== value.toString()) {
            element.textContent = value;
            element.classList.add('updated');
            setTimeout(() => element.classList.remove('updated'), 300);
        }
    }

    // Count words
    function countWords(text) {
        if (!text.trim()) return 0;
        // Split by whitespace and filter out empty strings
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        return words.length;
    }

    // Count sentences
    function countSentences(text) {
        if (!text.trim()) return 0;
        // Split by sentence-ending punctuation
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        return sentences.length;
    }

    // Count paragraphs
    function countParagraphs(text) {
        if (!text.trim()) return 0;
        // Split by double newlines or more
        const paragraphs = text.split(/\n\n+/).filter(para => para.trim().length > 0);
        return paragraphs.length;
    }

    // Calculate reading time
    function calculateReadingTime(wordCount) {
        if (wordCount === 0) return '0 min';
        const minutes = Math.ceil(wordCount / READING_SPEED);
        if (minutes === 1) return '1 min';
        return `${minutes} min`;
    }

    // Calculate speaking time
    function calculateSpeakingTime(wordCount, speed) {
        if (wordCount === 0) return '0 min';
        const minutes = Math.ceil(wordCount / speed);
        if (minutes === 1) return '1 min';
        return `${minutes} min`;
    }

    // Calculate average word length
    function calculateAverageWordLength(text) {
        if (!text.trim()) return '0';
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        if (words.length === 0) return '0';
        const totalLength = words.reduce((sum, word) => sum + word.length, 0);
        const average = (totalLength / words.length).toFixed(1);
        return average;
    }

    // Find longest word
    function findLongestWord(text) {
        if (!text.trim()) return '-';
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        if (words.length === 0) return '-';
        
        let longest = words[0];
        for (const word of words) {
            // Remove punctuation for comparison
            const cleanWord = word.replace(/[^\w]/g, '');
            const cleanLongest = longest.replace(/[^\w]/g, '');
            if (cleanWord.length > cleanLongest.length) {
                longest = word;
            }
        }
        return longest;
    }

    // Save to localStorage
    function saveToStorage() {
        try {
            localStorage.setItem(STORAGE_KEY, textInput.value);
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    }

    // Load from localStorage
    function loadFromStorage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                textInput.value = saved;
            }
        } catch (e) {
            console.error('Failed to load from localStorage:', e);
        }
    }

    // Show toast notification
    function showToast(message) {
        if (window.showToast) {
            window.showToast(message);
        }
    }

    // Track page view
    function trackPageView() {
        if (window.trackPageView) {
            window.trackPageView('/tools/word-counter/');
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

