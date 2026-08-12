# Lumière Beauty Studio

A single-page, fully responsive beauty salon website built as a front-end development assignment. The site presents a premium beauty parlour brand with clear services, pricing, and contact/booking flows.

**Live preview (local):** run `npm run dev` and open `http://localhost:5173`

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | Component-based UI |
| Vite 8 | Development server and production build |
| Tailwind CSS 4 | Responsive styling and layout |
| Lucide React | Icons |
| Oxlint | Code linting |

---

## Features

- **Single-page layout** with smooth scroll navigation between sections
- **Hero banner** with headline, CTAs, salon image, and trust statistics
- **Services section** — 6 services with images, descriptions, and starting prices
- **Pricing section** — Essential, Signature, and Luxury packages (AUD)
- **Contact section** — studio details, opening hours, and appointment request form with validation
- **Additional sections** — About, Experience, Gallery, Testimonials
- **Responsive design** — mobile, tablet, and desktop layouts
- **Accessibility** — semantic HTML, ARIA labels, keyboard-friendly navigation
- **Footer** — brand info, social links (Instagram, X, Facebook), and contact details

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed header + mobile menu
│   ├── Hero.jsx         # Banner / hero section
│   ├── About.jsx        # Studio introduction
│   ├── Services.jsx     # Service cards
│   ├── Pricing.jsx      # Pricing packages
│   ├── Experience.jsx   # Brand values
│   ├── Gallery.jsx      # Image gallery
│   ├── Testimonials.jsx # Client reviews
│   ├── Contact.jsx      # Contact info + booking form
│   ├── Footer.jsx       # Site footer
│   └── BackToTop.jsx    # Scroll-to-top button
├── data/
│   ├── services.js      # Service content
│   ├── pricing.js       # Package content
│   └── testimonials.js  # Testimonial content
├── utils/
│   └── scroll.js        # Shared smooth-scroll utility
├── assets/images/       # Local salon images
├── index.css            # Global styles and brand tokens
├── App.jsx              # Main page composition
└── main.jsx             # App entry point
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Cream | `#FAF7F2` | Section backgrounds |
| Warm White | `#FEFCF9` | Cards, navbar |
| Espresso | `#2C1810` | Headings, primary buttons |
| Champagne | `#C9A96E` | Accents, eyebrows, icons |
| Serif font | Playfair Display | Headings |
| Sans font | Inter | Body text |

---

## Sections Overview

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#home` | Main banner and primary CTAs |
| About | `#about` | Studio story and statistics |
| Services | `#services` | Six beauty services with Book Now links |
| Pricing | `#pricing` | Three package tiers with pricing |
| Experience | — | Brand values (dark section) |
| Gallery | — | Salon and treatment photos |
| Testimonials | — | Client feedback |
| Contact | `#contact` | Address, hours, appointment form |

---

## Notes

- The appointment form includes client-side validation. Submitted data is not sent to a server (static demo).
- All images are bundled locally under `src/assets/images/`.
- For a formal requirement checklist and submission summary, see [SUBMISSION.md](./SUBMISSION.md).

---

## Author

Front-end development assignment — Beauty Parlour / Beauty Salon theme.
