# Swapno Mondol — Backend portfolio

Personal site for [Swapno Mondol](https://github.com/Swapno963): backend engineer focused on APIs, PostgreSQL, controlled AI execution (LangGraph / MCP policy), and production delivery (Docker, Terraform, GitHub Actions, AWS).

One-liner I use everywhere: *Backend engineer building APIs, data systems, and controlled AI execution — then putting them on AWS with Docker, Terraform, and CI/CD.*

The visual shell started from a Vite + React + Three.js template. The identity, copy, projects, experience, and case studies are mine. There is no tutorial persona, no fake FAANG employment, and no placeholder “Car Rent” cards.

## Stack

- React, Vite, Tailwind CSS, Framer Motion
- Optional 3D (desktop only, skipped on small screens and `prefers-reduced-motion`)
- EmailJS for the contact form (falls back to mailto)

## Run locally

```bash
git clone https://github.com/Swapno963/Personal_Portfolio_3D.git
cd Personal_Portfolio_3D
npm install --legacy-peer-deps
cp .env.example .env   # optional EmailJS keys
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Pages

- `/` — hiring homepage (about, projects, experience, skills, contact)
- `/projects/education-saas`
- `/projects/querymind`
- `/projects/shopverse`

Resume PDF: `public/Swapno-Mondol-Backend-DevOps.pdf` (source HTML: `resume/Swapno-Mondol-Backend-DevOps.html`)

## Links

- GitHub: [github.com/Swapno963](https://github.com/Swapno963)
- LinkedIn: [linkedin.com/in/swapno-mondol-me](https://www.linkedin.com/in/swapno-mondol-me)
- Email: swapno963@gmail.com
