# Color Picker - Design System

**Version**: 1.0.0  
**Created**: 2025-10-06  
**Purpose**: Complete design specifications for development

---

## 🎨 **COLOR PALETTE**

### **Light Mode**

#### Primary Colors
```css
--color-primary-50:  #EFF6FF;
--color-primary-100: #DBEAFE;
--color-primary-200: #BFDBFE;
--color-primary-300: #93C5FD;
--color-primary-400: #60A5FA;
--color-primary-500: #3B82F6;  /* Main accent */
--color-primary-600: #2563EB;  /* Hover */
--color-primary-700: #1D4ED8;  /* Active */
--color-primary-800: #1E40AF;
--color-primary-900: #1E3A8A;
```

#### Neutral Colors
```css
--color-gray-50:  #F9FAFB;  /* Background */
--color-gray-100: #F3F4F6;  /* Card background */
--color-gray-200: #E5E7EB;  /* Borders */
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;  /* Secondary text */
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;  /* Primary text */
```

#### Semantic Colors
```css
--color-success-50:  #ECFDF5;
--color-success-500: #10B981;  /* Success green */
--color-success-600: #059669;

--color-error-50:  #FEF2F2;
--color-error-500: #EF4444;  /* Error red */
--color-error-600: #DC2626;

--color-warning-50:  #FFFBEB;
--color-warning-500: #F59E0B;  /* Warning orange */
--color-warning-600: #D97706;
```

---

### **Dark Mode**

#### Primary Colors
```css
--color-primary-400: #60A5FA;  /* Main accent */
--color-primary-500: #3B82F6;  /* Hover */
--color-primary-600: #2563EB;  /* Active */
```

#### Neutral Colors
```css
--color-gray-50:  #F9FAFB;  /* Primary text */
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;  /* Secondary text */
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;  /* Borders */
--color-gray-800: #1F2937;  /* Card background */
--color-gray-900: #111827;  /* Background */
```

#### Semantic Colors
```css
--color-success-400: #34D399;  /* Lighter green */
--color-error-400:   #F87171;  /* Lighter red */
--color-warning-400: #FBBF24;  /* Lighter orange */
```

---

## 📝 **TYPOGRAPHY**

### **Font Families**
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 
             'Monaco', 'Courier New', monospace;
```

### **Font Sizes**
```css
--text-xs:   0.75rem;   /* 12px */
--text-sm:   0.875rem;  /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg:   1.125rem;  /* 18px */
--text-xl:   1.25rem;   /* 20px */
--text-2xl:  1.5rem;    /* 24px */
--text-3xl:  1.875rem;  /* 30px */
--text-4xl:  2.25rem;   /* 36px */
```

### **Font Weights**
```css
--font-normal:    400;
--font-medium:    500;
--font-semibold:  600;
--font-bold:      700;
```

### **Line Heights**
```css
--leading-none:    1;
--leading-tight:   1.25;
--leading-snug:    1.375;
--leading-normal:  1.5;
--leading-relaxed: 1.625;
--leading-loose:   2;
```

### **Text Styles**

#### Headings
```css
.heading-1 {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-gray-900);
}

.heading-2 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--color-gray-900);
}

.heading-3 {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--color-gray-900);
}
```

#### Body Text
```css
.body-large {
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-gray-700);
}

.body {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-700);
}

.body-small {
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
  color: var(--color-gray-600);
}
```

#### Monospace (for color values)
```css
.mono {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--color-gray-900);
}
```

---

## 📏 **SPACING SYSTEM**

Based on 4px grid:

```css
--space-0:  0;
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

---

## 🔲 **BORDER RADIUS**

```css
--radius-none: 0;
--radius-sm:   0.25rem;  /* 4px */
--radius-base: 0.5rem;   /* 8px */
--radius-md:   0.75rem;  /* 12px */
--radius-lg:   1rem;     /* 16px */
--radius-xl:   1.5rem;   /* 24px */
--radius-full: 9999px;   /* Circular */
```

---

## 🌑 **SHADOWS**

### Light Mode
```css
--shadow-xs:   0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm:   0 1px 3px rgba(0, 0, 0, 0.1), 
               0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-base: 0 4px 6px rgba(0, 0, 0, 0.1), 
               0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-md:   0 10px 15px rgba(0, 0, 0, 0.1), 
               0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg:   0 20px 25px rgba(0, 0, 0, 0.1), 
               0 10px 10px rgba(0, 0, 0, 0.04);
```

### Dark Mode
```css
--shadow-xs:   0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-sm:   0 1px 3px rgba(0, 0, 0, 0.4), 
               0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-base: 0 4px 6px rgba(0, 0, 0, 0.4), 
               0 2px 4px rgba(0, 0, 0, 0.3);
--shadow-md:   0 10px 15px rgba(0, 0, 0, 0.5), 
               0 4px 6px rgba(0, 0, 0, 0.4);
--shadow-lg:   0 20px 25px rgba(0, 0, 0, 0.6), 
               0 10px 10px rgba(0, 0, 0, 0.5);
```

---

## 🎯 **COMPONENT SPECIFICATIONS**

### **Buttons**

#### Primary Button
```css
.btn-primary {
  padding: 0.5rem 1rem;           /* 8px 16px */
  background: var(--color-primary-500);
  color: white;
  border: none;
  border-radius: var(--radius-base);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.btn-primary:active {
  background: var(--color-primary-700);
  transform: translateY(0);
}

.btn-primary:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

#### Icon Button (Copy)
```css
.btn-icon {
  width: 2rem;      /* 32px */
  height: 2rem;     /* 32px */
  padding: 0.5rem;  /* 8px */
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-icon:hover {
  background: var(--color-gray-100);
}

.btn-icon:active {
  background: var(--color-gray-200);
}
```

---

### **Input Fields**

```css
.input {
  height: 2.5rem;   /* 40px */
  padding: 0.5rem 0.75rem;  /* 8px 12px */
  background: white;
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-base);
  font-size: var(--text-sm);
  font-family: var(--font-mono);
  color: var(--color-gray-900);
  transition: all 0.2s ease;
}

.input:hover {
  border-color: var(--color-gray-300);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

---

### **Color Swatches**

#### Large Preview
```css
.swatch-large {
  width: 7.5rem;    /* 120px */
  height: 7.5rem;   /* 120px */
  border-radius: var(--radius-md);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: var(--shadow-md);
  cursor: pointer;
}
```

#### Shade Swatches
```css
.swatch-shade {
  width: 3rem;      /* 48px */
  height: 3rem;     /* 48px */
  border-radius: var(--radius-base);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.swatch-shade:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-md);
}

.swatch-shade:active {
  transform: scale(0.95);
}
```

#### Recent Color Swatches
```css
.swatch-recent {
  width: 2rem;      /* 32px */
  height: 2rem;     /* 32px */
  border-radius: var(--radius-sm);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.swatch-recent:hover {
  transform: scale(1.1);
}
```

---

## 📱 **RESPONSIVE BREAKPOINTS**

```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

---

## ⚡ **ANIMATIONS**

### Transitions
```css
--transition-fast:   0.15s ease;
--transition-base:   0.2s ease;
--transition-slow:   0.3s ease;
```

### Common Animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes checkmark {
  0% { 
    opacity: 0;
    transform: scale(0.5);
  }
  50% { 
    transform: scale(1.1);
  }
  100% { 
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## ♿ **ACCESSIBILITY**

### Focus Indicators
- All interactive elements must have visible focus states
- Focus outline: 2px solid primary color with 2px offset
- Never remove focus outlines

### Color Contrast
- Normal text: Minimum 4.5:1 contrast ratio (WCAG AA)
- Large text (18px+): Minimum 3:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio

### Touch Targets
- Minimum size: 44px × 44px (iOS/Android guidelines)
- Spacing between targets: Minimum 8px

---

## 🎨 **USAGE EXAMPLES**

### Card Component
```html
<div class="card">
  <h3 class="heading-3">Selected Color</h3>
  <div class="swatch-large" style="background: #3B82F6;"></div>
  <div class="color-values">
    <div class="input-group">
      <label>HEX</label>
      <input type="text" class="input mono" value="#3B82F6">
      <button class="btn-icon">📋</button>
    </div>
  </div>
</div>
```

---

**Version**: 1.0.0  
**Last Updated**: 2025-10-06  
**Ready for**: Figma design & development

