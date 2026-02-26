# TourlyAI — Landing Page

The official marketing website for **TourlyAI**, an AI-powered desktop application that transforms tourism reviews into strategic insights. Built with React 19, TypeScript, and Vite.

---

## About TourlyAI

TourlyAI is a free, open-source desktop application for tourism professionals. It analyzes CSV datasets of guest reviews through **9 analysis phases** — from basic processing to strategic recommendations — all running **100% locally** on your machine.

| Stat | Value |
| ---- | ----- |
| Reviews analyzed | 10,000+ |
| Tourism categories | 12 |
| Review languages supported | 6 |
| Analysis phases | 9 |
| Chart types | 34+ |

---

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Framework | [React 19](https://react.dev) |
| Language | TypeScript 5 |
| Build tool | [Vite 7](https://vite.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| i18n | [i18next](https://www.i18next.com) + react-i18next |
| Routing | React Router DOM v7 |
| Fonts | Inter Variable, JetBrains Mono Variable |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/TourlyAI-Web.git
cd TourlyAI-Web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start the local development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## Project Structure

```text
TourlyAI-Web/
├── public/
│   ├── images/          # Logos, screenshots, gallery assets
│   └── video/           # Demo video
└── src/
    ├── components/
    │   ├── sections/    # Page sections (Hero, Features, FAQ, …)
    │   └── ui/          # Reusable UI primitives
    ├── hooks/           # Custom React hooks (useTheme, useScrollAnimation, …)
    ├── i18n/
    │   ├── index.ts
    │   └── locales/     # en.json, es.json
    ├── lib/             # Utility helpers
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

### Page Sections

| Section | Description |
| ------- | ----------- |
| `Navbar` | Sticky navigation with theme toggle and language switcher |
| `Hero` | Main headline, stats bar, and app screenshot |
| `Features` | 8-card grid highlighting core analysis capabilities |
| `HowItWorks` | 3-step illustrated walkthrough |
| `Gallery` | Dashboard screenshot gallery with chart previews |
| `VideoSection` | Embedded demo video |
| `Privacy` | Local-first privacy guarantees |
| `FAQ` | Accordion with 7 frequently asked questions |
| `CTA` | Download call-to-action |
| `Footer` | Links, social icons, and license notice |

---

## Internationalization

The site is fully translated into **English** and **Spanish**. Translation files live in `src/i18n/locales/`. Language is auto-detected from the browser and can be switched at runtime via the navbar.

To add a new language:

1. Create `src/i18n/locales/<lang>.json` using `en.json` as a template.
2. Register the locale in `src/i18n/index.ts`.

---

## Adding Screenshots & Assets

Screenshots and images placed in `public/images/screenshots/` are served at `/images/screenshots/<filename>` and referenced directly in the section components. See [ASSETS.md](ASSETS.md) for the full list of expected filenames and capture guidelines.

---

## Building for Production

Run the build command:

```bash
npm run build
```

Output is written to `dist/`. The site is fully static and can be deployed to any CDN or static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

---

## Related

- **[TourlyAI Desktop App](../TourlyAI/)** — The Electron + Python application this site promotes.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](../TourlyAI/LICENSE) file for details.
