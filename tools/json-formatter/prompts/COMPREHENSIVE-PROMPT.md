# Comprehensive Prompt - JSON Formatter

**Goal**: Build complete JSON Formatter tool in one go  
**Estimated Time**: 1 hour  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a JSON Formatter & Validator web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: JSON Formatter & Validator
- URL: https://deepvcode.com/json-formatter
- Description: Format, beautify, minify, and validate JSON data with syntax highlighting
- Category: JSON/Data Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Format and beautify JSON with proper indentation (2 spaces)
2. Validate JSON syntax with detailed error messages
3. Syntax highlighting (keys, strings, numbers, booleans, null)
4. Minify JSON to reduce file size
5. Copy formatted JSON to clipboard
6. Download as .json file
7. Upload JSON files (up to 10MB)
8. Line numbers for both input and output
9. Real-time character count
10. Error display with line numbers
11. Auto-save to localStorage
12. Keyboard shortcuts (Ctrl+Enter to format, Ctrl+M to minify, Ctrl+K to validate)

=== USER FLOW ===
1. User pastes JSON or uploads file
2. User clicks Format/Minify/Validate button
3. Tool processes JSON
4. Output displays with syntax highlighting
5. User can copy or download result
6. Errors shown if JSON is invalid

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

JSON Processing:
- Use JSON.parse() for validation
- Use JSON.stringify(obj, null, 2) for formatting
- Use JSON.stringify(obj) for minifying
- Catch and display parse errors with line numbers
- Handle large files (up to 10MB)

Syntax Highlighting:
- Use regex to identify JSON tokens
- Highlight keys (blue)
- Highlight strings (green)
- Highlight numbers (orange)
- Highlight booleans (purple)
- Highlight null (red)
- Different colors for dark mode

UI Components:
- Two-column layout (input left, output right)
- Action bar with buttons (Format, Minify, Validate, Clear, Copy, Download)
- Line numbers for both editors
- Character count for both editors
- Status badge (Valid/Invalid)
- Error panel (hidden by default)
- File upload button

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981
- Error: #EF4444
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px
- All CSS variables available in common.css

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type) - Show notifications
- copyToClipboard(text, button) - Copy with feedback
- readFileAsText(file) - Read file as text
- downloadFile(content, filename, mimeType) - Download file
- saveToLocalStorage(key, value) - Save to localStorage
- loadFromLocalStorage(key, defaultValue) - Load from localStorage
- trackEvent(category, action, label) - Track analytics

=== FILE STRUCTURE ===
Create these files in tools/json-formatter/:

1. index.html - Use template from /templates/tool-template.html
2. style.css - Tool-specific styles only (common styles already loaded)
3. script.js - JSON formatting functionality
4. README.md - Tool documentation

=== HTML REQUIREMENTS ===
- Start with /templates/tool-template.html
- Replace placeholders:
  * {{TOOL_NAME}} → "JSON Formatter & Validator"
  * {{TOOL_DESCRIPTION}} → "Format, beautify, minify, and validate JSON data with syntax highlighting"
  * {{TOOL_SLUG}} → "json-formatter"
  * {{TOOL_KEYWORDS}} → "json formatter, json validator, json beautifier, json minifier"

- Add tool-specific content:
  * Action bar with 6 buttons
  * Two-column editor grid
  * Input editor (textarea with line numbers)
  * Output editor (div with syntax highlighting)
  * Error panel (hidden by default)
  * File upload input

- List features:
  * Format and beautify JSON
  * Validate JSON syntax
  * Syntax highlighting
  * Minify JSON
  * Copy to clipboard
  * Download as file
  * Upload files (up to 10MB)
  * Line numbers
  * Fast processing
  * Dark mode support

- Add usage steps:
  1. Paste or upload JSON
  2. Click Format button
  3. View formatted output
  4. Copy or download result

=== CSS REQUIREMENTS ===
- Only add tool-specific styles (common styles already loaded)
- Use CSS variables from common.css
- Follow the design system

Tool-specific styles:
- Action bar (flex layout with buttons)
- Editor grid (2 columns on desktop, 1 on mobile)
- Editor panels (card style with header/footer)
- Line numbers (fixed width, right-aligned)
- JSON editors (monospace font, proper padding)
- Syntax highlighting classes (.json-key, .json-string, etc.)
- Error panel (red background, border)
- Status badge (green for valid, red for invalid)

Responsive:
- Desktop: 2-column layout
- Mobile: 1-column, hide button text, show icons only

=== JAVASCRIPT REQUIREMENTS ===
- Use utilities from common.js (window.deepvlab)

Core Functions:
- formatJSON() - Parse and format with JSON.stringify(obj, null, 2)
- minifyJSON() - Parse and minify with JSON.stringify(obj)
- validateJSON() - Parse and show valid/invalid status
- clearAll() - Clear both editors
- copyOutput() - Copy formatted JSON to clipboard
- downloadJSON() - Download as .json file
- handleFileUpload() - Read and load file content

UI Functions:
- displayOutput(json) - Show formatted JSON with syntax highlighting
- syntaxHighlight(json) - Apply syntax highlighting with regex
- updateCharCount() - Update character count
- updateLineNumbers() - Update line numbers
- setStatus(type, text) - Update status badge
- showError(message) - Show error panel
- hideError() - Hide error panel

Features:
- Auto-save input to localStorage
- Load saved input on page load
- Sync scroll between editor and line numbers
- Keyboard shortcuts (Ctrl+Enter, Ctrl+M, Ctrl+K)
- Track events with trackEvent()

Error Handling:
- Catch JSON.parse() errors
- Display error message with line number
- Show invalid status badge
- Clear error on successful parse

=== QUALITY STANDARDS ===
- Clean, well-commented code
- No console errors
- Fast performance (handle 10MB files)
- Accessible (keyboard navigation, ARIA labels)
- SEO optimized
- Mobile-friendly
- Production-ready

Build the complete JSON Formatter tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:

1. **index.html** - Complete HTML structure
2. **style.css** - Tool-specific styles
3. **script.js** - JSON formatting functionality
4. **README.md** - Documentation

### **Quality Checks**
- [ ] All features working
- [ ] Syntax highlighting correct
- [ ] Error messages clear
- [ ] Responsive design
- [ ] Dark mode working
- [ ] No console errors

---

## 🎯 **SUCCESS CRITERIA**

The tool is complete when:
1. ✅ Can format JSON correctly
2. ✅ Can minify JSON
3. ✅ Can validate JSON
4. ✅ Syntax highlighting works
5. ✅ Copy and download work
6. ✅ File upload works
7. ✅ Error messages are clear
8. ✅ Responsive on mobile
9. ✅ Accessible (keyboard navigation)
10. ✅ No errors in console

---

**This single prompt should recreate the entire JSON Formatter tool!** 🚀

