# Comprehensive Prompt - Diff Checker

**Goal**: Build complete Diff Checker tool in one go  
**Estimated Time**: 1 hour  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a Diff Checker web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Diff Checker
- URL: https://deepvcode.com/diff-checker
- Description: Compare two texts and see differences highlighted. Perfect for code review and text comparison.
- Category: Text Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Compare two texts side by side
2. Highlighted differences (additions, deletions, changes)
3. Statistics display (added, removed, unchanged lines)
4. Ignore whitespace option
5. Ignore case option
6. Line-by-line comparison with line numbers
7. Color-coded output (green for added, red for removed, gray for unchanged)
8. Auto-save texts to localStorage
9. Fast comparison with Diff.js library

=== USER FLOW ===
1. User pastes original text in left panel
2. User pastes modified text in right panel
3. User optionally sets options (ignore whitespace/case)
4. User clicks "Compare Texts"
5. Tool displays highlighted differences with statistics

=== TECHNICAL REQUIREMENTS ===
- Use tool template from /templates/tool-template.html
- Use shared styles from /shared/styles/common.css
- Use shared JavaScript utilities from /shared/scripts/common.js
- Use Diff.js library (https://cdn.jsdelivr.net/npm/diff@5.1.0/dist/diff.min.js)
- Follow deepv lab design system
- Implement dark mode (already in shared styles)
- Make it responsive (mobile, tablet, desktop)
- Add SEO meta tags
- Include Schema.org markup
- Ensure accessibility (WCAG AA)

Diff Comparison:
- Use Diff.js library for line-by-line comparison
- Support ignore whitespace option
- Support ignore case option
- Display line numbers
- Color code: green (added), red (removed), gray (unchanged)
- Show statistics: count of added, removed, unchanged lines

UI Components:
- Split-pane layout (original left, modified right)
- Text input textareas (monospace font)
- Line count display for each panel
- Compare button with options checkboxes
- Results section with statistics badges
- Diff output with line numbers and color coding

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981 (for added lines)
- Error: #EF4444 (for removed lines)
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type)
- saveToLocalStorage(key, value)
- loadFromLocalStorage(key, defaultValue)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/diff-checker/:

1. index.html - Use template, include Diff.js CDN
2. style.css - Tool-specific styles
3. script.js - Diff comparison logic
4. README.md - Documentation

Build the complete Diff Checker tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with split-pane layout
2. **style.css** - Diff output styles with color coding
3. **script.js** - Diff comparison with Diff.js library
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Diff Checker!** 🚀

