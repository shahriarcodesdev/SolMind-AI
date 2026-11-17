# SolMind AI — Interactive Demo (Next.js + shadcn/ui)

Front-end demo for the 18 Nov 2026 submission. All tutoring logic is scripted and all data is sample data.

## Run
    npm install
    npm run dev      # http://localhost:3000

## Demo flow
/  →  /onboarding  →  /assessment/diagnostic  →  /tutor  →  /knowledge-map  →  /analytics  (+ /dashboard)

1. Choose "Practice & Improve", enter 6 → suspected friction gap + follow-up question.
2. Open the tutor, answer step by step → Net Force and Friction improve.
3. Check the knowledge map and analytics; they share one state (lib/demo.tsx).
4. "Reset demo" in the sidebar restores the start state.

## Next (MVP)
Supabase auth + tables, OpenAI Route Handlers with Zod, mathjs validator, pgvector RAG, React Flow map, Recharts.

## UI stack
Tailwind CSS + shadcn/ui components in `components/ui` (components.json included, so `npx shadcn@latest add ...` works on your machine), lucide-react icons. Dark violet theme tokens live in `app/globals.css`.

### Fonts
- **Nohemi** (headings, `font-display`): add your licensed files to `public/fonts/` as `Nohemi-Regular.woff2`, `Nohemi-Medium.woff2`, `Nohemi-SemiBold.woff2`, `Nohemi-Bold.woff2`. They are not bundled, so until you add them headings fall back to Segoe UI.
- **Segoe UI** (body and UI, `font-sans`), with Helvetica Neue/Arial fallbacks on systems without it (macOS, Linux).

Routes: / , /login , /register , /onboarding , /dashboard , /assessment/diagnostic , /tutor , /knowledge-map , /analytics
