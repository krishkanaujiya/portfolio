# Krish Kanaujiya — Portfolio

A plain, minimal personal portfolio built with Vite and TypeScript. No frameworks, no animations, no glassmorphism.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customize

- **Name and text:** edit `index.html`.
- **Favicon and hero image:** the favicon set lives in `public/favicon`. The high-resolution `favicon.svg` is reused as the circular hero image in `index.html`.
- **Font:** Brass Mono is loaded from `public/BrassMono` via `@font-face` in `src/style.css`.
- **Colors:** both themes are defined as CSS variables at the top of `src/style.css`.
- **Theme behavior:** the site follows the system theme on the first visit. The header icon button switches between light and dark (sun for light, moon for dark), and the choice is saved in `localStorage`.
