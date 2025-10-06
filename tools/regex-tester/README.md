# RegEx Tester & Debugger

**Status**: ✅ Complete  
**URL**: https://deepvcode.com/regex-tester  
**Traffic**: 40k/month (estimated)  
**Build Time**: 1.5 hours

---

## 📋 **Features**

### **Core Features**
- 🔍 Real-time regex testing and matching
- 🎨 Syntax highlighting for matches
- 🚩 Support for all regex flags (g, i, m, s, u)
- 📊 Match count display
- 📝 Capture group display
- ⚡ Instant feedback as you type (debounced)
- 💾 Auto-save regex and test string
- 📚 Quick examples for common patterns
- 🌙 Dark mode support
- 📱 Fully responsive design

### **User Experience**
- Visual match highlighting
- Detailed match information (index, groups)
- Flag checkboxes for easy selection
- Manual flag input support
- 6 quick example patterns
- RegEx quick reference guide
- Accessible (WCAG AA)

---

## 🚀 **How to Use**

### **Basic Testing**
1. Enter your regular expression in the pattern field
2. Select flags (g for global, i for case-insensitive, etc.)
3. Enter or paste test string
4. View matches highlighted in real-time
5. Check match details for capture groups

### **Using Examples**
1. Click any example button
2. Pattern, flags, and test string load automatically
3. Modify as needed
4. See results instantly

---

## 🎨 **Technical Details**

### **Technologies**
- HTML5 (semantic markup)
- CSS3 (custom properties, grid, animations)
- Vanilla JavaScript (no frameworks)
- Shared utilities from deepv lab

### **Features Implementation**
- **Regex Testing**: JavaScript RegExp API
- **Match Highlighting**: HTML escaping + span wrapping
- **Debouncing**: Custom debounce for performance
- **Capture Groups**: RegExp.exec() with group extraction
- **Persistence**: LocalStorage API

### **Supported Flags**
- **g** - Global (find all matches)
- **i** - Case insensitive
- **m** - Multiline (^ and $ match line boundaries)
- **s** - Dotall (. matches newline)
- **u** - Unicode (proper Unicode handling)

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📊 **File Structure**

```
tools/regex-tester/
├── index.html          # Main HTML structure
├── style.css           # Tool-specific styles
├── script.js           # RegEx testing logic
└── README.md           # This file
```

---

## 🎯 **Example Patterns Included**

1. **Email**: `^\w+@\w+\.\w+$`
2. **URL**: `^https?://[\w\-\.]+\.\w+`
3. **Phone (US)**: `^\d{3}-\d{3}-\d{4}$`
4. **Hex Color**: `^#?([a-f0-9]{6}|[a-f0-9]{3})$`
5. **Date (YYYY-MM-DD)**: `^\d{4}-\d{2}-\d{2}$`
6. **Strong Password**: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$`

---

## ✅ **Quality Checklist**

### **Functionality**
- [x] Real-time regex testing
- [x] Match highlighting
- [x] All flags supported
- [x] Match count display
- [x] Capture groups display
- [x] Error handling
- [x] Quick examples
- [x] Auto-save

### **Design**
- [x] Matches design system
- [x] Responsive on all devices
- [x] Dark mode working
- [x] Visual feedback
- [x] Professional appearance

### **Code Quality**
- [x] Clean, readable code
- [x] Well-commented
- [x] Uses shared utilities
- [x] No console errors
- [x] Proper error handling

### **Accessibility**
- [x] Keyboard navigation
- [x] ARIA labels
- [x] Focus indicators
- [x] Screen reader friendly
- [x] Color contrast (WCAG AA)

### **SEO**
- [x] Title tag optimized
- [x] Meta description
- [x] Keywords included
- [x] Open Graph tags
- [x] Schema.org markup

---

## 🐛 **Known Issues**

None currently! 🎉

---

## 📝 **Changelog**

### **Version 1.0.0** (2025-10-06)
- ✅ Initial release
- ✅ All core features complete
- ✅ Real-time testing
- ✅ Match highlighting
- ✅ All flags supported
- ✅ Capture groups display
- ✅ Quick examples
- ✅ Responsive design
- ✅ Dark mode
- ✅ LocalStorage persistence

---

## 🚀 **Future Enhancements** (Phase 2)

Potential features for future versions:
- [ ] RegEx explanation (break down pattern)
- [ ] Replace functionality
- [ ] Named capture groups
- [ ] Performance metrics
- [ ] Share regex via URL
- [ ] Regex library/favorites
- [ ] Test multiple strings at once
- [ ] Export matches to CSV

---

## 📚 **RegEx Resources**

### **Learning**
- MDN Web Docs - Regular Expressions
- RegexOne - Interactive Tutorial
- Regex101 - Online Tester

### **Common Use Cases**
- Form validation (email, phone, URL)
- Data extraction from text
- Search and replace operations
- Log file parsing
- Text processing

---

## 📞 **Support**

For issues or questions:
- Open an issue on GitHub
- Contact: support@deepvcode.com
- Documentation: https://deepvcode.com/docs

---

## 📄 **License**

Part of deepv lab tools platform.  
All tools are free to use.

---

**Built with ❤️ by deepv lab**  
**Using the deepv lab foundation infrastructure**  
**MVP Tool #5 - Launch Ready! 🚀**

