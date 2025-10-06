# Color Picker - Wireframe Reference

**Purpose**: Visual guide for Figma design  
**Created**: 2025-10-06  
**Use**: Reference while creating mockups

---

## 🖥️ **DESKTOP LAYOUT (1440px)**

```
┌────────────────────────────────────────────────────────────────────────┐
│  ☰ Online Tools          Color Picker                    🌙 Dark Mode  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────┐  ┌──────────────────────────────┐│
│  │                                 │  │   Selected Color             ││
│  │                                 │  │                              ││
│  │                                 │  │   ┌────────────────────┐    ││
│  │      Color Picker Square        │  │   │                    │    ││
│  │      (Saturation/Lightness)     │  │   │    #3B82F6         │    ││
│  │                                 │  │   │                    │    ││
│  │         300px × 300px           │  │   │   120px × 120px    │    ││
│  │                                 │  │   │                    │    ││
│  │                                 │  │   └────────────────────┘    ││
│  │                                 │  │                              ││
│  └─────────────────────────────────┘  │   HEX   #3B82F6      [📋]   ││
│                                        │   RGB   rgb(59,130,246) [📋]││
│  ┌─────────────────────────────────┐  │   HSL   hsl(217,91%,60%) [📋││
│  │  ═══════════════════════════════│  │   RGBA  rgba(59,130,246,1)  ││
│  │  Hue Slider (0-360°)            │  │   HSLA  hsla(217,91%,60%,1) ││
│  └─────────────────────────────────┘  │   CMYK  cmyk(76%,47%,0%,4%) ││
│                                        │                              ││
│  ┌─────────────────────────────────┐  └──────────────────────────────┘│
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│                                   │
│  │  Opacity Slider (0-100%)        │                                   │
│  └─────────────────────────────────┘                                   │
│                                                                         │
├────────────────────────────────────────────────────────────────────────┤
│  Color Shades                                                          │
│  ┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐                │
│  │   ││   ││   ││   ││   ││   ││   ││   ││   ││   │                │
│  └───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘                │
│  Lighter ────────────────────────────────────────► Darker             │
├────────────────────────────────────────────────────────────────────────┤
│  Color Harmony                                                         │
│  [Complementary] [Analogous] [Triadic] [Split-Comp] [Tetradic]        │
│                                                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                            │
│  │     │ │     │ │     │ │     │ │     │                            │
│  │     │ │     │ │     │ │     │ │     │                            │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                            │
│  #3B82F6 #F68B3B #3BF682 #F63B82 #823BF6                             │
├────────────────────────────────────────────────────────────────────────┤
│  Recent Colors                                      [Clear History]    │
│  ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐                          │
│  │  ││  ││  ││  ││  ││  ││  ││  ││  ││  │                          │
│  └──┘└──┘└──┘└──┘└──┘└──┘└──┘└──┘└──┘└──┘                          │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📱 **MOBILE LAYOUT (375px)**

```
┌─────────────────────────────────┐
│  ☰  Color Picker          🌙    │
├─────────────────────────────────┤
│                                 │
│   ┌───────────────────────┐    │
│   │                       │    │
│   │                       │    │
│   │   Color Picker        │    │
│   │   Square              │    │
│   │   280px × 280px       │    │
│   │                       │    │
│   │                       │    │
│   └───────────────────────┘    │
│                                 │
│   ┌───────────────────────┐    │
│   │ ═══════════════════   │    │
│   │ Hue Slider            │    │
│   └───────────────────────┘    │
│                                 │
│   ┌───────────────────────┐    │
│   │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │    │
│   │ Opacity Slider        │    │
│   └───────────────────────┘    │
│                                 │
│   ┌───────────────────────┐    │
│   │  Selected Color       │    │
│   │  ┌─────────────────┐  │    │
│   │  │                 │  │    │
│   │  │    #3B82F6      │  │    │
│   │  │   80px × 80px   │  │    │
│   │  └─────────────────┘  │    │
│   └───────────────────────┘    │
│                                 │
│   HEX   #3B82F6          [📋]  │
│   RGB   rgb(59,130,246)  [📋]  │
│   HSL   hsl(217,91%,60%) [📋]  │
│                                 │
│   ▼ Show More Formats          │
│                                 │
├─────────────────────────────────┤
│  Color Shades                   │
│  ┌──┐┌──┐┌──┐┌──┐┌──┐          │
│  │  ││  ││  ││  ││  │          │
│  └──┘└──┘└──┘└──┘└──┘          │
│  ┌──┐┌──┐┌──┐┌──┐┌──┐          │
│  │  ││  ││  ││  ││  │          │
│  └──┘└──┘└──┘└──┘└──┘          │
├─────────────────────────────────┤
│  Color Harmony                  │
│  [Complementary ▼]              │
│                                 │
│  ┌────┐ ┌────┐ ┌────┐          │
│  │    │ │    │ │    │          │
│  └────┘ └────┘ └────┘          │
├─────────────────────────────────┤
│  Recent Colors                  │
│  ┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐     │
│  │ ││ ││ ││ ││ ││ ││ ││ │     │
│  └─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘     │
└─────────────────────────────────┘
```

---

## 🎨 **COMPONENT DETAILS**

### **Color Picker Square**
```
┌─────────────────────────────────┐
│ ⚪ ← Draggable cursor           │
│                                 │
│  White ──────────► Pure Color   │
│    ↓                    ↓       │
│  Black ──────────► Dark Color   │
│                                 │
│  (Saturation: Left → Right)     │
│  (Lightness: Top → Bottom)      │
└─────────────────────────────────┘
```

### **Hue Slider**
```
┌─────────────────────────────────┐
│ 🔴🟠🟡🟢🔵🟣🔴                   │
│  ▲                              │
│  └─ Draggable handle            │
└─────────────────────────────────┘
Red → Orange → Yellow → Green → Blue → Purple → Red
0°     60°      120°     180°    240°    300°    360°
```

### **Opacity Slider**
```
┌─────────────────────────────────┐
│ ░░░░▓▓▓▓████████                │
│      ▲                          │
│      └─ Draggable handle        │
└─────────────────────────────────┘
Transparent (0%) ──────► Opaque (100%)
```

### **Color Format Input**
```
┌─────────────────────────────────┐
│ HEX                             │
│ ┌─────────────────────┐  ┌───┐ │
│ │ #3B82F6             │  │📋 │ │
│ └─────────────────────┘  └───┘ │
│                                 │
│ [Copied! ✓] ← Feedback          │
└─────────────────────────────────┘
```

### **Shade Swatch**
```
┌─────┐
│     │ ← Hover: Scale 1.1
│     │    Show tooltip: "#2563EB"
└─────┘    Click: Select this shade
  48×48px
```

### **Harmony Tabs**
```
┌──────────────────────────────────────────┐
│ [Complementary] Analogous  Triadic  ...  │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔                          │
│                                          │
│  ┌─────┐ ┌─────┐                        │
│  │     │ │     │                        │
│  └─────┘ └─────┘                        │
└──────────────────────────────────────────┘
```

---

## 🎯 **INTERACTION STATES**

### **Button States**
```
Default:    [  Copy  ]
Hover:      [  Copy  ] ← Slightly darker, shadow
Active:     [  Copy  ] ← Pressed down
Focus:      [  Copy  ] ← Blue outline
Success:    [ Copied! ✓ ] ← Green, checkmark
```

### **Input States**
```
Default:    ┌─────────────┐
            │ #3B82F6     │
            └─────────────┘

Hover:      ┌─────────────┐
            │ #3B82F6     │ ← Border slightly darker
            └─────────────┘

Focus:      ┌─────────────┐
            │ #3B82F6     │ ← Blue border + glow
            └─────────────┘

Error:      ┌─────────────┐
            │ Invalid     │ ← Red border
            └─────────────┘
```

### **Swatch States**
```
Default:    ┌───┐
            │   │
            └───┘

Hover:      ┌───┐
            │   │ ← Scale 1.1, shadow
            └───┘

Active:     ┌───┐
            │ ✓ │ ← Checkmark overlay
            └───┘
```

---

## 📐 **SPACING GUIDE**

### Desktop Layout
```
Padding around main container: 32px
Gap between picker and outputs: 24px
Gap between sections: 32px
Gap between swatches: 8px
Padding inside cards: 24px
```

### Mobile Layout
```
Padding around main container: 16px
Gap between sections: 24px
Gap between swatches: 6px
Padding inside cards: 16px
```

---

## 🌈 **COLOR PICKER BEHAVIOR**

### When User Clicks Color Square:
1. Update cursor position
2. Calculate saturation (X position)
3. Calculate lightness (Y position)
4. Update all color formats
5. Update large preview swatch
6. Update shades
7. Update harmony colors

### When User Drags Hue Slider:
1. Update hue value (0-360°)
2. Update color square gradient
3. Update all color formats
4. Update preview swatch
5. Update shades
6. Update harmony colors

### When User Clicks Copy Button:
1. Copy value to clipboard
2. Show "Copied!" feedback
3. Animate checkmark
4. Reset after 2 seconds

---

## 🎨 **DARK MODE DIFFERENCES**

```
Light Mode:
- Background: White (#FFFFFF)
- Cards: Light gray (#F3F4F6)
- Text: Dark gray (#111827)
- Borders: Medium gray (#E5E7EB)

Dark Mode:
- Background: Dark gray (#111827)
- Cards: Darker gray (#1F2937)
- Text: White (#F9FAFB)
- Borders: Medium gray (#374151)
```

---

## 📱 **RESPONSIVE BEHAVIOR**

### Desktop (>1024px)
- Two-column layout
- Picker on left, outputs on right
- All features visible

### Tablet (768px - 1024px)
- Two-column layout (narrower)
- Slightly smaller picker
- Stacked sections

### Mobile (<768px)
- Single column
- Full-width picker
- Collapsible sections
- Larger touch targets

---

## ✨ **MICRO-INTERACTIONS**

### Copy Button
```
1. Click → Button press animation
2. Copy to clipboard
3. Icon changes to checkmark
4. Text changes to "Copied!"
5. Green color flash
6. After 2s → Reset to original
```

### Swatch Hover
```
1. Mouse enter → Scale 1.1
2. Show shadow
3. Show tooltip with HEX value
4. Mouse leave → Scale back to 1
```

### Color Change
```
1. User selects new color
2. All values fade out (100ms)
3. Update values
4. All values fade in (100ms)
5. Smooth transition
```

---

## 🎯 **ACCESSIBILITY NOTES**

### Keyboard Navigation
- Tab: Move between inputs
- Arrow keys: Adjust sliders
- Enter: Copy focused value
- Escape: Close tooltips

### Screen Reader
- Label all inputs clearly
- Announce color changes
- Announce copy success
- Describe harmony types

### Focus Indicators
- Always visible
- High contrast
- 2px blue outline
- 2px offset from element

---

**Use this wireframe as a guide when creating your Figma mockups!**

**Remember:**
- This is a reference, not a strict requirement
- Feel free to improve the layout
- Test different arrangements
- Prioritize user experience

**Next Step**: Open Figma and start designing! 🎨

