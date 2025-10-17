# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a UXP (User Experience Platform) plugin for Adobe Photoshop built with React, TypeScript, and Adobe Spectrum Web Components. The plugin demonstrates how to integrate Adobe's design system components into a UXP plugin environment.

**Demo Features:**
- Interactive examples of key SWC components (buttons, text fields, checkboxes, links)
- Component state demonstrations (normal, disabled, readonly, checked)
- Form interaction patterns
- Guidelines for adding additional components

## Development Commands

### Core Development Workflow
- `npm install` - Install dependencies (required before first build)
- `npm run build` - Create production build in `/dist` folder
- `npm run watch` - Build and watch for changes (development mode)
- `npm run typecheck` - Run TypeScript type checking without emitting files

### No Testing Framework
This project does not include automated tests. Testing is done manually through UXP Developer Tools (UDT) by loading the plugin into Photoshop.

## Architecture Overview

### UXP Plugin Structure
This is a **panel plugin** for Adobe Photoshop (manifest version 5) that requires PS 25.12.3 or higher. The plugin enables SWC (Spectrum Web Components) support via the `enableSWCSupport` feature flag.

### Key Technical Patterns

**Spectrum Web Components Integration:**
- Uses `@swc-uxp-wrappers/*` packages for UXP-compatible SWC components
- Webpack aliases map `@spectrum-web-components/*` imports to UXP wrappers via `@swc-uxp-wrappers/utils`
- All SWC components must be wrapped in `<sp-theme>` for proper styling
- Component versioning is locked in `resolutions` block to prevent conflicts

**React + TypeScript Setup:**
- Entry point: `src/index.tsx` (imports themes and components, renders React app)
- Main app: `src/App.tsx` (wrapped in `<sp-theme>` with spectrum theme)
- Components: `src/components/` (React wrappers for SWC elements)
- Build target: ES2020 with DOM libraries

**Webpack Build Process:**
- TypeScript compilation using `tsconfig.webpack.json` (extends base config)
- Copies `manifest.json` and `index.html` to dist
- CSS extraction with PostCSS processing
- Bundle analysis reports generated in `/report/` folder
- Development mode includes source maps

### Adding New Spectrum Components

1. Install UXP wrapper: `yarn add @swc-uxp-wrappers/[component]@[version]`
2. Add component version to `resolutions` block in `package.json`
3. Import component in `src/index.tsx`: `import "@spectrum-web-components/[component]/sp-[component].js"`
4. Create React wrapper component in `src/components/`
5. Rebuild with `npm run build`

### Plugin Loading via UDT

The plugin loads through UXP Developer Tools:
1. Build creates `/dist` folder with bundled assets
2. UDT loads `manifest.json` from root directory
3. UDT serves files from `/dist` folder (configured as plugin root)
4. Use "Watch" mode in UDT for live reloading during development

### Critical Files
- `manifest.json` - UXP plugin configuration with SWC support enabled
- `webpack.config.js` - Build configuration with SWC aliasing
- `src/index.tsx` - Theme and component imports, React app bootstrap
- `package.json` - Dependency management with version resolutions for SWC components

### Platform Requirements
- Adobe Photoshop 25.12.3+
- Node.js >= 14.20.0
- Yarn package manager
- UXP Developer Tools for plugin loading and debugging