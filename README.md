# @stellaestudio/FW-icon-library

A comprehensive icon library with fonts, SVGs, and sprites by Stellae Studio.

## Installation

```bash
npm install @stellaestudio/FW-icon-library
```

## Usage

### Icon Font

Import the CSS file and use the icon classes:

```html
<!-- Import the CSS -->
<link rel="stylesheet" href="node_modules/@stellaestudio/FW-icon-library/dist/iconLibrary/font/iconLibrary.css">

<!-- Use icons -->
<i class="fwIcon fwIcon-arrow-left"></i>
<i class="fwIcon fwIcon-search"></i>
<i class="fwIcon fwIcon-heart"></i>
```

### TypeScript/JavaScript

```typescript
import { iconLibrary } from '@stellaestudio/FW-icon-library';

// Access icon codes
console.log(iconLibrary.ARROW_LEFT); // Gets the unicode value
```

### SVG Usage

Direct SVG files are available in the `dist/iconLibrary/svg/` directory:

```html
<img src="node_modules/@stellaestudio/FW-icon-library/dist/iconLibrary/svg/arrow-left.svg" alt="Arrow Left">
```

### SVG Sprite

Use the sprite for optimized loading:

```html
<svg>
  <use href="node_modules/@stellaestudio/FW-icon-library/dist/iconLibrary/sprite/iconLibrary.svg#arrow-left"></use>
</svg>
```

## Available Icons

The library includes 40+ icons:
- Arrow icons (left, right, up, down)
- UI elements (buttons, checks, crosses)
- Navigation (hamburger, search, home)
- Actions (edit, delete, favorite)
- And many more...

## File Structure

```
dist/
├── iconLibrary/
│   ├── font/           # Font files and CSS
│   │   ├── iconLibrary.css
│   │   ├── iconLibrary.ttf
│   │   ├── iconLibrary.woff
│   │   ├── iconLibrary.woff2
│   │   ├── iconLibrary.ts
│   │   ├── iconLibrary.json
│   │   └── iconLibrary.html
│   ├── svg/            # Individual SVG files
│   └── sprite/         # SVG sprite
│       └── iconLibrary.svg
```

## Development

To build the library locally:

```bash
npm run build
```

## License

Apache-2.0

## Author

Stellae Studio