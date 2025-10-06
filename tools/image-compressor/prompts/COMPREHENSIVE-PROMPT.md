# Comprehensive Prompt - Image Compressor

**Goal**: Build complete Image Compressor tool in one go  
**Estimated Time**: 1.5 hours  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build an Image Compressor web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Image Compressor
- URL: https://deepvcode.com/image-compressor
- Description: Compress JPG, PNG, WebP images. Reduce file size while maintaining quality.
- Category: Image Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Compress JPG, PNG, WebP images
2. Batch compression (multiple images at once)
3. Adjustable quality slider (10-100%)
4. Before/after file size comparison
5. Savings percentage display
6. Download individual images
7. Download all images at once
8. Drag and drop file upload
9. Image preview grid
10. Fast client-side compression with Canvas API
11. Privacy-focused (no server upload)
12. Max 10MB per image

=== USER FLOW ===
1. User uploads images (click or drag & drop)
2. User adjusts quality slider
3. User clicks "Compress Images"
4. Tool displays compressed images with before/after comparison
5. User can download individual images or all at once

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

Image Compression:
- Use Canvas API for compression
- Load image with FileReader API (readAsDataURL)
- Draw to canvas at original dimensions
- Convert to blob with quality setting (canvas.toBlob)
- Support JPG, PNG, WebP formats
- Quality range: 10-100% (0.1-1.0 for canvas)
- Max file size: 10MB per image
- Calculate savings percentage

UI Components:
- File upload area with drag & drop
- Quality slider (10-100%)
- Compress button
- Image grid (responsive, 3 columns on desktop)
- Image cards with:
  * Preview thumbnail
  * File name
  * Original size
  * Compressed size
  * Savings percentage
  * Download button
- Batch actions (Download All, Clear All)

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981 (for savings display)
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type)
- formatBytes(bytes)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/image-compressor/:

1. index.html - Use template
2. style.css - Tool-specific styles
3. script.js - Image compression logic
4. README.md - Documentation

Build the complete Image Compressor tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with file upload and quality slider
2. **style.css** - Image grid and card styles
3. **script.js** - Image compression with Canvas API
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Image Compressor!** 🚀

