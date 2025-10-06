# Tool Building Guide

**Purpose**: Step-by-step guide for building tools consistently  
**For**: AI assistants and developers  
**Project**: deepv lab (deepvcode.com)

---

## 🎯 **OVERVIEW**

This guide ensures all 143 tools are built with:
- ✅ Consistent quality
- ✅ Shared design system
- ✅ Reusable components
- ✅ Fast development
- ✅ Professional results

---

## 📋 **BEFORE YOU START**

### **1. Check the Roadmap**
- Open `plan/MASTER-ROADMAP.md`
- Find the tool you're building
- Note the estimated time and priority
- Mark it as "In Progress"

### **2. Study Similar Tools**
- Look at completed tools in `tools/`
- Check competitor tools (from research/)
- Note what works well
- Identify unique features

### **3. Gather Requirements**
- Tool name and description
- Main features (5-10)
- User flow (step-by-step)
- Technical requirements
- Edge cases to handle

---

## 🏗️ **BUILDING PROCESS**

### **Step 1: Create Tool Directory**

```bash
mkdir -p tools/{{tool-slug}}
cd tools/{{tool-slug}}
```

### **Step 2: Copy Template**

```bash
cp ../../templates/tool-template.html index.html
```

### **Step 3: Fill in Placeholders**

Replace these in `index.html`:
- `{{TOOL_NAME}}` - e.g., "JSON Formatter"
- `{{TOOL_DESCRIPTION}}` - One-line description
- `{{TOOL_SLUG}}` - e.g., "json-formatter"
- `{{TOOL_KEYWORDS}}` - SEO keywords
- `{{TOOL_SPECIFIC_CONTENT}}` - Main UI
- `{{TOOL_FEATURES}}` - Feature list
- `{{TOOL_USAGE_STEPS}}` - How to use

### **Step 4: Create Tool-Specific CSS**

Create `style.css`:
```css
/* Tool-specific styles only */
/* Common styles already loaded from /shared/styles/common.css */

.tool-specific-class {
    /* Your styles here */
}
```

**Remember**:
- Use CSS variables from common.css
- Don't redefine common styles
- Follow the design system
- Ensure responsive design

### **Step 5: Create Tool-Specific JavaScript**

Create `script.js`:
```javascript
// Tool-specific functionality
// Common utilities available as window.deepvlab

document.addEventListener('DOMContentLoaded', () => {
    // Initialize tool
    initTool();
});

function initTool() {
    // Your initialization code
}
```

**Use Shared Utilities**:
- `window.deepvlab.showToast(message, type)`
- `window.deepvlab.copyToClipboard(text, button)`
- `window.deepvlab.downloadFile(content, filename, mimeType)`
- `window.deepvlab.saveToLocalStorage(key, value)`
- `window.deepvlab.loadFromLocalStorage(key, defaultValue)`

### **Step 6: Create README**

Create `README.md`:
```markdown
# {{Tool Name}}

**Status**: Complete  
**URL**: https://deepvcode.com/{{tool-slug}}  
**Traffic**: {{estimated traffic}}

## Features
- Feature 1
- Feature 2
- Feature 3

## How to Use
1. Step 1
2. Step 2
3. Step 3

## Technical Details
- Technologies used
- Key algorithms
- Performance notes
```

### **Step 7: Create Prompts**

Create `prompts/` directory:
```bash
mkdir prompts
```

Use `/templates/prompts/PROMPT-GENERATOR.md` to create:
- `COMPREHENSIVE-PROMPT.md`
- `01-HTML-STRUCTURE.md` (optional)
- `02-CSS-STYLING.md` (optional)
- `03-JAVASCRIPT-FUNCTIONALITY.md` (optional)

---

## ✅ **QUALITY CHECKLIST**

Before marking a tool as complete:

### **Functionality**
- [ ] All features working
- [ ] No console errors
- [ ] Handles edge cases
- [ ] Error messages clear
- [ ] Fast performance

### **Design**
- [ ] Matches design system
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Dark mode working
- [ ] Consistent spacing
- [ ] Professional appearance

### **Code Quality**
- [ ] Clean, readable code
- [ ] Well-commented
- [ ] Uses shared utilities
- [ ] No code duplication
- [ ] Follows conventions

### **Accessibility**
- [ ] Keyboard navigation works
- [ ] ARIA labels present
- [ ] Focus indicators visible
- [ ] Color contrast sufficient (WCAG AA)
- [ ] Screen reader friendly

### **SEO**
- [ ] Title tag optimized
- [ ] Meta description present
- [ ] Keywords included
- [ ] Open Graph tags
- [ ] Schema.org markup

### **Documentation**
- [ ] README.md complete
- [ ] Features documented
- [ ] Usage instructions clear
- [ ] Prompts created

### **Testing**
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile
- [ ] Tested with real data

---

## 🎨 **DESIGN SYSTEM**

### **Colors**
Use CSS variables:
- `--color-primary-500` - Main accent
- `--color-success` - Success states
- `--color-error` - Error states
- `--color-warning` - Warning states
- `--text-primary` - Main text
- `--text-secondary` - Secondary text
- `--bg-primary` - Main background
- `--bg-card` - Card background
- `--border-color` - Borders

### **Typography**
- `--font-sans` - Body text
- `--font-mono` - Code/monospace
- Font sizes: `--text-xs` to `--text-4xl`
- Font weights: `--font-normal` to `--font-bold`

### **Spacing**
- `--space-1` (4px) to `--space-12` (48px)
- Use 4px grid system
- Consistent spacing throughout

### **Components**
Reuse these patterns:
- Buttons (primary, secondary, icon)
- Inputs (text, textarea, select)
- Cards (with shadow and border)
- Toast notifications
- Copy buttons
- File upload areas

---

## 📝 **CODE CONVENTIONS**

### **File Naming**
- `index.html` - Main HTML file
- `style.css` - Tool-specific styles
- `script.js` - Tool-specific JavaScript
- `README.md` - Documentation
- `prompts/` - Prompt files

### **CSS Classes**
- Use kebab-case: `.tool-content`, `.copy-button`
- Prefix tool-specific classes: `.json-formatter-input`
- Use semantic names: `.error-message`, not `.red-text`

### **JavaScript**
- Use camelCase: `formatJson()`, `validateInput()`
- Prefix tool-specific functions: `jsonFormatter.format()`
- Use const/let, not var
- Add comments for complex logic

### **HTML**
- Use semantic elements: `<main>`, `<section>`, `<article>`
- Add ARIA labels: `aria-label="Copy to clipboard"`
- Use proper heading hierarchy: h1 → h2 → h3
- Include alt text for images

---

## 🚀 **DEPLOYMENT**

### **Before Deployment**
1. Test all features
2. Check responsive design
3. Validate HTML
4. Check console for errors
5. Test on real devices

### **Deployment Steps**
1. Commit changes to Git
2. Push to GitHub
3. Deploy to production (Netlify/Vercel)
4. Test live version
5. Update roadmap

### **After Deployment**
1. Mark tool as complete in roadmap
2. Add to tools list on homepage
3. Submit to search engines
4. Share on social media
5. Gather user feedback

---

## 📊 **PERFORMANCE TARGETS**

- **Load time**: < 2 seconds
- **File size**: < 100KB total
- **Lighthouse score**: 90+
- **Mobile-friendly**: Yes
- **Accessibility**: WCAG AA

---

## 🐛 **COMMON ISSUES**

### **Issue**: Styles not applying
**Solution**: Check if common.css is loaded before tool CSS

### **Issue**: Dark mode not working
**Solution**: Use CSS variables, not hard-coded colors

### **Issue**: Copy button not working
**Solution**: Use `window.deepvlab.copyToClipboard()`

### **Issue**: Toast not showing
**Solution**: Ensure toast element exists in HTML

### **Issue**: Mobile layout broken
**Solution**: Test with responsive design tools, use media queries

---

## 💡 **TIPS FOR SPEED**

1. **Use Templates**: Don't start from scratch
2. **Copy Similar Tools**: Adapt existing code
3. **Use Shared Utilities**: Don't reinvent the wheel
4. **Focus on Core Features**: Add extras later
5. **Test as You Build**: Catch issues early

---

## 📞 **GETTING HELP**

If stuck:
1. Check completed tools for examples
2. Review design system documentation
3. Test in browser dev tools
4. Ask for help with specific issues
5. Reference this guide

---

## ✅ **COMPLETION CRITERIA**

A tool is complete when:
1. ✅ All features working
2. ✅ Quality checklist passed
3. ✅ Documentation complete
4. ✅ Prompts created
5. ✅ Tested and deployed
6. ✅ Roadmap updated

---

**Follow this guide for consistent, high-quality tools!** 🚀

