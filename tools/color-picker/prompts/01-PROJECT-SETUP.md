# Prompt 1: Project Setup

**Goal**: Set up the project structure and create the HTML file  
**Estimated Time**: 15 minutes  
**Prerequisites**: None

---

## 📋 **PROMPT FOR AI ASSISTANT**

```
I want to build a Color Picker web tool. This is a frontend-only tool with no backend.

PROJECT REQUIREMENTS:
- Single-page application (HTML + CSS + JavaScript)
- No frameworks or libraries (vanilla JavaScript only)
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Accessibility features (WCAG AA)
- SEO optimized

FEATURES TO IMPLEMENT:
1. Interactive color picker (saturation/lightness square + hue slider)
2. Opacity slider
3. Color format outputs: HEX, RGB, HSL, RGBA, HSLA, CMYK
4. One-click copy functionality for all formats
5. Color shades generator (10 shades from light to dark)
6. Color harmony generator (complementary, analogous, triadic, split-complementary, tetradic)
7. Recent colors history (saved to localStorage)
8. Dark mode toggle (preference saved to localStorage)

DESIGN SYSTEM:
- Primary color: #3B82F6 (blue)
- Success color: #10B981 (green)
- Error color: #EF4444 (red)
- Font: Inter (Google Fonts)
- Monospace font: JetBrains Mono (Google Fonts)
- Spacing: 4px grid system
- Border radius: 4px, 8px, 12px, 16px
- Responsive breakpoints: 480px, 768px, 1024px

TECHNICAL SPECS:
- Use HTML5 semantic elements
- Use CSS custom properties for theming
- Use Canvas API for color picker square
- Use Clipboard API for copy functionality
- Use LocalStorage API for persistence
- Total bundle size should be < 50KB

SEO REQUIREMENTS:
- Title: "Color Picker - HEX, RGB, HSL, CMYK | Free Online Tool"
- Meta description with keywords
- Open Graph tags for social sharing
- Schema.org markup (WebApplication type)

FIRST TASK:
Create the complete HTML structure (index.html) with:
1. Proper DOCTYPE and meta tags
2. SEO tags (title, description, Open Graph, Schema.org)
3. Google Fonts links (Inter and JetBrains Mono)
4. Semantic HTML structure with all sections:
   - Header with logo and theme toggle
   - Main content area with:
     * Color picker section (canvas + sliders)
     * Color output section (preview + format inputs)
     * Shades section
     * Harmony section
     * Recent colors section
   - Footer
   - Toast notification element
5. All necessary IDs and classes for JavaScript
6. ARIA labels for accessibility
7. Links to style.css and script.js

LAYOUT STRUCTURE:
- Header: Logo on left, theme toggle on right
- Main: Two-column grid on desktop (picker left, outputs right)
- Sections below: Shades, Harmony, Recent Colors (full width)
- Footer: Copyright text

Make sure the HTML is:
- Semantic and accessible
- Well-organized with clear sections
- Ready for styling (proper classes and IDs)
- SEO optimized with all meta tags
- About 250-300 lines total

Please create the complete index.html file now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create `index.html` with:

### **Structure**
- ✅ Complete DOCTYPE and head section
- ✅ All SEO meta tags
- ✅ Google Fonts links
- ✅ Semantic HTML5 elements
- ✅ All sections properly structured
- ✅ IDs and classes for JavaScript
- ✅ ARIA labels for accessibility

### **Sections**
- ✅ Header (logo + theme toggle)
- ✅ Tool header (title + description)
- ✅ Picker section (canvas + sliders)
- ✅ Output section (preview + formats)
- ✅ Shades section
- ✅ Harmony section
- ✅ Recent colors section
- ✅ Footer
- ✅ Toast notification

### **Quality Checks**
- [ ] Valid HTML5
- [ ] All IDs unique
- [ ] Classes follow naming convention
- [ ] ARIA labels present
- [ ] SEO tags complete
- [ ] Links to CSS and JS files

---

## 🎯 **SUCCESS CRITERIA**

You know it's successful when:
1. HTML validates (use W3C validator)
2. All sections are present
3. Structure is semantic
4. IDs and classes are logical
5. Ready for styling and JavaScript

---

## 🔄 **IF IT DOESN'T WORK**

If the AI output is incomplete:
1. Ask: "Please add the missing [section name] section"
2. Ask: "Please add all SEO meta tags"
3. Ask: "Please add ARIA labels for accessibility"
4. Show this prompt again with emphasis on missing parts

---

## ➡️ **NEXT STEP**

Once HTML is complete, proceed to:
**`02-HTML-STRUCTURE.md`** - Wait, the HTML is done!
**`03-CSS-STYLING.md`** - Create the complete CSS styling

---

**Save the output as `index.html` and move to the next prompt!**

