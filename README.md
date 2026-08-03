# 🌌 Valerii — Fullstack AI Developer & Systems Architect Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/n8n-Automations-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Playwright-E2E_Testing-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/Linux-Ubuntu_Server-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="Ubuntu" />
</p>

> **Interactive Web Portfolio & Engineering Showcase**  
> High-performance web portfolio featuring 3D Canvas WebGL/Retina particle engines, interactive CLI terminal, live AI bot simulator, letter-by-letter scroll scrubbing, and macOS-style magnetic dock navigation.

---

## 🚀 Featured Commercial Projects Showcase

While commercial project codebases remain in private repositories due to NDA and IP protection, below is an overview of key systems I've architected and shipped:

### 1. 🏢 Atlas CRM — Multi-Tenant Business Automation Platform ([crm.atlasauto.space](https://crm.atlasauto.space))
* **Role:** Lead Architect & Full-Stack Developer
* **Live App:** [crm.atlasauto.space](https://crm.atlasauto.space)
* **Tech Stack:** React, Vite, Tailwind CSS, Supabase (PostgreSQL), Playwright, GitHub Actions, Nginx, Linux Ubuntu
* **Highlights:** Commercial MVP designed for niche service businesses. Features multi-tenant row-level data privacy (**Supabase RLS**), automated E2E regression test suites with Playwright & Vitest, and zero-downtime CI/CD deployments to dedicated Linux servers.

### 2. 🌐 Atlas Studio — Web Development & Automations ([atlasauto.space](https://atlasauto.space))
* **Role:** Founder & Lead Web Developer
* **Live Website:** [atlasauto.space](https://atlasauto.space)
* **Tech Stack:** React, Tailwind CSS, n8n, Supabase, Webhooks, Figma
* **Highlights:** Custom web development and business automation agency. Engineering high-converting commercial websites, custom SPAs, lead-capture systems, and automated messaging pipelines for clients.

### 3. 🤖 AI Booking Agent & RAG Context Pipeline
* **Role:** AI Automation & Workflow Engineer
* **Tech Stack:** Telepilot API (Telegram Engine), Node.js, PostgreSQL, Google Calendar API, n8n
* **Highlights:** Autonomous AI booking assistant operating directly through Telegram user accounts. Fetches real-time slot availability, business pricing, and rules via RAG pipelines, negotiates booking times, and dispatches automated notifications.

### 4. 🛡 Server Infrastructure & Security Hardening
* **Role:** DevOps & Reliability Engineer
* **Tech Stack:** Linux Ubuntu 24.04, Nginx Reverse Proxy, Docker, Cloudflare WAF, SSL, GitHub Actions
* **Highlights:** Automated setup and hardening of Linux production servers with automated SSL renewal, Cloudflare DDoS protection, containerized microservices, and CI/CD pipelines.

---

## ⚡ Portfolio Tech Stack & Features

- **3D Retina Canvas Engine:** Locked 60-120 FPS high-DPI `devicePixelRatio` 3D particle cube animation with high-res 128px bokeh orb sprites and wireframe edge definition.
- **Scroll-Linked Letter Scrubbing:** 100% scroll-driven letter-by-letter character lighting & blur transition engine across all section headings and titles.
- **Interactive CLI Terminal:** Functional terminal supporting custom commands (`skills`, `devops`, `education`, `clear`) with safe DOM escaping.
- **Client-Side i18n Engine:** Instant, seamless switching between Russian and English without full page reloads.
- **Resource & GPU Optimization:** Automatic pause of canvas rendering loops when scrolled out of view or tab is hidden via Page Visibility API.

---

## 📁 Repository Structure

```text
clever-hertz/
├── index.html            # Main portfolio landing page (SEO OpenGraph & Schema.org ready)
├── styles.css            # Custom CSS animations (2.5D scroll reveal, Reticle cursor, Glass dock)
├── app.js                # Core JavaScript engines (3D Canvases, i18n, CLI, Bot simulation, Scrubbing)
├── resume_printable.html # Print/PDF-ready formal CV sheet (RU/EN dynamic params)
└── README.md             # Project documentation & commercial showcase
```

---

## 💻 Local Preview & Running

No complex build steps required! Simply serve the static files:

```bash
# Using Python builtin server
python -m http.server 8000

# Or using npx serve
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 📬 Contact & Links

- 💬 **Telegram:** [@Easyvaleriy](https://t.me/Easyvaleriy)
- 📧 **Email:** valeador555@gmail.com
- 🌐 **GitHub Profile:** [github.com/Valerador](https://github.com/Valerador)

---

## 📜 License

MIT © [Valerii](https://github.com/Valerador)
