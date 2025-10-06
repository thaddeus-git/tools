# Comprehensive Prompt - Base64 Encoder/Decoder

**Goal**: Build complete Base64 Encoder/Decoder tool in one go  
**Estimated Time**: 1 hour  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a Base64 Encoder/Decoder web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Base64 Encoder & Decoder
- URL: https://deepvcode.com/base64
- Description: Encode text to Base64 or decode Base64 to text. Support for files and images.
- Category: Encoding/Decoding Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Encode text to Base64 format
2. Decode Base64 to plain text
3. Encode files to Base64 (up to 5MB)
4. Drag and drop file upload
5. Copy encoded/decoded text to clipboard
6. Download results as text file
7. Tab-based interface (Encode/Decode)
8. Input type selector (Text/File)
9. Real-time character count
10. Auto-save to localStorage
11. Client-side processing (secure)

=== USER FLOW ===
Encoding:
1. User selects Encode tab
2. User chooses Text or File input
3. User enters text or uploads file
4. User clicks "Encode to Base64"
5. Tool displays encoded result
6. User can copy or download

Decoding:
1. User selects Decode tab
2. User pastes Base64 string
3. User clicks "Decode from Base64"
4. Tool displays decoded result
5. User can copy or download

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

Encoding/Decoding:
- Text encoding: btoa() with UTF-8 support (encodeURIComponent + btoa)
- Text decoding: atob() with UTF-8 support (atob + decodeURIComponent)
- File encoding: FileReader API with readAsDataURL()
- File upload: Drag and drop + file input
- Max file size: 5MB

UI Components:
- Mode tabs (Encode/Decode)
- Input type selector (Text/File radio buttons)
- Text input textarea
- File upload area with drag & drop
- Action buttons (Encode/Decode)
- Output display
- Copy and download buttons
- Character count display

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
- readFileAsDataURL(file) - Read file as data URL
- downloadFile(content, filename, mimeType) - Download file
- saveToLocalStorage(key, value) - Save to localStorage
- loadFromLocalStorage(key, defaultValue) - Load from localStorage
- formatBytes(bytes) - Format file size
- trackEvent(category, action, label) - Track analytics

=== FILE STRUCTURE ===
Create these files in tools/base64/:

1. index.html - Use template from /templates/tool-template.html
2. style.css - Tool-specific styles only
3. script.js - Base64 encoding/decoding functionality
4. README.md - Tool documentation

Build the complete Base64 Encoder/Decoder tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with tabs and file upload
2. **style.css** - Tab styles, file upload area, responsive
3. **script.js** - Encoding/decoding with file support
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Base64 tool!** 🚀

