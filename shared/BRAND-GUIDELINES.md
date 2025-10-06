# deepv lab - Brand Guidelines

**Domain**: deepvcode.com  
**Brand Name**: deepv lab  
**Tagline**: Free online tools for developers  
**Version**: 1.0.0

---

## 🎨 **BRAND IDENTITY**

### **Mission**
Provide free, high-quality online tools that make developers' lives easier.

### **Values**
- **Free**: All tools are completely free
- **Fast**: Tools load instantly and work smoothly
- **Simple**: Clean, intuitive interfaces
- **Reliable**: Tools work correctly every time
- **Accessible**: Available to everyone, everywhere

### **Target Audience**
- Web developers
- Software engineers
- Designers
- Students
- Anyone who needs quick online tools

---

## 🎨 **VISUAL IDENTITY**

### **Logo**
- **Location**: `/shared/assets/logo.svg`
- **Usage**: Always use the official logo
- **Minimum size**: 24px height
- **Clear space**: 8px around logo
- **Variations**: 
  - Full logo (icon + text)
  - Icon only (for small spaces)
  - Light version (for dark backgrounds)
  - Dark version (for light backgrounds)

### **Brand Colors**

#### Primary Color
```css
--brand-primary: #3B82F6;  /* Blue */
```
- Use for: Primary actions, links, highlights
- Represents: Trust, reliability, technology

#### Secondary Colors
```css
--brand-success: #10B981;  /* Green */
--brand-error: #EF4444;    /* Red */
--brand-warning: #F59E0B;  /* Orange */
```

#### Neutral Colors
```css
--brand-gray-50: #F9FAFB;   /* Lightest */
--brand-gray-900: #111827;  /* Darkest */
```

### **Typography**

#### Primary Font
```css
font-family: 'Inter', sans-serif;
```
- Use for: All body text, headings, UI elements
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

#### Monospace Font
```css
font-family: 'JetBrains Mono', monospace;
```
- Use for: Code, technical values, data output
- Weight: 500 (Medium)

### **Tone of Voice**

#### Writing Style
- **Clear**: Use simple, direct language
- **Helpful**: Guide users, don't confuse them
- **Professional**: Maintain quality standards
- **Friendly**: Be approachable, not corporate

#### Examples
✅ **Good**: "Format your JSON in seconds"  
❌ **Bad**: "Utilize our advanced JSON formatting solution"

✅ **Good**: "Copy to clipboard"  
❌ **Bad**: "Replicate data to system buffer"

✅ **Good**: "Something went wrong. Please try again."  
❌ **Bad**: "Error: Exception thrown in handler"

---

## 📐 **DESIGN SYSTEM**

### **Spacing**
Use 4px grid system:
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

### **Border Radius**
- Small: 4px (buttons, inputs)
- Medium: 8px (cards, containers)
- Large: 12px (modals, sections)
- Extra Large: 16px (hero sections)

### **Shadows**
```css
/* Light mode */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

/* Dark mode */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
```

### **Transitions**
```css
--transition-fast: 0.15s ease;
--transition-base: 0.2s ease;
--transition-slow: 0.3s ease;
```

---

## 🎯 **COMPONENT GUIDELINES**

### **Buttons**

#### Primary Button
- Background: `--brand-primary`
- Text: White
- Hover: Slightly darker + lift effect
- Use for: Main actions (Submit, Format, Generate)

#### Secondary Button
- Background: Transparent
- Border: 1px solid `--border-color`
- Text: `--text-primary`
- Use for: Secondary actions (Cancel, Reset)

#### Icon Button
- Background: Transparent
- Size: 32px × 32px
- Hover: Light background
- Use for: Copy, Download, Settings

### **Inputs**

#### Text Input
- Height: 40px
- Padding: 8px 12px
- Border: 1px solid `--border-color`
- Border radius: 8px
- Font: Monospace for code/data

#### Textarea
- Min height: 120px
- Padding: 12px
- Border: 1px solid `--border-color`
- Border radius: 8px
- Resize: Vertical only

### **Cards**
- Background: `--bg-primary`
- Padding: 24px
- Border radius: 12px
- Shadow: `--shadow-base`
- Border: 1px solid `--border-color` (optional)

### **Toast Notifications**
- Position: Fixed bottom-right
- Background: `--brand-success` (success) or `--brand-error` (error)
- Text: White
- Duration: 3 seconds
- Animation: Slide up

---

## 📱 **RESPONSIVE DESIGN**

### **Breakpoints**
```css
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
```

### **Mobile-First Approach**
1. Design for mobile first (375px)
2. Add tablet styles (768px)
3. Add desktop styles (1024px+)

### **Touch Targets**
- Minimum size: 44px × 44px
- Spacing: 8px between targets
- Use larger buttons on mobile

---

## ♿ **ACCESSIBILITY**

### **Color Contrast**
- Normal text: 4.5:1 minimum (WCAG AA)
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

### **Focus Indicators**
- Always visible
- 2px solid `--brand-primary`
- 2px offset from element
- Never remove focus outlines

### **Keyboard Navigation**
- All interactive elements focusable
- Logical tab order
- Enter/Space activate buttons
- Escape closes modals

### **Screen Readers**
- All images have alt text
- ARIA labels on interactive elements
- Form inputs have labels
- Error messages are announced

---

## 🌐 **CONTENT GUIDELINES**

### **Tool Names**
- Use title case: "JSON Formatter", not "json formatter"
- Be descriptive: "Base64 Encoder/Decoder", not "Base64 Tool"
- Keep it short: 2-4 words maximum

### **Tool Descriptions**
- One sentence, 10-15 words
- Start with action verb: "Format", "Convert", "Generate"
- Include benefit: "with syntax highlighting", "in seconds"
- Example: "Format and validate JSON data with syntax highlighting"

### **Feature Lists**
- Use bullet points
- Start with verb: "Format JSON", "Copy to clipboard"
- Be specific: "Support files up to 10MB", not "Support large files"
- Limit to 5-10 features

### **Error Messages**
- Be specific: "Invalid JSON at line 5", not "Error"
- Be helpful: "Please enter a valid email address"
- Be friendly: "Oops! Something went wrong"
- Suggest solution: "Try refreshing the page"

---

## 📊 **SEO GUIDELINES**

### **Title Tags**
Format: `{{Tool Name}} | deepv lab`
- Example: "JSON Formatter | deepv lab"
- Length: 50-60 characters
- Include main keyword

### **Meta Descriptions**
- Length: 150-160 characters
- Include main keyword
- Include benefit
- Call to action (optional)
- Example: "Free online JSON formatter with syntax highlighting. Format, validate, and beautify JSON data instantly. No signup required."

### **URLs**
- Use kebab-case: `/json-formatter`, not `/JSONFormatter`
- Be descriptive: `/color-picker`, not `/tool1`
- Keep short: 2-3 words maximum
- No special characters

---

## 🚀 **LAUNCH CHECKLIST**

Before launching a new tool:
- [ ] Follows brand guidelines
- [ ] Uses correct colors and fonts
- [ ] Responsive on all devices
- [ ] Accessible (WCAG AA)
- [ ] SEO optimized
- [ ] Tested in all browsers
- [ ] Documentation complete

---

## 📞 **BRAND ASSETS**

### **Logo Files**
- `/shared/assets/logo.svg` - Vector logo
- `/shared/assets/logo.png` - Raster logo (for social media)
- `/shared/assets/favicon.ico` - Favicon

### **Color Swatches**
- Available in `/shared/assets/colors.png`

### **Font Files**
- Loaded from Google Fonts
- Fallback to system fonts

---

## 📝 **BRAND USAGE**

### **Do's**
✅ Use official logo and colors  
✅ Maintain consistent spacing  
✅ Follow typography guidelines  
✅ Keep designs clean and simple  
✅ Ensure accessibility  

### **Don'ts**
❌ Don't modify the logo  
❌ Don't use unofficial colors  
❌ Don't use different fonts  
❌ Don't clutter the interface  
❌ Don't ignore accessibility  

---

## 🎓 **EXAMPLES**

### **Good Tool Design**
- Clean, uncluttered interface
- Clear call-to-action
- Helpful error messages
- Responsive layout
- Accessible to all users

### **Bad Tool Design**
- Cluttered with ads
- Confusing navigation
- Cryptic error messages
- Broken on mobile
- Inaccessible to some users

---

**Follow these guidelines to maintain brand consistency across all 143 tools!** 🎨

