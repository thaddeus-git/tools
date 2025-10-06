# Comprehensive Prompt - UUID Generator

**Goal**: Build complete UUID Generator tool in one go  
**Estimated Time**: 45 minutes  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a UUID Generator web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: UUID Generator
- URL: https://deepvcode.com/uuid-generator
- Description: Generate unique identifiers (UUID v4) instantly. Bulk generation supported.
- Category: Developer Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Generate UUID v4 (random, cryptographically secure)
2. Quick regenerate button
3. One-click copy to clipboard
4. 4 format options:
   - Standard (lowercase with hyphens)
   - Uppercase
   - No hyphens
   - With braces
5. Bulk generation (up to 1000 UUIDs)
6. Download bulk UUIDs as text file
7. Instant generation
8. Auto-apply selected format to all UUIDs

=== USER FLOW ===
1. User clicks "Generate UUID"
2. Tool displays UUID
3. User can copy with one click
4. User can choose format option
5. User can generate bulk UUIDs
6. User can download bulk UUIDs

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

UUID Generation:
- Use crypto.randomUUID() if available
- Fallback to manual UUID v4 generation using Math.random()
- Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
- Cryptographically secure random generation

Format Options:
- Standard: 550e8400-e29b-41d4-a716-446655440000
- Uppercase: 550E8400-E29B-41D4-A716-446655440000
- No Hyphens: 550e8400e29b41d4a716446655440000
- With Braces: {550e8400-e29b-41d4-a716-446655440000}

UI Components:
- UUID display (large, monospace)
- Copy and regenerate buttons
- Generate button
- Format option radio buttons
- Bulk generation section
- Bulk count input (1-1000)
- Bulk generate button
- Bulk output textarea
- Copy all and download buttons

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
- downloadFile(content, filename, mimeType)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/uuid-generator/:

1. index.html - Use template
2. style.css - Tool-specific styles
3. script.js - UUID generation logic
4. README.md - Documentation

Build the complete UUID Generator tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with format options and bulk section
2. **style.css** - Format radio buttons, bulk output styles
3. **script.js** - UUID generation with crypto.randomUUID()
4. **README.md** - Documentation

---

**This single prompt should recreate the entire UUID Generator!** 🚀

