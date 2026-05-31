---
name: Cyber Aviation Base Terminal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#baccaf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#85967c'
  outline-variant: '#3c4b35'
  surface-tint: '#2de500'
  primary: '#eeffe2'
  on-primary: '#053900'
  primary-container: '#33ff00'
  on-primary-container: '#127100'
  inverse-primary: '#116e00'
  secondary: '#ffd393'
  on-secondary: '#432c00'
  secondary-container: '#fdaf00'
  on-secondary-container: '#694600'
  tertiary: '#edffe5'
  on-tertiary: '#023909'
  tertiary-container: '#b2eca8'
  on-tertiary-container: '#396c36'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#79ff5a'
  primary-fixed-dim: '#2de500'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#0b5300'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#ffba43'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#b7f1ad'
  tertiary-fixed-dim: '#9cd593'
  on-tertiary-fixed: '#002203'
  on-tertiary-fixed-variant: '#1e511e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'

## Brand & Style
The design system is a high-fidelity homage to the Command Line Interface (CLI) and industrial avionics displays. It targets technical operators, developers, and users who prioritize data density and system transparency over decorative fluff. 

The aesthetic is **Cyber-Industrial Brutalism**. It rejects soft curves and gradients in favor of rigid 90-degree angles, fixed-width logic, and high-contrast phosphor-on-black readability. The interface should feel like a mission-critical terminal in a hardened aviation facility—efficient, urgent, and strictly functional. Key visual motifs include ASCII-based separators, CRT-style scanline overlays, and a distinct "glow" on primary interactive elements.

## Colors
The palette is rooted in the "phosphor green" era of computing. 
- **Primary (#33ff00):** Used for active commands, success states, and primary data readouts. It carries a slight text-shadow glow.
- **Secondary (#ffb000):** Reserved for warnings, critical alerts, and secondary data hierarchies that require immediate attention.
- **Muted (#1f521f):** Used for low-priority metadata, background borders, and inactive command history.
- **Background (#0a0a0a):** A "Deep Black" that provides the necessary contrast for the neon elements to pop without causing eye strain.

## Typography
This design system utilizes **JetBrains Mono** exclusively to maintain a strict monospaced grid. This ensures that characters align vertically across rows, facilitating the use of ASCII tables and structured logs. 

All headings must be uppercase to simulate telemetry headers. Use `label-caps` for table headers and metadata tags. To maintain the "hacker" aesthetic, avoid italicization; use color shifts (Primary to Muted) to denote hierarchy instead. Large display text should have a 2px `text-shadow` in the primary color to simulate CRT bleed.

## Layout & Spacing
The layout follows a **Fixed-Width Column Grid** reminiscent of an 80-character terminal width. 

1. **Grid:** A 12-column system is used, but content should ideally snap to 8px increments (the `grid-unit`).
2. **Dividers:** Use ASCII-style lines (e.g., `+---+`, `|`, `---`) instead of standard CSS borders where possible for structural separation.
3. **Scanlines:** A global overlay of 1px horizontal lines with 20% opacity should be applied to the viewport to reinforce the CRT feel.
4. **Mobile:** On small screens, the grid collapses to a single column. All padding remains tight (16px) to maximize data density.

## Elevation & Depth
Depth is represented through **Tonal Borders** rather than shadows. In this design system:
- **Level 0 (Floor):** Pure black (#0a0a0a).
- **Level 1 (Panels):** Defined by a 1px border of Muted Green (#1f521f).
- **Level 2 (Active/Modal):** Defined by a 1px border of Primary Green (#33ff00) with a 4px outer glow (box-shadow) of the same color.
- **Overlays:** Use a semi-transparent background (#0a0a0a at 90%) to allow underlying telemetry to remain faintly visible. 
Do not use blurs; use high-opacity solid fills to maintain the "digital" feel.

## Shapes
The shape language is **Strictly Geometric**.
- **Corner Radius:** Always 0px. No exceptions.
- **Borders:** 1px solid is the standard weight. 
- **Interactive States:** Use "Inverted" styles (Black text on Green background) to indicate selection or focus, rather than changing shape.

## Components
- **Buttons:** Rectangular with 1px Primary Green borders. On hover, invert the colors (Primary Green background, Black text).
- **Input Fields:** Prefix with a command prompt (`> `). Use a blinking square underscore as the cursor.
- **Chips/Tags:** Enclose in brackets, e.g., `[ STATUS: OK ]`. Use Secondary Amber for warning tags.
- **Lists:** Use hyphens or asterisks as bullets. Active list items should be prefixed with a `→` character.
- **Progress Bars:** Constructed using block characters (e.g., `[██████░░░░]`).
- **Cards:** Defined by a 1px Muted Green border. The top-left corner should feature a title label nested within the border line (e.g., `+-- TITLE --+`).