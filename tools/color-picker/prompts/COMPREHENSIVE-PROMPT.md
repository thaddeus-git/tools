# Comprehensive Prompt - Build Complete Color Picker

**Goal**: Build the entire Color Picker tool in one go  
**Estimated Time**: 1-2 hours  
**Use Case**: For powerful AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a complete Color Picker web tool with the following specifications:

=== PROJECT OVERVIEW ===
- Frontend-only tool (HTML + CSS + JavaScript)
- No frameworks or external dependencies (except Google Fonts)
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Accessibility (WCAG AA)
- SEO optimized
- Total bundle size < 50KB

=== FEATURES ===
1. Interactive color picker with saturation/lightness square (Canvas API)
2. Hue slider (0-360°)
3. Opacity slider (0-100%)
4. Color format outputs: HEX, RGB, HSL, RGBA, HSLA, CMYK
5. One-click copy functionality with visual feedback
6. Color shades generator (10 shades from light to dark)
7. Color harmony generator (5 types: complementary, analogous, triadic, split-complementary, tetradic)
8. Recent colors history (last 10, saved to localStorage)
9. Dark mode toggle (preference saved to localStorage)

=== DESIGN SYSTEM ===
Colors:
- Primary: #3B82F6 (blue)
- Success: #10B981 (green)
- Error: #EF4444 (red)
- Gray scale: 50, 100, 200, 300, 400, 600, 700, 800, 900

Typography:
- Font: Inter (Google Fonts)
- Monospace: JetBrains Mono (Google Fonts)
- Sizes: 12px, 14px, 16px, 18px, 20px, 24px, 30px

Spacing: 4px grid (4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px)
Border radius: 4px, 8px, 12px, 16px
Shadows: Subtle, increase with elevation

=== FILE STRUCTURE ===
Create 3 files:

1. index.html (~300 lines)
2. style.css (~500 lines)
3. script.js (~400 lines)

=== HTML REQUIREMENTS ===
- DOCTYPE html5
- Meta tags: charset, viewport, description, keywords
- Open Graph tags for social sharing
- Schema.org markup (WebApplication)
- Google Fonts: Inter and JetBrains Mono
- Semantic HTML5 elements
- Structure:
  * Header: logo + theme toggle button
  * Main:
    - Tool header (title + description)
    - Two-column grid (picker left, outputs right)
    - Color picker section: canvas + hue slider + opacity slider
    - Output section: large preview + 6 format inputs with copy buttons
    - Shades section: 10 clickable swatches
    - Harmony section: tabs + harmony color swatches
    - Recent colors section: swatches + clear button
  * Footer: copyright
  * Toast notification (fixed bottom-right)
- All elements have proper IDs and classes
- ARIA labels for accessibility

=== CSS REQUIREMENTS ===
- CSS custom properties for theming
- Light mode (default) and dark mode ([data-theme="dark"])
- Responsive design:
  * Desktop (>1024px): 2-column layout
  * Tablet (768-1024px): 2-column narrower
  * Mobile (<768px): single column
- Components:
  * Header: sticky, border-bottom
  * Theme toggle: button with hover effect
  * Color square: 300×300px canvas, crosshair cursor
  * Color cursor: 20px circle, white border, shadow
  * Sliders: 40px height, custom thumb (20×40px white)
  * Hue slider: rainbow gradient background
  * Opacity slider: checkerboard + gradient background
  * Color preview: 120px square (80px on mobile)
  * Format inputs: monospace font, border, focus glow
  * Copy buttons: blue, hover lift, "Copied!" state green
  * Swatches: various sizes, hover scale + shadow
  * Toast: green background, slide-up animation
- Smooth transitions (0.2s ease)
- Focus indicators for accessibility
- Reduced motion support

=== JAVASCRIPT REQUIREMENTS ===
State:
- Store color as {h, s, l, a} (HSL + alpha)
- Initial color: {h: 217, s: 91, l: 60, a: 1} (blue)

Color Square (Canvas):
- Draw gradient: white→pure color (horizontal)
- Overlay gradient: transparent→black (vertical)
- Redraw when hue changes
- Handle mouse drag and touch
- Update cursor position
- Calculate saturation from X (0-100%)
- Calculate lightness from Y (100-0%)

Color Conversions:
- hslToRgb(h, s, l) → {r, g, b}
- rgbToHex(r, g, b) → "#RRGGBB"
- rgbToCmyk(r, g, b) → {c, m, y, k}

Update All Formats:
When color changes, update:
- HEX: #3B82F6
- RGB: rgb(59, 130, 246)
- HSL: hsl(217, 91%, 60%)
- RGBA: rgba(59, 130, 246, 1)
- HSLA: hsla(217, 91%, 60%, 1)
- CMYK: cmyk(76%, 47%, 0%, 4%)
- Color preview background
- Opacity slider track color

Copy Functionality:
- Use navigator.clipboard.writeText()
- Show toast: "Copied to clipboard!"
- Button shows checkmark + "Copied!" for 2s
- Then reset

Shades Generator:
- Generate 10 shades with same hue/saturation
- Lightness: 95%, 86%, 77%, 68%, 59%, 50%, 41%, 32%, 23%, 14%
- Create clickable swatches
- Click to select shade

Harmony Generator:
- Complementary: [h, (h+180)%360]
- Analogous: [(h-30+360)%360, h, (h+30)%360]
- Triadic: [h, (h+120)%360, (h+240)%360]
- Split-complementary: [h, (h+150)%360, (h+210)%360]
- Tetradic: [h, (h+90)%360, (h+180)%360, (h+270)%360]
- Keep same saturation/lightness
- Show HEX labels
- Click to select

Harmony Tabs:
- 5 tabs for harmony types
- Active tab: blue background
- Click to switch and regenerate

Recent Colors:
- Save to localStorage on color change
- Store as HSLA string
- Keep last 10 (remove duplicates)
- Display as clickable swatches
- Click to restore color
- Clear button removes all

Theme Toggle:
- Toggle light/dark mode
- Set [data-theme] on <html>
- Save to localStorage
- Update icon (🌙/☀️)
- Load on page load

Initialization:
- Draw color square
- Set initial color
- Load theme
- Load recent colors
- Generate shades and harmony
- Set up all event listeners

=== CODE QUALITY ===
- Clean, well-organized code
- Meaningful variable/function names
- Comments for complex logic
- No console errors
- Smooth 60fps interactions
- Proper error handling
- Production-ready

=== SEO ===
- Title: "Color Picker - HEX, RGB, HSL, CMYK | Free Online Tool"
- Meta description: "Free online color picker with HEX, RGB, HSL, and CMYK formats. Generate color harmonies, shades, and check accessibility. No signup required."
- Keywords: color picker, hex color picker, rgb color picker, hsl color picker, color harmony, color shades

=== DELIVERABLES ===
Create these 3 files with complete, production-ready code:
1. index.html - Complete HTML structure
2. style.css - Complete styling with design system
3. script.js - Complete functionality

Make sure:
- All features work correctly
- Design is professional and polished
- Code is clean and maintainable
- No external dependencies (except Google Fonts)
- Responsive on all devices
- Accessible (keyboard navigation, ARIA labels)
- Fast performance (< 50KB total)

Build the complete Color Picker tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create 3 complete files:

1. **index.html** - Full HTML structure
2. **style.css** - Complete styling
3. **script.js** - All functionality

### **Quality Checks**
- [ ] All features working
- [ ] Responsive design
- [ ] Dark mode working
- [ ] No console errors
- [ ] Professional appearance
- [ ] Fast performance

---

## 🎯 **SUCCESS CRITERIA**

The tool is complete when:
1. ✅ Color picker works smoothly
2. ✅ All 6 formats display correctly
3. ✅ Copy buttons work
4. ✅ Shades generate automatically
5. ✅ Harmony colors calculate correctly
6. ✅ Recent colors persist
7. ✅ Dark mode toggles
8. ✅ Responsive on mobile
9. ✅ Accessible (keyboard navigation)
10. ✅ No errors in console

---

## 💡 **TIPS FOR BEST RESULTS**

### **For Claude/ChatGPT**
- Use this prompt in a fresh conversation
- Ask for one file at a time if output is truncated
- Request clarifications if anything is unclear

### **For Cursor/Windsurf**
- Paste this prompt in the chat
- Let it create all 3 files
- Test immediately after creation

### **For Aider**
- Use `/ask` command with this prompt
- Review each file as it's created
- Use `/diff` to see changes

---

## 🔄 **IF SOMETHING DOESN'T WORK**

1. **Check console** for JavaScript errors
2. **Validate HTML** at validator.w3.org
3. **Test features** one by one
4. **Compare** with original in `tools/color-picker/`
5. **Ask AI** to fix specific issues

---

## 📊 **COMPARISON WITH ORIGINAL**

After building, compare:
- [ ] Same features
- [ ] Similar design
- [ ] Same performance
- [ ] Same code quality
- [ ] Same file sizes

---

**This single prompt should recreate the entire Color Picker tool!** 🎨

