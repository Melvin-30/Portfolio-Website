# Melvin Dominic Fernandes — Developer Portfolio

<div align="center">

  <img src="public/favicon.svg" alt="MDF Logo" width="64" height="64" />

  <h3>Computer Engineering Student & Software Developer</h3>
  <p>A modern, high-performance developer portfolio built with React 19, Vite, and Tailwind CSS v4.</p>

  <p>
    <a href="https://melvin-30.github.io/Portfolio-Website/"><strong>Explore Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Melvin-30">GitHub Profile</a>
    ·
    <a href="https://www.linkedin.com/in/melvin-fernandes-43329b34b">LinkedIn</a>
    ·
    <a href="mailto:fernandesmelvin30@gmail.com">Contact</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-14.8-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-teal?style=flat-square" alt="License" />
  </p>

</div>

---

## 📌 Overview

This repository houses the personal developer portfolio for **Melvin Dominic Fernandes**, pursuing a **B.E. in Computer Engineering** at the **University of Mumbai**. 

Engineered with modern frontend best practices, this portfolio features strictly authentic credentials, verifiable academic achievements, real-world open-source software projects, and a custom dual-theme design system.

---

## ✨ Key Features

- **⚡ Instant Dual-Theme Engine (Light / Dark)**:
  - Semantic CSS variable system with light warm off-white (`#FBFBF9`) and dark charcoal (`#0F1115`) palettes.
  - Zero-flash theme initialization via inline head script, system `prefers-color-scheme` detection, and persistent `localStorage` syncing.
- **🎯 Dynamic Hero Section**:
  - Two-column responsive layout with portrait framing, ambient teal lighting halo, and smooth entrance micro-interactions.
  - Quick action CTAs linking directly to Projects, Contact, GitHub, and LinkedIn.
- **💼 Featured Software Projects**:
  - **Attendance Management System**: Cross-platform React Native (Expo) app with Firebase Auth, Cloud Firestore real-time sync, and multi-sheet styled Excel report exports (`xlsx-js-style`).
  - **Std 12th IT Subject SOPs Portal**: Comprehensive EdTech mock exam portal for Maharashtra State Board Class 12 students (Science & Commerce).
  - **Personal Developer Portfolio**: Modern single-page application built with clean component architecture and accessible design.
- **🛠️ Categorized Skills Inventory**:
  - Organized across 6 domains: *Programming Languages*, *Frontend*, *Backend*, *Databases*, *Developer Tools*, and *AI & Emerging Tech*.
- **📜 Verified Certifications Showcase**:
  - Interactive certification browser featuring official preview thumbnails, credential IDs, and issuer verification links across Python, Database, Cybersecurity, and Office Suites.
- **📬 Client-Side Validated Contact Channel**:
  - Interactive multi-state message form alongside verified communication channels (Email, GitHub, LinkedIn, and University location).
- **♿ SEO & Accessibility**:
  - OpenGraph / Twitter meta tags, semantic HTML5 landmarks, responsive viewport support, and WCAG-compliant color contrast.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Iconography** | [Lucide React](https://lucide.dev/) + Standalone Brand SVGs |
| **Quality & Linter** | [Oxlint](https://oxc.rs/) |
| **Typography** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── certificates/          # Verified certificate documents & PNG thumbnails
│   ├── profile/               # Profile portrait assets (Melvin.png)
│   ├── favicon.svg            # Minimalist MDF monogram brand mark
│   └── icons.svg              # SVG symbol definitions
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── icons/             # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── ContactForm.jsx    # Validated contact form
│   │   ├── Navbar.jsx         # Navigation bar with scroll-spy & theme toggle
│   │   ├── ProjectCard.jsx    # Project showcase cards
│   │   ├── SkillCard.jsx      # Categorized skill chips
│   │   ├── ThemeToggle.jsx    # Animated light/dark toggle button
│   │   └── ...
│   ├── config/                # Global configuration (theme preferences)
│   ├── context/               # React Context (ThemeProvider & useTheme hook)
│   ├── data/                  # Single source of truth data files
│   │   ├── certifications.js  # Authentic certificate registry
│   │   ├── projects.js        # Featured projects data & repository links
│   │   ├── skills.js          # Technical skills & category groupings
│   │   └── socialLinks.js     # Verified contact & social profiles
│   ├── sections/              # Page sections (Hero, About, Skills, Projects, Contact)
│   ├── App.jsx                # Root application layout
│   ├── index.css              # Tailwind CSS imports & theme variables
│   └── main.jsx               # Application entry point
├── .gitignore
├── .oxlintrc.json             # Oxlint configuration
├── index.html                 # Main HTML document with SEO meta & anti-flash script
├── package.json
└── vite.config.js             # Vite configuration with React & Tailwind plugins
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and `npm` installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Melvin-30/Portfolio.git
   cd Portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

### Running Locally

Launch the Vite local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`.

### Production Build

Create an optimized, minified production bundle in the `dist/` directory:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Code Quality & Linting

Run Oxlint to check code quality:
```bash
npm run lint
```

---

## 🌐 Deployment

This portfolio is configured for zero-configuration deployment to static hosting platforms:

### Deploying to GitHub Pages
1. Build the production assets:
   ```bash
   npm run build
   ```
2. Commit and deploy the contents of `dist/` or configure GitHub Actions with the official Vite deployment workflow.

### Deploying to Vercel / Netlify
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 👤 Author

**Melvin Dominic Fernandes**
- **Degree**: B.E. in Computer Engineering, University of Mumbai
- **GitHub**: [@Melvin-30](https://github.com/Melvin-30)
- **LinkedIn**: [in/melvin-fernandes-43329b34b](https://www.linkedin.com/in/melvin-fernandes-43329b34b)
- **Email**: [fernandesmelvin30@gmail.com](mailto:fernandesmelvin30@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
