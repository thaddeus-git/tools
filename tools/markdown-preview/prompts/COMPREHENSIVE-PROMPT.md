# Comprehensive Prompt - Markdown Preview & Editor

**Goal**: Build complete Markdown Preview tool in one go  
**Estimated Time**: 1 hour  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a Markdown Preview & Editor web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Markdown Preview & Editor
- URL: https://deepvcode.com/markdown-preview
- Description: Write Markdown and see live HTML preview with GitHub Flavored Markdown support
- Category: Text Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Live Markdown editor with real-time preview
2. GitHub Flavored Markdown support
3. Formatting toolbar (bold, italic, heading, link, image, code, list)
4. Switch between Preview and HTML view
5. Copy HTML or Markdown to clipboard
6. Word count display
7. Quick reference guide (collapsible)
8. Keyboard shortcuts (Ctrl+B for bold, Ctrl+I for italic)
9. Auto-save to localStorage
10. GitHub-style markdown rendering

=== USER FLOW ===
1. User types Markdown in left panel
2. Tool shows live preview in right panel
3. User can use toolbar for quick formatting
4. User can switch between Preview and HTML view
5. User can copy HTML or Markdown
6. User can view reference guide for syntax help

=== TECHNICAL REQUIREMENTS ===
- Use tool template from /templates/tool-template.html
- Use shared styles from /shared/styles/common.css
- Use shared JavaScript utilities from /shared/scripts/common.js
- Use Marked.js library for Markdown parsing (CDN)
- Follow deepv lab design system
- Implement dark mode (already in shared styles)
- Make it responsive (mobile, tablet, desktop)
- Add SEO meta tags
- Include Schema.org markup
- Ensure accessibility (WCAG AA)

Markdown Rendering:
- Use Marked.js (https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js)
- Configure for GitHub Flavored Markdown (gfm: true, breaks: true)
- Apply GitHub-style CSS to preview
- Debounce updates for performance

Toolbar Functions:
- Bold: **text**
- Italic: *text*
- Heading: ## text
- Link: [text](url)
- Image: ![alt](url)
- Code: `code`
- List: - item

UI Components:
- Split-pane layout (editor left, preview right)
- Formatting toolbar
- Markdown editor (textarea)
- Preview panel (HTML rendering)
- HTML view (textarea, readonly)
- View toggle buttons (Preview/HTML)
- Word count display
- Copy buttons (HTML and Markdown)
- Clear button
- Quick reference guide (collapsible)

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px

GitHub Markdown Styles:
- Headings with bottom borders (h1, h2)
- Code blocks with background
- Blockquotes with left border
- Tables with borders
- Links in primary color

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type)
- copyToClipboard(text, button)
- debounce(func, delay)
- saveToLocalStorage(key, value)
- loadFromLocalStorage(key, defaultValue)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/markdown-preview/:

1. index.html - Use template, include Marked.js CDN
2. style.css - Tool-specific styles + GitHub markdown styles
3. script.js - Markdown rendering and toolbar logic
4. README.md - Documentation

Build the complete Markdown Preview tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with split-pane and toolbar
2. **style.css** - GitHub markdown styles, toolbar, reference guide
3. **script.js** - Live preview with Marked.js, toolbar functions
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Markdown Preview!** 🚀

