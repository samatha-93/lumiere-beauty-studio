# Technical Task Submission

## Beauty Parlour Website — Lumière Beauty Studio

**Task:** Design and develop a single-page static website based on a Beauty Parlour / Beauty Salon theme.

**Submitted by:** samatha kumbam  
**Date:** August 2026  
**Repository:** `samatha-93/lumiere-beauty-studio`
**Live Demo:**  
https://lumiere-beauty-studio-one.vercel.app/

---

## Executive Summary

This project is a **single-page static website** for **Lumière Beauty Studio**, a premium beauty salon brand. The site is built with **React.js**, **Vite**, and **Tailwind CSS**, and demonstrates modern front-end development skills including responsive design, clean code structure, visual polish, and user-friendly navigation.

The website meets all stated requirements and includes additional sections (Gallery, Testimonials, Experience) to deliver a complete, professional user experience.

---

## Requirement Checklist

### 1. Single-page static website (Beauty Parlour theme)

| Status | Details |
|--------|---------|
| ✅ Complete | One scrollable page with themed sections: Home, About, Services, Pricing, Experience, Gallery, Testimonials, Contact |
| ✅ Complete | Builds to static files via `npm run build` → `dist/` folder, ready for deployment |

---

### 2. Modern, attractive, and professional design

| Status | Details |
|--------|---------|
| ✅ Complete | Premium salon aesthetic with cream, warm white, espresso brown, and champagne gold palette |
| ✅ Complete | Elegant typography: Playfair Display (headings) + Inter (body) |
| ✅ Complete | Consistent UI: buttons, cards, eyebrow labels, borders, and spacing system |
| ✅ Complete | Polished visual hierarchy across all sections |

---

### 3. User-friendly and easy to navigate

| Status | Details |
|--------|---------|
| ✅ Complete | Fixed navbar with Home, About, Services, Pricing, Contact |
| ✅ Complete | Prominent **Book Appointment** CTA in header |
| ✅ Complete | Smooth scroll to sections with correct offset under fixed navbar |
| ✅ Complete | Mobile hamburger menu with full-screen navigation |
| ✅ Complete | Back-to-top button for long-page usability |
| ✅ Complete | Multiple CTAs throughout (Hero, Services, Pricing → Contact) |

---

### 4. Fully responsive across desktop and mobile

| Status | Details |
|--------|---------|
| ✅ Complete | Mobile-first responsive layout using Tailwind breakpoints |
| ✅ Complete | Hero: stacked on mobile, two-column on desktop |
| ✅ Complete | Services: 1 → 2 → 3 column grid |
| ✅ Complete | Pricing: stacked cards → three-column layout |
| ✅ Complete | Contact: single column → two-column layout |
| ✅ Complete | Footer: stacked on mobile, three columns on desktop |
| ✅ Complete | Tested and tuned for spacing and alignment at multiple viewport sizes |

---

### 5. Clear Services section

| Status | Details |
|--------|---------|
| ✅ Complete | Six services with image, name, description, starting price, and Book Now action |

**Services included:**

| Service | Starting Price |
|---------|----------------|
| Hair Styling | From A$55 |
| Hair Colour | From A$75 |
| Facial & Skincare | From A$65 |
| Bridal Makeup | From A$120 |
| Manicure & Pedicure | From A$60 |
| Brows & Lashes | From A$45 |

---

### 6. Pricing for the services

| Status | Details |
|--------|---------|
| ✅ Complete | Three pricing packages with feature lists and Book actions |

**Packages included:**

| Package | Price | Description |
|---------|-------|-------------|
| Essential | A$85 | Everyday beauty maintenance |
| Signature | A$150 | Most popular complete experience |
| Luxury | A$280 | Full indulgent beauty experience |

- Prices displayed in Australian Dollars (AUD)
- Indicative pricing disclaimer included

---

### 7. Appealing hero / banner section

| Status | Details |
|--------|---------|
| ✅ Complete | Strong headline: *Discover Your True Elegance* |
| ✅ Complete | Supporting tagline and studio description |
| ✅ Complete | Primary CTA: Book an Appointment |
| ✅ Complete | Secondary CTA: Explore Services |
| ✅ Complete | High-quality hero image |
| ✅ Complete | Trust indicators: 10+ Years, 5K+ Clients, 15 Professionals |

---

### 8. Images, typography, colours, and design elements

| Status | Details |
|--------|---------|
| ✅ Complete | 13 local salon-themed images (hero, about, services, gallery) |
| ✅ Complete | Descriptive alt text on images for accessibility |
| ✅ Complete | Brand colour tokens defined in CSS custom properties |
| ✅ Complete | Gold accent lines, card borders, and icon usage (Lucide) |
| ✅ Complete | Dark Experience section for visual contrast and rhythm |

---

### 9. Basic Contact / Call-to-Action section

| Status | Details |
|--------|---------|
| ✅ Complete | Studio address, phone, and email |
| ✅ Complete | Opening hours (Mon–Fri, Saturday, Sunday) |
| ✅ Complete | Appointment request form with fields: name, email, phone, service, date, notes |
| ✅ Complete | Client-side form validation with error messages |
| ✅ Complete | Success confirmation state after valid submission |
| ✅ Complete | Request Appointment CTA button |

---

### 10. Clean and well-structured front-end code

| Status | Details |
|--------|---------|
| ✅ Complete | Modular React components — one file per section |
| ✅ Complete | Separated data files (`services.js`, `pricing.js`, `testimonials.js`) |
| ✅ Complete | Shared utility for scroll behaviour (`utils/scroll.js`) |
| ✅ Complete | Global styles and reusable classes in `index.css` |
| ✅ Complete | Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>` |
| ✅ Complete | ARIA labels and accessible navigation patterns |
| ✅ Complete | Lint passes (`npm run lint`) |
| ✅ Complete | Production build passes (`npm run build`) |

---

## Technology Used

As permitted by the task brief:

- **React.js** — UI components and interactivity
- **JavaScript (ES modules)** — application logic
- **Tailwind CSS** — responsive styling
- **Vite** — build tooling and dev server
- **HTML5** — semantic structure (via JSX)
- **CSS3** — custom properties, animations, layout utilities

---

## Additional Value (Beyond Minimum Requirements)

The following extras demonstrate attention to detail and UX quality:

1. **Gallery section** — visual showcase of salon spaces and treatments
2. **Testimonials section** — client social proof
3. **Experience section** — brand values (Personalised Care, Expert Artistry, Premium Products, Calming Space)
4. **Form validation** — required fields, email format checks, inline errors
5. **Accessibility** — skip-friendly structure, ARIA labels, semantic landmarks
6. **Footer social links** — Instagram, X (Twitter), Facebook
7. **Mobile menu polish** — body scroll lock, clean open/close behaviour
8. **Equal-height cards** — consistent layout in Services, Pricing, and Testimonials

---

## How to Run and Review

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173

# 4. (Optional) Production build
npm run build
npm run preview
```

---

## Suggested Review Flow for Evaluator

1. Open the site on **desktop** — scroll through all sections top to bottom
2. Test **navbar links** — Home, About, Services, Pricing, Contact
3.3. Click **Book Appointment** and **Book Now** CTAs — confirm they scroll to the appointment form
4. Resize to **mobile** (or use DevTools) — test hamburger menu and layout
5. Fill out the **Contact form** — test validation and success state
6. Review **Services** and **Pricing** content for clarity and completeness

---

## Conclusion

This submission fully satisfies the technical task requirements for a Beauty Parlour single-page website. It demonstrates:

- Front-end development skills (React, CSS, JavaScript)
- Responsive design across devices
- Attention to visual detail and brand consistency
- Clean, maintainable code structure
- A polished, professional user experience suitable for a real beauty salon brand

---

*For setup instructions and project structure, see [README.md](./README.md).*
