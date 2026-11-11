# dprince.dev — Anthony Ogunleye's portfolio

Personal portfolio of Anthony Olasunkanmi Ogunleye (DprinceDeveloper), full-stack developer.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · lucide-react

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static prerender of every page
```

## Editing content

All copy (bio, projects, experience, certifications, FAQ, stats) lives in
[`src/data/profile.ts`](src/data/profile.ts). Components read from it, so most updates never touch JSX.

- **Add a project:** append to `projects`. Set `featured: true` for the large alternating layout.
  Drop a 1440×900 screenshot in `public/images/projects/` and set `image`; without one, the card shows a
  terminal-style snippet (customise it in the `snippets` map in `src/components/Work.tsx`).
- **CV:** replace `public/Anthony-Ogunleye-CV.pdf`.

## Structure

```
src/
  app/          layout (fonts, SEO metadata, JSON-LD), page, global styles + design tokens
  components/   one file per section (Hero, Work, Experience, …) + shared Reveal/SectionHeader
  data/         profile.ts — the single source of content
public/         images, project screenshots, CV
```

## Contact form

Submits to [FormSubmit](https://formsubmit.co) (`/ajax/<email>`), no backend needed. The very first
submission sends an activation email to the inbox; confirm it once and messages flow from then on.

## Deploy

Built for Vercel. In the Vercel project, make sure **Framework Preset** is set to **Next.js**.
