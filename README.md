---
name: Serene Logic
colors:
  surface: "#f8f9ff"
  surface-dim: "#cbdbf5"
  surface-bright: "#f8f9ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#eff4ff"
  surface-container: "#e5eeff"
  surface-container-high: "#dce9ff"
  surface-container-highest: "#d3e4fe"
  on-surface: "#0b1c30"
  on-surface-variant: "#464554"
  inverse-surface: "#213145"
  inverse-on-surface: "#eaf1ff"
  outline: "#767586"
  outline-variant: "#c7c4d7"
  surface-tint: "#494bd6"
  primary: "#4648d4"
  on-primary: "#ffffff"
  primary-container: "#6063ee"
  on-primary-container: "#fffbff"
  inverse-primary: "#c0c1ff"
  secondary: "#674bb5"
  on-secondary: "#ffffff"
  secondary-container: "#ab8ffe"
  on-secondary-container: "#3f1e8c"
  tertiary: "#005da8"
  on-tertiary: "#ffffff"
  tertiary-container: "#2676c8"
  on-tertiary-container: "#fdfcff"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e1e0ff"
  primary-fixed-dim: "#c0c1ff"
  on-primary-fixed: "#07006c"
  on-primary-fixed-variant: "#2f2ebe"
  secondary-fixed: "#e8ddff"
  secondary-fixed-dim: "#cebdff"
  on-secondary-fixed: "#21005e"
  on-secondary-fixed-variant: "#4f319c"
  tertiary-fixed: "#d4e3ff"
  tertiary-fixed-dim: "#a4c9ff"
  on-tertiary-fixed: "#001c39"
  on-tertiary-fixed-variant: "#004883"
  background: "#f8f9ff"
  on-background: "#0b1c30"
  surface-variant: "#d3e4fe"
typography:
  h1:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: "700"
    lineHeight: "1.0"
    letterSpacing: 0.05em
  helper-text:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.4"
    letterSpacing: "0"
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is rooted in the intersection of clinical precision and empathetic care. It serves a dual purpose: providing a therapeutic, low-anxiety environment for users to record emotional states, while delivering sophisticated data visualizations that don't feel overwhelming.

The aesthetic follows a **Soft Minimalism** approach. It avoids the clinical coldness of traditional health apps by utilizing gentle color transitions and organic shapes, while maintaining the structural integrity of a modern SaaS dashboard. The interface emphasizes "breathing room" to reduce cognitive load, ensuring that the act of mood tracking itself does not become a source of stress.

## Colors

The palette is anchored by "Cloud Blue" and "Muted Lavender," colors chosen for their proven psychological calming effects.

- **Primary:** A refined Indigo-Blue used for primary actions and active states.
- **Secondary:** A gentle Purple for highlights and mood categories associated with reflection.
- **Tertiary:** A soft Sky Blue for informational accents and "calm" data points.
- **Neutrals:** Slate-based greys that maintain coolness in both light and dark modes.

**Dark Mode Strategy:** In dark mode, the background shifts to a deep navy-charcoal rather than pure black to maintain a softer contrast ratio. Surfaces use a slightly lighter slate to preserve depth, and primary colors are desaturated by 10% to prevent "vibrating" against the dark backdrop.

## Typography

The design system utilizes **Manrope** for its exceptional balance of geometric modernism and humanistic warmth. It is a highly legible sans-serif that feels professional yet approachable.

The hierarchy is strictly maintained through weight and scale rather than decorative elements. Headlines use a tighter tracking and heavier weight to provide a sense of groundedness, while body text is given generous line height to ensure effortless reading of personal notes and data insights.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for the main dashboard to provide a stable, predictable structure for data.

- **Grid:** A 12-column system with a 24px gutter.
- **Rhythm:** An 8px base unit governs all padding and margins.
- **White Space:** Functional "voids" are used intentionally between major sections (40px–64px) to prevent the user from feeling "boxed in."
- **Alignment:** Content is centered in the viewport with a maximum container width of 1280px to keep line lengths readable and eye movement minimized.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering.

- **Level 0 (Background):** The base canvas (Light: #F8FAFC / Dark: #0F172A).
- **Level 1 (Cards):** Surfaces are slightly elevated with a very soft, diffused shadow (Blur: 20px, Spread: -5px, Opacity: 4% in light mode).
- **Level 2 (Interactive/Floating):** Modals and dropdowns use a secondary shadow with more vertical offset to suggest they are "closer" to the user.

In Dark Mode, instead of increasing shadow opacity, we use subtle border-strokes (1px, 10% white opacity) to define edges against the dark background.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners to maintain the "calm" tone.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Main dashboard cards and modal windows use a 1rem (16px) radius.
- **Data Points:** Graphs and progress bars utilize fully rounded (pill-shaped) ends to feel organic and non-threatening.

## Components

**Buttons**
Primary buttons feature a subtle gradient from the Primary to Secondary color, providing a soft focus point. Interaction states (hover/active) involve a slight scale-up (1.02x) rather than a harsh color change to keep the UI feeling "squishy" and responsive.

**Cards**
The core of the dashboard. Cards must have a white (or slate-800) fill, a 1px neutral-200 border, and the standard Level 1 shadow. Padding within cards is never less than 24px.

**Input Fields**
Focus states use a soft 4px outer glow in the primary color rather than a hard border change. This reinforces the low-friction, gentle nature of the system.

**Mood Chips**
Small, pill-shaped indicators used for tagging emotions. These use desaturated versions of the palette (e.g., a very light purple background with dark purple text) to ensure they are legible but secondary to the main data.

**Data Visualization**
Charts should use rounded line caps and smoothed Bezier curves for trends. Avoid jagged peaks; instead, represent data as fluid movements to match the empathetic tone.
