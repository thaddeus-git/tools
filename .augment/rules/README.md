# Online Tools Workspace Rules

**Version**: 2.0.0
**Last Updated**: 2025-10-06
**Project**: Frontend-only developer tools for user attraction
**Status**: Phase 2 Complete - 15 Tools Built - Ready for Deployment

---

## Overview

This workspace follows the rules from `/private/tmp/rules` with project-specific adaptations for building frontend-only web tools.

---

## Core Principles (from /private/tmp/rules/constitution.md)

### I. Simplicity First
All tools MUST be frontend-only with no backend dependencies. Prioritize vanilla JavaScript over frameworks unless complexity demands it. Tools should load fast and work offline when possible.

### II. User Experience Excellence
Every tool must provide immediate value with intuitive UI, one-click copy buttons, and instant results. No page reloads, no waiting, no friction.

### III. Developer Attraction Focus
Tools serve dual purpose: provide utility AND showcase technical capabilities. Each tool is a demonstration of clean code, good UX, and problem-solving skills.

### IV. SEO & Discoverability
Each tool is a separate page optimized for search. Focus on high-traffic keywords and common developer pain points. Quality over quantity.

### V. Consistency & Maintainability
Shared design system, reusable components, and consistent patterns across all tools. Easy to add new tools following established templates.

---

## Project Structure

```
online_tools/
├── .augment/
│   └── rules/              # This directory
├── plan/                   # Following /private/tmp/rules/plan-management.md
│   ├── README.md
│   ├── active/
│   ├── completed/
│   └── archive/
├── research/               # Competitor analysis & SEO research
│   ├── semrush-data/
│   ├── competitor-analysis/
│   └── keyword-research/
├── docs/
│   ├── TOOL-TEMPLATE.md
│   └── DESIGN-SYSTEM.md
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── tools/
│   ├── color-picker/
│   ├── json-formatter/
│   └── [other-tools]/
└── index.html              # Landing page
```

---

## Development Rules

### 1. Planning First (from /private/tmp/rules/work.md)
- Document all plans in `./plan/active/`
- Get explicit confirmation before major changes
- Incremental progress with checkpoints

### 2. Tool Development Process
**Before building any tool:**
1. ✅ Research competitors (check 3-5 similar tools)
2. ✅ Analyze SEO potential (keywords, traffic estimates)
3. ✅ Create plan in `./plan/active/TOOL-NAME-PLAN.md`
4. ✅ Get user confirmation
5. ✅ Build following template
6. ✅ Test thoroughly
7. ✅ Move plan to `./plan/completed/`

### 3. Code Standards
- **Vanilla JS preferred** (unless complexity demands framework)
- **Mobile-first responsive** design
- **Accessibility** (WCAG 2.1 AA minimum)
- **Performance** (Lighthouse score 90+)
- **No external dependencies** unless absolutely necessary

### 4. Git Workflow (from /private/tmp/rules/git-workflow.md)
- Feature branches for each tool
- Atomic commits with clear messages
- Merge with --no-ff
- Tag releases

---

## Tool Requirements Checklist

Every tool MUST have:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/light mode support
- ✅ One-click copy functionality
- ✅ Clear instructions/examples
- ✅ Error handling with helpful messages
- ✅ SEO-optimized meta tags
- ✅ Open Graph tags for social sharing
- ✅ Keyboard shortcuts (where applicable)
- ✅ LocalStorage for user preferences
- ✅ Privacy-friendly (no tracking without consent)

---

## Research & Analysis

### Competitor Analysis Process
1. Use Semrush to analyze traffic & keywords
2. Document findings in `./research/competitor-analysis/`
3. Identify gaps and opportunities
4. Prioritize tools based on:
   - Traffic potential
   - Competition level
   - Development complexity
   - Unique value proposition

### SEO Research
- Target long-tail keywords
- Focus on "how to" and "online [tool]" queries
- Check search volume vs. competition
- Document in `./research/keyword-research/`

---

## Confirmation Required For

**ALWAYS ask before:**
- ✅ Adding new tools (get approval on plan first)
- ✅ Major design changes
- ✅ Adding external dependencies
- ✅ Changing project structure
- ✅ SEO strategy changes
- ✅ Analytics implementation

**Can proceed without asking:**
- ✅ Bug fixes
- ✅ Documentation updates
- ✅ Minor UI improvements
- ✅ Code refactoring (same functionality)

---

## Quality Assurance

### Before Launching Any Tool:
1. ✅ Test on Chrome, Firefox, Safari
2. ✅ Test on mobile devices
3. ✅ Validate HTML/CSS
4. ✅ Check accessibility (WAVE, axe)
5. ✅ Run Lighthouse audit
6. ✅ Test all features thoroughly
7. ✅ Proofread all text
8. ✅ Verify SEO tags

---

## Documentation Standards

### Plan Documentation (in ./plan/)
- Use templates from `/private/tmp/rules/`
- Include status, dates, and progress
- Update README.md regularly
- Move completed plans promptly

### Code Documentation
- Clear comments for complex logic
- README.md for each tool
- JSDoc for functions
- CSS comments for sections

---

## Marketing & Attraction Strategy

### Call-to-Action Integration
- Subtle, non-intrusive
- Focus on value first
- "Need custom tools? Contact us"
- Link to AI assistant services

### Analytics (Privacy-Friendly)
- Track tool usage (anonymously)
- Monitor popular features
- A/B test improvements
- No personal data collection

---

## MVP Strategy

### Phase 1: Foundation (Week 1-2)
1. Color Picker
2. Landing page
3. Design system
4. Tool template

### Phase 2: Core Tools (Week 3-4)
5. JSON Formatter
6. Password Generator
7. Base64 Encoder
8. RegEx Tester

### Phase 3: Launch & Iterate (Week 5+)
9. SEO optimization
10. Analytics setup
11. Gather feedback
12. Add tools based on data

---

## References

This workspace inherits rules from:
- `/private/tmp/rules/constitution.md` - Core principles
- `/private/tmp/rules/work.md` - Work process
- `/private/tmp/rules/collaboration.md` - AI-human protocol
- `/private/tmp/rules/git-workflow.md` - Git standards
- `/private/tmp/rules/plan-management.md` - Plan organization
- `/private/tmp/rules/documentation.md` - Documentation standards

---

## Quick Reference

### Starting New Tool
```bash
# 1. Research competitors
# 2. Create plan
# 3. Get confirmation
# 4. Create feature branch
git checkout -b tool/tool-name

# 5. Build tool following template
# 6. Test thoroughly
# 7. Commit and merge
git commit -m "feat: add [tool-name] tool"
git checkout main
git merge tool/tool-name --no-ff
```

### Adding to Landing Page
1. Add tool card with icon
2. Update tool count
3. Add to appropriate category
4. Update sitemap

---

**Maintained by**: AI Assistant + Human Collaboration
**Review Frequency**: As needed
**Last Review**: 2025-10-06
**Current Phase**: Phase 2 Complete (15/143 tools, 10.5%)
**Next Phase**: Phase 3 (10 more tools, 180k/month traffic)

