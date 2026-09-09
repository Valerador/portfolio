// ==========================================================================
// Linear / Vercel Dark Tech Portfolio Engine
// Zero-Lag, Zero-Bloat, 120 FPS Interaction Architecture
// ==========================================================================

let currentLang = 'RU';

const translations = {
    RU: {
        'nav.home': 'Главная',
        'nav.projects': 'Проекты',
        'nav.ecosystem': 'Инструменты',
        'nav.architecture': 'Архитектура',
        'nav.stack': 'Стек',
        'nav.contact': 'Контакты',
        'nav.cv': 'Открыть CV',

        'hero.status': 'Открыт к предложениям & Вакансиям',
        'hero.line1': 'Разработка полносистемных ИИ-сервисов',
        'hero.line2': 'и защищенной серверной инфраструктуры',
        'hero.sub': 'Архитектура коммерческих React + Supabase RLS платформ, автономных n8n-пайплайнов, E2E автотестов и защищенного Linux DevOps.',
        'hero.cta.tg': 'Написать в Telegram',
        'hero.cta.cv': 'Открыть Резюме (PDF)',

        'metrics.m1': 'Проектов и ИИ-ботов',
        'metrics.m2': 'СУБД-изоляция доступа',
        'metrics.m3': 'Автодеплой на Linux',
        'metrics.m4': 'Playwright & Vitest',

        'projects.eyebrow': 'Selected Work & Production MVPs',
        'projects.title': 'Реализованные проекты и сервисы',
        'projects.swipe': 'Свайп для просмотра проектов →',

        'p1.badge': 'Коммерческий MVP CRM',
        'p1.title': 'Atlas CRM: Мультитенантная платформа автоматизации',
        'p1.desc': 'Полнофункциональная CRM-система на React 19 + Vite + Supabase. Защищена Row Level Security (RLS) на уровне СУБД, покрыта автотестами Playwright & Vitest, автоматический деплой через GitHub Actions на Linux-сервер.',
        'p1.f1': 'Изоляция тенантов и строгие политики доступа в БД.',
        'p1.f2': 'GitHub Actions → Vitest & Playwright → Ubuntu Linux.',

        'p2.badge': 'AI Agent & Automation',
        'p2.title': 'ИИ-Ассистент Записи & RAG Context',
        'p2.desc': 'Интеллектуальный бот для диалогов от лица Telegram-аккаунта. Динамически извлекает регламенты и слоты из PostgreSQL, согласует время и ставит запись в Google Calendar.',
        'p2.f1': 'Точный поиск правил и свободных слотов.',
        'p2.f2': 'Двустороннее обновление расписания в Google.',

        'p3.badge': 'DevOps & Security',
        'p3.title': 'Серверный контур & Cloudflare WAF',
        'p3.desc': 'Развертывание и сопровождение Linux Ubuntu серверов. Настройка Nginx Reverse Proxy, Certbot SSL, защита Cloudflare WAF, изоляция в Docker и мониторинг PM2.',

        'p4.badge': 'Web Studio & Solutions',
        'p4.title': 'Atlas Studio: Разработка веб-сервисов и автоматизаций',
        'p4.desc': 'Инженерная веб-студия и студия автоматизаций. Создание коммерческих лендингов, SPA-сервисов, интеграция сценариев продаж и CRM-пайплайнов для бизнеса под ключ.',
        'p4.f1': 'Быстрый отклик, Core Web Vitals и конверсионная верстка.',
        'p4.f2': 'Связка вебхуков форм с n8n, CRM и мессенджерами.',

        'eco.eyebrow': 'Autonomous AI & Agent Ecosystem',
        'eco.title': 'Экосистема ИИ-агентов и сред разработки',
        'eco.sub': 'Автономные агенты, CLI-инструменты и оркестраторы (перетаскивайте или вращайте кольцо)',
        'eco.c1.desc': 'Автономная среда агентной разработки и мультиагентных систем.',
        'eco.c2.desc': 'Автоматизация рефакторинга, генерация тестов и терминальные пайплайны.',
        'eco.c3.desc': 'Синтез программной логики, преобразование алгоритмов и интеграции.',
        'eco.c4.desc': 'Исполнение многошаговых сценариев и автоматизированный веб-поиск.',
        'eco.c5.desc': 'Собственный движок мультитенантной CRM с защитой Supabase RLS.',
        'eco.c6.desc': 'Оркестрация очередей вебхуков, баз данных и мессенджеров на Linux.',

        'arch.eyebrow': 'Systems Architecture & Real Engineering',
        'arch.title': 'Инспектор системной архитектуры',
        'arch.sub': 'Настоящие инженерные решения: от политик изоляции данных в СУБД до автоматизированных очередей и CI/CD деплоя.',
        'arch.tab1': '1. Supabase RLS & Auth',
        'arch.tab2': '2. n8n & Telegram Pipeline',
        'arch.tab3': '3. GitHub Actions CI/CD',

        'arch.rls.h': 'Многоарендная безопасность на уровне строк (PostgreSQL RLS)',
        'arch.rls.p': 'Клиент не может получить чужие данные даже при прямой компрометации фронтенда: доступ фильтруется СУБД по auth.uid().',
        
        'arch.n8n.h': 'Автономный пайплайн обработки лидов через n8n Webhook',
        'arch.n8n.p': 'Входящее сообщение от Telegram API валидируется, обогащается RAG-контекстом из базы и направляется в календарь.',

        'arch.cicd.h': 'Автоматизированный CI/CD пайплайн с блокировкой деплоя',
        'arch.cicd.p': 'Сборка деплоится на Linux Ubuntu только после успешного прохождения 100% Vitest и Playwright тестов.',

        'stack.eyebrow': 'Technologies & Architecture Stack',
        'stack.title': 'Технологический стек и квалификация',
        'stack.swipe': 'Свайп для просмотра стека →',
        'stack.c1.title': 'Frontend Engineering',
        'stack.c1.desc': 'Современные SPA и конверсионные интерфейсы.',
        'stack.c2.title': 'Backend & Database',
        'stack.c2.desc': 'Защита данных и СУБД-логика.',
        'stack.c3.title': 'AI & Automation',
        'stack.c3.desc': 'Автономные агенты и сценарии.',
        'stack.c4.title': 'DevOps & Testing',
        'stack.c4.desc': 'Инфраструктура и надежность.',

        'contact.title': 'Связаться и обсудить проект',
        'contact.sub': 'Открыт к предложениям по полной занятости, архитектурным контрактам и разработке ИИ-систем. Ответ в Telegram в течение 15 минут.',
        'contact.tgdesc': 'Быстрая связь для вопросов и офферов.',
        'contact.emaildesc': 'Прямая почта для документации и ТЗ.',
        'contact.ghdesc': 'Исходный код, коммиты и архитектура.',

        'footer.cv': 'Печатная версия резюме (PDF)',
        'a11y.skip': 'Перейти к основному контенту'
    },
    EN: {
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.ecosystem': 'Tooling',
        'nav.architecture': 'Architecture',
        'nav.stack': 'Stack',
        'nav.contact': 'Contact',
        'nav.cv': 'Open CV',

        'hero.status': 'Available for Fullstack AI & Architecture Roles',
        'hero.line1': 'Engineering Autonomous AI Platforms',
        'hero.line2': 'and Resilient Cloud Infrastructure',
        'hero.sub': 'Architecting commercial React + Supabase RLS platforms, autonomous n8n workflows, E2E test suites, and hardened Linux DevOps.',
        'hero.cta.tg': 'Message on Telegram',
        'hero.cta.cv': 'Open Resume (PDF)',

        'metrics.m1': 'Production MVPs & Bots',
        'metrics.m2': 'Database RLS Isolation',
        'metrics.m3': 'Linux Automated Deploy',
        'metrics.m4': 'Playwright & Vitest',

        'projects.eyebrow': 'Selected Work & Production MVPs',
        'projects.title': 'Selected Projects & Solutions',
        'projects.swipe': 'Swipe to browse projects →',

        'p1.badge': 'Commercial MVP CRM',
        'p1.title': 'Atlas CRM: Multi-Tenant Automation Platform',
        'p1.desc': 'Full-featured CRM platform built on React 19 + Vite + Supabase. Hardened with Row Level Security (RLS), covered with Playwright & Vitest automated suites, auto-deployed via GitHub Actions to Linux Ubuntu.',
        'p1.f1': 'Tenant isolation & strict database access policies.',
        'p1.f2': 'GitHub Actions → Vitest & Playwright → Ubuntu Linux.',

        'p2.badge': 'AI Agent & Automation',
        'p2.title': 'AI Booking Agent & RAG Context',
        'p2.desc': 'Smart agent executing user dialogue on behalf of Telegram account (Telegram API). Dynamically fetches slots & rules from DB, negotiates time, and dispatches notifications.',
        'p2.f1': 'Accurate database rule and slot retrieval.',
        'p2.f2': 'Two-way Google Calendar synchronization.',

        'p3.badge': 'DevOps & Security',
        'p3.title': 'Server Infrastructure & Cloudflare WAF',
        'p3.desc': 'Deployment and management of Linux Ubuntu servers. Nginx Reverse Proxy configuration, Certbot SSL automation, Cloudflare WAF routing, Docker containers and PM2.',

        'p4.badge': 'Web Studio & Solutions',
        'p4.title': 'Atlas Studio: Web Engineering & Automations',
        'p4.desc': 'Custom web development and business automation studio. Engineering commercial websites, high-converting landing pages, sales workflows, and CRM pipelines.',
        'p4.f1': 'Fast response, Core Web Vitals and high-converting UX.',
        'p4.f2': 'Seamless webhook pipelines between forms and CRM.',

        'eco.eyebrow': 'Autonomous AI & Agent Ecosystem',
        'eco.title': 'AI Agent Ecosystem & Developer Tooling',
        'eco.sub': 'Autonomous agents, CLI workflows, and orchestrators (drag or swipe to spin)',
        'eco.c1.desc': 'Autonomous agentic development environment and multi-agent systems.',
        'eco.c2.desc': 'Refactoring automation, test generation, and terminal pipelines.',
        'eco.c3.desc': 'Code synthesis, algorithmic transformations, and integrations.',
        'eco.c4.desc': 'Multi-step autonomous execution and web agent tasks.',
        'eco.c5.desc': 'Proprietary multi-tenant CRM engine hardened with Supabase RLS.',
        'eco.c6.desc': 'Orchestration of webhook queues, databases, and messaging on Linux.',

        'arch.eyebrow': 'Systems Architecture & Real Engineering',
        'arch.title': 'Systems Architecture Inspector',
        'arch.sub': 'Real engineering solutions: from database row-level security to automated queues and CI/CD pipelines.',
        'arch.tab1': '1. Supabase RLS & Auth',
        'arch.tab2': '2. n8n & Telegram Pipeline',
        'arch.tab3': '3. GitHub Actions CI/CD',

        'arch.rls.h': 'Multi-Tenant Row-Level Security (PostgreSQL RLS)',
        'arch.rls.p': 'Clients cannot access unauthorized rows even if frontend is compromised: data access is strictly bounded in DB via auth.uid().',
        
        'arch.n8n.h': 'Autonomous Lead Orchestration via n8n Webhook',
        'arch.n8n.p': 'Incoming message from Telegram API is validated, enriched with PostgreSQL RAG context, and scheduled to calendar.',

        'arch.cicd.h': 'Automated CI/CD Pipeline with Quality Gateways',
        'arch.cicd.p': 'Production build deploys to Linux Ubuntu only after 100% test pass rate across Vitest and Playwright.',

        'stack.eyebrow': 'Technologies & Architecture Stack',
        'stack.title': 'Technical Stack & Qualifications',
        'stack.swipe': 'Swipe to browse stack →',
        'stack.c1.title': 'Frontend Engineering',
        'stack.c1.desc': 'Modern SPAs and high-converting interfaces.',
        'stack.c2.title': 'Backend & Database',
        'stack.c2.desc': 'Data protection and database logic.',
        'stack.c3.title': 'AI & Automation',
        'stack.c3.desc': 'Autonomous agents and workflows.',
        'stack.c4.title': 'DevOps & Testing',
        'stack.c4.desc': 'Infrastructure reliability and security.',

        'contact.title': "Let's Discuss Your Project",
        'contact.sub': 'Open for full-time opportunities, architectural contracts, and custom AI systems development. Reply on Telegram within 15 minutes.',
        'contact.tgdesc': 'Fast direct communication for inquiries and offers.',
        'contact.emaildesc': 'Direct inbox for contracts and specifications.',
        'contact.ghdesc': 'Source code, commits, and system architecture.',

        'footer.cv': 'Printable Resume (PDF)',
        'a11y.skip': 'Skip to main content'
    }
};

function applyLanguage(lang) {
    currentLang = lang;

    // Update language toggle button label
    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
        if (currentLang === 'RU') {
            langBtnText.innerHTML = `RU / <span class="text-zinc-500">EN</span>`;
        } else {
            langBtnText.innerHTML = `<span class="text-zinc-500">RU</span> / EN`;
        }
    }

    // Update all i18n text nodes
    const dict = translations[currentLang];
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict && dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update PDF resume links to propagate current language
    const cvLinks = document.querySelectorAll('a[href*="resume_printable.html"]');
    cvLinks.forEach(link => {
        link.href = `resume_printable.html?lang=${currentLang}`;
    });
}

function toggleLanguage() {
    const nextLang = currentLang === 'RU' ? 'EN' : 'RU';
    applyLanguage(nextLang);
}

// ==========================================================================
// Architecture Inspector Tab Switcher
// ==========================================================================
function switchArchTab(tabKey) {
    const tabs = ['rls', 'n8n', 'cicd'];
    
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-btn-${t}`);
        const pane = document.getElementById(`tab-pane-${t}`);
        
        if (t === tabKey) {
            if (btn) btn.classList.add('active');
            if (pane) pane.classList.remove('hidden');
        } else {
            if (btn) btn.classList.remove('active');
            if (pane) pane.classList.add('hidden');
        }
    });
}

// ==========================================================================
// Global Mouse & Scroll Telemetry
// ==========================================================================
let mouseX = -9999;
let mouseY = -9999;
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}, { passive: true });

let rawScrollVelocity = 0;
let smoothScrollVelocity = 0;
let lastScrollY = window.scrollY;
let lastScrollTime = performance.now();
window.addEventListener('scroll', () => {
    const now = performance.now();
    const dt = Math.max(1, now - lastScrollTime);
    const delta = window.scrollY - lastScrollY;
    rawScrollVelocity = (delta / dt) * 16;
    lastScrollY = window.scrollY;
    lastScrollTime = now;
}, { passive: true });

// ==========================================================================
// 1. COSMIC STARFIELD ENGINE (Crisp High-DPI Depth, Lensing, Zero CPU Offscreen)
// ==========================================================================
function initStarfieldEngine() {
    const starfieldCanvas = document.getElementById('starfield');
    if (!starfieldCanvas) return;

    const sCtx = starfieldCanvas.getContext('2d');
    let sWidth = 0;
    let sHeight = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    function resizeStarfield() {
        sWidth = window.innerWidth;
        sHeight = window.innerHeight;
        starfieldCanvas.width = sWidth * dpr;
        starfieldCanvas.height = sHeight * dpr;
        starfieldCanvas.style.width = `${sWidth}px`;
        starfieldCanvas.style.height = `${sHeight}px`;
        sCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeStarfield();
    window.addEventListener('resize', resizeStarfield);

    const isMobileScreen = window.innerWidth < 768;
    const numDust = isMobileScreen ? 160 : 360;
    const dustParticles = [];

    for (let i = 0; i < numDust; i++) {
        const isHighlight = Math.random() > 0.88;
        dustParticles.push({
            x: (Math.random() - 0.5) * sWidth * 2.2,
            y: (Math.random() - 0.5) * sHeight * 2.2,
            z: Math.random() * 1000 + 1,
            baseSpeed: Math.random() * 1.5 + 0.8,
            size: isHighlight ? (Math.random() * 1.4 + 2.0) : (Math.random() * 0.9 + 1.1),
            color: isHighlight 
                ? '#ffffff' 
                : (Math.random() > 0.6 ? '#ffffff' : (Math.random() > 0.5 ? '#93c5fd' : '#c084fc')),
            baseAlpha: isHighlight ? (Math.random() * 0.15 + 0.85) : (Math.random() * 0.3 + 0.55),
            twinklePhase: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.02 + Math.random() * 0.03,
            isHighlight
        });
    }

    let smoothMouseX = sWidth / 2;
    let smoothMouseY = sHeight / 2;
    let isStarfieldVisible = true;
    let starfieldAnimationFrameId = null;

    function renderStarfield() {
        if (!isStarfieldVisible || document.hidden) {
            starfieldAnimationFrameId = null;
            return;
        }

        sCtx.clearRect(0, 0, sWidth, sHeight);

        if (mouseX > -9000) {
            smoothMouseX += (mouseX - smoothMouseX) * 0.05;
            smoothMouseY += (mouseY - smoothMouseY) * 0.05;
        } else {
            smoothMouseX += ((sWidth / 2) - smoothMouseX) * 0.05;
            smoothMouseY += ((sHeight / 2) - smoothMouseY) * 0.05;
        }

        const mouseShiftX = ((smoothMouseX / sWidth) - 0.5) * 120;
        const mouseShiftY = ((smoothMouseY / sHeight) - 0.5) * 120;
        const cx = (sWidth / 2) + mouseShiftX;
        const cy = (sHeight / 2) + mouseShiftY;
        const focalLength = 360;

        smoothScrollVelocity += (rawScrollVelocity - smoothScrollVelocity) * 0.045;
        rawScrollVelocity *= 0.92;

        const absVel = Math.abs(smoothScrollVelocity);
        const velEffect = Math.sign(smoothScrollVelocity) * Math.pow(absVel * 0.05, 0.75);
        const warpMultiplier = Math.max(0.4, 1.0 + velEffect);

        dustParticles.forEach(p => {
            p.twinklePhase += p.twinkleSpeed;
            const twinkleAlpha = 0.85 + Math.sin(p.twinklePhase) * 0.15;
            const currentSpeed = p.baseSpeed * warpMultiplier;

            p.z -= currentSpeed;
            if (p.z <= 1) {
                p.z = 1000;
                p.x = (Math.random() - 0.5) * sWidth * 2.2;
                p.y = (Math.random() - 0.5) * sHeight * 2.2;
            }

            const baseScreenX = cx + (p.x / p.z) * focalLength;
            const baseScreenY = cy + (p.y / p.z) * focalLength;
            const depthProgress = (1000 - p.z) / 1000;
            const currentSize = p.size * Math.max(0.6, depthProgress * 1.3);

            let screenX = baseScreenX;
            let screenY = baseScreenY;

            if (mouseX > -9000) {
                const dx = baseScreenX - mouseX;
                const dy = baseScreenY - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const lensRadius = 140;

                if (dist < lensRadius && dist > 0) {
                    const angle = Math.atan2(dy, dx);
                    const force = Math.pow((lensRadius - dist) / lensRadius, 1.3);
                    const swirlAngle = angle + force * 0.6;
                    const lensedDist = dist + force * 35;
                    screenX = mouseX + Math.cos(swirlAngle) * lensedDist;
                    screenY = mouseY + Math.sin(swirlAngle) * lensedDist;
                }
            }

            const alpha = Math.min(1, p.baseAlpha * twinkleAlpha * (0.35 + depthProgress * 0.65));

            if (alpha > 0.05 && screenX >= -40 && screenX <= sWidth + 40 && screenY >= -40 && screenY <= sHeight + 40) {
                if (p.isHighlight) {
                    const glowR = currentSize * 3.8;
                    const grad = sCtx.createRadialGradient(screenX, screenY, 0, screenX, screenY, glowR);
                    grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
                    grad.addColorStop(0.35, `rgba(168, 85, 247, ${alpha * 0.7})`);
                    grad.addColorStop(1, 'rgba(168, 85, 247, 0)');
                    sCtx.fillStyle = grad;
                    sCtx.beginPath();
                    sCtx.arc(screenX, screenY, glowR, 0, Math.PI * 2);
                    sCtx.fill();
                }

                sCtx.fillStyle = p.isHighlight ? `rgba(255, 255, 255, ${alpha.toFixed(2)})` : p.color;
                sCtx.globalAlpha = alpha;
                sCtx.beginPath();
                sCtx.arc(screenX, screenY, Math.max(0.85, currentSize), 0, Math.PI * 2);
                sCtx.fill();
                sCtx.globalAlpha = 1;
            }
        });

        starfieldAnimationFrameId = requestAnimationFrame(renderStarfield);
    }

    function startStarfieldLoop() {
        if (!starfieldAnimationFrameId && isStarfieldVisible && !document.hidden) {
            starfieldAnimationFrameId = requestAnimationFrame(renderStarfield);
        }
    }

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && isStarfieldVisible) startStarfieldLoop();
    });

    startStarfieldLoop();
}

// ==========================================================================
// 2. 3D RETINA PARTICLE CUBE (Hero Centerpiece, Behind Text with 3D Depth)
// ==========================================================================
function initParticleCubeEngine() {
    const cubeCanvas = document.getElementById('particle-star-canvas');
    if (!cubeCanvas) return;

    const cCtx = cubeCanvas.getContext('2d');
    let cWidth = 0;
    let cHeight = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    function resizeCubeCanvas() {
        const rect = cubeCanvas.parentElement.getBoundingClientRect();
        cWidth = rect.width;
        cHeight = rect.height;

        cubeCanvas.width = cWidth * dpr;
        cubeCanvas.height = cHeight * dpr;
        cubeCanvas.style.width = `${cWidth}px`;
        cubeCanvas.style.height = `${cHeight}px`;

        cCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cCtx.imageSmoothingEnabled = true;
    }

    resizeCubeCanvas();
    window.addEventListener('resize', resizeCubeCanvas);

    // Pre-rendered High-Res Spherical Bokeh Orbs
    function createParticleSprite(coreR, coreG, coreB, haloR, haloG, haloB) {
        const sprCanvas = document.createElement('canvas');
        const size = 96;
        sprCanvas.width = size;
        sprCanvas.height = size;
        const sprCtx = sprCanvas.getContext('2d');
        const center = size / 2;

        const grad = sprCtx.createRadialGradient(center, center, 0, center, center, center);
        grad.addColorStop(0,    `rgba(${coreR}, ${coreG}, ${coreB}, 1.0)`);
        grad.addColorStop(0.35, `rgba(${coreR}, ${coreG}, ${coreB}, 0.9)`);
        grad.addColorStop(0.70, `rgba(${haloR}, ${haloG}, ${haloB}, 0.75)`);
        grad.addColorStop(0.90, `rgba(79, 70, 229, 0.4)`);
        grad.addColorStop(1.0,  `rgba(15, 10, 30, 0)`);

        sprCtx.fillStyle = grad;
        sprCtx.beginPath();
        sprCtx.arc(center, center, center, 0, Math.PI * 2);
        sprCtx.fill();

        return sprCanvas;
    }

    const spriteCore = createParticleSprite(245, 247, 255, 165, 180, 252);
    const spriteEdge = createParticleSprite(255, 255, 255, 129, 140, 248);
    const spriteAmbient = createParticleSprite(230, 235, 250, 192, 132, 252);

    const isMobile = window.innerWidth < 768;
    const cubeSize = isMobile ? 80 : 105;
    const numCubeParticles = isMobile ? 1600 : 2500;
    const cubeParticles = [];

    function isCubeEdgePoint(x, y, z, s) {
        const threshold = s * 0.84;
        let count = 0;
        if (Math.abs(x) >= threshold) count++;
        if (Math.abs(y) >= threshold) count++;
        if (Math.abs(z) >= threshold) count++;
        return count >= 2;
    }

    function generateRicardoChanceCubePoint(halfSize) {
        const mode = Math.random();
        if (mode < 0.45) {
            // 45% 12 Wireframe Edges
            const edgeIndex = Math.floor(Math.random() * 12);
            const t = (Math.random() - 0.5) * 2 * halfSize;
            const s = halfSize;
            let x = 0, y = 0, z = 0;

            switch (edgeIndex) {
                case 0: x = t; y = s; z = s; break;
                case 1: x = t; y = -s; z = s; break;
                case 2: x = t; y = s; z = -s; break;
                case 3: x = t; y = -s; z = -s; break;
                case 4: x = s; y = t; z = s; break;
                case 5: x = -s; y = t; z = s; break;
                case 6: x = s; y = t; z = -s; break;
                case 7: x = -s; y = t; z = -s; break;
                case 8: x = s; y = s; z = t; break;
                case 9: x = -s; y = s; z = t; break;
                case 10: x = s; y = -s; z = t; break;
                default: x = -s; y = -s; z = t; break;
            }
            return { x, y, z, isCore: false, isEdge: true };

        } else if (mode < 0.85) {
            // 40% Outer 6 Faces
            const face = Math.floor(Math.random() * 6);
            const u = (Math.random() - 0.5) * 2 * halfSize;
            const v = (Math.random() - 0.5) * 2 * halfSize;
            const s = halfSize;
            let pt;
            switch (face) {
                case 0: pt = { x: s, y: u, z: v }; break;
                case 1: pt = { x: -s, y: u, z: v }; break;
                case 2: pt = { x: u, y: s, z: v }; break;
                case 3: pt = { x: u, y: -s, z: v }; break;
                case 4: pt = { x: u, y: v, z: s }; break;
                default: pt = { x: u, y: v, z: -s }; break;
            }
            const isEdge = isCubeEdgePoint(pt.x, pt.y, pt.z, halfSize);
            return { ...pt, isCore: false, isEdge };

        } else {
            // 15% Inner Volume & Core
            return {
                x: (Math.random() - 0.5) * 1.6 * halfSize,
                y: (Math.random() - 0.5) * 1.6 * halfSize,
                z: (Math.random() - 0.5) * 1.6 * halfSize,
                isCore: true,
                isEdge: false
            };
        }
    }

    for (let i = 0; i < numCubeParticles; i++) {
        const pt = generateRicardoChanceCubePoint(cubeSize);
        const dist = Math.sqrt(pt.x * pt.x + pt.y * pt.y + pt.z * pt.z) || 1;
        const dirX = (pt.x / dist) + (Math.random() - 0.5) * 0.3;
        const dirY = (pt.y / dist) + (Math.random() - 0.5) * 0.3;
        const dirZ = (pt.z / dist) + (Math.random() - 0.5) * 0.3;

        let sprite, pSize, baseAlpha;
        if (pt.isEdge) {
            sprite = spriteEdge;
            baseAlpha = 0.95;
            pSize = Math.random() * 0.7 + 1.4;
        } else if (pt.isCore) {
            sprite = spriteCore;
            baseAlpha = Math.random() * 0.2 + 0.8;
            pSize = Math.random() * 0.7 + 1.1;
        } else {
            sprite = spriteAmbient;
            baseAlpha = Math.random() * 0.2 + 0.65;
            pSize = Math.random() * 0.5 + 0.9;
        }

        // Disintegration & swirl trajectory dynamics
        const detachThreshold = 0.03 + Math.random() * 0.65;
        const detachSpeed = 320 + Math.random() * 260;
        const swirlDir = Math.random() > 0.5 ? 1 : -1;
        const swirlFreq = 0.012 + Math.random() * 0.018;
        const noiseSpeedX = 0.0012 + Math.random() * 0.0015;
        const noiseSpeedY = 0.0015 + Math.random() * 0.0015;
        const noiseAmp = 3.0 + Math.random() * 3.5;

        cubeParticles.push({
            hx: pt.x, hy: pt.y, hz: pt.z,
            dirX, dirY, dirZ,
            isEdge: pt.isEdge,
            isCore: pt.isCore,
            offX: 0, offY: 0, offZ: 0,
            vx: 0, vy: 0,
            size: pSize,
            sprite,
            baseAlpha,
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.04,
            detachThreshold,
            detachSpeed,
            swirlDir,
            swirlFreq,
            noiseSpeedX,
            noiseSpeedY,
            noiseAmp
        });
    }

    let currRotX = 0;
    let currRotY = 0;
    let smoothScrollProgress = 0;
    let animTime = 0;
    const startTime = performance.now();
    const assemblyDuration = 1800; // 1.8s live particle implosion curve

    let isCubeVisible = true;
    let cubeAnimationFrameId = null;

    function renderCube() {
        if (!isCubeVisible || document.hidden) {
            cubeAnimationFrameId = null;
            return;
        }

        cCtx.clearRect(0, 0, cWidth, cHeight);
        const cx = cWidth / 2;
        const cy = cHeight / 2;

        animTime += 1;

        // Assembly easing calculation (implosion on initial page load)
        const elapsed = performance.now() - startTime;
        const rawAssembly = Math.min(1, elapsed / assemblyDuration);
        const assemblyProgress = 1 - Math.pow(1 - rawAssembly, 3); // Cubic ease-out

        // Scroll progress calculation for particle disintegration
        const heroSection = document.getElementById('hero');
        let rawScrollProgress = 0;
        if (heroSection) {
            const heroHeight = Math.max(400, heroSection.offsetHeight);
            rawScrollProgress = Math.min(1, Math.max(0, window.scrollY / (heroHeight * 0.85)));
        }
        smoothScrollProgress += (rawScrollProgress - smoothScrollProgress) * 0.08;
        const scrollProgress = smoothScrollProgress;

        // Gyro Parallax tracking via mouse
        let mouseNormX = 0, mouseNormY = 0;
        if (mouseX > -9000) {
            const rect = cubeCanvas.getBoundingClientRect();
            const relX = mouseX - (rect.left + rect.width / 2);
            const relY = mouseY - (rect.top + rect.height / 2);
            mouseNormX = Math.max(-1, Math.min(1, relX / 450));
            mouseNormY = Math.max(-1, Math.min(1, relY / 450));
        }

        const targetRotX = mouseNormY * 0.25;
        const targetRotY = mouseNormX * 0.32;

        currRotX += (targetRotX - currRotX) * 0.08;
        currRotY += (targetRotY - currRotY) * 0.08;

        // True Mathematical 3D Isometric Angles:
        // Pitch (around X): arcsin(1/sqrt(3)) ≈ 0.61548 rad (35.264 deg) for 120-deg axis balance
        // Yaw (around Y): -PI / 4 ≈ -0.785398 rad (-45 deg) for symmetric front corner view
        const idlePitchX = 0.61548;
        const baseRotY = -0.785398;
        const scrollRotY = scrollProgress * 0.75;

        const finalRotX = idlePitchX + currRotX;
        const finalRotY = baseRotY + currRotY + scrollRotY;

        const cosX = Math.cos(finalRotX), sinX = Math.sin(finalRotX);
        const cosY = Math.cos(finalRotY), sinY = Math.sin(finalRotY);

        const activeAlpha = Math.cos(Math.min(1, scrollProgress * 1.1) * (Math.PI / 2));

        if (activeAlpha > 0.005 && assemblyProgress > 0.001) {
            cCtx.save();
            cCtx.globalCompositeOperation = 'screen';

            for (let i = 0; i < numCubeParticles; i++) {
                const p = cubeParticles[i];
                p.pulsePhase += p.pulseSpeed;
                const twinkleBrightness = 0.80 + Math.sin(p.pulsePhase) * 0.20;

                // Edges stay razor-sharp and straight in idle; turbulence only activates upon scroll disintegration
                const noiseFactor = scrollProgress > 0.02 ? (0.2 + scrollProgress * 0.8) : 0.03;
                const noiseWaveX = Math.sin(animTime * p.noiseSpeedX + p.hy * 0.05) * (p.noiseAmp * noiseFactor);
                const noiseWaveY = Math.cos(animTime * p.noiseSpeedY + p.hx * 0.05) * (p.noiseAmp * noiseFactor);
                const noiseWaveZ = Math.sin(animTime * 0.002 + p.hz * 0.05) * (p.noiseAmp * 0.8 * noiseFactor);

                // Disintegration / explode physics on scroll
                let explodeDist = 0;
                let swirlX = 0, swirlY = 0;
                if (scrollProgress > p.detachThreshold) {
                    const progressDelta = (scrollProgress - p.detachThreshold) / (1 - p.detachThreshold);
                    explodeDist = progressDelta * progressDelta * (p.detachSpeed * 0.85);

                    const swirlAngle = explodeDist * p.swirlFreq * p.swirlDir;
                    swirlX = Math.sin(swirlAngle) * 55;
                    swirlY = Math.cos(swirlAngle) * 35;
                }

                const targetX = p.hx + noiseWaveX + p.dirX * explodeDist + swirlX + p.offX;
                const targetY = p.hy + noiseWaveY + p.dirY * explodeDist + swirlY + p.offY;
                const targetZ = p.hz + noiseWaveZ + p.dirZ * explodeDist;

                const outerX = p.dirX * 320;
                const outerY = p.dirY * 320;
                const outerZ = p.dirZ * 320;

                const px = outerX * (1 - assemblyProgress) + targetX * assemblyProgress;
                const py = outerY * (1 - assemblyProgress) + targetY * assemblyProgress;
                const pz = outerZ * (1 - assemblyProgress) + targetZ * assemblyProgress;

                // Mathematical Isometric Rotation: Yaw around Y first, then Pitch around X
                const rx1 = px * cosY - pz * sinY;
                const rz1 = px * sinY + pz * cosY;
                const ry1 = py;

                const rx = rx1;
                const ry = ry1 * cosX - rz1 * sinX;
                const rz = ry1 * sinX + rz1 * cosX;

                // Pure Isometric Orthographic mapping (completely eliminates trapezoidal skew & distorted perspective)
                const screenX = cx + rx;
                const screenY = cy + ry;

                // Mouse particle repulsion directly through text (active when cube is intact)
                if (mouseX > -9000 && explodeDist < 25) {
                    const rect = cubeCanvas.getBoundingClientRect();
                    const canvasMouseX = mouseX - rect.left;
                    const canvasMouseY = mouseY - rect.top;
                    const dx = screenX - canvasMouseX;
                    const dy = screenY - canvasMouseY;

                    if (Math.abs(dx) < 45 && Math.abs(dy) < 45) {
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 45 && dist > 0) {
                            const force = (45 - dist) / 45;
                            p.vx += (dx / dist) * force * 10;
                            p.vy += (dy / dist) * force * 10;
                        }
                    }
                }

                p.vx *= 0.82;
                p.vy *= 0.82;
                p.offX += p.vx;
                p.offY += p.vy;
                p.offX += (0 - p.offX) * 0.08;
                p.offY += (0 - p.offY) * 0.08;

                const detachFade = explodeDist > 0 ? Math.max(0, 1 - explodeDist / (p.detachSpeed * 1.8)) ** 2 : 1;
                // Subtle depth attenuation (front particles slightly brighter)
                const depthAlpha = Math.max(0.70, Math.min(1.10, 1 - rz / 700));
                const particleAlpha = p.baseAlpha * twinkleBrightness * Math.min(1, assemblyProgress * 2.0) * activeAlpha * detachFade * depthAlpha;

                if (particleAlpha > 0.02 && screenY >= -20 && screenY <= cHeight + 20 && screenX >= -20 && screenX <= cWidth + 20) {
                    const depthScale = Math.max(0.85, Math.min(1.15, 1 - rz / 900));
                    const blobR = p.size * (p.isEdge ? 2.5 : (p.isCore ? 2.2 : 1.9)) * depthScale;
                    const d = blobR * 2;
                    cCtx.globalAlpha = Math.min(1, particleAlpha);
                    cCtx.drawImage(p.sprite, screenX - blobR, screenY - blobR, d, d);
                }
            }

            cCtx.restore();
        }
        cubeAnimationFrameId = requestAnimationFrame(renderCube);
    }

    function startCubeLoop() {
        if (!cubeAnimationFrameId && isCubeVisible && !document.hidden) {
            cubeAnimationFrameId = requestAnimationFrame(renderCube);
        }
    }

    if ('IntersectionObserver' in window) {
        const heroSection = document.getElementById('hero');
        const observer = new IntersectionObserver((entries) => {
            isCubeVisible = entries[0].isIntersecting;
            if (isCubeVisible) startCubeLoop();
        }, { threshold: 0 });
        if (heroSection) observer.observe(heroSection);
    }

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && isCubeVisible) startCubeLoop();
    });

    startCubeLoop();
}

// ==========================================================================
// 3. 3D CIRCULAR CYLINDER GALLERY (120 FPS Drag & Auto-Rotation Ring)
// ==========================================================================
function initCircularGalleryEngine() {
    const stage = document.getElementById('circular-gallery-stage');
    const ring = document.getElementById('circular-gallery-ring');
    if (!stage || !ring) return;

    const cards = Array.from(ring.querySelectorAll('.circular-card'));
    if (cards.length === 0) return;

    const numItems = cards.length;
    const anglePerItem = 360 / numItems;

    let rotation = 0;
    let targetRotation = 0;
    let radius = window.innerWidth < 480 ? 140 : (window.innerWidth < 768 ? 200 : 340);
    let autoRotateSpeed = 0.022;
    let isUserInteracting = false;
    let interactionTimeout = null;

    window.addEventListener('resize', () => {
        radius = window.innerWidth < 480 ? 140 : (window.innerWidth < 768 ? 200 : 340);
        updateCardOffsets();
    });

    // Pointer Drag & Touch Swipe support
    let isDragging = false;
    let startX = 0;
    let startRotation = 0;

    function onPointerDown(e) {
        isDragging = true;
        isUserInteracting = true;
        startX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
        startRotation = targetRotation;
    }

    function onPointerMove(e) {
        if (!isDragging) return;
        const x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
        const deltaX = x - startX;
        targetRotation = startRotation + (deltaX * 0.42);
    }

    function onPointerUp() {
        if (!isDragging) return;
        isDragging = false;

        // Smoothly snap to nearest card
        const nearestIndex = Math.round(-targetRotation / anglePerItem);
        targetRotation = -nearestIndex * anglePerItem;

        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
            isUserInteracting = false;
        }, 3500);
    }

    stage.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    stage.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    let isGalleryVisible = true;
    let galleryAnimationFrameId = null;

    // Set card center offsets ONCE to prevent per-frame DOM layout thrashing
    function updateCardOffsets() {
        cards.forEach(card => {
            const isMobile = window.innerWidth < 640;
            const cardWidth = card.offsetWidth || (isMobile ? 130 : 170);
            const cardHeight = card.offsetHeight || (isMobile ? 100 : 130);
            card.style.marginLeft = `-${cardWidth / 2}px`;
            card.style.marginTop = `-${cardHeight / 2}px`;
        });
    }

    updateCardOffsets();

    function animate() {
        if (!isGalleryVisible || document.hidden) {
            galleryAnimationFrameId = null;
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!isUserInteracting && !isDragging && !prefersReducedMotion) {
            targetRotation -= autoRotateSpeed;
        }

        // Smooth Lerp
        rotation += (targetRotation - rotation) * 0.08;
        ring.style.transform = `rotateY(${rotation.toFixed(2)}deg)`;

        cards.forEach((card, i) => {
            const itemAngle = i * anglePerItem;
            card.style.transform = `rotateY(${itemAngle}deg) translateZ(${radius}px)`;

            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);

            const opacity = Math.max(0.20, 1 - (normalizedAngle / 150));
            card.style.opacity = opacity.toFixed(2);
            card.style.zIndex = Math.round(100 - (normalizedAngle / 180) * 80);

            // Dynamic glow on the floating logo icon matching data-glow RGB
            const glowRgb = card.getAttribute('data-glow') || '99, 102, 241';
            const glowFactor = Math.max(0, 1 - (normalizedAngle / 32));
            const logoImg = card.querySelector('.circular-logo');

            if (logoImg) {
                if (glowFactor > 0.01) {
                    const glowRadius = (12 + glowFactor * 22).toFixed(1);
                    const glowAlpha = (0.50 + glowFactor * 0.50).toFixed(2);
                    logoImg.style.filter = `drop-shadow(0 0 ${glowRadius}px rgba(${glowRgb}, ${glowAlpha}))`;
                    logoImg.style.transform = `scale(${(1 + glowFactor * 0.12).toFixed(2)})`;
                } else {
                    logoImg.style.filter = 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45))';
                    logoImg.style.transform = 'scale(1)';
                }
            }
        });

        galleryAnimationFrameId = requestAnimationFrame(animate);
    }

    function startGalleryLoop() {
        if (!galleryAnimationFrameId && isGalleryVisible && !document.hidden) {
            galleryAnimationFrameId = requestAnimationFrame(animate);
        }
    }

    if ('IntersectionObserver' in window) {
        const ecoSection = document.getElementById('ecosystem');
        const observer = new IntersectionObserver((entries) => {
            isGalleryVisible = entries[0].isIntersecting;
            if (isGalleryVisible) startGalleryLoop();
        }, { threshold: 0 });
        if (ecoSection) observer.observe(ecoSection);
    }

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && isGalleryVisible) startGalleryLoop();
    });

    startGalleryLoop();
}

// ==========================================================================
// 4. BORDER BEAM PHYSICS ENGINE (Smooth Spring Physics on Contact Cards)
// ==========================================================================
function initBorderBeamEngine() {
    const panels = document.querySelectorAll('.border-beam-panel');
    if (panels.length === 0) return;

    let lastTime = performance.now();

    panels.forEach((panel, idx) => {
        let angle = (idx * 137.5) % 360;
        let speed = 42;       // idle deg/s
        let targetSpeed = 42; // target deg/s
        let velocity = 0;     // spring velocity

        panel.addEventListener('pointerenter', () => { targetSpeed = 240; });
        panel.addEventListener('pointerleave', () => { targetSpeed = 42; });
        panel.addEventListener('focus', () => { targetSpeed = 240; });
        panel.addEventListener('blur', () => { targetSpeed = 42; });

        panel._updateBeam = (dt) => {
            // Spring physics step (k=30, d=11)
            const k = 30;
            const d = 11;
            const accel = k * (targetSpeed - speed) - d * velocity;
            velocity += accel * dt;
            speed += velocity * dt;

            angle = (angle + speed * dt) % 360;
            panel.style.setProperty('--beam-angle', `${angle.toFixed(2)}deg`);
        };
    });

    function loop(now) {
        const dt = Math.min(0.05, (now - lastTime) / 1000);
        lastTime = now;

        if (document.visibilityState !== 'hidden') {
            panels.forEach(panel => {
                if (panel._updateBeam) panel._updateBeam(dt);
            });
        }
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

// ==========================================================================
// Smooth Hardware-Accelerated Reveal Observer
// ==========================================================================
function initScrollObserver() {
    const targets = document.querySelectorAll('.reveal-init');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('reveal-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);

                // If element is in a horizontal snap container, reveal all sibling cards
                const carouselParent = entry.target.closest('[data-lenis-prevent]');
                if (carouselParent) {
                    carouselParent.querySelectorAll('.reveal-init').forEach(card => {
                        card.classList.add('reveal-visible');
                        observer.unobserve(card);
                    });
                }
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(el => observer.observe(el));
}

// ==========================================================================
// Active Dock Link Highlight Observer
// ==========================================================================
function initDockHighlight() {
    const sections = document.querySelectorAll('header[id], section[id]');
    const dockLinks = document.querySelectorAll('.dock-btn[href^="#"]');
    if (!sections.length || !dockLinks.length) return;

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        if (currentSectionId) {
            dockLinks.forEach(link => {
                const href = link.getAttribute('href').replace('#', '');
                if (href === currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }, { passive: true });
}

// ==========================================================================
// Silky Smooth Momentum Scroll Engine (Lenis + 120 FPS Native Anchors)
// ==========================================================================
let lenis = null;

function initSmoothScrollEngine() {
    if (typeof Lenis === 'undefined') return;

    lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.0,
        infinite: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Silky Smooth Anchor Navigation from floating dock & CTAs
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl && lenis) {
                    e.preventDefault();
                    lenis.scrollTo(targetEl, { offset: -30, duration: 1.1 });
                }
            }
        });
    });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage('RU');
    initSmoothScrollEngine();
    initScrollObserver();
    initDockHighlight();
    initStarfieldEngine();
    initParticleCubeEngine();
    initCircularGalleryEngine();
    initBorderBeamEngine();
});

// Expose handlers to global window
window.toggleLanguage = toggleLanguage;
window.applyLanguage = applyLanguage;
window.switchArchTab = switchArchTab;
window.lenis = lenis;
