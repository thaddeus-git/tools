# Prompt 3: JavaScript Functionality

**Goal**: Implement all interactive features and color logic  
**Estimated Time**: 45 minutes  
**Prerequisites**: HTML and CSS from Prompts 1-2

---

## 📋 **PROMPT FOR AI ASSISTANT**

```
Now create the complete JavaScript functionality (script.js) for the Color Picker tool.

CORE FUNCTIONALITY REQUIREMENTS:

1. COLOR STATE MANAGEMENT:
Store current color as HSL + Alpha:
{
  h: 217,  // Hue (0-360)
  s: 91,   // Saturation (0-100)
  l: 60,   // Lightness (0-100)
  a: 1     // Alpha (0-1)
}

2. COLOR SQUARE (Canvas):
- Draw gradient: white to pure color (left to right)
- Overlay gradient: transparent to black (top to bottom)
- Update when hue changes
- Handle mouse/touch drag
- Update cursor position
- Calculate saturation from X position (0-100%)
- Calculate lightness from Y position (100-0%)

3. HUE SLIDER:
- Range: 0-360
- On change: redraw color square + update color

4. OPACITY SLIDER:
- Range: 0-100
- On change: update alpha value
- Display percentage value

5. COLOR CONVERSIONS:
Implement these conversion functions:

hslToRgb(h, s, l) → {r, g, b}
- Use standard HSL to RGB algorithm
- Return values 0-255

rgbToHex(r, g, b) → "#RRGGBB"
- Convert to uppercase hex

rgbToCmyk(r, g, b) → {c, m, y, k}
- Use standard RGB to CMYK algorithm
- Return percentages 0-100

6. UPDATE ALL FORMATS:
When color changes, update all inputs:
- HEX: #3B82F6
- RGB: rgb(59, 130, 246)
- HSL: hsl(217, 91%, 60%)
- RGBA: rgba(59, 130, 246, 1)
- HSLA: hsla(217, 91%, 60%, 1)
- CMYK: cmyk(76%, 47%, 0%, 4%)

Also update:
- Color preview background
- Opacity slider track color

7. COPY FUNCTIONALITY:
- Use navigator.clipboard.writeText()
- Show toast notification
- Change button to "Copied!" with checkmark
- Reset after 2 seconds

8. COLOR SHADES:
Generate 10 shades:
- Keep hue and saturation
- Vary lightness: 95%, 86%, 77%, 68%, 59%, 50%, 41%, 32%, 23%, 14%
- Create clickable swatches
- On click: select that shade

9. COLOR HARMONY:
Implement 5 harmony types:

complementary: [h, (h + 180) % 360]
analogous: [(h - 30 + 360) % 360, h, (h + 30) % 360]
triadic: [h, (h + 120) % 360, (h + 240) % 360]
split-complementary: [h, (h + 150) % 360, (h + 210) % 360]
tetradic: [h, (h + 90) % 360, (h + 180) % 360, (h + 270) % 360]

- Keep saturation and lightness same
- Create clickable swatches with HEX labels
- On click: select that color

10. HARMONY TABS:
- Click tab to switch harmony type
- Active tab: blue background
- Generate new harmony colors

11. RECENT COLORS:
- Save to localStorage on color change
- Store as HSLA string
- Keep last 10 colors
- Remove duplicates
- Display as clickable swatches
- On click: restore that color
- Clear button: remove all

12. THEME TOGGLE:
- Toggle between light and dark
- Set data-theme attribute on <html>
- Save preference to localStorage
- Update icon (🌙 / ☀️)
- Load on page load

13. TOAST NOTIFICATION:
- Show with message
- Add .show class
- Remove after 2 seconds
- Slide up animation

14. INITIALIZATION:
On page load:
- Draw color square
- Set initial color (blue)
- Load theme preference
- Load recent colors
- Generate shades and harmony
- Set up all event listeners

EVENT LISTENERS NEEDED:
- Color square: mousedown, mousemove, mouseup, touchstart, touchmove, touchend
- Hue slider: input, change
- Opacity slider: input, change
- Copy buttons: click
- Harmony tabs: click
- Harmony swatches: click
- Shade swatches: click
- Recent swatches: click
- Clear recent button: click
- Theme toggle: click

HELPER FUNCTIONS:
- updateColor() - Update all displays
- updateCursorPosition() - Position cursor on square
- saveToRecent() - Save current color
- showToast(message) - Show notification

CODE STRUCTURE:
1. State variables at top
2. DOM element references
3. Initialization function
4. Color conversion functions
5. Color square drawing
6. Event handlers
7. Update functions
8. Helper functions
9. Initialize on DOMContentLoaded

Create the complete script.js file (~400 lines) with:
- Clean, well-commented code
- Proper error handling
- Smooth interactions
- No console errors
- Production-ready quality

Make sure all features work:
- Color picking is smooth
- All formats update correctly
- Copy works
- Shades generate
- Harmony calculates correctly
- Recent colors persist
- Theme toggles
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create `script.js` with:

### **Core Features**
- ✅ Color state management
- ✅ Canvas color square
- ✅ Slider interactions
- ✅ Color conversions (HSL→RGB→HEX→CMYK)
- ✅ Format updates
- ✅ Copy functionality
- ✅ Shades generator
- ✅ Harmony generator
- ✅ Recent colors (localStorage)
- ✅ Theme toggle (localStorage)
- ✅ Toast notifications

### **Quality Checks**
- [ ] No console errors
- [ ] Smooth interactions
- [ ] Accurate color conversions
- [ ] LocalStorage works
- [ ] All events handled
- [ ] Well-commented code

---

## 🎯 **SUCCESS CRITERIA**

You know it's successful when:
1. Color picker responds smoothly
2. All formats update correctly
3. Copy buttons work
4. Shades generate automatically
5. Harmony colors are correct
6. Recent colors persist
7. Dark mode toggles
8. No errors in console

---

## ➡️ **NEXT STEP**

Once JavaScript is complete, proceed to:
**`04-TESTING-DEPLOYMENT.md`** - Test and deploy the tool

---

**Save the output as `script.js` and test the complete tool!**

