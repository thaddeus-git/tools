# Comprehensive Prompt - Lorem Ipsum Generator

**Goal**: Build complete Lorem Ipsum Generator tool in one go  
**Estimated Time**: 45 minutes  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a Lorem Ipsum Generator web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Lorem Ipsum Generator
- URL: https://deepvcode.com/lorem-ipsum-generator
- Description: Generate placeholder text for your designs. Paragraphs, words, or sentences.
- Category: Text Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Generate paragraphs, sentences, or words
2. Adjustable count slider (1-50)
3. Option to start with classic Lorem Ipsum text
4. Copy to clipboard
5. Word and character count display
6. Random word selection from Lorem Ipsum word bank
7. Instant generation

=== USER FLOW ===
1. User selects type (paragraphs/sentences/words)
2. User adjusts count slider
3. User optionally enables "Start with Lorem ipsum..."
4. User clicks "Generate Lorem Ipsum"
5. Tool displays generated text with statistics
6. User can copy text

=== TECHNICAL REQUIREMENTS ===
- Use tool template from /templates/tool-template.html
- Use shared styles from /shared/styles/common.css
- Use shared JavaScript utilities from /shared/scripts/common.js
- Follow deepv lab design system
- Implement dark mode (already in shared styles)
- Make it responsive (mobile, tablet, desktop)
- Add SEO meta tags
- Include Schema.org markup
- Ensure accessibility (WCAG AA)

Text Generation:
- Word bank: Standard Lorem Ipsum words (lorem, ipsum, dolor, sit, amet, etc.)
- Paragraphs: 4-7 sentences each
- Sentences: 5-14 words each, capitalized, ending with period
- Words: Random selection from word bank
- Classic start: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."

UI Components:
- Type selector (radio buttons: Paragraphs, Sentences, Words)
- Count slider (1-50)
- Checkbox: "Start with Lorem ipsum..."
- Generate button
- Output display (pre-formatted text)
- Word and character count
- Copy button

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type)
- copyToClipboard(text, button)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/lorem-ipsum-generator/:

1. index.html - Use template
2. style.css - Tool-specific styles
3. script.js - Lorem Ipsum generation logic
4. README.md - Documentation

Build the complete Lorem Ipsum Generator tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with type selector and slider
2. **style.css** - Radio buttons and output styles
3. **script.js** - Lorem Ipsum generation algorithm
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Lorem Ipsum Generator!** 🚀

