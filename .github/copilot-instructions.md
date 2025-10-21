# Copilot instructions — Women in Safety Consulting

Short, actionable guidance for an AI coding agent working in this repository.

- Project type: Vite + React (TSX). Top-level entry: `index.tsx` -> `App.tsx` (single-page app using local state routing, not React Router).
- Build / dev commands (package.json):
  - `npm run dev` (vite dev server)
  - `npm run build` (produce static `dist/`)
  - `npm run preview` (preview built site)

- Environment: `vite.config.ts` loads dotenv and defines `process.env.GEMINI_API_KEY` at build time. Developers set `GEMINI_API_KEY` in `.env.local` when required.

- Big picture / architecture notes:
  - This is a client-side static site: all content (blog, services, searchable items) is in `constants.tsx` and rendered on the client.
  - `App.tsx` implements manual page navigation via a `Page` union type and `renderPage()` switch. To add a new page: extend `Page` type, add a branch in `renderPage()`, and update `Header`/`Footer` links.
  - Components live in `components/` and frequently accept navigation callbacks: `handleNavigation(link: string, articleId?)` is the single canonical navigation API used across components.
  - Reusable data shapes are in `types.ts` (Service, Article, SearchableItem, etc.). Prefer using these types for new data structures.

- Conventions and patterns to follow:
  - No router library used — update `App.tsx` state rather than adding React Router unless explicitly requested.
  - Site content lives in `constants.tsx` (e.g., `BLOG_DATA`, `SERVICES_PAGE_DATA`, `SEARCHABLE_CONTENT`) — to change site text or add articles, edit that file.
  - SVG icons are often inlined as React components inside `constants.tsx` or components; preserve them in-place for accessibility (include `aria-hidden`/`focusable` where present).
  - SEO is handled by a `useEffect` in `App.tsx` that updates document title and meta tags; keep those updates when changing page rendering.
  - Animations use `framer-motion` — import `motion` from `framer-motion` when editing header/footer or page transitions.

- Integration points / external deps:
  - `vite` and `@vitejs/plugin-react` for build/dev.
  - `framer-motion` used in `Header` and `Footer`.
  - No server-side APIs are present in the repo. If you add remote calls, document any new env vars in `vite.config.ts` and `README.md`.

- Typical code changes examples:
  - Add new blog post: append an object to `BLOG_DATA` in `constants.tsx`; ensure `id` is unique and string. The app will render it automatically.
  - Add a new top-level page: update `Page` type in `App.tsx`, add render case in `renderPage()`, and add link in `components/Header.tsx` (and `Footer.tsx` quick links).
  - Change site copy: edit `constants.tsx` (searchable content is generated from the same file).

- Safety for AI edits:
  - Preserve public API of components (prop names and callbacks) unless changing all call sites.
  - Avoid creating runtime secrets: `GEMINI_API_KEY` is injected at build-time; never hardcode credentials in files.
  - Keep edits small and focused; run `npm run build` locally to verify the static `dist/` output after changes.

If any of these areas are unclear or you need me to expand a section (for example, add exact examples for creating new components or show how to produce a GitHub Pages deploy), tell me which part and I will update the file.
