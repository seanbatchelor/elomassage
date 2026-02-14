# Elo Massage Therapy Website

A minimal, mobile-first static website for a remedial massage therapist in Armidale.

## Tech Stack

- **Astro** - Static Site Generator
- **Tailwind CSS** - Utility-first CSS framework
- **React** - For interactive components (menu, accordion)
- **Shadcn UI** - Accessible component library
- **TypeScript** - Type safety

## Design

- **Colors**: Off-white background (#FAFAF8) with sage green text (#4D6946)
- **Fonts**: Inter (body), EB Garamond (headings)
- **Layout**: Mobile-first, single-column centered content
- **Approach**: Minimal, delicate, modern

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/          # Static assets (images, fonts, favicon)
├── src/
│   ├── components/  # Reusable components
│   │   ├── ui/      # Shadcn UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Menu.tsx
│   │   └── ...
│   ├── layouts/     # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/       # Routes (file-based routing)
│   │   ├── index.astro    # Home page
│   │   ├── book.astro     # Book page
│   │   └── about.astro    # About page
│   └── styles/      # Global styles
│       └── global.css
├── astro.config.mjs # Astro configuration
└── tailwind.config.mjs # Tailwind configuration
```

## Deployment

This site is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect Astro and configure build settings
4. Deploy!

Build command: `npm run build`
Output directory: `dist/`

## To-Do

- [ ] Replace logo placeholder (`/logo-placeholder.svg`) with actual PNG logo
- [ ] Add botanical illustration to home page hero section
- [ ] Update booking CTA links from `#` to actual booking URL
- [ ] Add contact information and real clinic details to footer

## License

All rights reserved © Eloise Tunchon
