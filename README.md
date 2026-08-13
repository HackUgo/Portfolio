# Portfolio Website

A single-page React + Tailwind CSS portfolio. Dark theme (`#0a0a0a`), white text,
green accent (`#00ff88`). Mobile responsive. Built with Vite.

## Sections

Hero · Projects · Experience · Leadership · Contact

## Prerequisites

[Node.js](https://nodejs.org/) 18+ (includes npm). This machine didn't have Node
installed when the project was scaffolded — install it first, then run the commands below.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Where to edit your content

All placeholder text lives in the section components:

- `src/components/Hero.jsx` — name, tagline, intro
- `src/components/Projects.jsx` — the `projects` array
- `src/components/Experience.jsx` — the `experience` array
- `src/components/Leadership.jsx` — the `leadership` array
- `src/components/Contact.jsx` — email + social links
- `src/components/Navbar.jsx` / `Footer.jsx` — name / branding

## Theme colors

Defined in `tailwind.config.js` as `background` (#0a0a0a) and `accent` (#00ff88).
Use them as Tailwind classes, e.g. `bg-background`, `text-accent`.
