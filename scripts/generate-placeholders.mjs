/**
 * Generate placeholder screenshots for development.
 * Run: node scripts/generate-placeholders.mjs
 *
 * Creates colored gradient placeholder PNGs so the landing page
 * renders properly before real screenshots are added.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';

const dir = 'public/images/screenshots';
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const placeholders = [
  { name: 'hero-dashboard', w: 1200, h: 720, label: 'Dashboard Preview', c1: '#3b82f6', c2: '#8b5cf6' },
  { name: 'step-upload', w: 800, h: 500, label: 'Upload Step', c1: '#06b6d4', c2: '#3b82f6' },
  { name: 'step-pipeline', w: 800, h: 500, label: 'Pipeline Step', c1: '#8b5cf6', c2: '#ec4899' },
  { name: 'step-results', w: 800, h: 500, label: 'Results Step', c1: '#10b981', c2: '#06b6d4' },
  { name: 'video-thumbnail', w: 1280, h: 720, label: 'Video Thumbnail', c1: '#1e3a8a', c2: '#7c3aed' },
  { name: 'gallery-dashboard', w: 800, h: 500, label: 'Dashboard', c1: '#3b82f6', c2: '#6366f1' },
  { name: 'gallery-pipeline', w: 800, h: 500, label: 'Pipeline', c1: '#8b5cf6', c2: '#a855f7' },
  { name: 'gallery-visualizations', w: 800, h: 500, label: 'Visualizations', c1: '#10b981', c2: '#14b8a6' },
  { name: 'gallery-sentiments', w: 800, h: 500, label: 'Sentiments', c1: '#f43f5e', c2: '#ec4899' },
  { name: 'gallery-topics', w: 800, h: 500, label: 'Topics', c1: '#f59e0b', c2: '#f97316' },
  { name: 'gallery-summaries', w: 800, h: 500, label: 'Summaries', c1: '#6366f1', c2: '#8b5cf6' },
  { name: 'gallery-setup', w: 800, h: 500, label: 'Setup Wizard', c1: '#0ea5e9', c2: '#3b82f6' },
  { name: 'gallery-settings', w: 800, h: 500, label: 'Settings', c1: '#64748b', c2: '#475569' },
];

for (const p of placeholders) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${p.w}" height="${p.h}" viewBox="0 0 ${p.w} ${p.h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${p.c1}"/>
      <stop offset="100%" style="stop-color:${p.c2}"/>
    </linearGradient>
  </defs>
  <rect width="${p.w}" height="${p.h}" fill="url(#g)" rx="12"/>
  <text x="${p.w / 2}" y="${p.h / 2 - 10}" font-family="system-ui,sans-serif" font-size="28" fill="rgba(255,255,255,0.9)" text-anchor="middle" font-weight="bold">${p.label}</text>
  <text x="${p.w / 2}" y="${p.h / 2 + 25}" font-family="system-ui,sans-serif" font-size="16" fill="rgba(255,255,255,0.6)" text-anchor="middle">Replace with real screenshot: ${p.name}.png</text>
</svg>`;
  writeFileSync(`${dir}/${p.name}.svg`, svg);
  console.log(`Created ${p.name}.svg`);
}

console.log('\nDone! Replace .svg files with real .png screenshots when ready.');
