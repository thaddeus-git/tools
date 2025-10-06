# Prompt Generator Template

**Purpose**: Generate complete prompts for any tool  
**Usage**: Fill in the placeholders, get ready-to-use prompts

---

## 📋 **TOOL INFORMATION**

Fill in these details about your tool:

```yaml
TOOL_NAME: "{{Tool Name}}"
TOOL_SLUG: "{{tool-slug}}"
TOOL_DESCRIPTION: "{{One-line description}}"
TOOL_CATEGORY: "{{Category from TOOLS-BY-CATEGORY.md}}"
ESTIMATED_TRAFFIC: "{{Monthly traffic estimate}}"
ESTIMATED_TIME: "{{Development time estimate}}"

MAIN_FEATURES:
  - "{{Feature 1}}"
  - "{{Feature 2}}"
  - "{{Feature 3}}"
  - "{{Feature 4}}"
  - "{{Feature 5}}"

USER_ACTIONS:
  - "{{Action 1}}"
  - "{{Action 2}}"
  - "{{Action 3}}"

TECHNICAL_REQUIREMENTS:
  - "{{Requirement 1}}"
  - "{{Requirement 2}}"
  - "{{Requirement 3}}"
```

---

## 🎯 **GENERATED COMPREHENSIVE PROMPT**

Once you fill in the above, use this prompt:

```
Build a {{TOOL_NAME}} web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: {{TOOL_NAME}}
- URL: https://deepvcode.com/{{TOOL_SLUG}}
- Description: {{TOOL_DESCRIPTION}}
- Category: {{TOOL_CATEGORY}}
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
{{MAIN_FEATURES}}

=== USER FLOW ===
{{USER_ACTIONS}}

=== TECHNICAL REQUIREMENTS ===
- Use tool template from /templates/tool-template.html
- Use shared styles from /shared/styles/common.css
- Use shared JavaScript utilities from /shared/scripts/common.js
- Follow deepv lab design system
- Implement dark mode (already in shared styles)
- Make it responsive (mobile, tablet, desktop)
- Add SEO meta tags
- Include Schema.org markup
- Ensure accessibility (WCAG AA)

{{TECHNICAL_REQUIREMENTS}}

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981
- Error: #EF4444
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px
- All CSS variables available in common.css

=== SHARED COMPONENTS ===
Available from common.js:
- showToast(message, type) - Show notifications
- copyToClipboard(text, button) - Copy with feedback
- readFileAsText(file) - Read file as text
- downloadFile(content, filename, mimeType) - Download file
- saveToLocalStorage(key, value) - Save to localStorage
- loadFromLocalStorage(key, defaultValue) - Load from localStorage
- debounce(func, wait) - Debounce function
- throttle(func, limit) - Throttle function
- formatBytes(bytes) - Format file size
- formatNumber(num) - Format numbers with commas

=== FILE STRUCTURE ===
Create these files in tools/{{TOOL_SLUG}}/:

1. index.html - Use template from /templates/tool-template.html
2. style.css - Tool-specific styles only (common styles already loaded)
3. script.js - Tool-specific functionality
4. README.md - Tool documentation

=== HTML REQUIREMENTS ===
- Start with /templates/tool-template.html
- Replace {{TOOL_NAME}}, {{TOOL_DESCRIPTION}}, {{TOOL_SLUG}} placeholders
- Add tool-specific content in {{TOOL_SPECIFIC_CONTENT}} section
- List features in {{TOOL_FEATURES}} section
- Add usage steps in {{TOOL_USAGE_STEPS}} section
- Keep shared header and footer
- Use shared navigation

=== CSS REQUIREMENTS ===
- Only add tool-specific styles (common styles already loaded)
- Use CSS variables from common.css
- Follow the design system
- Ensure responsive design
- Support dark mode (automatic from common.css)

=== JAVASCRIPT REQUIREMENTS ===
- Use utilities from common.js (window.deepvlab)
- Implement tool-specific functionality
- Use showToast() for notifications
- Use copyToClipboard() for copy buttons
- Save preferences to localStorage
- Track events with trackEvent()

=== QUALITY STANDARDS ===
- Clean, well-commented code
- No console errors
- Fast performance
- Accessible (keyboard navigation, ARIA labels)
- SEO optimized
- Mobile-friendly
- Production-ready

Build the complete {{TOOL_NAME}} tool now.
```

---

## 📝 **EXAMPLE: JSON Formatter**

Here's a filled example:

```yaml
TOOL_NAME: "JSON Formatter"
TOOL_SLUG: "json-formatter"
TOOL_DESCRIPTION: "Format, validate, and beautify JSON data with syntax highlighting"
TOOL_CATEGORY: "JSON/Data Tools"
ESTIMATED_TRAFFIC: "90k/month"
ESTIMATED_TIME: "1 hour"

MAIN_FEATURES:
  - "Format and beautify JSON"
  - "Validate JSON syntax"
  - "Syntax highlighting"
  - "Minify JSON"
  - "Copy formatted JSON"
  - "Download as file"
  - "Error highlighting"

USER_ACTIONS:
  - "Paste or type JSON in input area"
  - "Click Format button"
  - "View formatted JSON with syntax highlighting"
  - "Copy formatted JSON"
  - "Download as .json file"
  - "Toggle between formatted and minified"

TECHNICAL_REQUIREMENTS:
  - "Use JSON.parse() for validation"
  - "Use JSON.stringify() for formatting"
  - "Implement syntax highlighting (simple regex or library)"
  - "Show line numbers"
  - "Highlight errors with line numbers"
  - "Support large JSON files (up to 10MB)"
```

---

## 🎯 **SEQUENTIAL PROMPTS**

If you prefer step-by-step, use these three prompts:

### **Prompt 1: HTML Structure**
```
Create the HTML structure for {{TOOL_NAME}}.

Use the template from /templates/tool-template.html and:
1. Replace all {{PLACEHOLDERS}} with actual values
2. Add tool-specific content area with:
   {{DESCRIBE_MAIN_UI_ELEMENTS}}
3. List features
4. Add usage steps

Keep the shared header and footer.
```

### **Prompt 2: CSS Styling**
```
Create tool-specific CSS for {{TOOL_NAME}}.

The shared styles from /shared/styles/common.css are already loaded.
Only add styles for:
{{LIST_TOOL_SPECIFIC_ELEMENTS}}

Use CSS variables from the design system.
Ensure responsive design.
```

### **Prompt 3: JavaScript Functionality**
```
Create JavaScript functionality for {{TOOL_NAME}}.

Shared utilities from /shared/scripts/common.js are available as window.deepvlab.

Implement:
{{LIST_MAIN_FUNCTIONS}}

Use:
- showToast() for notifications
- copyToClipboard() for copy functionality
- downloadFile() for downloads
- saveToLocalStorage() for preferences
```

---

## ✅ **CHECKLIST**

Before generating prompts:
- [ ] Tool name and description defined
- [ ] Main features listed (5-10)
- [ ] User actions mapped out
- [ ] Technical requirements identified
- [ ] Similar tools studied for reference

After generating prompts:
- [ ] Prompts are clear and specific
- [ ] All placeholders filled in
- [ ] Technical details included
- [ ] Success criteria defined
- [ ] Ready to give to AI assistant

---

## 💡 **TIPS**

1. **Be Specific**: More details = better results
2. **Reference Examples**: Mention similar tools
3. **List Edge Cases**: What could go wrong?
4. **Define Success**: What does "done" look like?
5. **Use Templates**: Don't reinvent the wheel

---

**Use this template to generate prompts for all 143 tools!** 🚀

