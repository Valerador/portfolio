// Global helper for letter-by-letter splitting
function splitTextToSpans(el) {
    if (!el) return [];

    // Avoid double splitting
    const existing = el.querySelectorAll('.char-span');
    if (existing.length > 0) return Array.from(existing);

    // Store any inner icon elements (like <i>) if present
    const icon = el.querySelector('i');
    const iconClone = icon ? icon.cloneNode(true) : null;

    // Get clean text with collapsed whitespace (no double spaces or newlines)
    const rawText = el.textContent || '';
    const cleanText = rawText.replace(/\s+/g, ' ').trim();
    if (!cleanText) return [];

    el.innerHTML = '';

    // Re-attach icon first if present
    if (iconClone) {
        el.appendChild(iconClone);
        el.appendChild(document.createTextNode(' '));
    }

    const spans = [];
    for (let i = 0; i < cleanText.length; i++) {
        const span = document.createElement('span');
        span.className = 'char-span';
        span.textContent = cleanText[i] === ' ' ? '\u00A0' : cleanText[i];
        el.appendChild(span);
        spans.push(span);
    }
    return spans;
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Safety Fallback: Ensure intro-loader is ALWAYS removed after 7 seconds
    setTimeout(() => {
        const loader = document.getElementById('intro-loader');
        if (loader && loader.style.display !== 'none') {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 400);
        }
    }, 7000);

    // 1. Prepare Letter-by-Letter Headline Spans
    const line1 = document.getElementById('title-line-1');
    const line2 = document.getElementById('title-line-2');
    const line3 = document.getElementById('title-line-3');

    const spans1 = splitTextToSpans(line1);
    const spans2 = splitTextToSpans(line2);
    const spans3 = splitTextToSpans(line3);
    const allHeadlineSpans = [...spans1, ...spans2, ...spans3];

    // 2. Preloader & Sequential Timed Animation Engine
    const introLoader = document.getElementById('intro-loader');
    const curtainLeft = document.getElementById('curtain-left');
    const curtainRight = document.getElementById('curtain-right');
    const introTextBox = document.getElementById('intro-text-box');

    const heroRole = document.getElementById('hero-role');
    const heroDesc = document.getElementById('hero-desc');
    const heroButtons = document.getElementById('hero-buttons');

    let assemblyProgress = 0; // 0 = dispersed, 1 = solid cube
    let isAssemblyRunning = false;
    let assemblyStartTime = 0;
    const assemblyDuration = 1800; // 1.8s live particle implosion

    function updateAssembly() {
        if (!isAssemblyRunning) return;

        const elapsed = performance.now() - assemblyStartTime;
        const rawProgress = Math.min(1, elapsed / assemblyDuration);
        
        // Smooth ease-out cubic curve
        assemblyProgress = 1 - Math.pow(1 - rawProgress, 3);

        if (rawProgress < 1) {
            requestAnimationFrame(updateAssembly);
        } else {
            assemblyProgress = 1;
            isAssemblyRunning = false;
        }
    }

    // CINEMATIC PRELOADER & TIMED STEP-BY-STEP SEQUENCE PIPELINE
    setTimeout(() => {
        // STEP 0: Fade out centered intro text & split curtains open sideways
        if (introTextBox) introTextBox.style.opacity = '0';
        if (curtainLeft) curtainLeft.style.transform = 'translateX(-100%)';
        if (curtainRight) curtainRight.style.transform = 'translateX(100%)';

        // STEP 1 (1.2s): Role badge appears
        setTimeout(() => {
            if (heroRole) heroRole.classList.add('seq-visible');

            // STEP 2 (1.4s): Letter-by-letter headline reveal
            setTimeout(() => {
                allHeadlineSpans.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('visible');
                    }, index * 35);
                });

                // STEP 3 (2.5s): Sub-paragraph appears (both mobile and desktop)
                const headlineAnimDuration = allHeadlineSpans.length * 35;
                setTimeout(() => {
                    document.querySelectorAll('.seq-hidden:not(#hero-buttons)').forEach(el => el.classList.add('seq-visible'));

                    // STEP 4 (2.8s): Dynamic glowing CTA buttons appear
                    setTimeout(() => {
                        document.querySelectorAll('#hero-buttons, .seq-hidden').forEach(el => el.classList.add('seq-visible'));

                        // STEP 5 (3.1s): 3D particle cube implosion begins
                        setTimeout(() => {
                            assemblyStartTime = performance.now();
                            isAssemblyRunning = true;
                            requestAnimationFrame(updateAssembly);

                            setTimeout(() => {
                                if (introLoader) introLoader.style.display = 'none';
                            }, 500);

                        }, 300);

                    }, 350);

                }, Math.max(400, headlineAnimDuration));

            }, 200);

        }, 300);

    }, 1200);


    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 4. Custom 3-State Crosshair Target Reticle & Glass Lens Cursor Logic
    const crosshair = document.getElementById('crosshair-cursor');
    const cursorLens = document.getElementById('cursor-lens');
    const cursorCross = document.getElementById('cursor-cross');
    const tickTop = document.getElementById('tick-top');
    const tickBottom = document.getElementById('tick-bottom');
    const tickLeft = document.getElementById('tick-left');
    const tickRight = document.getElementById('tick-right');

    let mouseX = -9999;
    let mouseY = -9999;
    let isHovering = false;
    let isMouseDown = false;

    let lastScrollY = window.scrollY;
    let rawScrollVelocity = 0;
    let smoothScrollVelocity = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        rawScrollVelocity = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
    });

    function setCursorState(state) {
        if (!tickTop || !tickBottom || !tickLeft || !tickRight) return;

        if (state === 'click') {
            tickTop.style.transform = 'translateY(-2px)';
            tickBottom.style.transform = 'translateY(2px)';
            tickLeft.style.transform = 'translateX(-2px)';
            tickRight.style.transform = 'translateX(2px)';
            if (cursorCross) cursorCross.style.transform = 'scale(0.85)';
        } else if (state === 'hover') {
            tickTop.style.transform = 'translateY(-10px)';
            tickBottom.style.transform = 'translateY(10px)';
            tickLeft.style.transform = 'translateX(-10px)';
            tickRight.style.transform = 'translateX(10px)';
            if (cursorCross) cursorCross.style.transform = 'scale(1)';
            if (cursorLens) {
                cursorLens.style.opacity = '0.8';
                cursorLens.style.transform = 'translate(-50%, -50%) scale(0.8)';
            }
        } else {
            tickTop.style.transform = 'translateY(-6px)';
            tickBottom.style.transform = 'translateY(6px)';
            tickLeft.style.transform = 'translateX(-6px)';
            tickRight.style.transform = 'translateX(6px)';
            if (cursorCross) cursorCross.style.transform = 'scale(1)';
            if (cursorLens) {
                cursorLens.style.opacity = '0';
                cursorLens.style.transform = 'translate(-50%, -50%) scale(0.5)';
            }
        }
    }

    if (crosshair) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            crosshair.style.left = `${mouseX}px`;
            crosshair.style.top = `${mouseY}px`;
        });

        window.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;
            }
        }, { passive: true });

        window.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;
            }
        }, { passive: true });

        window.addEventListener('mousedown', () => {
            isMouseDown = true;
            setCursorState('click');
        });

        window.addEventListener('mouseup', () => {
            isMouseDown = false;
            setCursorState(isHovering ? 'hover' : 'default');
        });

        const interactiveEls = document.querySelectorAll('a, button, .container-scroll-card, .dock-item');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', () => {
                isHovering = true;
                if (!isMouseDown) setCursorState('hover');
            });
            el.addEventListener('mouseleave', () => {
                isHovering = false;
                if (!isMouseDown) setCursorState('default');
            });
        });
    }


    // ==========================================================================
    // 5. BEAMS BACKGROUND CANVAS ENGINE
    // ==========================================================================
    const beamsCanvas = document.getElementById('beams-canvas');
    if (beamsCanvas) {
        const bCtx = beamsCanvas.getContext('2d');
        let bWidth = beamsCanvas.width = window.innerWidth;
        let bHeight = beamsCanvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            bWidth = beamsCanvas.width = window.innerWidth;
            bHeight = beamsCanvas.height = window.innerHeight;
        });

        const numBeams = 24;
        const beams = [];

        function createBeam(w, h) {
            const angle = -35 + Math.random() * 10;
            return {
                x: Math.random() * w * 1.5 - w * 0.25,
                y: Math.random() * h * 1.5 - h * 0.25,
                width: 40 + Math.random() * 80,
                length: h * 2.5,
                angle: angle,
                speed: 0.6 + Math.random() * 1.2,
                opacity: 0.14 + Math.random() * 0.16,
                hue: 220 + Math.random() * 60,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.03
            };
        }

        for (let i = 0; i < numBeams; i++) {
            beams.push(createBeam(bWidth, bHeight));
        }

        function resetBeam(beam, index, total) {
            const column = index % 3;
            const spacing = bWidth / 3;
            beam.y = bHeight + 100;
            beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 80 + Math.random() * 80;
            beam.speed = 0.5 + Math.random() * 0.4;
            beam.hue = 210 + (index * 60) / total;
            beam.opacity = 0.15 + Math.random() * 0.12;
        }

        const fluidTrails = [];
        let lastMouseX = -9000, lastMouseY = -9000;

        window.addEventListener('mousemove', (e) => {
            if (lastMouseX > -9000) {
                const dx = e.clientX - lastMouseX;
                const dy = e.clientY - lastMouseY;
                const speed = Math.sqrt(dx * dx + dy * dy);
                if (speed > 3) {
                    fluidTrails.push({
                        x: e.clientX,
                        y: e.clientY,
                        vx: dx * 0.15,
                        vy: dy * 0.15,
                        radius: 20,
                        maxRadius: 120 + Math.min(100, speed * 2),
                        alpha: 0.35,
                        life: 1.0
                    });
                }
            }
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        });

        let isBeamsVisible = true;
        let beamsAnimationFrameId = null;

        function renderBeams() {
            if (!isBeamsVisible || document.hidden) {
                beamsAnimationFrameId = null;
                return;
            }

            bCtx.clearRect(0, 0, bWidth, bHeight);

            beams.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, numBeams);
                }

                // Black Hole Gravitational Lens: Light beams bend around mouse singularity!
                let bendX = 0;
                if (mouseX > -9000) {
                    const dx = beam.x - mouseX;
                    const dy = beam.y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 260 && dist > 0) {
                        // Gravitational lensing curvature formula around black hole
                        const force = Math.pow((260 - dist) / 260, 1.6);
                        bendX = (dx / dist) * force * 70;
                    }
                }

                bCtx.save();
                bCtx.translate(beam.x + bendX, beam.y);
                bCtx.rotate((beam.angle * Math.PI) / 180);

                const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
                const gradient = bCtx.createLinearGradient(0, 0, 0, beam.length);

                gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
                gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
                gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
                gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`);
                gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`);
                gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

                bCtx.fillStyle = gradient;
                bCtx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
                bCtx.restore();
            });

            beamsAnimationFrameId = requestAnimationFrame(renderBeams);
        }

        function startBeamsLoop() {
            if (!beamsAnimationFrameId && isBeamsVisible && !document.hidden) {
                beamsAnimationFrameId = requestAnimationFrame(renderBeams);
            }
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                isBeamsVisible = entries[0].isIntersecting;
                if (isBeamsVisible) startBeamsLoop();
            }, { threshold: 0 });
            observer.observe(beamsCanvas);
        }

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && isBeamsVisible) startBeamsLoop();
        });

        startBeamsLoop();
    }


    // ==========================================================================
    // 6. DYNAMIC HIGH-BRIGHTNESS 3D WARP STARFIELD TUNNEL ENGINE
    // ==========================================================================
    const starfieldCanvas = document.getElementById('starfield');
    if (starfieldCanvas) {
        const sCtx = starfieldCanvas.getContext('2d');
        let sWidth = starfieldCanvas.width = window.innerWidth;
        let sHeight = starfieldCanvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            sWidth = starfieldCanvas.width = window.innerWidth;
            sHeight = starfieldCanvas.height = window.innerHeight;
        });

        const numDust = 550; // Ultra-rich 550 bright warp stars!
        const dustParticles = [];

        for (let i = 0; i < numDust; i++) {
            const isHighlight = Math.random() > 0.88; // 12% bright glowing superstars!
            dustParticles.push({
                x: (Math.random() - 0.5) * sWidth * 2.4,
                y: (Math.random() - 0.5) * sHeight * 2.4,
                z: Math.random() * 1000 + 1,
                baseSpeed: Math.random() * 2.0 + 1.0,
                size: isHighlight ? (Math.random() * 1.4 + 1.8) : (Math.random() * 0.9 + 0.7),
                color: isHighlight 
                    ? '#ffffff' 
                    : (Math.random() > 0.5 ? '#ffffff' : (Math.random() > 0.5 ? '#93c5fd' : '#e9d5ff')),
                baseAlpha: isHighlight ? (Math.random() * 0.2 + 0.80) : (Math.random() * 0.35 + 0.65),
                twinklePhase: Math.random() * Math.PI * 2,
                twinkleSpeed: 0.02 + Math.random() * 0.04,
                isHighlight
            });
        }

        let smoothMouseX = sWidth / 2;
        let smoothMouseY = sHeight / 2;

        let isStarfieldVisible = true;
        let starfieldAnimationFrameId = null;

        function renderMicroDustWarp() {
            if (!isStarfieldVisible || document.hidden) {
                starfieldAnimationFrameId = null;
                return;
            }

            sCtx.clearRect(0, 0, sWidth, sHeight);

            if (mouseX > -9000) {
                smoothMouseX += (mouseX - smoothMouseX) * 0.06;
                smoothMouseY += (mouseY - smoothMouseY) * 0.06;
            } else {
                smoothMouseX += ((sWidth / 2) - smoothMouseX) * 0.06;
                smoothMouseY += ((sHeight / 2) - smoothMouseY) * 0.06;
            }

            // Ricardo Chance 3D Camera Shift: Vanishing point tilts dynamically with mouse movement!
            const mouseShiftX = ((smoothMouseX / sWidth) - 0.5) * 180;
            const mouseShiftY = ((smoothMouseY / sHeight) - 0.5) * 180;

            const cx = (sWidth / 2) + mouseShiftX;
            const cy = (sHeight / 2) + mouseShiftY;
            const focalLength = 360;

            // High-inertia liquid smooth velocity decay (prevents sudden jerks or stops!)
            smoothScrollVelocity += (rawScrollVelocity - smoothScrollVelocity) * 0.045;
            rawScrollVelocity *= 0.94;

            // Continuous non-linear speed multiplier:
            const absVel = Math.abs(smoothScrollVelocity);
            const velEffect = Math.sign(smoothScrollVelocity) * Math.pow(absVel * 0.06, 0.78);
            const warpMultiplier = Math.max(0.48, 1.0 + velEffect);

            sCtx.save();
            sCtx.globalCompositeOperation = 'lighter'; // Vivid additive star brightness!

            dustParticles.forEach(p => {
                p.twinklePhase += p.twinkleSpeed;
                const twinkleAlpha = 0.85 + Math.sin(p.twinklePhase) * 0.15; // Keeps stars bright and vivid!

                const currentSpeed = p.baseSpeed * warpMultiplier;

                // 3D Forward Warp Motion along Z-axis!
                p.z -= currentSpeed;

                if (p.z <= 1) {
                    p.z = 1000;
                    p.x = (Math.random() - 0.5) * sWidth * 2.4;
                    p.y = (Math.random() - 0.5) * sHeight * 2.4;
                }

                // 3D Perspective Projection with Camera Tilt
                const baseScreenX = cx + (p.x / p.z) * focalLength;
                const baseScreenY = cy + (p.y / p.z) * focalLength;
                const depthProgress = (1000 - p.z) / 1000;
                const currentSize = p.size * Math.max(0.5, depthProgress * 1.35);

                // Black Hole Gravitational Lensing Engine: Relativistic star curvature around cursor singularity
                let screenX = baseScreenX;
                let screenY = baseScreenY;

                if (mouseX > -9000) {
                    const dx = baseScreenX - mouseX;
                    const dy = baseScreenY - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const lensRadius = 180;

                    if (dist < lensRadius && dist > 0) {
                        const angle = Math.atan2(dy, dx);
                        const force = Math.pow((lensRadius - dist) / lensRadius, 1.4);
                        
                        // Gravitational Deflection & Relativistic Swirl (Einstein Lensing Arc)
                        const swirlAngle = angle + force * 0.75;
                        const lensedDist = dist + force * 45;

                        screenX = mouseX + Math.cos(swirlAngle) * lensedDist;
                        screenY = mouseY + Math.sin(swirlAngle) * lensedDist;
                    }
                }

                let alpha = Math.min(1, p.baseAlpha * twinkleAlpha * Math.min(1, depthProgress * 2.2));

                if (alpha > 0.04 && screenX >= -60 && screenX <= sWidth + 60 && screenY >= -60 && screenY <= sHeight + 60) {
                    
                    if (p.isHighlight) {
                        // Vivid glowing lens halo for superstars flying past
                        const glowR = currentSize * 4.2;
                        const grad = sCtx.createRadialGradient(screenX, screenY, 0, screenX, screenY, glowR);
                        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
                        grad.addColorStop(0.35, `rgba(192, 132, 252, ${alpha * 0.6})`);
                        grad.addColorStop(1, 'rgba(192, 132, 252, 0)');
                        sCtx.fillStyle = grad;
                        sCtx.beginPath();
                        sCtx.arc(screenX, screenY, glowR, 0, Math.PI * 2);
                        sCtx.fill();
                    }

                    // Bright core star dot
                    const coreGrad = sCtx.createRadialGradient(screenX, screenY, 0, screenX, screenY, currentSize * 1.8);
                    coreGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
                    coreGrad.addColorStop(0.5, `${p.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
                    coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

                    sCtx.fillStyle = coreGrad;
                    sCtx.beginPath();
                    sCtx.arc(screenX, screenY, currentSize * 1.8, 0, Math.PI * 2);
                    sCtx.fill();
                }
            });

            sCtx.restore();

            starfieldAnimationFrameId = requestAnimationFrame(renderMicroDustWarp);
        }

        function startStarfieldLoop() {
            if (!starfieldAnimationFrameId && isStarfieldVisible && !document.hidden) {
                starfieldAnimationFrameId = requestAnimationFrame(renderMicroDustWarp);
            }
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                isStarfieldVisible = entries[0].isIntersecting;
                if (isStarfieldVisible) startStarfieldLoop();
            }, { threshold: 0 });
            observer.observe(starfieldCanvas);
        }

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && isStarfieldVisible) startStarfieldLoop();
        });

        startStarfieldLoop();
    }


    // ==========================================================================
    // 7. ULTRA-OPTIMIZED 120+ FPS RICARDO CHANCE STARDUST CUBE (Pre-rendered Sprites)
    // ==========================================================================
    const cubeCanvas = document.getElementById('particle-star-canvas');
    if (cubeCanvas) {
        const cCtx = cubeCanvas.getContext('2d');
        let cWidth = cubeCanvas.width = window.innerWidth;
        let cHeight = cubeCanvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            cWidth = cubeCanvas.width = window.innerWidth;
            cHeight = cubeCanvas.height = window.innerHeight;
        });

        // ----------------------------------------------------------------------
        // PRE-RENDERED HIGH-OPACITY SPHERICAL BOKEH ORB SPRITES (Dense & Solid!)
        // Opaque Pearl-White Core + Deep Vivid Violet Rim
        // ----------------------------------------------------------------------
        function createParticleSprite(coreR, coreG, coreB, haloR, haloG, haloB) {
            const sprCanvas = document.createElement('canvas');
            const size = 64;
            sprCanvas.width = size;
            sprCanvas.height = size;
            const sprCtx = sprCanvas.getContext('2d');
            const center = size / 2;

            const grad = sprCtx.createRadialGradient(center, center, 0, center, center, center);
            // 1. Opaque Solid Pearl-Silver Core
            grad.addColorStop(0,    `rgba(${coreR}, ${coreG}, ${coreB}, 1.0)`);
            grad.addColorStop(0.32, `rgba(${coreR}, ${coreG}, ${coreB}, 0.90)`);
            // 2. Rich High-Contrast Violet Body
            grad.addColorStop(0.68, `rgba(${haloR}, ${haloG}, ${haloB}, 0.80)`);
            // 3. Deep Indigo Outer Rim
            grad.addColorStop(0.88, `rgba(88, 28, 135, 0.50)`);
            grad.addColorStop(1.0,  `rgba(30, 10, 60, 0)`);

            sprCtx.fillStyle = grad;
            sprCtx.beginPath();
            sprCtx.arc(center, center, center, 0, Math.PI * 2);
            sprCtx.fill();

            return sprCanvas;
        }

        // High-Contrast Spherical Bokeh Orbs (Solid Pearl Center + Deep Violet Rim)
        const spriteCore = createParticleSprite(238, 242, 255, 192, 132, 252);   // Pearl White Core + Violet Rim
        const spriteAmbient = createParticleSprite(226, 232, 240, 168, 85, 247); // Pearl Silver Core + Purple Rim
        const spriteEdge = createParticleSprite(241, 245, 249, 147, 51, 234);   // Crisp Pearl Core + Electric Violet Rim

        const cubeSize = Math.min(cWidth, cHeight) * 0.32; // Perfect 3D scale
        const numCubeParticles = 4800; // 4,800 micro-fine spherical stardust orbs!
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
            if (mode < 0.65) {
                // 65% UNIFORM 3D Volume Fill across the ENTIRE cube volume
                return {
                    x: (Math.random() - 0.5) * 2 * halfSize,
                    y: (Math.random() - 0.5) * 2 * halfSize,
                    z: (Math.random() - 0.5) * 2 * halfSize,
                    isCore: false,
                    isEdge: false,
                    isStardust: false
                };
            } else if (mode < 0.95) {
                // 30% Crisp Outer Faces & Wireframe Edges
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
                return { ...pt, isCore: false, isEdge, isStardust: false };
            } else {
                // 5% Ambient Stardust Envelope around the Cube
                const R = halfSize * (1.05 + Math.random() * 0.30);
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos((Math.random() * 2) - 1);
                return {
                    x: R * Math.sin(phi) * Math.cos(theta),
                    y: R * Math.sin(phi) * Math.sin(theta),
                    z: R * Math.cos(phi),
                    isCore: false,
                    isEdge: false,
                    isStardust: true
                };
            }
        }

        for (let i = 0; i < numCubeParticles; i++) {
            const pt = generateRicardoChanceCubePoint(cubeSize);

            const dist = Math.sqrt(pt.x * pt.x + pt.y * pt.y + pt.z * pt.z) || 1;
            const dirX = (pt.x / dist) + (Math.random() - 0.5) * 0.35;
            const dirY = (pt.y / dist) + (Math.random() - 0.5) * 0.35;
            const dirZ = (pt.z / dist) + (Math.random() - 0.5) * 0.35;

            let sprite, pSize, baseAlpha;

            if (pt.isEdge) {
                sprite = spriteEdge;
                baseAlpha = Math.random() * 0.15 + 0.85;
                pSize = Math.random() * 0.8 + 1.2;
            } else if (pt.isStardust) {
                sprite = spriteAmbient;
                baseAlpha = Math.random() * 0.20 + 0.60;
                pSize = Math.random() * 0.6 + 0.8;
            } else {
                sprite = spriteCore;
                baseAlpha = Math.random() * 0.15 + 0.85;
                pSize = Math.random() * 0.9 + 1.1;
            }

            const detachThreshold = 0.20 + Math.random() * 0.55;
            const detachSpeed = Math.max(cWidth, cHeight) * (0.65 + Math.random() * 0.60);
            const swirlDir = Math.random() > 0.5 ? 1 : -1;
            const swirlFreq = 0.012 + Math.random() * 0.02;

            const noiseSpeedX = 0.0012 + Math.random() * 0.0015;
            const noiseSpeedY = 0.0015 + Math.random() * 0.0015;
            const noiseAmp = 3.5 + Math.random() * 4.5;

            cubeParticles.push({
                hx: pt.x, hy: pt.y, hz: pt.z,
                dirX, dirY, dirZ,
                isEdge: pt.isEdge,
                isCore: pt.isCore,
                isStardust: pt.isStardust,
                offX: 0, offY: 0, offZ: 0,
                vx: 0, vy: 0, vz: 0,
                detachThreshold,
                detachSpeed,
                swirlDir,
                swirlFreq,
                noiseSpeedX,
                noiseSpeedY,
                noiseAmp,
                size: pSize,
                sprite,
                baseAlpha,
                pulsePhase: Math.random() * Math.PI * 2,
                pulseSpeed: pt.isCore ? (0.04 + Math.random() * 0.06) : (0.02 + Math.random() * 0.04)
            });
        }

        let currRotX = 0;
        let currRotY = 0;
        let smoothScrollProgress = 0;
        let animTime = 0;
        let autoRotateAngle = 0;

        let isCubeVisible = true;
        let cubeAnimationFrameId = null;

        function renderStorylineParticleCube() {
            if (!isCubeVisible || document.hidden) {
                cubeAnimationFrameId = null;
                return;
            }

            cCtx.clearRect(0, 0, cWidth, cHeight);
            const cx = cWidth / 2;
            const cy = cHeight / 2;

            animTime += 1;
            autoRotateAngle += 0.008;

            const heroSection = document.getElementById('hero-sky');
            let rawScrollProgress = 0;
            if (heroSection) {
                const heroHeight = heroSection.offsetHeight - window.innerHeight;
                if (heroHeight > 0) {
                    rawScrollProgress = Math.min(1, Math.max(0, window.scrollY / heroHeight));
                }
            }

            let targetProgress = Math.min(1, Math.max(0, rawScrollProgress));

            smoothScrollProgress += (targetProgress - smoothScrollProgress) * 0.10;
            const scrollProgress = smoothScrollProgress;

            let mouseNormX = 0, mouseNormY = 0;
            if (mouseX > -9000) {
                mouseNormX = (mouseX / window.innerWidth - 0.5);
                mouseNormY = (mouseY / window.innerHeight - 0.5);
            }

            // Gyro Mouse & Touch Rigging
            const targetRotX = mouseNormY * 0.65;
            const targetRotY = mouseNormX * 0.75;

            currRotX += (targetRotX - currRotX) * 0.08;
            currRotY += (targetRotY - currRotY) * 0.08;

            // Continuous subtle auto-rotation on mobile when standing still
            const idleRotY = window.innerWidth < 640 ? autoRotateAngle : 0;
            const scrollRotY = scrollProgress * Math.PI * 0.65;
            const finalRotX = currRotX;
            const finalRotY = currRotY + scrollRotY + idleRotY;

            const cosX = Math.cos(finalRotX), sinX = Math.sin(finalRotX);
            const cosY = Math.cos(finalRotY), sinY = Math.sin(finalRotY);

            const currentAssembly = Math.min(1, Math.max(0, assemblyProgress));
            const activeAlpha = Math.cos(Math.min(1, scrollProgress * 0.95) * (Math.PI / 2));

            if (activeAlpha > 0.005 && currentAssembly > 0.001) {
                cCtx.save();
                cCtx.globalCompositeOperation = 'screen'; // Smooth screen blending preserves orb shapes!

                for (let i = 0; i < numCubeParticles; i++) {
                    const p = cubeParticles[i];
                    p.pulsePhase += p.pulseSpeed;
                    const twinkleBrightness = 0.75 + Math.sin(p.pulsePhase) * 0.25;
                    const twinkleScale = 0.90 + Math.sin(p.pulsePhase * 0.7) * 0.20;

                    const noiseWaveX = Math.sin(animTime * p.noiseSpeedX + p.hy * 0.05) * p.noiseAmp;
                    const noiseWaveY = Math.cos(animTime * p.noiseSpeedY + p.hx * 0.05) * p.noiseAmp;
                    const noiseWaveZ = Math.sin(animTime * 0.002 + p.hz * 0.05) * (p.noiseAmp * 0.8);

                    let explodeDist = 0;
                    let swirlX = 0, swirlY = 0;
                    if (scrollProgress > p.detachThreshold) {
                        const progressDelta = (scrollProgress - p.detachThreshold) / (1 - p.detachThreshold);
                        explodeDist = Math.pow(progressDelta, 1.15) * (p.detachSpeed * 0.85);
                        
                        const swirlAngle = explodeDist * p.swirlFreq * p.swirlDir;
                        swirlX = Math.sin(swirlAngle) * 55;
                        swirlY = Math.cos(swirlAngle) * 35;
                    }

                    let targetX = p.hx + noiseWaveX + p.dirX * explodeDist + swirlX + p.offX;
                    let targetY = p.hy + noiseWaveY + p.dirY * explodeDist + swirlY + p.offY;
                    let targetZ = p.hz + noiseWaveZ + p.dirZ * explodeDist + p.offZ;

                    let outerX = p.dirX * 380;
                    let outerY = p.dirY * 380;
                    let outerZ = p.dirZ * 380;

                    let px = outerX * (1 - currentAssembly) + targetX * currentAssembly;
                    let py = outerY * (1 - currentAssembly) + targetY * currentAssembly;
                    let pz = outerZ * (1 - currentAssembly) + targetZ * currentAssembly;

                    let y1 = py * cosX - pz * sinX;
                    let z1 = py * sinX + pz * cosX;

                    let rx = px * cosY + z1 * sinY;
                    let rz = -px * sinY + z1 * cosY;
                    let ry = y1;

                    const fov = 450;
                    const perspectiveScale = fov / (fov + rz + cubeSize * 1.8);
                    const finalScale = explodeDist > 0 ? 0.75 : perspectiveScale;

                    const screenX = cx + (explodeDist > 0 ? rx * 0.75 : rx * perspectiveScale);
                    const screenY = cy + (explodeDist > 0 ? ry * 0.75 : ry * perspectiveScale);

                    if (mouseX > -9000) {
                        const dx = screenX - mouseX;
                        const dy = screenY - mouseY;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const repelRadius = 45; // Reduced radius for a subtle, elegant ripple under cursor

                        if (dist < repelRadius && dist > 0) {
                            const force = (repelRadius - dist) / repelRadius;
                            p.vx += (dx / dist) * force * 12;
                            p.vy += (dy / dist) * force * 12;
                        }
                    }

                    p.vx *= 0.80;
                    p.vy *= 0.80;
                    p.offX += p.vx;
                    p.offY += p.vy;
                    p.offX += (0 - p.offX) * 0.08;
                    p.offY += (0 - p.offY) * 0.08;

                    let detachFade = 1;
                    if (explodeDist > 0) {
                        detachFade = Math.pow(Math.max(0, 1 - explodeDist / (p.detachSpeed * 2.5)), 1.4);
                    }

                    const particleAlpha = p.baseAlpha * activeAlpha * twinkleBrightness * detachFade * Math.max(0.3, finalScale) * Math.min(1, currentAssembly * 2.0);

                    if (particleAlpha > 0.02 && screenY >= -50 && screenY <= cHeight + 50 && screenX >= -50 && screenX <= cWidth + 50) {
                        const blobR = p.size * twinkleScale * (p.isEdge ? 2.9 : (p.isCore ? 2.6 : 2.2));
                        const d = blobR * 2;

                        cCtx.globalAlpha = Math.min(1, particleAlpha);
                        cCtx.drawImage(p.sprite, screenX - blobR, screenY - blobR, d, d);
                    }
                }
                cCtx.restore();
            }

            cubeAnimationFrameId = requestAnimationFrame(renderStorylineParticleCube);
        }

        function startCubeLoop() {
            if (!cubeAnimationFrameId && isCubeVisible && !document.hidden) {
                cubeAnimationFrameId = requestAnimationFrame(renderStorylineParticleCube);
            }
        }

        if ('IntersectionObserver' in window) {
            const heroSection = document.getElementById('hero-sky');
            const target = heroSection || cubeCanvas;
            const observer = new IntersectionObserver((entries) => {
                isCubeVisible = entries[0].isIntersecting;
                if (isCubeVisible) startCubeLoop();
            }, { threshold: 0 });
            observer.observe(target);
        }

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && isCubeVisible) startCubeLoop();
        });

        startCubeLoop();
    }


    // 8. macOS Dock Magnification Physics
    const dock = document.getElementById('macos-dock');
    if (dock) {
        const dockItems = dock.querySelectorAll('.dock-item');
        dock.addEventListener('mousemove', (e) => {
            dockItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(e.clientX - itemCenter);
                
                const maxDistance = 120;
                let scale = 1;
                if (distance < maxDistance) {
                    scale = 1 + 0.35 * Math.cos((distance / maxDistance) * (Math.PI / 2));
                }
                item.style.transform = `scale(${scale}) translateY(-${(scale - 1) * 12}px)`;
            });
        });

        dock.addEventListener('mouseleave', () => {
            dockItems.forEach(item => {
                item.style.transform = 'scale(1) translateY(0px)';
            });
        });
    }

    // 9. Aceternity UI 3D Container Scroll Perspective + Global Liquid Smooth Scroll Engine
    const orbitTrack = document.getElementById('orbit-track');
    const orbitSection = document.getElementById('orbit-showcase');
    const containerHeader = document.querySelector('.container-header');
    const containerCards = document.querySelectorAll('.container-scroll-card');

    let currentSmoothY = window.scrollY;
    let targetSmoothY = window.scrollY;
    let isScrollLoopActive = false;

    // Equal Hold Plateau Distribution: Every card gets the exact same long hold delay in the flat/straight position
    function applyCardHoldPlateau(progress, numCards) {
        if (numCards <= 1) return 0;
        
        // Equal 26% Hold Plateau per card with smooth 11% transition windows:
        // Card 1: 0% -> 26% (Locked 100% straight & flat)
        // Card 2: 37% -> 63% (Locked 100% straight & flat — identical duration!)
        // Card 3: 74% -> 100% (Locked 100% straight & flat — identical duration!)
        if (progress <= 0.26) {
            return 0.0;
        } else if (progress <= 0.37) {
            const t = (progress - 0.26) / 0.11;
            const easeT = t * t * (3 - 2 * t);
            return 0.0 + easeT * 1.0;
        } else if (progress <= 0.63) {
            return 1.0;
        } else if (progress <= 0.74) {
            const t = (progress - 0.63) / 0.11;
            const easeT = t * t * (3 - 2 * t);
            return 1.0 + easeT * 1.0;
        } else {
            return 2.0;
        }
    }

    function updateOrbitContainerScroll() {
        if (!orbitTrack || !orbitSection) return;

        const scrollY = currentSmoothY;
        const viewportHeight = window.innerHeight;
        const sectionTop = orbitSection.offsetTop;
        const sectionHeight = orbitSection.offsetHeight - viewportHeight;

        if (sectionHeight <= 0) return;

        // Entrance unroll physics: Card 1 unrolls from 20deg down to 0deg as section scrolls up into view
        const entranceStart = sectionTop - viewportHeight * 0.5;
        const entranceProgress = Math.max(0, Math.min(1, (scrollY - entranceStart) / (viewportHeight * 0.5)));
        
        // By the time section reaches top of screen (scrollY >= sectionTop), initialRotateX is ALREADY 0deg (100% straight!)
        const initialRotateX = 20 * (1 - entranceProgress);

        // Section horizontal scroll progress (0.0 to 1.0)
        const rawProgress = (scrollY - sectionTop) / sectionHeight;
        const currentProgress = Math.max(0, Math.min(1, rawProgress));
        const isMobile = window.innerWidth <= 768;

        // 3D CURVED PANORAMIC SCREEN ARC PHYSICS:
        // Cards curve along a panoramic 3D screen arc around the viewer!
        const numCards = containerCards.length;
        const activeCardIdx = applyCardHoldPlateau(currentProgress, numCards);

        // Compute exact horizontal translation to center each card precisely
        if (numCards > 1 && containerCards[0] && containerCards[numCards - 1]) {
            const firstCardOffset = containerCards[0].offsetLeft;
            const lastCardOffset = containerCards[numCards - 1].offsetLeft;
            const cardSpacing = (lastCardOffset - firstCardOffset) / (numCards - 1);
            
            const trackX = activeCardIdx * cardSpacing;
            if (rawProgress >= 0) {
                orbitTrack.style.transform = `translateX(-${trackX}px)`;
            } else {
                orbitTrack.style.transform = `translateX(0px)`;
            }
        }

        containerCards.forEach((card, idx) => {
            // Index-based fractional offset from current active focus [-1.0 ... 0.0 ... +1.0]
            const cardOffset = idx - activeCardIdx;
            const clampedOffset = Math.max(-1.5, Math.min(1.5, cardOffset));
            const absOffset = Math.abs(clampedOffset);

            // 3D Curved Ultrawide Display Geometry:
            // Center card: rotY: 0deg, translateZ: 0px (Straight main display focus)
            // Side cards: curve inward along a 1000R curved monitor arc (rotY: +/- 32deg, translateZ: -220px)
            const cardRotY = -32 * clampedOffset;                     // Angles inward to face viewer like a curved monitor wing
            const translateZ = -220 * Math.pow(absOffset, 1.2);        // Recedes back -220px along the curved monitor screen
            
            // Pitch angle (rotateX) & Scale: unrolls from entrance tilt (20deg -> 0deg) as section enters viewport
            const cardRotX = initialRotateX + 3 * absOffset;
            const baseScale = isMobile ? (0.78 + 0.07 * entranceProgress) : (1.04 - 0.04 * entranceProgress);
            const cardScale = baseScale - (isMobile ? 0.10 : 0.05) * absOffset;

            // 3D Perspective (900px) for realistic 1000R curved monitor radius
            card.style.transform = `perspective(900px) translateZ(${translateZ.toFixed(1)}px) rotateX(${cardRotX.toFixed(2)}deg) rotateY(${cardRotY.toFixed(2)}deg) scale(${cardScale.toFixed(3)})`;
            
            // Dynamic lighting, opacity & border glow based on proximity to center
            if (absOffset < 0.20 && initialRotateX < 2) {
                card.style.boxShadow = "0 25px 60px rgba(168, 85, 247, 0.35), 0 35px 70px rgba(0, 0, 0, 0.7)";
                card.style.borderColor = "rgba(192, 132, 252, 0.8)";
                card.style.opacity = "1";
            } else {
                card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.6)";
                card.style.borderColor = "rgba(51, 65, 85, 0.6)";
                card.style.opacity = `${Math.max(0.45, 1 - absOffset * 0.40).toFixed(2)}`;
            }
        });
    }

    function smoothScrollTickLoop() {
        targetSmoothY = window.scrollY;
        const diff = targetSmoothY - currentSmoothY;

        if (Math.abs(diff) > 0.05) {
            currentSmoothY += diff * 0.10; // Silk 60 FPS lerp interpolation factor
            updateOrbitContainerScroll();
            requestAnimationFrame(smoothScrollTickLoop);
        } else {
            currentSmoothY = targetSmoothY;
            updateOrbitContainerScroll();
            isScrollLoopActive = false;
        }
    }

    window.addEventListener('scroll', () => {
        if (!isScrollLoopActive) {
            isScrollLoopActive = true;
            requestAnimationFrame(smoothScrollTickLoop);
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        targetSmoothY = window.scrollY;
        currentSmoothY = window.scrollY;
        updateOrbitContainerScroll();
    });
    
    updateOrbitContainerScroll();
    applyLanguage('EN');
});


// ==========================================================================
// 11. INTERNATIONALIZATION (i18n) MULTI-LANGUAGE ENGINE
// ==========================================================================
let currentLang = 'EN';

const translations = {
    RU: {
        'intro.text': 'Интеллект во плоти кода.',
        'dock.hero': 'Главная',
        'dock.projects': 'Мои проекты',
        'dock.bot': 'Демо ИИ-Бота',
        'dock.terminal': 'Консоль Навыков',
        'dock.cv': 'Открыть CV',
        'dock.contact': 'Telegram @Easyvaleriy',
        'hero.role': 'Интерактивное Онлайн-Резюме',
        'hero.line1': 'Валерий',
        'hero.line2': 'Fullstack AI-Разработчик',
        'hero.desc': 'Я разрабатываю полносистемные ИИ-сервисы, CRM-платформы (React + Supabase RLS), n8n-пайплайны и серверную инфраструктуру.',
        'hero.cta': '<svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="white"/></svg> Telegram',
        'hero.github': '<i class="ph-bold ph-github-logo text-lg text-white"></i> GitHub',
        'hero.cv': '<i class="ph-bold ph-file-pdf text-lg"></i> Резюме',
        'orbit.title': 'Мои проекты',
        'card1.tag': 'Коммерческий MVP CRM',
        'card1.title': 'Atlas CRM — Платформа автоматизации ниш',
        'card1.desc': 'Полнофункциональная CRM-система на React + Vite + Supabase. Защищена Row Level Security (RLS) на уровне СУБД, покрыта автотестами Playwright & Vitest, автоматический деплой через GitHub Actions на Linux-сервер.',
        'card1.f1': 'Строгое разграничение доступов в СУБД.',
        'card1.f2': 'GitHub Actions -> Linux Ubuntu.',
        'card2.tag': 'AI Agent & Automation',
        'card2.title': 'ИИ-Бот Онлайн-Записи & RAG Context',
        'card2.desc': 'Умный бот, ведающий диалог от лица Telegram-аккаунта (Telepilot API). Сам извлекает правила и свободные слоты из БД, согласует время с клиентом и отправляет уведомления в мессенджеры.',
        'card2.f1': 'Запрос правил и слотов из базы данных.',
        'card2.f2': 'Интеграция с Google Календарем.',
        'card3.tag': 'DevOps & SysAdmin',
        'card3.title': 'Серверная Инфраструктура & Защита',
        'card3.desc': 'Развертывание и обслуживание Linux Ubuntu серверов. Конфигурация Nginx Reverse Proxy, установка SSL (Certbot), проксирование Cloudflare WAF, Docker контейнеризация и VPN.',
        'card3.f1': 'Защита от атак и управление DNS.',
        'card3.f2': 'Управление процессами и сборкой.',
        'metrics.v1': 'Fast Learner',
        'metrics.experience': 'Адаптивность к новому стеку',
        'metrics.v2': '15+',
        'metrics.projects': 'Проектов & ИИ-ботов',
        'metrics.v3': '100%',
        'metrics.autotests': 'RLS & CI/CD Автотесты',
        'metrics.v4': '3x',
        'metrics.speed': 'Скорость с AI-стеком',
        'bot.title': 'Демо ИИ-Бота',
        'bot.sub': 'Проверь работу агента — нажми на одну из кнопок ниже.',
        'bot.reset': 'Сбросить',
        'bot.welcome': 'Здравствуйте! Я ИИ-ассистент записи. У меня подгружены актуальные правила компании и свободные слоты из базы данных. Чем могу помочь?',
        'bot.b1': '💬 "Хочу записаться на завтра"',
        'bot.b2': '📅 "Свободные слоты на вечер?"',
        'bot.b3': '⚡ "Подтвердить запись на 18:00"',
        'term.title': 'Консоль Навыков',
        'term.sub': 'Проверь стековые команды или введи <span class="text-brandAccent font-mono">skills</span>, <span class="text-brandPurple font-mono">devops</span>, <span class="text-brandPrimary font-mono">education</span>.',
        'contact.badge': 'Открыт к предложениям & Вакансиям',
        'contact.title': 'Давайте обсудим ваш проект',
        'contact.sub': 'Я открыт к новым предложениям, фуллтайм-разработке и проектным задачам. Напишите мне в Telegram или посмотрите исходный код на GitHub — отвечу в течение 15 минут.',
        'contact.tgdesc': 'Быстрый ответ в течение 15 минут.',
        'contact.ghdesc': 'Исходный код, коммиты и коммерческие MVP.'
    },
    EN: {
        'intro.text': 'Where intelligence meets code.',
        'dock.hero': 'Home',
        'dock.projects': 'My Projects',
        'dock.bot': 'AI Bot Demo',
        'dock.terminal': 'Skills Console',
        'dock.cv': 'Open CV',
        'dock.contact': 'Telegram @Easyvaleriy',
        'hero.role': 'Interactive CV & Portfolio',
        'hero.line1': 'Valerii',
        'hero.line2': 'Fullstack AI Developer',
        'hero.desc': 'I architect full-stack AI services, commercial CRM platforms (React + Supabase RLS), n8n workflows, and server infrastructure.',
        'hero.cta': '<svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="white"/></svg> Telegram @Easyvaleriy',
        'hero.github': '<i class="ph-bold ph-github-logo text-lg text-white"></i> GitHub',
        'hero.cv': '<i class="ph-bold ph-file-pdf text-lg"></i> Resume',
        'orbit.title': 'My Projects',
        'card1.tag': 'Commercial MVP CRM',
        'card1.title': 'Atlas CRM — Multi-Tenant Automation Platform',
        'card1.desc': 'Full-featured CRM platform on React + Vite + Supabase. Hardened with Row Level Security (RLS), covered with Playwright & Vitest automated suites, auto-deployed via GitHub Actions to Linux Ubuntu servers.',
        'card1.f1': 'Strict database row security access.',
        'card1.f2': 'GitHub Actions -> Linux Ubuntu.',
        'card2.tag': 'AI Agent & Automation',
        'card2.title': 'AI Booking Agent & RAG Context',
        'card2.desc': 'Smart agent executing user dialogue on behalf of Telegram account (Telepilot API). Dynamically fetches slots & rules from DB, negotiates time, and dispatches notifications.',
        'card2.f1': 'RAG DB rule and slot retrieval.',
        'card2.f2': 'Two-way Google Calendar Sync.',
        'card3.tag': 'DevOps & SysAdmin',
        'card3.title': 'Server Infrastructure & Security Hardening',
        'card3.desc': 'Deployment and management of Linux Ubuntu servers. Nginx Reverse Proxy configuration, Certbot SSL automation, Cloudflare WAF routing, Docker containers and VPN.',
        'card3.f1': 'DDoS protection & DNS management.',
        'card3.f2': 'Process management & Docker build.',
        'metrics.v1': 'Fast Learner',
        'metrics.experience': 'Adaptability to New Stack',
        'metrics.v2': '15+',
        'metrics.projects': 'Projects & AI Bots',
        'metrics.v3': '100%',
        'metrics.autotests': 'RLS & CI/CD Auto-tests',
        'metrics.v4': '3x',
        'metrics.speed': 'Speed with AI Stack',
        'bot.title': 'AI Agent Demo',
        'bot.sub': 'Test live agent responses — click any scenario button below.',
        'bot.reset': 'Reset',
        'bot.welcome': 'Hello! I am an AI Booking Assistant. I am connected to PostgreSQL DB & Google Calendars. How can I assist you?',
        'bot.b1': '💬 "Book appointment for tomorrow"',
        'bot.b2': '📅 "Any free evening slots?"',
        'bot.b3': '⚡ "Confirm booking for 18:00"',
        'term.title': 'Skills Console',
        'term.sub': 'Test stack commands or type <span class="text-brandAccent font-mono">skills</span>, <span class="text-brandPurple font-mono">devops</span>, <span class="text-brandPrimary font-mono">education</span>.',
        'contact.badge': 'Open for Opportunities & Contracts',
        'contact.title': "Let's Discuss Your Project",
        'contact.sub': 'I am open for new opportunities, full-time positions, and contract work. Message me on Telegram or check my GitHub — I reply within 15 minutes.',
        'contact.tgdesc': 'Fast response within 15 minutes.',
        'contact.ghdesc': 'Source code, commits, and production MVPs.'
    }
};

function applyLanguage(lang) {
    currentLang = lang;
    
    // Update button text across desktop and mobile
    const langBtnText = document.getElementById('lang-btn-text');
    const mobileLangBadge = document.getElementById('mobile-menu-lang-badge');
    const mobileDrawerLangText = document.getElementById('mobile-drawer-lang-text');
    const mobileDrawerTitle = document.getElementById('mobile-drawer-title');
    const mobileLangLabel = document.getElementById('mobile-lang-label');

    if (currentLang === 'RU') {
        if (langBtnText) langBtnText.innerHTML = `RU / <span class="text-slate-400">EN</span>`;
        if (mobileLangBadge) mobileLangBadge.innerHTML = `RU / <span class="text-slate-400">EN</span>`;
        if (mobileDrawerLangText) mobileDrawerLangText.innerHTML = `RU / <span class="text-slate-400">EN</span>`;
        if (mobileDrawerTitle) mobileDrawerTitle.textContent = `Навигация по сайту`;
        if (mobileLangLabel) mobileLangLabel.textContent = `Язык сайта / Language:`;
    } else {
        if (langBtnText) langBtnText.innerHTML = `<span class="text-slate-400">RU</span> / EN`;
        if (mobileLangBadge) mobileLangBadge.innerHTML = `<span class="text-slate-400">RU</span> / EN`;
        if (mobileDrawerLangText) mobileDrawerLangText.innerHTML = `<span class="text-slate-400">RU</span> / EN`;
        if (mobileDrawerTitle) mobileDrawerTitle.textContent = `Site Navigation`;
        if (mobileLangLabel) mobileLangLabel.textContent = `Site Language:`;
    }

    // Translate all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    const dict = translations[currentLang];

    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update all PDF resume links to pass active language parameter (?lang=RU or ?lang=EN)
    const cvLinks = document.querySelectorAll('a[href*="resume_printable.html"]');
    cvLinks.forEach(link => {
        link.href = `resume_printable.html?lang=${currentLang}`;
    });

    // Re-split all section headings for letter-by-letter animation
    initScrollLetterAnimationEngine();

    // Reset bot demo message in new language
    resetBotDemo();
}

function toggleLanguage() {
    const nextLang = currentLang === 'RU' ? 'EN' : 'RU';
    applyLanguage(nextLang);
}

function toggleMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    const drawer = document.getElementById('mobile-menu-drawer');
    const triggerPill = document.getElementById('mobile-trigger-pill');
    if (!overlay || !drawer) return;

    const isOpen = !overlay.classList.contains('opacity-0');
    if (isOpen) {
        overlay.classList.add('opacity-0', 'pointer-events-none');
        drawer.classList.add('scale-90', 'opacity-0', 'pointer-events-none', 'translate-y-4');
        drawer.classList.remove('scale-100', 'opacity-100', 'translate-y-0');
        if (triggerPill) triggerPill.classList.remove('scale-90', 'opacity-40');
    } else {
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        drawer.classList.remove('scale-90', 'opacity-0', 'pointer-events-none', 'translate-y-4');
        drawer.classList.add('scale-100', 'opacity-100', 'translate-y-0');
        if (triggerPill) triggerPill.classList.add('scale-90', 'opacity-40');
    }
}

// Expose globally to window for onclick handlers
window.toggleLanguage = toggleLanguage;
window.applyLanguage = applyLanguage;
window.toggleMobileMenu = toggleMobileMenu;


// 12. Live AI Bot Simulation Demo
function triggerBotDemo(scenario) {
    const chatBody = document.getElementById('bot-chat-body');
    if (!chatBody) return;

    const isEn = currentLang === 'EN';

    if (scenario === 1) {
        appendUserMsg(chatBody, isEn ? 'Hello, I want to book an appointment for tomorrow' : 'Здравствуйте, хочу записаться на завтра');
        setTimeout(() => {
            appendSystemLog(chatBody, '⚡ n8n Webhook -> Querying PostgreSQL DB (RAG)...');
        }, 400);
        setTimeout(() => {
            appendAiMsg(chatBody, isEn ? 'Great! Tomorrow we have open slots at 14:00 and 18:00. Which time works best for you?' : 'Отлично! Завтра на 14:00 и 18:00 есть свободные окна. Какое время вам удобнее?');
        }, 1200);
    } else if (scenario === 2) {
        appendUserMsg(chatBody, isEn ? 'Which slots are available in the evening?' : 'Какие слоты свободны на вечер?');
        setTimeout(() => {
            appendSystemLog(chatBody, '⚡ Telepilot API -> Fetching Google Calendar Slots...');
        }, 400);
        setTimeout(() => {
            appendAiMsg(chatBody, isEn ? 'Available evening slots: 17:30, 18:30, and 19:15. Which would you like to reserve?' : 'На вечер свободны слоты: 17:30, 18:30 и 19:15. На какой вас записать?');
        }, 1200);
    } else if (scenario === 3) {
        appendUserMsg(chatBody, isEn ? 'Confirm booking for 18:00' : 'Подтвердить запись на 18:00');
        setTimeout(() => {
            appendSystemLog(chatBody, '✅ DB Booking Created -> Notification Dispatched to Owner Telegram');
        }, 400);
        setTimeout(() => {
            appendAiMsg(chatBody, isEn ? 'Done! Your booking for tomorrow at 18:00 is confirmed. Notification sent to specialist.' : 'Готово! Вы успешно записаны на завтра в 18:00. Уведомление отправлено мастеру. Ждем вас!');
        }, 1200);
    }
}

function appendUserMsg(container, text) {
    const msg = document.createElement('div');
    msg.className = 'flex gap-3 items-start justify-end';
    msg.innerHTML = `
        <div class="p-3.5 rounded-2xl bg-brandPurple text-white font-medium max-w-md shadow-md">
            ${text}
        </div>
        <div class="w-7 h-7 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">${currentLang === 'EN' ? 'You' : 'Вы'}</div>
    `;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function appendSystemLog(container, text) {
    const log = document.createElement('div');
    log.className = 'font-mono text-[11px] text-brandAccent text-center py-1 bg-emerald-950/40 border border-emerald-500/20 rounded-lg max-w-sm mx-auto';
    log.innerHTML = text;
    container.appendChild(log);
    container.scrollTop = container.scrollHeight;
}

function appendAiMsg(container, text) {
    const msg = document.createElement('div');
    msg.className = 'flex gap-3 items-start';
    msg.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-brandPurple/30 text-brandPurple flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">AI</div>
        <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-glassBorder text-slate-200 max-w-md">
            ${text}
        </div>
    `;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function resetBotDemo() {
    const chatBody = document.getElementById('bot-chat-body');
    const isEn = currentLang === 'EN';
    if (chatBody) {
        chatBody.innerHTML = `
            <div class="flex gap-3 items-start">
                <div class="w-7 h-7 rounded-full bg-brandPurple/30 text-brandPurple flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">AI</div>
                <div class="p-3.5 rounded-2xl bg-slate-800/80 border border-glassBorder text-slate-200 max-w-md">
                    ${isEn ? 'Hello! I am an AI Booking Assistant. I am connected to PostgreSQL DB & Google Calendars. How can I assist you?' : 'Здравствуйте! Я ИИ-ассистент записи. У меня подгружены актуальные правила компании и свободные слоты из базы данных. Чем могу помочь?'}
                </div>
            </div>
        `;
    }
}

// 13. Terminal CLI Logic
const cmdOutputs = {
    help: `
Available Commands:
- <span class="text-brandPrimary">skills</span>    : Display full technical skillset & stack
- <span class="text-brandPurple">devops</span>    : Server, Docker, Nginx & Infrastructure details
- <span class="text-brandAccent">education</span> : Degree credentials (MIREA Software Engineering)
- <span class="text-slate-400">clear</span>     : Clear terminal output screen
`,
    skills: `
<span class="text-brandPrimary font-bold">=== CORE SKILLSET & TECH STACK ===</span>
• <span class="text-white">AI & Automation:</span> n8n Workflows, Telepilot (User-Bots), Google Gemini 1.5 API (Pro/Flash), RAG, MCP, Webhooks.
• <span class="text-white">Frontend:</span> React, Vite, SPA Architecture, Tailwind CSS, Responsive & Motion Design.
• <span class="text-white">Backend & Databases:</span> Supabase, PostgreSQL, Row Level Security (RLS), Triggers, Realtime.
• <span class="text-white">Testing:</span> Playwright E2E Testing, Vitest.
• <span class="text-white">GitHub:</span> <a href="https://github.com/Valerador" target="_blank" class="text-brandPrimary underline">github.com/Valerador</a>
`,
    devops: `
<span class="text-brandPurple font-bold">=== DEVOPS & SYSADMIN INFRASTRUCTURE ===</span>
• <span class="text-white">OS & Containers:</span> Linux Ubuntu, Docker, PM2 process manager, SSH administration.
• <span class="text-white">Web Server:</span> Nginx Reverse Proxy, Certbot SSL automation.
• <span class="text-white">Network & Security:</span> Cloudflare WAF/DNS, custom VPN server setups.
• <span class="text-white">CI/CD:</span> GitHub Actions automated deployment pipelines.
`,
    education: `
<span class="text-brandAccent font-bold">=== EDUCATION & ACADEMIC BACKGROUND ===</span>
• <span class="text-white">B.S. Software Engineering:</span> MIREA – Russian Technological University.
  <i>Specialization in software architecture, databases & algorithms.</i>

• <span class="text-white">M.S. Archival Science:</span> Kalmyk State University.
  <i>Data structuring & documentation management.</i>
`
};

function runCmd(cmd) {
    const termBody = document.getElementById('terminal-body');
    const cleanCmd = cmd.trim().toLowerCase();

    if (cleanCmd === 'clear') {
        termBody.innerHTML = `
            <div>Welcome to Valerii's Deep Space CLI Portal.</div>
            <div>Type <span class="text-brandAccent">help</span> or click quick action buttons below.</div>
            <div class="text-slate-500">----------------------------------------------------</div>
        `;
        return;
    }

    const cmdLineDiv = document.createElement('div');
    const promptSpan = document.createElement('span');
    promptSpan.className = 'text-brandAccent';
    promptSpan.textContent = '$ ';

    const cmdSpan = document.createElement('span');
    cmdSpan.className = 'text-white font-bold';
    cmdSpan.textContent = cleanCmd;

    cmdLineDiv.appendChild(promptSpan);
    cmdLineDiv.appendChild(cmdSpan);
    termBody.appendChild(cmdLineDiv);

    const resLine = document.createElement('div');
    if (cmdOutputs[cmdOutputs[cleanCmd] ? cleanCmd : 'help']) {
        resLine.innerHTML = cmdOutputs[cleanCmd];
    } else {
        const errSpan = document.createElement('span');
        errSpan.className = 'text-red-400';
        errSpan.textContent = `Command not found: "${cleanCmd}". Type help for list of commands.`;
        resLine.appendChild(errSpan);
    }
    termBody.appendChild(resLine);
    termBody.scrollTop = termBody.scrollHeight;
}

function handleCmdSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('terminal-input');
    if (input.value) {
        runCmd(input.value);
        input.value = '';
    }
}

// ==========================================================================
// 14. SMOOTH DYNAMIC SCROLL REVEAL OBSERVER ENGINE
// ==========================================================================
function initScrollRevealEngine() {
    const revealTargets = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-card, #metrics-section, #bot-simulation, #terminal-section, #contact-section'
    );

    revealTargets.forEach(el => {
        if (!el.classList.contains('scroll-reveal') && !el.classList.contains('scroll-reveal-card')) {
            el.classList.add('scroll-reveal');
        }
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    });

    revealTargets.forEach(el => {
        revealObserver.observe(el);
    });
}

// ==========================================================================
// 15. SCROLL-DRIVEN LETTER-BY-LETTER HEADING REVEAL ENGINE
// ==========================================================================
function initScrollLetterAnimationEngine() {
    const headings = document.querySelectorAll('h2[data-i18n], h2.font-heading');

    headings.forEach(h2 => {
        if (h2.id === 'hero-title' || h2.closest('#hero-sky')) return;

        splitTextToSpans(h2);

        const headingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const chars = entry.target.querySelectorAll('.char-span');
                if (entry.isIntersecting) {
                    chars.forEach((span, index) => {
                        setTimeout(() => {
                            span.classList.add('visible');
                        }, index * 25);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        });

        headingObserver.observe(h2);
    });
}

// Initialize Scroll Animations after DOM loaded
initScrollRevealEngine();
initScrollLetterAnimationEngine();
