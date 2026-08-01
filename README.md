# 🌌 Valerii — Fullstack AI Developer & Systems Architect Portfolio

> **Cinematic Scrollytelling & Interactive AI Showcase**  
> Immersive web portfolio featuring 3D Canvas WebGL/Particle engines, interactive CLI terminal, live AI bot simulator, and macOS-style magnetic dock navigation.

---

## ⚡ Tech Stack

- **Frontend Core:** HTML5, Modern CSS3 (Vanilla + Tailwind CSS CDN)
- **Animation & Graphics:** Custom 60+ FPS Canvas Engines (3D Particle Cube, Beams Background, Warp Starfield Tunnel)
- **Icons & Typography:** Phosphor Icons, Google Fonts (*Plus Jakarta Sans*, *Outfit*, *JetBrains Mono*)
- **Logic & Systems:** Vanilla JavaScript (ES6+), Client-side i18n Engine (RU/EN), Interactive Terminal CLI, Live Bot Scenario Simulator
- **Optimization:** `IntersectionObserver` & Tab Visibility API for zero-lag background GPU/CPU pause

---

## 📁 Repository Structure

```
clever-hertz/
├── index.html            # Main portfolio landing page (SEO OpenGraph & Schema.org ready)
├── styles.css            # Custom CSS animations (Shiny CTA, Reticle cursor, Dock tooltips)
├── app.js                # Core JavaScript engines (3D Canvases, i18n, CLI, Bot simulation)
├── resume_printable.html # Print/PDF-ready formal CV sheet
└── README.md             # Project documentation
```

---

## 🚀 Key Features

1. **3D Particle Stardust Cube Engine:** Real-time 3D particle assembly and scroll-driven explosion animation.
2. **Dynamic 1000R Curved Container Scroll Showcase:** 3D perspective display cards highlighting commercial CRM, AI agents, and Linux infrastructure.
3. **Interactive Skill CLI Portal:** Functional terminal supporting `skills`, `devops`, `education`, and `clear` commands with safe DOM escaping.
4. **Live AI Agent Simulator:** Interactive chat component demonstrating RAG database slot retrieval and calendar sync.
5. **Full Bicultural i18n:** Instant client-side language toggle between Russian and English.
6. **Smart GPU/CPU Idle Management:** Pauses canvas loops automatically when scrolled out of view or tab is hidden.

---

## 💻 Local Preview & Running

No complex build pipeline required! Simply serve the static files:

```bash
# Using Python builtin server
python -m http.server 8000

# Or using npx serve
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 📜 License

MIT © [Valerii](https://github.com/Valerador)
