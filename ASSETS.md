# TourlyAI Landing Page — Asset Guide

## Quick Start
```bash
cd TourlyAI-Web
npm install
npm run dev      # Development server
npm run build    # Production build
```

---

## Screenshots You Need to Take

All screenshot files go in `public/images/screenshots/`. Take them at **1920×1080** resolution or higher for crisp display. Use both **light and dark themes** where applicable — pick whichever looks best for each shot.

### Hero Section (Most Important)
| File Name | What to Capture |
|-----------|----------------|
| `hero-dashboard.png` | **The main Visualizations page** with several charts visible. This is the hero image — make it look spectacular. Show the dashboard with the sidebar visible, multiple charts loaded. |

### How It Works (3 Steps)
| File Name | What to Capture |
|-----------|----------------|
| `step-upload.png` | **Data page** — Show the CSV upload area with a dataset loaded (file info panel visible, preview table showing, column mapping done). |
| `step-analysis.png` | **Pipeline page** — Show the 9-phase stepper with several phases completed (green checkmarks), one running (blue progress), and others pending. The progress bar partially filled. |
| `step-results.png` | **Metrics page** — Show the KPI cards, sentiment distribution bar, and ranking tables all visible. |

### Dashboard Section (6 Charts)
| File Name | What to Capture |
|-----------|----------------|
| `chart-sentiment.png` | **Visualization** of sentiment distribution — the pie/bar chart showing positive/negative/neutral breakdown. |
| `chart-temporal.png` | **Visualization** of temporal trends — the line chart showing opinion volume or sentiment over time. |
| `chart-categories.png` | **Visualization** of category analysis — the top categories bar chart or category distribution. |
| `chart-radar.png` | **Visualization** of the 360° radar chart — the spider/radar chart showing category scores. |
| `chart-wordcloud.png` | **Visualization** of any word cloud — positive, negative, or general word cloud. |
| `chart-cross.png` | **Visualization** of cross-analysis — any cross-analysis chart (sentiment by category, volume vs sentiment scatter, etc.). |

### Gallery Section (8 App Pages)
| File Name | What to Capture |
|-----------|----------------|
| `app-home.png` | **Home page** — The 4 status cards, quick actions, and getting started guide or contextual alerts. |
| `app-pipeline.png` | **Pipeline page** — Full view of all 9 phases with mixed states (completed/running/pending). |
| `app-dashboard.png` | **Visualizations page** — Gallery view with multiple chart thumbnails and category tabs. |
| `app-metrics.png` | **Metrics page** — Full view with KPI cards, sentiment bar, and statistics. |
| `app-summaries.png` | **Summaries page** — AI-generated summary content with category tabs visible. |
| `app-reviews.png` | **Reviews page** — Review explorer with filters panel and several review cards showing sentiment/category badges. |
| `app-reports.png` | **Reports page** — Report generator with template selection and section toggles visible. |
| `app-settings.png` | **Settings page** — LLM configuration tab showing local/cloud/no-LLM options. |

### Privacy Section
| File Name | What to Capture |
|-----------|----------------|
| `privacy-local.png` | **Settings > Ollama tab** — Show the Ollama management panel with a local model installed and running (green status indicator). Or alternatively, show the Settings page with "Local AI" mode selected. |

### Video Section
| File Name | What to Capture |
|-----------|----------------|
| `video-poster.png` | A visually appealing screenshot that will serve as the video thumbnail. Use the **Visualizations page** in dark mode with the executive dashboard chart visible — it looks cinematic. |

---

## Video File

| File Name | Location | Description |
|-----------|----------|-------------|
| `demo.mp4` | `public/video/demo.mp4` | A screen recording walkthrough: Open app → Load CSV → Run pipeline → Explore dashboard → Browse reviews → Generate PDF report. 1–3 minutes ideal. |

---

## Logo Files (Already Copied ✓)

These are already in place at `public/images/logos/`:
- `logo-primary-horizontal.png` — Used in hero (light mode)
- `logo-white-horizontal.png` — Used in hero (dark mode)
- `logo-black.png` — Navbar & footer (light mode)
- `logo-white.png` — Navbar & footer (dark mode)

---

## File Structure Summary

```
public/
├── images/
│   ├── logos/                      ← ✅ Already done
│   │   ├── logo-primary-horizontal.png
│   │   ├── logo-white-horizontal.png
│   │   ├── logo-black.png
│   │   ├── logo-white.png
│   │   └── ... (other variants)
│   └── screenshots/                ← 📸 YOU NEED TO ADD THESE
│       ├── hero-dashboard.png
│       ├── step-upload.png
│       ├── step-analysis.png
│       ├── step-results.png
│       ├── chart-sentiment.png
│       ├── chart-temporal.png
│       ├── chart-categories.png
│       ├── chart-radar.png
│       ├── chart-wordcloud.png
│       ├── chart-cross.png
│       ├── app-home.png
│       ├── app-pipeline.png
│       ├── app-dashboard.png
│       ├── app-metrics.png
│       ├── app-summaries.png
│       ├── app-reviews.png
│       ├── app-reports.png
│       ├── app-settings.png
│       ├── privacy-local.png
│       └── video-poster.png
└── video/                          ← 🎬 YOU NEED TO ADD THIS
    └── demo.mp4
```

## Total Assets Needed
- **20 screenshots** (PNG, 1920×1080+)
- **1 video** (MP4, 1–3 min walkthrough)

## Tips for Best Results
1. **Run a full analysis pipeline** on a real tourism dataset first so all pages have rich data
2. **Use dark mode for the video poster** — it looks more cinematic
3. **Use light mode for most screenshots** — they're cleaner for a landing page
4. **Make sure charts are generated** before taking dashboard/chart screenshots
5. **Load at least 100+ reviews** so metrics and charts look substantial
6. The landing page gracefully handles missing images with placeholder cards — add images progressively
