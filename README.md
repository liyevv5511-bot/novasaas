# NovaSaaS — SaaS Landing Page + Analytics Dashboard

A modern, production-quality frontend project built to showcase real-world UI skills:
a polished SaaS marketing site **and** a fully interactive analytics dashboard.

![Stack](https://img.shields.io/badge/React-18-61dafb) ![Stack](https://img.shields.io/badge/Tailwind-3-38bdf8) ![Stack](https://img.shields.io/badge/Framer_Motion-11-ff0080)

## ✨ Features

**Landing page**
- Animated hero with staggered reveal & live mini-dashboard preview
- Feature grid with hover micro-interactions
- Pricing with monthly/yearly toggle
- Masonry testimonials
- Gradient CTA + full footer
- 🌙 Dark / Light mode (persisted in localStorage)
- 📱 Fully responsive (mobile → desktop)

**Dashboard** (`/dashboard`)
- Collapsible sidebar + sticky topbar
- Animated stat cards
- Real charts (Recharts): area, bar & donut
- Searchable / filterable orders table with status badges
- Shares the same dark/light theme

## ♿ Accessibility (built for everyone)

- Semantic landmarks (`header`, `nav`, `main`, `footer`) + **skip-to-content** link
- Full **keyboard navigation** with a visible focus ring everywhere
- `aria-label` / `aria-current` / `aria-expanded` on all icon buttons, menus and nav
- Toggles use `role="switch"` + `aria-checked`; inputs have real labels
- Charts have **text alternatives** (`role="img"` summaries) for screen readers
- Respects **`prefers-reduced-motion`** — animations turn off automatically
- Color contrast tuned for both light and dark themes

## 🚀 Deploy

The project is configured for **Vercel** (`vercel.json`) and **Netlify**
(`netlify.toml` + `public/_redirects`) — SPA routing works on refresh.

| Host | Steps |
|------|-------|
| **Vercel** | `npm i -g vercel` → `vercel` (follow prompts) |
| **Netlify** | Drag the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages / any static host** | Upload the contents of `dist/` |

> Both hosts let you publish a public link in a couple of minutes. Building first
> with `npm run build` produces the deployable `dist/` folder.

## 🛠 Tech stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | UI & fast dev/build |
| Tailwind CSS | Styling & responsive design |
| Framer Motion | Animations & transitions |
| Recharts | Data visualization |
| React Router | Multi-page routing |
| Lucide React | Icons |

## 🚀 Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

Open the local URL shown in the terminal. The dashboard lives at `/dashboard`.

## 📂 Structure

```
src/
├── components/
│   ├── (landing)      # Navbar, Hero, Features, Pricing, Testimonials, CTA, Footer
│   ├── auth/          # AuthLayout (shared login/signup shell)
│   └── dashboard/     # Overview, Analytics, Revenue, Customers, Reports, Settings + shared UI
├── pages/             # Landing, Login, Signup, Dashboard, NotFound (404)
├── context/           # ThemeContext (dark/light)
├── data/              # mock dashboard data
└── index.css          # Tailwind + design tokens + a11y styles
```

### Routes
| Path | Page |
|------|------|
| `/` | Landing page |
| `/login` | Log in (with validation) |
| `/signup` | Sign up (password strength, terms) |
| `/dashboard` | Dashboard (6 switchable views) |
| `*` | 404 Not Found |

---

Built by Ali — available for frontend work on Upwork.
