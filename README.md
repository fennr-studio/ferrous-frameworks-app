# Ferrous Frameworks

Next.js 16 reconstruction of a Wix reference site.

## Quick start

```bash
npm install
npm run dev
```

Requires Node >= 20.9.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run lint` | ESLint — `next build` no longer lints in v16 |
| `npm run typecheck` | `tsc --noEmit`, checks files no route imports |
| `npm run check` | typecheck + lint + format check |

## Routes

| Route | Rendering |
| --- | --- |
| `/` | Static |
| `/about` | Static |
| `/projects` | Static |
| `/projects/[slug]` | Static via `generateStaticParams` (4 pages) |
| `/contact` | Static shell + Server Action |
| `/privacy-policy`, `/accessibility-statement` | Static, noindex |
| `/sitemap.xml`, `/robots.txt` | Generated from `src/data` |

## Architecture

- `src/data/` — all content as typed modules. One `Project` record feeds the
  homepage, the index, the detail page and the sitemap, so they cannot drift.
- `src/components/ui/` — primitives (Button, Container, SectionHeading, Rule).
- `src/components/sections/` — homepage sections.
- `src/lib/` — fonts, validation.
- `src/types/` — shared types.

Only three Client Components exist: `MobileMenu`, `ContactForm`, `error.tsx`.
Everything else is a Server Component and ships no JavaScript.

## Known gaps

1. **Images load from the Wix CDN** via `next.config.ts` `remotePatterns`.
   Production should not depend on Wix. Download the assets to `/public` and
   update the `CDN` constant in `src/data/projects.ts` and `src/data/about.ts`.
   Wix stock images (`11062b_*`) may be licensed for Wix-hosted use only —
   check before launch.
2. **Contact form does not send.** The Server Action validates, then fails
   loudly unless `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set. Wire the
   provider call where the TODO is.
3. **Display font is an assumption.** The reference uses a mono with a dotted
   zero; Geist Mono is a stand-in. Swap in `src/lib/fonts.ts`.
4. **Colours are eyeballed** from screenshots. Exact values go in `globals.css`.
5. **Placeholder contact details** (phone, email, address, socials, 2035
   copyright) are carried over from the reference and centralised in
   `src/data/site.ts`.
6. **No tests yet.**
7. **Project detail pages are minimal** — the reference has none, so only
   title/category/image exist. Nothing invented.

## Environment

Copy `.env.example` to `.env.local`.
