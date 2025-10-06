# Comprehensive Prompt - RegEx Tester

**Goal**: Build complete RegEx Tester tool in one go  
**Estimated Time**: 1.5 hours  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a RegEx Tester & Debugger web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: RegEx Tester & Debugger
- URL: https://deepvcode.com/regex-tester
- Description: Test regular expressions with real-time matching, highlighting, and explanations
- Category: Text Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Real-time regex testing and matching
2. Syntax highlighting for matches
3. Support for all regex flags (g, i, m, s, u)
4. Match count display
5. Capture group display with details
6. Instant feedback with debouncing
7. Auto-save regex and test string
8. 6 quick example patterns (email, URL, phone, etc.)
9. RegEx quick reference guide
10. Error handling with clear messages

=== USER FLOW ===
1. User enters regex pattern
2. User selects flags (checkboxes)
3. User enters test string
4. Tool shows matches highlighted in real-time
5. Tool displays match details and capture groups
6. User can load examples or view reference

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

RegEx Testing:
- Use JavaScript RegExp API
- Support all flags: g (global), i (case insensitive), m (multiline), s (dotall), u (unicode)
- Highlight matches in test string
- Extract and display capture groups
- Show match index and value
- Handle errors gracefully

UI Components:
- Regex input with delimiters (/ pattern / flags)
- Flag checkboxes (g, i, m, s, u)
- Test string textarea
- Highlighted output display
- Match count badge
- Match details list
- Quick example buttons (6 patterns)
- Quick reference guide (collapsible)

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981
- Error: #EF4444
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type)
- debounce(func, delay) - Debounce for performance
- saveToLocalStorage(key, value)
- loadFromLocalStorage(key, defaultValue)
- trackEvent(category, action, label)

=== EXAMPLE PATTERNS ===
Include these 6 quick examples:
1. Email: ^\w+@\w+\.\w+$ (flags: i)
2. URL: ^https?://[\w\-\.]+\.\w+ (flags: i)
3. Phone (US): ^\d{3}-\d{3}-\d{4}$ (flags: none)
4. Hex Color: ^#?([a-f0-9]{6}|[a-f0-9]{3})$ (flags: i)
5. Date (YYYY-MM-DD): ^\d{4}-\d{2}-\d{2}$ (flags: none)
6. Strong Password: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$ (flags: none)

=== FILE STRUCTURE ===
Create these files in tools/regex-tester/:

1. index.html - Use template
2. style.css - Tool-specific styles
3. script.js - RegEx testing logic
4. README.md - Documentation

Build the complete RegEx Tester tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with regex input and examples
2. **style.css** - Match highlighting, reference guide styles
3. **script.js** - RegEx testing with match extraction
4. **README.md** - Documentation

---

**This single prompt should recreate the entire RegEx Tester!** 🚀

