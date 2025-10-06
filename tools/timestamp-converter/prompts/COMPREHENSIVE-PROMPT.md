# Comprehensive Prompt - Timestamp Converter

**Goal**: Build complete Timestamp Converter tool in one go  
**Estimated Time**: 45 minutes  
**Use Case**: For AI assistants that can handle large contexts

---

## 📋 **SINGLE COMPREHENSIVE PROMPT**

```
Build a Timestamp Converter web tool for deepv lab (deepvcode.com).

=== PROJECT OVERVIEW ===
- Tool Name: Timestamp Converter
- URL: https://deepvcode.com/timestamp-converter
- Description: Convert Unix timestamps to human-readable dates and vice versa
- Category: Developer Tools
- Brand: deepv lab
- Design: Use shared design system from /shared/styles/common.css

=== FEATURES ===
1. Current timestamp display (auto-updating every second)
2. Convert Unix timestamp to date
3. Convert date to Unix timestamp
4. Local and UTC time display
5. ISO 8601 format
6. Relative time (e.g., "2 hours ago")
7. Copy timestamps to clipboard
8. Handles both seconds and milliseconds
9. Instant conversion

=== USER FLOW ===
Timestamp to Date:
1. User enters Unix timestamp
2. User clicks "Convert"
3. Tool displays local time, UTC, ISO 8601, and relative time

Date to Timestamp:
1. User selects date and time
2. User clicks "Convert"
3. Tool displays Unix timestamp (seconds and milliseconds)
4. User can copy timestamps

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

Timestamp Conversion:
- Use JavaScript Date API
- Current time: Date.now() / 1000 for seconds
- Timestamp to Date: new Date(timestamp * 1000)
- Date to Timestamp: Math.floor(date.getTime() / 1000)
- Handle both seconds (10 digits) and milliseconds (13 digits)
- Relative time: Calculate difference and format (seconds/minutes/hours/days/months/years ago)

UI Components:
- Current timestamp section (auto-updating)
- Timestamp to Date section:
  * Text input for timestamp
  * Convert button
  * Results: Local time, UTC, ISO 8601, Relative time
- Date to Timestamp section:
  * datetime-local input
  * Convert button
  * Results: Unix timestamp (seconds), Milliseconds
  * Copy buttons

=== DESIGN SYSTEM ===
Use the shared design system:
- Primary color: #3B82F6
- Success: #10B981
- Font: Inter (already loaded)
- Monospace: JetBrains Mono (already loaded)
- Spacing: 4px grid
- Border radius: 4px, 8px, 12px, 16px

Current timestamp section:
- Gradient background (primary colors)
- White text
- Prominent display

=== SHARED COMPONENTS ===
Available from common.js (window.deepvlab):
- showToast(message, type)
- copyToClipboard(text, button)
- trackEvent(category, action, label)

=== FILE STRUCTURE ===
Create these files in tools/timestamp-converter/:

1. index.html - Use template
2. style.css - Tool-specific styles
3. script.js - Timestamp conversion logic
4. README.md - Documentation

Build the complete Timestamp Converter tool now.
```

---

## ✅ **EXPECTED OUTPUT**

The AI should create:
1. **index.html** - Complete HTML with current time and converters
2. **style.css** - Gradient header and result styles
3. **script.js** - Timestamp conversion with Date API
4. **README.md** - Documentation

---

**This single prompt should recreate the entire Timestamp Converter!** 🚀

