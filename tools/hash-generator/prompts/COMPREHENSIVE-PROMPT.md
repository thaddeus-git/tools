# Comprehensive Prompt - Hash Generator

**Goal**: Build complete Hash Generator tool in one go  
**Estimated Time**: 1 hour  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a Hash Generator web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Hash Generator
- URL: https://deepvcode.com/hash-generator
- Description: Generate MD5, SHA-1, SHA-256, SHA-512 hashes from text or files
- Category: Security Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Generate MD5, SHA-1, SHA-256, SHA-512 hashes
2. Hash text input
3. Hash files (up to 100MB)
4. Drag and drop file upload
5. Copy individual hashes to clipboard
6. Fast processing with Web Crypto API
7. Client-side processing (secure, no server upload)
8. Input type selector (Text/File)
9. Character count display
10. Auto-save text to localStorage

=== USER FLOW ===
Text Hashing:
1. User selects "Text" input type
2. User enters text
3. User clicks "Generate Hashes"
4. Tool displays all 4 hash types
5. User can copy any hash

File Hashing:
1. User selects "File" input type
2. User uploads file (click or drag & drop)
3. User clicks "Generate Hashes"
4. Tool displays all 4 hash types
5. User can copy any hash

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

Hash Generation:
- Use Web Crypto API (crypto.subtle.digest)
- Support algorithms: MD5 (fallback), SHA-1, SHA-256, SHA-512
- Text: Convert to Uint8Array with TextEncoder
- File: Read as ArrayBuffer with FileReader API
- Display hashes in hexadecimal format
- Max file size: 100MB

UI Components:
- Input type selector (radio buttons: Text/File)
- Text input textarea
- File upload area with drag & drop
- File info display (name, size)
- Generate button
- Hash results section (4 hash types)
- Copy buttons for each hash

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
- formatBytes(bytes)
- saveToLocalStorage(key, value)
- loadFromLocalStorage(key, defaultValue)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/hash-generator/:

1. index.html - Use template
2. style.css - Tool-specific styles (can import from base64 tool)
3. script.js - Hash generation logic
4. README.md - Documentation

Build the complete Hash Generator tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with input type selector and file upload
2. **style.css** - Hash results display styles
3. **script.js** - Hash generation with Web Crypto API
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Hash Generator!** 🚀

