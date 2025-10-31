# Moody Website

This repository hosts a bespoke Next.js landing page that amplifies Moody&apos;s persona as the Egyptian marketer leading
bold campaigns at Tajer.

## Project structure

- `site/` – Next.js 14 project configured with TypeScript and Tailwind CSS
  - `src/pages/` – traditional Pages Router pages including the hero home experience
  - `src/components/` – modular UI components for the hero, campaign showcase, testimonials, and CTA banner
  - `src/styles/` – global Tailwind setup and utility extensions
  - `public/` – brand-driven preview assets used across Open Graph and README documentation

## Getting started

1. Install dependencies (the project is configured for npm):

   ```bash
   cd site
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to explore the Moody x Tajer experience.

## Building for production

```bash
cd site
npm run build
npm run start
```

This triggers Next.js static generation for the bilingual marketing site, ready to deploy on platforms like Vercel or any
Node.js hosting provider.

## Visual preview

![Moody Tajer landing preview](site/public/preview.svg)

The interface embraces a non-traditional hero layout, bilingual storytelling, and bold gradients to mirror Moody&apos;s daring
marketing identity.
