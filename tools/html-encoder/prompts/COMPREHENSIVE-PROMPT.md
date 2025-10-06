# Comprehensive Prompt - HTML Encoder/Decoder

**Goal**: Build complete HTML Encoder/Decoder tool in one go  
**Estimated Time**: 45 minutes  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build an HTML Encoder/Decoder web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: HTML Encoder/Decoder
- URL: https://deepvcode.com/html-encoder
- Description: Encode and decode HTML entities. Convert special characters to HTML entities and vice versa.
- Category: Text Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Encode HTML (text to entities)
2. Decode HTML (entities to text)
3. Swap input and output
4. Copy input or output
5. Clear input or output
6. Character count display
7. Auto-save to localStorage
8. Instant conversion
9. Common HTML entities reference

=== USER FLOW ===
Encode:
1. User enters text with special characters
2. User clicks "Encode HTML"
3. Tool displays encoded HTML entities
4. User can copy result

Decode:
1. User enters HTML with entities
2. User clicks "Decode HTML"
3. Tool displays decoded text
4. User can copy result

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

HTML Encoding/Decoding:
- Encode: Use browser's textContent to innerHTML conversion
  * Create div element
  * Set textContent to input
  * Read innerHTML for encoded result
- Decode: Use browser's innerHTML to textContent conversion
  * Create div element
  * Set innerHTML to input
  * Read textContent for decoded result
- Common entities: &lt; &gt; &amp; &quot; &apos; &nbsp;

UI Components:
- Action buttons: Encode, Decode, Swap
- Split layout (input left, output right)
- Input textarea
- Output textarea (readonly)
- Character count for both
- Clear and copy buttons for both
- Common HTML entities reference grid

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
- saveToLocalStorage(key, value)
- loadFromLocalStorage(key, defaultValue)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/html-encoder/:

1. index.html - Use template
2. style.css - Tool-specific styles (can import from base64 tool)
3. script.js - HTML encoding/decoding logic
4. README.md - Documentation

Build the complete HTML Encoder/Decoder tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with split layout and reference
2. **style.css** - Entities reference grid styles
3. **script.js** - HTML encoding/decoding with browser APIs
4. **README.md** - Documentation

---

**This single prompt should recreate the entire HTML Encoder/Decoder!** 🚀

