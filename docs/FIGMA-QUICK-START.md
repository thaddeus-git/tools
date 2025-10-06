# Figma Quick Start Guide

**Purpose**: Get you designing in Figma in 30 minutes  
**Created**: 2025-10-06  
**For**: Color Picker Tool Design

---

## 🚀 **STEP 1: SET UP FIGMA** (5 minutes)

### Create Account
1. Go to **https://figma.com**
2. Click **"Sign up"**
3. Use your email or Google account
4. Verify email
5. Choose **"Free"** plan (it's enough!)

### Create New File
1. Click **"New design file"** (big + button)
2. Name it: **"Color Picker Tool"**
3. You're in! 🎉

---

## 🎨 **STEP 2: SET UP PAGES** (2 minutes)

In the left sidebar, you'll see "Page 1":

1. **Rename Page 1**:
   - Right-click "Page 1"
   - Rename to: **"Design System"**

2. **Add more pages**:
   - Click the **+** next to pages
   - Add: **"Wireframes"**
   - Add: **"Desktop Mockups"**
   - Add: **"Mobile Mockups"**
   - Add: **"Prototype"**

You should now have 5 pages! ✅

---

## 🎨 **STEP 3: CREATE DESIGN SYSTEM** (15 minutes)

### Go to "Design System" page

### A) Create Color Styles (5 min)

1. **Draw a rectangle** (press `R`)
2. **Fill it with blue**: `#3B82F6`
3. Click the **color swatch** in the right panel
4. Click the **four dots icon** (styles)
5. Click **"+"** to create new style
6. Name it: **"Primary/500"**
7. Click **"Create style"**

**Repeat for these colors:**
- Primary/600: `#2563EB`
- Primary/700: `#1D4ED8`
- Gray/50: `#F9FAFB`
- Gray/100: `#F3F4F6`
- Gray/200: `#E5E7EB`
- Gray/600: `#4B5563`
- Gray/900: `#111827`
- Success/500: `#10B981`
- Error/500: `#EF4444`

**Tip**: You can copy-paste the rectangle and just change the color!

---

### B) Create Text Styles (5 min)

1. **Press `T`** for text tool
2. Type: **"Heading 1"**
3. In right panel, set:
   - Font: **Inter** (or system default)
   - Size: **30**
   - Weight: **Bold**
4. Click **"..."** next to text properties
5. Click **"Create style"**
6. Name it: **"Heading 1"**

**Repeat for:**
- Heading 2: 24px, Semibold
- Heading 3: 20px, Semibold
- Body: 16px, Regular
- Body Small: 14px, Regular
- Mono: 14px, Medium, Font: "Courier New"

---

### C) Create Components (5 min)

#### Primary Button
1. **Draw rectangle** (press `R`): 100px × 40px
2. Fill: Primary/500 (use your color style!)
3. Border radius: 8px (in right panel)
4. **Add text** (press `T`): "Button"
5. Center the text (select both, click align center)
6. **Select both** (drag to select)
7. **Right-click** → **"Create component"**
8. Name it: **"Button/Primary"**

#### Input Field
1. **Draw rectangle**: 200px × 40px
2. Fill: White
3. Border: 1px, Gray/200
4. Border radius: 8px
5. **Add text**: "#3B82F6"
6. Font: Mono style
7. **Select both** → **Create component**
8. Name: **"Input/Text"**

#### Color Swatch
1. **Draw square**: 48px × 48px
2. Fill: Primary/500
3. Border radius: 8px
4. Border: 1px, rgba(0,0,0,0.1)
5. **Create component**
6. Name: **"Swatch/Medium"**

**Done with Design System!** ✅

---

## 📐 **STEP 4: CREATE WIREFRAME** (10 minutes)

### Go to "Wireframes" page

### Desktop Wireframe (1440px wide)

1. **Create frame** (press `F`)
2. In right panel, choose: **"Desktop"** (1440 × 1024)
3. Name it: **"Desktop - Wireframe"**

4. **Add rectangles** for layout:
   - Header: 1440 × 64px
   - Main container: 1200 × 800px (centered)
   - Left column: 400 × 600px (for picker)
   - Right column: 400 × 600px (for outputs)

5. **Add text labels**:
   - "Color Picker Square"
   - "Hue Slider"
   - "Opacity Slider"
   - "Selected Color"
   - "Color Formats"

6. **Use gray fills** (this is low-fidelity!)
   - Light gray for backgrounds
   - Dark gray for text areas
   - Don't worry about perfection!

### Mobile Wireframe (375px wide)

1. **Create frame**: **"iPhone 14 Pro"** (375 × 812)
2. Name it: **"Mobile - Wireframe"**
3. **Stack everything vertically**:
   - Header
   - Color picker
   - Sliders
   - Selected color
   - Formats

**Wireframes done!** ✅

---

## 🎨 **STEP 5: CREATE HIGH-FIDELITY MOCKUP** (Later)

### This is for Day 3-4 of your design week

Go to "Desktop Mockups" page:

1. **Duplicate your wireframe**
2. **Apply design system**:
   - Use color styles
   - Use text styles
   - Use components
3. **Add real content**:
   - Actual color values
   - Real buttons
   - Real inputs
4. **Polish**:
   - Shadows
   - Spacing
   - Alignment

---

## ⌨️ **ESSENTIAL FIGMA SHORTCUTS**

### Tools
- `V` - Move tool (select/move objects)
- `R` - Rectangle
- `O` - Ellipse (circle)
- `T` - Text
- `F` - Frame
- `K` - Scale tool

### Actions
- `Cmd/Ctrl + D` - Duplicate
- `Cmd/Ctrl + G` - Group
- `Cmd/Ctrl + C` - Copy
- `Cmd/Ctrl + V` - Paste
- `Cmd/Ctrl + Z` - Undo
- `Option/Alt + Drag` - Duplicate while dragging

### Alignment
- `Option/Alt + A` - Align left
- `Option/Alt + D` - Align right
- `Option/Alt + W` - Align top
- `Option/Alt + S` - Align bottom
- `Option/Alt + H` - Align horizontal center
- `Option/Alt + V` - Align vertical center

### View
- `Cmd/Ctrl + 0` - Zoom to fit
- `Cmd/Ctrl + 1` - Zoom to 100%
- `Z` - Zoom tool
- `Space + Drag` - Pan around canvas

### Help
- `?` - Show all shortcuts

---

## 💡 **FIGMA TIPS**

### Auto Layout (Super Useful!)
1. Select multiple objects
2. Press `Shift + A`
3. Now they're a flexible group!
4. Adjust spacing in right panel
5. Perfect for buttons, cards, lists

### Components (Reusable Elements)
- Create once, use everywhere
- Edit the main component → all instances update
- Great for buttons, inputs, swatches

### Constraints (Responsive Design)
- Select an object inside a frame
- In right panel, set constraints
- "Left & Right" = stretches with frame
- "Center" = stays centered

### Plugins (Optional but Helpful)
- **Iconify**: Free icons
- **Unsplash**: Free images
- **Stark**: Accessibility checker
- **Content Reel**: Dummy content

To install plugins:
1. Right-click on canvas
2. Plugins → Browse plugins
3. Search and install

---

## 🎯 **YOUR FIRST TASK**

**Spend 30 minutes right now:**

1. ✅ Set up Figma account
2. ✅ Create file and pages
3. ✅ Create 3-5 color styles
4. ✅ Create 2-3 text styles
5. ✅ Create 1 button component
6. ✅ Draw a simple wireframe

**Don't aim for perfection!** Just get familiar with the tools.

---

## 📚 **LEARNING RESOURCES**

### Official Figma Tutorials
- **Figma Basics**: https://help.figma.com/hc/en-us/sections/4405269443991
- **YouTube**: Search "Figma tutorial for beginners"
- **Figma Community**: Browse templates for inspiration

### Recommended Videos (15-30 min each)
1. "Figma Tutorial: A Free UI Design/Prototyping Tool" - DesignCourse
2. "Figma in 40 Minutes" - Flux Academy
3. "Learn Figma in 24 Minutes" - AJ&Smart

---

## 🎨 **DESIGN INSPIRATION**

### Where to Look
- **Dribbble**: https://dribbble.com/search/color-picker
- **Behance**: https://www.behance.net/search/projects?search=color%20tool
- **Figma Community**: https://www.figma.com/community (search "color picker")

### What to Look For
- Layout ideas
- Color schemes
- Component styles
- Interaction patterns
- Don't copy exactly - get inspired!

---

## ✅ **CHECKLIST: READY TO DESIGN**

Before starting your mockups, make sure you have:

- [ ] Figma account created
- [ ] File created with 5 pages
- [ ] Color styles created (at least 5)
- [ ] Text styles created (at least 3)
- [ ] Button component created
- [ ] Wireframe sketched (low-fidelity)
- [ ] Studied 2-3 competitor tools
- [ ] Reviewed design system specs
- [ ] Reviewed wireframe reference

---

## 🚀 **NEXT STEPS**

### Today (if you have time):
1. Set up Figma ✅
2. Create design system ✅
3. Sketch wireframe ✅

### Tomorrow:
4. Study top 5 color tools
5. Refine wireframe
6. Start high-fidelity mockup

### This Week:
7. Complete desktop mockup
8. Complete mobile mockup
9. Create prototype
10. Test with users

---

## ❓ **COMMON QUESTIONS**

**Q: Do I need to pay for Figma?**  
A: No! Free plan is perfect for this project.

**Q: What if I've never used design tools?**  
A: That's okay! Figma is beginner-friendly. Watch one 20-min tutorial and you'll be good.

**Q: Can I use Sketch/Adobe XD instead?**  
A: Yes, but Figma is recommended (free, web-based, collaborative).

**Q: How long will this take?**  
A: Design system: 30 min. Wireframe: 1 hour. Mockup: 3-4 hours. Total: ~5-6 hours.

**Q: What if my design looks bad?**  
A: First designs always do! That's why we iterate. Start simple, improve gradually.

---

## 🎯 **REMEMBER**

- **Done is better than perfect**
- **Start simple, add complexity later**
- **Copy good patterns, don't reinvent**
- **Get feedback early and often**
- **Have fun!** 🎨

---

**Ready? Open Figma and start creating!**

**Need help?** Just ask me! I'm here to guide you through every step. 🚀

