# Design Specifications Reference

**Purpose**: Complete design system specifications for Color Picker  
**Use**: Reference when customizing or recreating the tool

---

## 🎨 **COLOR PALETTE**

### **Light Mode**
```css
/* Primary Colors */
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

/* Neutral Colors */
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

/* Semantic Colors */
--color-success-500: #10B981;  /* Green */
--color-error-500:   #EF4444;  /* Red */
--color-warning-500: #F59E0B;  /* Orange */
```

### **Dark Mode**
```css
/* Primary Colors (lighter) */
--color-primary-400: #60A5FA;  /* Main accent */
--color-primary-500: #3B82F6;  /* Hover */
--color-primary-600: #2563EB;  /* Active */

/* Neutral Colors (inverted) */
--color-gray-50:  #F9FAFB;  /* Primary text */
--color-gray-400: #9CA3AF;  /* Secondary text */
--color-gray-700: #374151;  /* Borders */
--color-gray-800: #1F2937;  /* Card background */
--color-gray-900: #111827;  /* Background */

/* Semantic Colors (lighter) */
--color-success-400: #34D399;
--color-error-400:   #F87171;
--color-warning-400: #FBBF24;
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
--leading-tight:   1.25;
--leading-normal:  1.5;
--leading-relaxed: 1.75;
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

### **Light Mode**
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

### **Dark Mode**
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

## ⚡ **TRANSITIONS**

```css
--transition-fast:   0.15s ease;
--transition-base:   0.2s ease;
--transition-slow:   0.3s ease;
```

---

## 🎯 **COMPONENT SPECIFICATIONS**

### **Buttons**

#### Primary Button
```css
padding: 0.5rem 1rem;           /* 8px 16px */
background: var(--color-primary-500);
color: white;
border-radius: var(--radius-base);
font-size: var(--text-sm);
font-weight: var(--font-medium);

/* Hover */
background: var(--color-primary-600);
transform: translateY(-1px);
box-shadow: var(--shadow-sm);

/* Active */
background: var(--color-primary-700);
transform: translateY(0);

/* Focus */
outline: 2px solid var(--color-primary-500);
outline-offset: 2px;
```

#### Icon Button
```css
width: 2rem;      /* 32px */
height: 2rem;     /* 32px */
padding: 0.5rem;  /* 8px */
background: transparent;
border-radius: var(--radius-sm);

/* Hover */
background: var(--color-gray-100);
```

### **Input Fields**

```css
height: 2.5rem;   /* 40px */
padding: 0.5rem 0.75rem;  /* 8px 12px */
background: white;
border: 1px solid var(--color-gray-200);
border-radius: var(--radius-base);
font-size: var(--text-sm);
font-family: var(--font-mono);

/* Focus */
border-color: var(--color-primary-500);
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
```

### **Color Swatches**

#### Large Preview
```css
width: 7.5rem;    /* 120px */
height: 7.5rem;   /* 120px */
border-radius: var(--radius-md);
box-shadow: var(--shadow-md);
border: 1px solid rgba(0, 0, 0, 0.1);
```

#### Shade Swatches
```css
width: 3rem;      /* 48px */
height: 3rem;     /* 48px */
border-radius: var(--radius-base);

/* Hover */
transform: scale(1.1);
box-shadow: var(--shadow-md);
```

#### Recent Swatches
```css
width: 2rem;      /* 32px */
height: 2rem;     /* 32px */
border-radius: var(--radius-sm);

/* Hover */
transform: scale(1.1);
```

### **Sliders**

```css
height: 40px;
border-radius: var(--radius-base);

/* Thumb */
width: 20px;
height: 40px;
background: white;
border: 2px solid var(--color-gray-300);
border-radius: var(--radius-sm);
box-shadow: var(--shadow-md);
```

---

## 📱 **RESPONSIVE BREAKPOINTS**

```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
```

### **Layout Changes**

#### Desktop (>1024px)
- Two-column grid (picker left, outputs right)
- Full-size components
- All features visible

#### Tablet (768-1024px)
- Two-column grid (narrower)
- Slightly smaller components
- All features visible

#### Mobile (<768px)
- Single column
- Stacked layout
- Smaller components
- Hide "Copy" text, show only icon

---

## ♿ **ACCESSIBILITY**

### **Focus Indicators**
```css
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### **Color Contrast**
- Normal text: 4.5:1 minimum (WCAG AA)
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

### **Touch Targets**
- Minimum size: 44px × 44px
- Spacing between targets: 8px minimum

### **Reduced Motion**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 **USAGE EXAMPLES**

### **Card Component**
```html
<div style="
  background: var(--bg-primary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-base);
">
  <!-- Content -->
</div>
```

### **Button with Icon**
```html
<button style="
  padding: var(--space-2) var(--space-4);
  background: var(--color-primary-500);
  color: white;
  border-radius: var(--radius-base);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
">
  <span>📋</span>
  <span>Copy</span>
</button>
```

---

**Use these specs to customize or recreate the Color Picker tool!** 🎨

