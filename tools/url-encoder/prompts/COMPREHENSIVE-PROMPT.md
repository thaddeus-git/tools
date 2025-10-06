# Comprehensive Prompt - URL Encoder/Decoder

**Goal**: Build complete URL Encoder/Decoder tool in one go  
**Estimated Time**: 45 minutes  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a URL Encoder/Decoder web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: URL Encoder & Decoder
- URL: https://deepvcode.com/url-encoder
- Description: Encode URLs for safe transmission or decode encoded URLs
- Category: Encoding/Decoding Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Encode URLs for safe transmission
2. Decode encoded URLs back to readable format
3. Two encoding methods:
   - Encode URL (preserves URL structure with encodeURI)
   - Encode Component (encodes all special chars with encodeURIComponent)
4. Copy encoded/decoded text to clipboard
5. Instant encoding and decoding
6. Auto-save input to localStorage
7. Tab-based interface (Encode/Decode)
8. Real-time character count

=== USER FLOW ===
Encoding:
1. User selects Encode tab
2. User enters URL or text
3. User clicks "Encode URL" or "Encode Component"
4. Tool displays encoded result
5. User can copy result

Decoding:
1. User selects Decode tab
2. User pastes encoded URL
3. User clicks "Decode URL"
4. Tool displays decoded result
5. User can copy result

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
- Encode URL: encodeURI() - preserves :, /, ?, &, =
- Encode Component: encodeURIComponent() - encodes all special chars
- Decode: decodeURIComponent() with fallback to decodeURI()
- Handle errors gracefully

UI Components:
- Mode tabs (Encode/Decode)
- Text input textarea
- Two encode buttons (URL vs Component)
- Output display
- Copy buttons
- Character count display
- Info box explaining difference

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
- copyToClipboard(text, button)
- saveToLocalStorage(key, value)
- loadFromLocalStorage(key, defaultValue)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/url-encoder/:

1. index.html - Use template
2. style.css - Tool-specific styles
3. script.js - URL encoding/decoding logic
4. README.md - Documentation

Build the complete URL Encoder/Decoder tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with tabs and two encode buttons
2. **style.css** - Tab styles, info box
3. **script.js** - URL encoding/decoding with both methods
4. **README.md** - Documentation

---

**This single prompt should recreate the entire URL Encoder!** 🚀

