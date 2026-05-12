# Bench Aeron Casin — Portfolio

A professional, animated portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (optional — CSS animations used throughout)
- **Lucide React** icons

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, animations, custom cursor
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Main page (assembles all sections)
└── components/
    ├── Navbar.tsx        # Fixed navbar with active section tracking
    ├── Hero.tsx          # Home section with typewriter + particle canvas
    ├── About.tsx         # About Me with stats
    ├── Education.tsx     # Timeline education section
    ├── Projects.tsx      # Project cards with expand/collapse
    ├── Skills.tsx        # Skill categories + full tag cloud
    ├── Certificates.tsx  # Certificate grid
    ├── Contact.tsx       # Contact form + social links
    ├── Footer.tsx        # Footer
    ├── CustomCursor.tsx  # Custom cursor effect
    └── useReveal.ts      # Scroll reveal hook (IntersectionObserver)
```

## ⚡ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## 🎨 Customization

### Update your personal links
In `Hero.tsx` and `Contact.tsx`, update the social links:
```tsx
{ icon: Facebook, href: "https://facebook.com/YOUR_PROFILE", ... },
{ icon: Github,   href: "https://github.com/YOUR_USERNAME",  ... },
{ icon: Linkedin, href: "https://linkedin.com/in/YOUR_ID",   ... },
{ icon: Mail,     href: "mailto:YOUR_EMAIL",                 ... },
```

### Add your CV
Place your `cv.pdf` inside the `/public` folder. The download button in Hero links to `/cv.pdf`.

### Add project screenshots
In `Projects.tsx`, replace the emoji placeholder in the image area with:
```tsx
import Image from "next/image";
// Replace the emoji div with:
<Image src="/projects/nfc-system.jpg" alt="NFC System" fill className="object-cover" />
```

Place images in `/public/projects/`.

### Add certificate images
In `Certificates.tsx`, replace the placeholder div with:
```tsx
<Image src="/certs/cisco-python.jpg" alt="Certificate" width={300} height={200} className="rounded-xl object-cover" />
```

Place images in `/public/certs/`.

### Update contact email
Replace `benchaeron@email.com` with your real email in both `Hero.tsx` and `Contact.tsx`.

### Connect contact form
In `Contact.tsx`, replace the simulated send with a real email service (Resend, EmailJS, Formspree, etc.):
```tsx
// Example with Formspree:
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

## 🎯 Features
- ✅ Custom animated cursor (desktop)
- ✅ Particle network canvas (Hero)
- ✅ Typewriter effect cycling through roles
- ✅ Scroll-triggered reveal animations (IntersectionObserver)
- ✅ Fixed navbar with active section highlighting
- ✅ Mobile-responsive hamburger menu
- ✅ Animated gradient borders
- ✅ Project cards with expand/collapse details
- ✅ Skills organized by category
- ✅ Contact form with loading + success state
- ✅ Grid background texture + noise overlay

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy

Push to GitHub and deploy on [Vercel](https://vercel.com) — zero config needed for Next.js.

---

Built with ❤️ for Bench Aeron Casin | BSIT @ DLSU-D
