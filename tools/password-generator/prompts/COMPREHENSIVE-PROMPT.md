# Comprehensive Prompt - Password Generator

**Goal**: Build complete Password Generator tool in one go  
**Estimated Time**: 1 hour  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a Password Generator web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Password Generator
- URL: https://deepvcode.com/password-generator
- Description: Create strong, secure, random passwords with customizable options
- Category: Security Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Generate strong, random passwords
2. Customizable length (4-64 characters)
3. Include/exclude uppercase, lowercase, numbers, symbols
4. Exclude similar characters (i, l, 1, L, o, 0, O)
5. Exclude ambiguous characters ({ } [ ] ( ) / \ ' " ` ~)
6. Real-time password strength indicator (Weak/Fair/Good/Strong)
7. One-click copy to clipboard
8. Quick regenerate button
9. Batch generation (up to 50 passwords)
10. Cryptographically secure random generation
11. Auto-save preferences to localStorage

=== USER FLOW ===
1. User adjusts password length slider
2. User selects character types (checkboxes)
3. User clicks "Generate Password"
4. Tool displays password with strength indicator
5. User can copy, regenerate, or generate batch

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

Password Generation:
- Use crypto.getRandomValues() for cryptographically secure random
- Character sets: uppercase, lowercase, numbers, symbols
- Exclude similar: i, l, 1, L, o, 0, O
- Exclude ambiguous: { } [ ] ( ) / \ ' " ` ~ , ; : . < >
- Ensure complexity: at least one char from each selected type

Strength Calculation:
- Score based on length (8+, 12+, 16+)
- Score based on character variety
- Display: Weak (red), Fair (orange), Good (blue), Strong (green)

UI Components:
- Password display (large, monospace)
- Copy and regenerate buttons
- Length slider (4-64)
- Character type checkboxes
- Exclude options checkboxes
- Strength indicator (bar + text)
- Batch generation section
- Generate button

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type)
- copyToClipboard(text, button)
- downloadFile(content, filename, mimeType)
- saveToLocalStorage(key, value)
- loadFromLocalStorage(key, defaultValue)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/password-generator/:

1. index.html - Use template
2. style.css - Tool-specific styles
3. script.js - Password generation logic
4. README.md - Documentation

Build the complete Password Generator tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with sliders and checkboxes
2. **style.css** - Strength indicator, slider styles
3. **script.js** - Secure password generation with strength calculation
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Password Generator!** 🚀

