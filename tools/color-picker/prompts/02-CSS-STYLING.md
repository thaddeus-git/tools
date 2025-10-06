# Prompt 2: CSS Styling

**Goal**: Create complete CSS with design system, responsive design, and dark mode  
**Estimated Time**: 30 minutes  
**Prerequisites**: HTML file from Prompt 1

---

## 📋 **PROMPT FOR AI ASSISTANT**

```
Now create the complete CSS styling (style.css) for the Color Picker tool.

DESIGN SYSTEM SPECIFICATIONS:

CSS VARIABLES (Light Mode):
--color-primary-500: #3B82F6
--color-primary-600: #2563EB
--color-primary-700: #1D4ED8
--color-gray-50: #F9FAFB
--color-gray-100: #F3F4F6
--color-gray-200: #E5E7EB
--color-gray-300: #D1D5DB
--color-gray-400: #9CA3AF
--color-gray-600: #4B5563
--color-gray-700: #374151
--color-gray-800: #1F2937
--color-gray-900: #111827
--color-success: #10B981
--color-error: #EF4444

DARK MODE ([data-theme="dark"]):
- Invert background and text colors
- Primary stays same but slightly lighter (#60A5FA)
- Adjust shadows to be darker

TYPOGRAPHY:
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-mono: 'JetBrains Mono', 'Courier New', monospace
Font sizes: 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px
Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

SPACING (4px grid):
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-5: 1.25rem (20px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem (48px)

BORDER RADIUS:
--radius-sm: 0.25rem (4px)
--radius-base: 0.5rem (8px)
--radius-md: 0.75rem (12px)
--radius-lg: 1rem (16px)

SHADOWS:
Light mode: rgba(0, 0, 0, 0.05) to rgba(0, 0, 0, 0.1)
Dark mode: rgba(0, 0, 0, 0.3) to rgba(0, 0, 0, 0.5)

COMPONENT STYLES:

1. HEADER:
- Sticky at top
- Background: var(--bg-primary)
- Border bottom: 1px solid var(--border-color)
- Padding: var(--space-4)
- Flex layout: logo left, theme toggle right

2. THEME TOGGLE BUTTON:
- Background: var(--bg-card)
- Border: 1px solid var(--border-color)
- Border radius: var(--radius-base)
- Padding: var(--space-2) var(--space-4)
- Hover: slight lift effect

3. TOOL GRID:
- Desktop: 2 columns (1fr 1fr)
- Tablet/Mobile: 1 column
- Gap: var(--space-8)

4. PICKER SECTION:
- Background: var(--bg-primary)
- Padding: var(--space-6)
- Border radius: var(--radius-lg)
- Box shadow: var(--shadow-base)

5. COLOR SQUARE:
- Width: 100%, max-width: 300px
- Height: 300px
- Border radius: var(--radius-md)
- Cursor: crosshair
- Box shadow: var(--shadow-md)

6. COLOR CURSOR:
- Position: absolute
- Width: 20px, height: 20px
- Border: 3px solid white
- Border radius: 50%
- Box shadow for visibility

7. SLIDERS:
- Height: 40px
- Border radius: var(--radius-base)
- Custom thumb: 20px wide, 40px tall, white with border

8. HUE SLIDER BACKGROUND:
- Linear gradient: red → yellow → green → cyan → blue → magenta → red

9. OPACITY SLIDER BACKGROUND:
- Checkerboard pattern + linear gradient (transparent to current color)

10. OUTPUT SECTION:
- Same card style as picker section
- Color preview: 120px × 120px square

11. FORMAT INPUTS:
- Font: var(--font-mono)
- Background: var(--bg-card)
- Border: 1px solid var(--border-color)
- Padding: var(--space-2) var(--space-3)
- Focus: blue border + glow

12. COPY BUTTONS:
- Background: var(--color-primary-500)
- Color: white
- Padding: var(--space-2) var(--space-3)
- Border radius: var(--radius-base)
- Hover: darker + lift
- Copied state: green background

13. SHADES/HARMONY SWATCHES:
- Shades: 48px × 48px
- Harmony: 64px × 64px
- Border radius: var(--radius-base)
- Hover: scale(1.1) + shadow

14. RECENT COLOR SWATCHES:
- 48px × 48px
- Border radius: var(--radius-sm)
- Hover: scale(1.1)

15. TOAST NOTIFICATION:
- Fixed bottom right
- Background: var(--color-success)
- Color: white
- Padding: var(--space-3) var(--space-5)
- Border radius: var(--radius-base)
- Box shadow: var(--shadow-lg)
- Opacity 0 by default, opacity 1 when .show class

RESPONSIVE BREAKPOINTS:

@media (max-width: 1024px):
- Tool grid: 1 column
- Reduce spacing

@media (max-width: 768px):
- Smaller font sizes
- Color square: 280px
- Color preview: 80px
- Hide "Copy" text, show only icon

@media (max-width: 480px):
- Even smaller spacing
- Harmony tabs: smaller text

ANIMATIONS:
- Transitions: 0.2s ease for most interactions
- Hover effects: translateY(-1px)
- Focus: outline with offset
- Toast: slide up animation

ACCESSIBILITY:
- Focus visible: 2px solid primary color with 2px offset
- Reduced motion: disable animations if prefers-reduced-motion

Create the complete style.css file (~500 lines) with:
1. CSS variables at the top
2. Dark mode variables
3. Reset and base styles
4. Layout styles
5. Component styles
6. Responsive styles
7. Animations
8. Accessibility styles

Make it production-ready, well-organized, and commented.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create `style.css` with:

### **Structure**
- ✅ CSS variables (light mode)
- ✅ Dark mode variables
- ✅ Reset styles
- ✅ Base typography
- ✅ Layout (header, main, footer)
- ✅ All component styles
- ✅ Responsive media queries
- ✅ Animations
- ✅ Accessibility features

### **Quality Checks**
- [ ] All colors use CSS variables
- [ ] Dark mode fully implemented
- [ ] Responsive on all breakpoints
- [ ] Smooth transitions
- [ ] Focus indicators visible
- [ ] Well-commented sections

---

## 🎯 **SUCCESS CRITERIA**

You know it's successful when:
1. Page looks professional
2. Dark mode works
3. Responsive on mobile
4. All components styled
5. Hover/focus states work

---

## ➡️ **NEXT STEP**

Once CSS is complete, proceed to:
**`03-JAVASCRIPT-FUNCTIONALITY.md`** - Implement all interactive features

---

**Save the output as `style.css` and move to the next prompt!**

