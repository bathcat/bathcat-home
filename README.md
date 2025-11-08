# Bathcat.net

This is my personal, professional, over-engineered home page. It's built with:

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)

You're welcome to steal whatever you want.

## Styling Architecture

This project uses a hybrid styling approach:

- **Component-based Tailwind styling**: Most of the site uses Tailwind classes directly in React/Astro components
- **Slide content styling**: The slide deck system uses a separate `src/styles/slide-content.scss` file for content rendering

### Rationale

Slide deck content has unique styling requirements (typography, layout, print styles) that differ from the rest of the site. Keeping these styles in a dedicated SCSS file:

- Makes the slide deck portable and easier to extract
- Provides a clear mental model: "slide content styling = one file"
- Allows flexibility: components can still have structural elements (like BlockQuote's SVG)
- Enables gradual migration without requiring a complete refactor

To run:

```
npm run dev
```

To generate static content:

```
npm run build
```
