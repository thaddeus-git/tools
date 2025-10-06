# Quality Checklist - {{TOOL_NAME}}

**Tool**: {{TOOL_NAME}}  
**URL**: /{{TOOL_SLUG}}  
**Date**: {{DATE}}  
**Reviewer**: {{REVIEWER}}

---

## ✅ **FUNCTIONALITY** (Critical)

### **Core Features**
- [ ] Feature 1 works correctly
- [ ] Feature 2 works correctly
- [ ] Feature 3 works correctly
- [ ] Feature 4 works correctly
- [ ] Feature 5 works correctly

### **User Interactions**
- [ ] All buttons respond correctly
- [ ] All inputs accept valid data
- [ ] All outputs display correctly
- [ ] Copy functionality works
- [ ] Download functionality works (if applicable)
- [ ] Upload functionality works (if applicable)

### **Error Handling**
- [ ] Invalid input shows error message
- [ ] Error messages are clear and helpful
- [ ] No console errors
- [ ] Graceful degradation for unsupported features
- [ ] Edge cases handled properly

### **Performance**
- [ ] Page loads in < 2 seconds
- [ ] Tool responds instantly to user input
- [ ] No lag or freezing
- [ ] Handles large data sets (if applicable)
- [ ] Memory usage is reasonable

---

## 🎨 **DESIGN** (High Priority)

### **Visual Design**
- [ ] Matches design system
- [ ] Colors use CSS variables
- [ ] Typography is consistent
- [ ] Spacing follows 4px grid
- [ ] Professional appearance

### **Layout**
- [ ] Header and footer present
- [ ] Navigation works
- [ ] Content is well-organized
- [ ] Visual hierarchy is clear
- [ ] Whitespace is balanced

### **Responsive Design**
- [ ] Works on desktop (1440px+)
- [ ] Works on laptop (1024px)
- [ ] Works on tablet (768px)
- [ ] Works on mobile (375px)
- [ ] No horizontal scrolling
- [ ] Touch targets are 44px+ on mobile

### **Dark Mode**
- [ ] Dark mode toggle works
- [ ] All colors adapt correctly
- [ ] Text is readable in both modes
- [ ] Images/icons work in both modes
- [ ] Preference is saved

---

## 💻 **CODE QUALITY** (High Priority)

### **HTML**
- [ ] Valid HTML5
- [ ] Semantic elements used
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] No duplicate IDs
- [ ] Alt text for images
- [ ] ARIA labels present

### **CSS**
- [ ] Uses shared common.css
- [ ] Only tool-specific styles in style.css
- [ ] Uses CSS variables
- [ ] No !important (unless necessary)
- [ ] Organized and commented
- [ ] No unused styles

### **JavaScript**
- [ ] Uses shared common.js utilities
- [ ] Clean, readable code
- [ ] Well-commented
- [ ] No console.log() in production
- [ ] Proper error handling
- [ ] No memory leaks

### **File Structure**
- [ ] index.html present
- [ ] style.css present
- [ ] script.js present
- [ ] README.md present
- [ ] prompts/ directory present

---

## ♿ **ACCESSIBILITY** (High Priority)

### **Keyboard Navigation**
- [ ] All interactive elements focusable
- [ ] Tab order is logical
- [ ] Enter/Space activate buttons
- [ ] Escape closes modals/dialogs
- [ ] No keyboard traps

### **Screen Readers**
- [ ] All images have alt text
- [ ] ARIA labels on interactive elements
- [ ] Form inputs have labels
- [ ] Error messages are announced
- [ ] Status updates are announced

### **Visual Accessibility**
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus indicators visible
- [ ] Text is resizable
- [ ] No information conveyed by color alone
- [ ] Animations respect prefers-reduced-motion

### **WCAG Compliance**
- [ ] Level A criteria met
- [ ] Level AA criteria met
- [ ] Tested with screen reader
- [ ] Tested with keyboard only
- [ ] Tested with high contrast mode

---

## 🔍 **SEO** (Medium Priority)

### **Meta Tags**
- [ ] Title tag present and optimized
- [ ] Meta description present (150-160 chars)
- [ ] Keywords included
- [ ] Open Graph tags present
- [ ] Twitter Card tags present (optional)

### **Schema.org**
- [ ] WebApplication schema present
- [ ] Correct tool name and description
- [ ] URL is correct
- [ ] Provider information included

### **Content**
- [ ] H1 tag present and unique
- [ ] Content is descriptive
- [ ] Internal links work
- [ ] External links open in new tab
- [ ] No broken links

### **Performance**
- [ ] Images optimized
- [ ] CSS minified (for production)
- [ ] JavaScript minified (for production)
- [ ] Lazy loading implemented (if needed)
- [ ] Lighthouse score 90+

---

## 📱 **BROWSER COMPATIBILITY** (Medium Priority)

### **Desktop Browsers**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### **Mobile Browsers**
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Firefox Mobile
- [ ] Samsung Internet

### **Features**
- [ ] All features work in all browsers
- [ ] Fallbacks for unsupported features
- [ ] No browser-specific bugs
- [ ] Consistent appearance

---

## 📝 **DOCUMENTATION** (Medium Priority)

### **README.md**
- [ ] Tool name and description
- [ ] Features list
- [ ] How to use instructions
- [ ] Technical details
- [ ] Status and URL

### **Code Comments**
- [ ] Complex logic explained
- [ ] Function purposes documented
- [ ] Edge cases noted
- [ ] TODOs marked (if any)

### **Prompts**
- [ ] Comprehensive prompt created
- [ ] Sequential prompts created (optional)
- [ ] Design specs included
- [ ] All placeholders filled

---

## 🧪 **TESTING** (High Priority)

### **Manual Testing**
- [ ] Tested all features manually
- [ ] Tested with real data
- [ ] Tested edge cases
- [ ] Tested error scenarios
- [ ] Tested on multiple devices

### **User Testing**
- [ ] Tested with 3+ users (optional)
- [ ] Feedback collected
- [ ] Issues identified
- [ ] Improvements made

### **Automated Testing**
- [ ] HTML validated (W3C validator)
- [ ] CSS validated
- [ ] Lighthouse audit run
- [ ] Accessibility audit run

---

## 🚀 **DEPLOYMENT** (Critical)

### **Pre-Deployment**
- [ ] All checklist items above passed
- [ ] Code committed to Git
- [ ] Commit message is descriptive
- [ ] No sensitive data in code

### **Deployment**
- [ ] Deployed to staging (if applicable)
- [ ] Tested on staging
- [ ] Deployed to production
- [ ] Live URL works

### **Post-Deployment**
- [ ] Tool accessible at correct URL
- [ ] All features work on live site
- [ ] Analytics tracking works
- [ ] No errors in production logs

---

## 📊 **METRICS** (Optional)

### **Performance Metrics**
- Load time: _____ seconds
- Total file size: _____ KB
- Lighthouse score: _____ / 100
- Mobile-friendly: Yes / No

### **Accessibility Metrics**
- WCAG level: A / AA / AAA
- Keyboard navigation: Pass / Fail
- Screen reader: Pass / Fail
- Color contrast: Pass / Fail

### **SEO Metrics**
- Title length: _____ chars
- Description length: _____ chars
- Keywords count: _____
- Internal links: _____

---

## ✅ **FINAL APPROVAL**

### **Sign-Off**
- [ ] All critical items passed
- [ ] All high priority items passed
- [ ] Medium priority items reviewed
- [ ] Tool is production-ready

### **Roadmap Update**
- [ ] Tool marked as complete in MASTER-ROADMAP.md
- [ ] Completion date added
- [ ] Actual time vs estimated time noted
- [ ] Next tool identified

### **Launch**
- [ ] Tool added to homepage
- [ ] Tool added to tools list
- [ ] Social media announcement (optional)
- [ ] Search engines notified (optional)

---

## 📝 **NOTES**

Add any additional notes, issues, or improvements here:

```
{{NOTES}}
```

---

**Checklist completed by**: {{REVIEWER}}  
**Date**: {{DATE}}  
**Status**: ✅ APPROVED / ⚠️ NEEDS WORK / ❌ REJECTED

---

**Use this checklist for every tool to ensure consistent quality!** ✅

