# Ilmora Frontend

Web app for **Ilmora**, a multi-tenant School & Academy Management SaaS for Pakistan.

Stack: Next.js 15, React 19, TypeScript, Tailwind CSS 4. Status: **Stage 0 (foundation)**. No login or business features yet.

## Setup
```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

## Scripts
| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `start` | Production build / serve |
| `npm run lint` / `typecheck` | Static checks |

Backend API lives in the separate `ilmora-backend` repository (default `http://localhost:4000`).
