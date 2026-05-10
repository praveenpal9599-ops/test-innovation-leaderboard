# Innovation Leaderboard · AI Ideas Hub

A responsive React dashboard featuring a live innovation leaderboard with three sections:

- **Top Contributors** — ranked list of users with idea counts, badges, and weekly trends
- **Ideas by Department** — animated bar chart across 7 teams
- **Ideas by Impact** — interactive donut chart with active-sector highlighting

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | Component architecture + hooks |
| Vite 5 | Dev server + build tool |
| Tailwind CSS 3 | Utility-first styling + responsive layout |
| Recharts 2 | Bar chart + donut chart |
| Lucide React | Icon set |

## Project Structure

```
innovation-leaderboard/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # App entry point
    ├── App.jsx           # Root layout
    ├── index.css         # Tailwind directives + global styles
    ├── data.js           # All mock data (contributors, charts, stat cards)
    └── components/
        ├── Header.jsx          # Page title + live badge
        ├── StatCards.jsx       # 4 metric summary cards
        ├── TopContributors.jsx # Leaderboard list with rank badges
        ├── ImpactChart.jsx     # Recharts donut chart
        └── DepartmentChart.jsx # Recharts bar chart
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## Building for Production

```bash
npm run build
# Output goes to /dist
```

## Customising the Data

All mock data lives in `src/data.js`. Edit the `contributors`, `departmentData`, `impactData`, and `statCards` arrays to reflect your real data — or wire them up to an API in `App.jsx` using `useEffect` + `fetch`.

## Responsive Behaviour

| Breakpoint | Layout |
|-----------|--------|
| Mobile (< 640px) | Single column, stat cards 2×2, badges hidden |
| Tablet (640–1024px) | Same as mobile with badges visible |
| Desktop (≥ 1024px) | 3-column grid: contributors (2/3) + donut (1/3) |
