<div align="center">

# Fitness Sports Center — Web Application

**A production-ready promotional web app for a local fitness brand, built as part of a Web Development Internship Evaluation.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Azure%20Static%20Web%20Apps-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)](https://kind-beach-0ca5a7e00.4.azurestaticapps.net/)
[![Figma Design](https://img.shields.io/badge/UI%2FUX%20Design-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/tJrNmLRhrQ4uS2UBp3YPkV/Untitled?node-id=0-1&t=IbRwhm2hi6X5VnSY-1)

</div>

---

## Overview

The Fitness Sports Center Web App is a high-impact, conversion-focused promotional website designed to represent a premium fitness brand and drive new member acquisition. It delivers a refined user experience through scroll-triggered animations, responsive layout systems, real-time interactivity, and a fully validated contact pipeline — all deployed on a managed Azure cloud infrastructure with automated CI/CD.

This project was developed under a **Web Development Internship Evaluation** and is held to production-grade standards in code quality, UI fidelity, and deployment architecture.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 (Vite) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Deployment | Azure Static Web Apps |
| CI/CD | GitHub Actions |
| Design & Prototyping | Figma |

---

## Core Features

- **Hero Section** — Bold brand statement with animated headline, primary CTA, and visual hierarchy optimized for conversion.
- **About Section** — Brand narrative, trust signals, and facility showcase with engaging scroll-reveal transitions.
- **Services Section** — Structured service cards in a responsive grid, with real-time search and filter capability.
- **Contact Section** — Fully operational inquiry form with client-side validation, regex enforcement, and dynamic state feedback.

---

## Bonus Features

The following features exceed the standard evaluation scope and demonstrate advanced frontend engineering:

| Feature | Implementation Detail |
|---|---|
| **Dark / Light Mode** | Full theme switching via custom CSS variable overrides; persists across interactions |
| **Real-Time Search & Filter** | Dynamic client-side filtering on the Services section; zero-latency, no page reload |
| **Premium Motion Design** | Scroll-triggered staggered reveals and custom text entry effects via Framer Motion |
| **Advanced Form Handling** | Regex-based field validation with granular per-field error states and success feedback |
| **Cloud Deployment (Azure)** | Hosted on Azure Static Web Apps with an automated GitHub Actions CI/CD pipeline |

---

## Local Development

**Prerequisites:** Node.js ≥ 18 and npm installed.

```bash
# 1. Clone the repository
git clone https://github.com/Wimukthi316/Fitness-Sports-Center-Web.git

# 2. Navigate to the frontend workspace
cd Fitness-Sports-Center-Web/frontend

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Deployment

This project is continuously deployed via **Azure Static Web Apps** with a GitHub Actions workflow. Every push to the `main` branch triggers an automated build and deploy pipeline — no manual intervention required.

> Live URL: [https://kind-beach-0ca5a7e00.4.azurestaticapps.net/](https://kind-beach-0ca5a7e00.4.azurestaticapps.net/)

---

## Evaluation Checklist

| Criterion | Status |
|---|---|
| Code Quality | Complete |
| UI/UX Design | Complete |
| Responsiveness | Complete |
| Functionality | Complete |
| GitHub Usage | Complete |
| Deployment | Complete |

---

## Author

**Wimukthi Bandara**
GitHub: [@Wimukthi316](https://github.com/Wimukthi316)
