# Comprehensive Prompt - QR Code Generator

**Goal**: Build complete QR Code Generator tool in one go  
**Estimated Time**: 1 hour  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a QR Code Generator web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: QR Code Generator
- URL: https://deepvcode.com/qr-code-generator
- Description: Create QR codes for URLs, text, WiFi, and more. Download as PNG or SVG.
- Category: Utility Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Generate QR codes instantly
2. Support for multiple types:
   - URL
   - Text
   - Email (with optional subject)
   - Phone
   - SMS (with optional message)
   - WiFi (with password and security type)
3. Multiple size options (200-500px)
4. Download as PNG or SVG
5. Live preview
6. Fast generation with QRCode.js library
7. Client-side processing (secure)

=== USER FLOW ===
1. User selects QR code type from dropdown
2. User enters content (fields change based on type)
3. User selects size
4. User clicks "Generate QR Code"
5. Tool displays QR code preview
6. User can download as PNG or SVG

=== TECHNICAL REQUIREMENTS ===
- Use tool template from /templates/tool-template.html
- Use shared styles from /shared/styles/common.css
- Use shared JavaScript utilities from /shared/scripts/common.js
- Use QRCode.js library (https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js)
- Follow deepv lab design system
- Implement dark mode (already in shared styles)
- Make it responsive (mobile, tablet, desktop)
- Add SEO meta tags
- Include Schema.org markup
- Ensure accessibility (WCAG AA)

QR Code Generation:
- Use QRCode.js library
- Support types: URL, Text, Email, Phone, SMS, WiFi
- Format content based on type:
  * Email: mailto:email@example.com?subject=Subject
  * Phone: tel:+1234567890
  * SMS: sms:+1234567890?body=Message
  * WiFi: WIFI:T:WPA;S:SSID;P:password;;
- Size options: 200, 300, 400, 500 pixels
- Error correction level: High (H)
- Colors: Black on white

Download:
- PNG: Convert canvas to blob and download
- SVG: Wrap canvas image in SVG element

UI Components:
- Split layout (input left, preview right)
- Type selector dropdown
- Dynamic input fields based on type
- Size selector dropdown
- Generate button
- QR code preview area
- Download buttons (PNG and SVG)

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
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/qr-code-generator/:

1. index.html - Use template, include QRCode.js CDN
2. style.css - Tool-specific styles
3. script.js - QR code generation logic
4. README.md - Documentation

Build the complete QR Code Generator tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with type selector and dynamic inputs
2. **style.css** - Split-pane layout and preview styles
3. **script.js** - QR code generation with QRCode.js
4. **README.md** - Documentation

---

**This single prompt should recreate the entire QR Code Generator!** 🚀

