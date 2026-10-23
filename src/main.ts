import './style.css';
import { initSharedNavigation } from './assets/js/nav';


// Quick Enquiry Form Submission handler
const enquiryForm = document.getElementById('home-enquiry-form') as HTMLFormElement | null;
const successMsg = document.getElementById('enquiry-success-msg');

if (enquiryForm && successMsg) {
  enquiryForm.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    successMsg.classList.remove('hidden');
    enquiryForm.reset();
    setTimeout(() => {
      successMsg.classList.add('hidden');
    }, 6000);
  });
}

/* ==========================================================================
   3D Fluid / Gas Particle Wave Simulation (Aerodynamic Damper Dynamics)
   ========================================================================== */
function init3DFluidWave() {
  const canvas = document.getElementById('hero-fluid-canvas') as HTMLCanvasElement | null;
  const stage = document.getElementById('hero-stage');
  if (!canvas || !stage) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let width = 0;
  let height = 0;
  let dpr = 1;

  interface Particle {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    baseY: number;
    phase: number;
    size: number;
    color: string;
    glowColor: string;
    alpha: number;
  }

  interface StreamPoint {
    x: number;
    y: number;
    z: number;
    baseY: number;
    phase: number;
    screenX: number;
    screenY: number;
    scale: number;
  }

  interface Streamline {
    baseY: number;
    baseZ: number;
    amplitude: number;
    color: string;
    points: StreamPoint[];
  }

  let particles: Particle[] = [];
  let streamlines: Streamline[] = [];

  const mouse = {
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    isHovered: false,
    tiltX: 0,
    tiltY: 0,
    targetTiltX: 0,
    targetTiltY: 0
  };

  const particleColors = [
    { color: 'rgba(56, 189, 248, 0.95)', glow: 'rgba(56, 189, 248, 0.35)' }, // Cyan
    { color: 'rgba(37, 99, 235, 0.9)', glow: 'rgba(37, 99, 235, 0.28)' },     // Electric Blue
    { color: 'rgba(20, 184, 166, 0.9)', glow: 'rgba(20, 184, 166, 0.32)' },  // Marine Teal
    { color: 'rgba(147, 197, 253, 0.95)', glow: 'rgba(147, 197, 253, 0.4)' },// Specular Blue
    { color: 'rgba(255, 255, 255, 0.95)', glow: 'rgba(255, 255, 255, 0.4)' } // Core Highlight
  ];

  const streamGradients = [
    'rgba(56, 189, 248, 0.45)',
    'rgba(20, 184, 166, 0.42)',
    'rgba(37, 99, 235, 0.38)',
    'rgba(96, 165, 250, 0.35)',
    'rgba(45, 212, 191, 0.32)',
    'rgba(147, 197, 253, 0.3)'
  ];

  const initElements = () => {
    particles = [];
    streamlines = [];

    const isMobile = width < 768;
    const particleCount = isMobile ? 80 : 175;
    const streamCount = isMobile ? 4 : 6;

    // Generate 3D fluid particles
    for (let i = 0; i < particleCount; i++) {
      const col = particleColors[Math.floor(Math.random() * particleColors.length)];
      particles.push({
        x: (Math.random() - 0.5) * width * 1.6,
        y: (Math.random() - 0.5) * height * 0.9,
        z: (Math.random() - 0.5) * 600,
        vx: 1.4 + Math.random() * 2.2,
        vy: 0,
        baseY: (Math.random() - 0.5) * height * 0.8,
        phase: Math.random() * Math.PI * 2,
        size: 1.2 + Math.random() * 2.6,
        color: col.color,
        glowColor: col.glow,
        alpha: 0.3 + Math.random() * 0.7
      });
    }

    // Generate 3D aerodynamic streamline paths
    const pointsPerStream = isMobile ? 22 : 36;
    for (let s = 0; s < streamCount; s++) {
      const baseY = ((s / (streamCount - 1)) - 0.5) * height * 0.75;
      const baseZ = ((s / (streamCount - 1)) - 0.5) * 450;
      const points: StreamPoint[] = [];

      for (let p = 0; p < pointsPerStream; p++) {
        const x = ((p / (pointsPerStream - 1)) - 0.5) * width * 1.5;
        points.push({
          x,
          y: baseY,
          z: baseZ,
          baseY,
          phase: (p / pointsPerStream) * Math.PI * 2 + s * 1.2,
          screenX: 0,
          screenY: 0,
          scale: 1
        });
      }

      streamlines.push({
        baseY,
        baseZ,
        amplitude: 34 + s * 9,
        color: streamGradients[s % streamGradients.length],
        points
      });
    }
  };

  const resize = () => {
    const rect = stage.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    if (width === 0 || height === 0) return;

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    initElements();
  };

  const handlePointer = (clientX: number, clientY: number) => {
    const rect = stage.getBoundingClientRect();
    mouse.targetX = clientX - rect.left;
    mouse.targetY = clientY - rect.top;
    mouse.isHovered = true;

    mouse.targetTiltX = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width) * 2 - 1));
    mouse.targetTiltY = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height) * 2 - 1));
  };

  stage.addEventListener('mousemove', (e: MouseEvent) => handlePointer(e.clientX, e.clientY));
  stage.addEventListener('mouseleave', () => {
    mouse.isHovered = false;
    mouse.targetX = -9999;
    mouse.targetY = -9999;
    mouse.targetTiltX = 0;
    mouse.targetTiltY = 0;
  });

  stage.addEventListener('touchmove', (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handlePointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    mouse.isHovered = false;
    mouse.targetX = -9999;
    mouse.targetY = -9999;
    mouse.targetTiltX = 0;
    mouse.targetTiltY = 0;
  });

  // Gyroscope tilt support on mobile
  if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
    window.addEventListener('deviceorientation', (e: DeviceOrientationEvent) => {
      if (!mouse.isHovered && e.gamma !== null && e.beta !== null) {
        mouse.targetTiltX = Math.max(-1, Math.min(1, e.gamma / 35));
        mouse.targetTiltY = Math.max(-1, Math.min(1, (e.beta - 45) / 35));
      }
    }, { passive: true });
  }

  window.addEventListener('resize', resize);
  resize();

  // Performance: Pause simulation when scrolled out of view
  let isVisible = true;
  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(stage);

  let time = 0;
  let animId: number;

  const render = () => {
    if (!isVisible) {
      animId = requestAnimationFrame(render);
      return;
    }

    time += 0.014;

    // Smooth inertia lerping
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;
    mouse.tiltX += (mouse.targetTiltX - mouse.tiltX) * 0.06;
    mouse.tiltY += (mouse.targetTiltY - mouse.tiltY) * 0.06;

    // Update Stage CSS custom properties for 3D card & background parallax
    stage.style.setProperty('--tilt-x', mouse.tiltX.toFixed(4));
    stage.style.setProperty('--tilt-y', mouse.tiltY.toFixed(4));
    stage.style.setProperty('--bg-x', `${(-mouse.tiltX * 28).toFixed(2)}px`);
    stage.style.setProperty('--bg-y', `${(-mouse.tiltY * 20).toFixed(2)}px`);

    const spotlightX = mouse.isHovered ? (mouse.x / width) * 100 : 50;
    const spotlightY = mouse.isHovered ? (mouse.y / height) * 100 : 50;
    stage.style.setProperty('--mouse-px', `${Math.max(0, Math.min(100, spotlightX)).toFixed(2)}%`);
    stage.style.setProperty('--mouse-py', `${Math.max(0, Math.min(100, spotlightY)).toFixed(2)}%`);

    ctx.clearRect(0, 0, width, height);

    // 3D Camera Angles
    const camPitch = mouse.tiltY * 0.22;
    const camYaw = mouse.tiltX * 0.32;
    const cosX = Math.cos(camPitch);
    const sinX = Math.sin(camPitch);
    const cosY = Math.cos(camYaw);
    const sinY = Math.sin(camYaw);

    const fov = 650;
    const centerX = width / 2;
    const centerY = height / 2;

    const project = (x: number, y: number, z: number) => {
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const scale = fov / Math.max(10, fov + z2 + 300);
      return {
        screenX: centerX + x1 * scale,
        screenY: centerY + y2 * scale,
        scale,
        depth: z2
      };
    };

    // 1. Render Aerodynamic Streamline Ribbons
    ctx.lineWidth = 1.6;
    for (let s = 0; s < streamlines.length; s++) {
      const stream = streamlines[s];
      const pts = stream.points;

      for (let p = 0; p < pts.length; p++) {
        const pt = pts[p];
        const wave = Math.sin(pt.x * 0.0035 + time * 1.8 + pt.phase) * stream.amplitude
          + Math.cos(pt.z * 0.004 + time * 1.2) * (stream.amplitude * 0.45);
        let curY = pt.baseY + wave;
        const curX = pt.x;

        // Interactive mouse deflection
        const projTemp = project(curX, curY, pt.z);
        if (mouse.isHovered) {
          const dx = projTemp.screenX - mouse.x;
          const dy = projTemp.screenY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const deflectRadius = 180;
          if (dist < deflectRadius) {
            const force = (1 - dist / deflectRadius) * 45;
            curY += (dy / (dist || 1)) * force;
          }
        }

        const proj = project(curX, curY, pt.z);
        pt.screenX = proj.screenX;
        pt.screenY = proj.screenY;
        pt.scale = proj.scale;
      }

      if (pts.length > 2) {
        ctx.beginPath();
        ctx.strokeStyle = stream.color;
        ctx.moveTo(pts[0].screenX, pts[0].screenY);

        for (let p = 1; p < pts.length - 1; p++) {
          const xc = (pts[p].screenX + pts[p + 1].screenX) / 2;
          const yc = (pts[p].screenY + pts[p + 1].screenY) / 2;
          ctx.quadraticCurveTo(pts[p].screenX, pts[p].screenY, xc, yc);
        }
        ctx.stroke();

        // Node markers
        for (let p = 0; p < pts.length; p += 3) {
          const pt = pts[p];
          if (pt.scale > 0.4) {
            ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
            ctx.beginPath();
            ctx.arc(pt.screenX, pt.screenY, 1.8 * pt.scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // 2. Render 3D Fluid Particles
    const boundX = width * 0.85;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      if (p.x > boundX) {
        p.x = -boundX;
        p.y = p.baseY;
      }

      const waveY = Math.sin(p.x * 0.004 + time * 2.2 + p.phase) * 28
        + Math.cos(p.z * 0.005 + time) * 16;
      const targetY = p.baseY + waveY;

      // Mouse interactive fluid vortex
      const projCurrent = project(p.x, targetY, p.z);
      if (mouse.isHovered) {
        const dx = projCurrent.screenX - mouse.x;
        const dy = projCurrent.screenY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 170;
        if (dist < radius) {
          const force = (1 - dist / radius) * 45;
          p.vy += (dy / (dist || 1)) * force * 0.08;
          p.vx += (dx / (dist || 1)) * force * 0.04;
        }
      }

      p.vy *= 0.92;
      p.vx += (2.0 - p.vx) * 0.04;

      const finalY = targetY + p.vy * 8;
      const proj = project(p.x, finalY, p.z);

      if (proj.scale > 0.15) {
        const rad = Math.max(0.6, p.size * proj.scale);
        const alpha = Math.min(1, Math.max(0.1, p.alpha * proj.scale));

        if (rad > 2.0) {
          ctx.beginPath();
          ctx.fillStyle = p.glowColor;
          ctx.arc(proj.screenX, proj.screenY, rad * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.arc(proj.screenX, proj.screenY, rad, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    animId = requestAnimationFrame(render);
  };

  animId = requestAnimationFrame(render);

  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animId);
    observer.disconnect();
  });
}

/* ==========================================================================
   Technorithm Hero Typewriter & Headline Auto-Changer Effect
   ========================================================================== */
function initHeroTypewriter() {
  const titleEl = document.getElementById('hero-main-title');
  const target = document.getElementById('hero-typewriter-text');
  if (!target) return;
  const textEl = target;

  const slidesData = [
    {
      title: `Over 15 Years of Specialised Experience<br /><span class="text-[#EE6226]">in Designing Advanced Damper Valves</span>`,
      subtitle: "Over 15 years of specialised experience in designing advanced damper valves."
    },
    {
      title: `Industrial & Marine Damper Valve Engineering<br /><span class="text-[#EE6226]">for Demanding Global Environments</span>`,
      subtitle: "Custom Engineered Damper Valves & Flow Control Solutions"
    },
    {
      title: `High-Temperature Heavy-Duty Damper Systems<br /><span class="text-[#EE6226]">Engineered up to 1200°C & Zero Leakage</span>`,
      subtitle: "100% Tight Shut-Off & Isolation for Severe Duty Applications"
    },
    {
      title: `Indo-Italian Actuation Partnership with Actuatech S.p.A.<br /><span class="text-[#EE6226]">World-Class Actuated Damper Valve Systems</span>`,
      subtitle: "Partnered with Actuatech S.p.A. Italy for Advanced Actuation"
    },
    {
      title: `Aerodynamic CFD Simulation & FEA Precision<br /><span class="text-[#EE6226]">Tailored for Hostile, Corrosive & Abrasive Media</span>`,
      subtitle: "Tailored for Power, Cement, Steel, Marine & Chemical Industries"
    },
    {
      title: `Precision Engineered Flue Gas & Process Dampers<br /><span class="text-[#EE6226]">Certified for Global Industrial Standards</span>`,
      subtitle: "Engineering Excellence in Industrial & Marine Flow Control"
    }
  ];

  let currentIndex = 0;
  let charIndex = slidesData[0].subtitle.length;
  let isDeleting = true;
  let typingSpeed = 50;

  function changeHeadline(newHtml: string) {
    if (!titleEl) return;
    titleEl.style.opacity = '0';
    titleEl.style.transform = 'translateY(12px)';
    setTimeout(() => {
      titleEl.innerHTML = newHtml;
      titleEl.style.opacity = '1';
      titleEl.style.transform = 'translateY(0)';
    }, 350);
  }

  function type() {
    const currentItem = slidesData[currentIndex];

    if (isDeleting) {
      textEl.textContent = currentItem.subtitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 18;
    } else {
      textEl.textContent = currentItem.subtitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 32;
    }

    if (!isDeleting && charIndex === currentItem.subtitle.length) {
      typingSpeed = 4000; // Display complete text for 4 seconds
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % slidesData.length;

      // Synchronously switch the main headline too
      changeHeadline(slidesData[currentIndex].title);

      typingSpeed = 400; // Small breath before typing next subtitle
    }

    setTimeout(type, typingSpeed);
  }

  // Start rotation after initial 3.5 seconds
  setTimeout(type, 3500);
}

/* ==========================================================================
   Technorithm / Pill Navbar Scroll & Active Scrollspy System
   ========================================================================== */
function initNavbarScroll() {
  const nav = document.getElementById('techno-navbar');
  if (!nav) return;
  const navEl = nav;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navEl.classList.add('navbar-scrolled');
    } else {
      navEl.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Scrollspy for in-page section links (#who-we-are, #partnership, #scope-of-work, #what-we-do, #industries, #why-us, #standards, #testimonials)
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
  if (sections.length > 0) {
    const handleScrollspy = () => {
      const scrollPos = window.scrollY + 140;
      let currentSectionId = '';
      for (const sec of sections) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id') || '';
        }
      }

      if (currentSectionId) {
        document.querySelectorAll<HTMLAnchorElement>('.nav-pill-link').forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else if (href && href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    };
    window.addEventListener('scroll', handleScrollspy, { passive: true });
    handleScrollspy();
  }
}


/* ==========================================================================
   Technorithm Interactive Testimonial Carousel Slider
   ========================================================================== */
function initTestimonialSlider() {
  const trackEl = document.getElementById('testimonial-track');
  const prevBtn = document.getElementById('testimonial-prev-btn');
  const nextBtn = document.getElementById('testimonial-next-btn');
  const dotsEl = document.getElementById('testimonial-dots');
  if (!trackEl || !prevBtn || !nextBtn || !dotsEl) return;
  const track = trackEl;
  const dotsContainer = dotsEl;

  const slides = Array.from(track.children) as HTMLElement[];
  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoPlayTimer: number | null = null;

  function getVisibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getMaxIndex() {
    return Math.max(0, slides.length - getVisibleCount());
  }

  function updateSlider() {
    const visibleCount = getVisibleCount();
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const slideWidthPercent = 100 / visibleCount;
    slides.forEach((slide) => {
      slide.style.width = `${slideWidthPercent}%`;
      slide.style.flexShrink = '0';
    });

    const offset = currentIndex * slideWidthPercent;
    track.style.transform = `translateX(-${offset}%)`;

    // Render pagination dots matching mockup
    dotsContainer.innerHTML = '';
    const totalDots = maxIndex + 1;
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
      dot.className = i === currentIndex
        ? 'rounded-full transition-all duration-300 bg-[#EE6226] w-3 h-3 cursor-pointer shadow-sm'
        : 'rounded-full transition-all duration-300 bg-[#CBD5E1] w-2.5 h-2.5 hover:bg-slate-400 cursor-pointer';
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }

    // Spotlight active card matching mockup
    const featuredIndex = currentIndex + (visibleCount === 3 ? 1 : 0);
    slides.forEach((slide, idx) => {
      const box = slide.querySelector('.techno-testimonial-box');
      if (box) {
        if (idx === featuredIndex) {
          box.classList.add('border-2', 'border-[#EE6226]', 'shadow-lg', 'shadow-orange-500/10');
          box.classList.remove('border-slate-200');
        } else {
          box.classList.remove('border-2', 'border-[#EE6226]', 'shadow-lg', 'shadow-orange-500/10');
          box.classList.add('border-slate-200');
        }
      }
    });
  }

  function nextSlide() {
    const maxIndex = getMaxIndex();
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateSlider();
  }

  function prevSlide() {
    const maxIndex = getMaxIndex();
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateSlider();
  }

  function resetAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    autoPlayTimer = window.setInterval(nextSlide, 4500);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
  });

  track.addEventListener('mouseenter', () => {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  });
  track.addEventListener('mouseleave', () => {
    resetAutoPlay();
  });

  window.addEventListener('resize', () => {
    updateSlider();
  });

  updateSlider();
  resetAutoPlay();
}

/* ==========================================================================
   Bidirectional Scroll Text & Element Load / Unload Animation System
   ========================================================================== */
function initScrollLoadUnload() {
  // 1. Auto-stagger Who We Are capability cards
  document.querySelectorAll<HTMLElement>('#who-we-are .grid > .group.relative').forEach((card, idx) => {
    card.classList.add('scroll-reveal-item');
    if (!card.style.getPropertyValue('--stagger-delay')) {
      card.style.setProperty('--stagger-delay', `${idx * 100}ms`);
    }
  });

  // 2. Auto-stagger Why Bellator cards
  document.querySelectorAll<HTMLElement>('.why-bellator-card').forEach((card, idx) => {
    card.classList.add('scroll-reveal-scale');
    if (!card.style.getPropertyValue('--stagger-delay')) {
      card.style.setProperty('--stagger-delay', `${(idx % 3) * 110}ms`);
    }
  });

  // 3. Auto-stagger Industry cards in grid rows
  document.querySelectorAll<HTMLElement>('.industry-card').forEach((card, idx) => {
    card.classList.add('scroll-reveal-item');
    if (!card.style.getPropertyValue('--stagger-delay')) {
      card.style.setProperty('--stagger-delay', `${(idx % 3) * 110}ms`);
    }
  });

  // 4. Auto-stagger Standards stats counters
  document.querySelectorAll<HTMLElement>('#standards .flex-col.items-center.text-center').forEach((stat, idx) => {
    stat.classList.add('scroll-reveal-scale');
    stat.style.setProperty('--stagger-delay', `${idx * 120}ms`);
  });

  // 5. Stagger Scope of Work cards and hub on scroll
  const leftCards = document.querySelectorAll<HTMLElement>('.scope-card-01, .scope-card-02, .scope-card-03, .scope-card-04');
  leftCards.forEach((card, idx) => {
    card.classList.add('scroll-reveal-left');
    if (!card.style.getPropertyValue('--stagger-delay')) {
      card.style.setProperty('--stagger-delay', `${idx * 100}ms`);
    }
  });

  const rightCards = document.querySelectorAll<HTMLElement>('.scope-card-05, .scope-card-06, .scope-card-07, .scope-card-08');
  rightCards.forEach((card, idx) => {
    card.classList.add('scroll-reveal-right');
    if (!card.style.getPropertyValue('--stagger-delay')) {
      card.style.setProperty('--stagger-delay', `${idx * 100}ms`);
    }
  });

  const scopeHub = document.querySelector<HTMLElement>('.scope-central-disc');
  if (scopeHub) {
    scopeHub.classList.add('scroll-reveal-scale');
    scopeHub.style.setProperty('--stagger-delay', '150ms');
  }

  // 6. Stagger Footer columns
  document.querySelectorAll<HTMLElement>('footer .grid > div').forEach((col, idx) => {
    col.classList.add('scroll-reveal-item');
    col.style.setProperty('--stagger-delay', `${idx * 80}ms`);
  });

  const elements = document.querySelectorAll<HTMLElement>(
    '.scroll-reveal, .scroll-reveal-item, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-heading, .scroll-subtext, .scroll-badge, .scroll-mask-wrap, .spec-table-row'
  );
  if (elements.length === 0) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('is-loaded'));
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      const rect = entry.boundingClientRect;
      if (entry.isIntersecting) {
        // Load effect 1 by 1 when scrolled into view
        el.classList.add('is-loaded');
      } else {
        // Hysteresis unload: ONLY unload when element exits through the bottom of the screen
        // (i.e. user scrolled back UP towards the top of the page).
        // Never unload when scrolled past the top of the viewport, so reading is seamless without flickering.
        if (rect.top > 0) {
          el.classList.remove('is-loaded');
        }
      }
    });
  }, observerOptions);

  elements.forEach((el) => {
    observer.observe(el);
    // Instant visibility check for elements already inside or near viewport on load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-loaded');
    }
  });
}

/* ==========================================================================
   Interactive "What We Do" Damper Showcase Carousel Controller
   ========================================================================== */
function initWhatWeDoCarousel() {
  const viewport = document.getElementById('what-carousel-viewport') as HTMLElement | null;
  const track = document.getElementById('what-carousel-track') as HTMLElement | null;
  const prevBtn = document.getElementById('what-carousel-prev') as HTMLButtonElement | null;
  const nextBtn = document.getElementById('what-carousel-next') as HTMLButtonElement | null;
  const dotsContainer = document.getElementById('what-carousel-dots') as HTMLElement | null;

  if (!viewport || !track) return;

  const originalCards = Array.from(track.querySelectorAll<HTMLElement>('.what-product-card'));
  if (originalCards.length === 0) return;

  // Helper to convert hex to RGBA
  const hexToRgba = (hex: string, alpha: number) => {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16) || 37;
    const g = parseInt(clean.substring(2, 4), 16) || 99;
    const b = parseInt(clean.substring(4, 6), 16) || 235;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Set card accent variables on each card
  originalCards.forEach((card) => {
    const accent = card.getAttribute('data-accent') || '#EE6226';
    card.style.setProperty('--card-accent', accent);
    card.style.setProperty('--card-glow', hexToRgba(accent, 0.32));
  });

  // Duplicate cards to create an infinite, seamless continuous moving list
  originalCards.forEach((card) => {
    const clone = card.cloneNode(true) as HTMLElement;
    clone.classList.remove('is-active');
    clone.classList.add('is-loaded');
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  const allCards = Array.from(track.querySelectorAll<HTMLElement>('.what-product-card'));
  allCards.forEach((card) => {
    card.classList.add('is-loaded');
    const accent = card.getAttribute('data-accent') || '#EE6226';
    card.style.setProperty('--card-accent', accent);
    card.style.setProperty('--card-glow', hexToRgba(accent, 0.32));
  });

  // Calculate pixel distance of one complete set of cards for seamless infinite wrapping
  let singleLoopWidth = 0;
  function measureLoopWidth() {
    if (allCards.length > originalCards.length) {
      const firstClone = allCards[originalCards.length];
      const firstCard = allCards[0];
      if (firstClone && firstCard) {
        singleLoopWidth = firstClone.offsetLeft - firstCard.offsetLeft;
      }
    }
    if (singleLoopWidth <= 0) {
      singleLoopWidth = track ? track.scrollWidth / 2 : 0;
    }
  }

  // Render interactive pagination dots (5 dots for the 5 distinct product cards)
  const dots: HTMLButtonElement[] = [];
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    originalCards.forEach((card, idx) => {
      const dot = document.createElement('button');
      dot.className = 'what-carousel-dot';
      dot.setAttribute('type', 'button');
      dot.setAttribute('role', 'tab');
      const cardTitle = card.querySelector('h3')?.textContent?.trim() || `Product ${idx + 1}`;
      dot.setAttribute('aria-label', `View ${cardTitle}`);
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetCard = originalCards[idx];
        if (targetCard) {
          viewport.scrollTo({
            left: targetCard.offsetLeft - 30,
            behavior: 'smooth'
          });
          pauseGlide(3000);
          updateActiveDot(idx);
        }
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
  }

  function updateActiveDot(index: number) {
    const safeIdx = Math.abs(index) % originalCards.length;
    const activeAccent = originalCards[safeIdx]?.getAttribute('data-accent') || '#EE6226';
    dots.forEach((dot, idx) => {
      if (idx === safeIdx) {
        dot.classList.add('is-active');
        dot.setAttribute('aria-selected', 'true');
        dot.style.setProperty('--dot-color', activeAccent);
        dot.style.setProperty('--dot-glow', hexToRgba(activeAccent, 0.45));
      } else {
        dot.classList.remove('is-active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  // Continuous gliding state
  const glideSpeed = 0.75; // Pixels per frame (~45px per second - smooth, legible, elegant)
  let isPaused = false;
  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let hasMoved = false;
  let pauseTimer: number | null = null;

  function pauseGlide(resumeDelayMs: number = 2500) {
    isPaused = true;
    if (pauseTimer) window.clearTimeout(pauseTimer);
    pauseTimer = window.setTimeout(() => {
      if (!isDown && !viewport?.matches(':hover')) {
        isPaused = false;
      }
    }, resumeDelayMs);
  }

  // Continuous loop runner via requestAnimationFrame
  function glideAnimationLoop() {
    if (!viewport) return;

    if (!isPaused && !isDown && singleLoopWidth > 0) {
      viewport.scrollLeft += glideSpeed;

      // When we have scrolled one full set of cards, seamlessly subtract loop width
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
      }

      // Sync active dot with visible position
      const cardStep = singleLoopWidth / originalCards.length;
      if (cardStep > 0) {
        const currentIdx = Math.floor((viewport.scrollLeft + 100) / cardStep) % originalCards.length;
        updateActiveDot(currentIdx);
      }
    }

    requestAnimationFrame(glideAnimationLoop);
  }

  // Prev / Next button step actions
  const stepAmount = 280; // Approximate card width + gap

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!viewport) return;
      if (viewport.scrollLeft < stepAmount) {
        viewport.scrollLeft += singleLoopWidth;
      }
      viewport.scrollBy({ left: -stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!viewport) return;
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
      }
      viewport.scrollBy({ left: stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    });
  }

  // Keyboard arrow keys
  viewport.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (viewport.scrollLeft < stepAmount) {
        viewport.scrollLeft += singleLoopWidth;
      }
      viewport.scrollBy({ left: -stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
      }
      viewport.scrollBy({ left: stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    }
  });

  // Pause on hover or pointer contact so user can read cards comfortably
  const handleHoverStart = () => {
    isPaused = true;
  };
  const handleHoverEnd = () => {
    if (!isDown) {
      pauseGlide(400);
    }
  };

  viewport.addEventListener('mouseenter', handleHoverStart);
  viewport.addEventListener('mouseleave', handleHoverEnd);
  viewport.addEventListener('pointerenter', handleHoverStart);
  viewport.addEventListener('pointerleave', handleHoverEnd);
  track.addEventListener('mouseenter', handleHoverStart);
  track.addEventListener('mouseleave', handleHoverEnd);

  viewport.addEventListener('touchstart', () => {
    isPaused = true;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    pauseGlide(2000);
  }, { passive: true });

  // Mouse drag support
  viewport.addEventListener('mousedown', (e) => {
    isDown = true;
    hasMoved = false;
    isPaused = true;
    startX = e.pageX - viewport.offsetLeft;
    scrollLeftStart = viewport.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    pauseGlide(2000);
  });

  viewport.addEventListener('mousemove', (e) => {
    if (!isDown || !viewport) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 6) hasMoved = true;
    viewport.scrollLeft = scrollLeftStart - walk;

    // Wrap seamlessly while dragging
    if (singleLoopWidth > 0) {
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
        scrollLeftStart -= singleLoopWidth;
      } else if (viewport.scrollLeft < 0) {
        viewport.scrollLeft += singleLoopWidth;
        scrollLeftStart += singleLoopWidth;
      }
    }
  });

  // Card click navigation (works for both original cards and cloned cards)
  track.addEventListener('click', (e) => {
    if (hasMoved) {
      hasMoved = false;
      e.preventDefault();
      return;
    }
    const card = (e.target as HTMLElement).closest<HTMLElement>('.what-product-card');
    if (!card) return;

    const isCta = (e.target as HTMLElement).closest('.what-cta-btn');
    const targetHref = card.getAttribute('data-href');
    if (targetHref && isCta) {
      window.location.href = targetHref;
    } else if (targetHref) {
      window.location.href = targetHref;
    }
  });

  // Resize observer to re-measure singleLoopWidth on window resize
  window.addEventListener('resize', () => {
    measureLoopWidth();
  }, { passive: true });

  // Initialize and start continuous moving animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      measureLoopWidth();
      updateActiveDot(0);
      glideAnimationLoop();
    }, 150);
  });
}

/* ==========================================================================
   Industries We Serve - Modern Bento Grid Navigation Controller
   ========================================================================== */
function initIndustriesDossier() {
  const filterPills = document.querySelectorAll<HTMLButtonElement>('.bento-filter-pill');
  if (filterPills.length === 0) return;

  filterPills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('data-bento-target');
      if (!targetId) return;

      const targetCard = document.getElementById(targetId);
      if (!targetCard) return;

      // Update active pill state
      filterPills.forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');

      // Smooth scroll to card
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Add temporary highlight pulse
      targetCard.classList.remove('highlight-card');
      // Trigger reflow for restart animation
      void targetCard.offsetWidth;
      targetCard.classList.add('highlight-card');
      setTimeout(() => {
        targetCard.classList.remove('highlight-card');
      }, 1900);
    });
  });
}


/* ==========================================================================
   AI Assistant Search Interaction (Inline Rich Answers directly on page)
   ========================================================================== */
import { getAiBotResponse } from './components/chatbot';

import { marked } from 'marked';
import DOMPurify from 'dompurify';

function initAiAssistant() {
  const inputEl = document.getElementById('ai-assistant-input') as HTMLInputElement | null;
  const submitBtn = document.getElementById('ai-submit-btn');
  const voiceBtn = document.getElementById('ai-voice-btn');
  const responseBox = document.getElementById('ai-response-box');
  const responseText = document.getElementById('ai-response-text');
  const promptChips = document.querySelectorAll('.ai-prompt-chip');

  if (!inputEl) return;

  const handleQuery = (query: string) => {
    if (!query.trim()) return;
    if (responseBox && responseText) {
      responseBox.classList.remove('hidden');
      responseText.innerHTML = `
        <div class="flex items-center gap-2 text-slate-500 text-xs py-1">
          <div class="w-4 h-4 border-2 border-[#EE6226] border-t-transparent rounded-full animate-spin"></div>
          <span>Analyzing Bellator database for <em>"${query}"</em>...</span>
        </div>
      `;

      setTimeout(() => {
        const botResponse = getAiBotResponse(query);
        const rawHtml = marked.parse(botResponse.text, { async: false }) as string;
        const formattedText = DOMPurify.sanitize(rawHtml);

        let cardHtml = '';
        if (botResponse.card) {
          cardHtml = `
            <div class="mt-3 bg-white rounded-xl border border-orange-500/20 shadow-sm p-3.5 space-y-2.5">
              <div class="flex flex-col sm:flex-row gap-3 items-start">
                ${botResponse.card.image ? `
                  <div class="w-full sm:w-28 h-24 bg-slate-50 rounded-lg flex items-center justify-center p-1 flex-shrink-0 border border-slate-100">
                    <img src="${botResponse.card.image}" alt="${botResponse.card.title}" class="max-h-full max-w-full object-contain" />
                  </div>
                ` : ''}
                <div class="flex-1 min-w-0">
                  ${botResponse.card.model ? `<span class="inline-block px-2 py-0.5 rounded bg-orange-100 text-[#EE6226] font-mono font-bold text-[10px] mb-1">${botResponse.card.model}</span>` : ''}
                  <h4 class="font-bold text-slate-900 text-sm leading-tight">${botResponse.card.title}</h4>
                  ${botResponse.card.desc ? `<p class="text-slate-600 text-xs mt-1 leading-relaxed">${botResponse.card.desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>` : ''}
                </div>
              </div>

              ${botResponse.card.specs && botResponse.card.specs.length ? `
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 text-xs">
                  ${botResponse.card.specs.map(s => `
                    <div class="bg-slate-50 p-2 rounded border border-slate-100">
                      <span class="text-slate-400 block text-[9px] uppercase font-semibold">${s.label}</span>
                      <span class="text-slate-800 font-medium text-xs">${s.value}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              ${botResponse.card.link ? `
                <div class="pt-2 flex items-center justify-between gap-3">
                  <a href="${botResponse.card.link}" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EE6226] hover:bg-[#d8551d] text-white font-semibold text-xs transition-all shadow-sm">
                    <span>${botResponse.card.linkText || 'View Product Datasheet'}</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                  <a href="https://wa.me/919028219202?text=Hello%20Bellator%2C%20inquiry%20regarding%20${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold text-xs">
                    <span>WhatsApp Inquiry &rarr;</span>
                  </a>
                </div>
              ` : ''}
            </div>
          `;
        }

        let suggestionsHtml = '';
        if (botResponse.suggestions && botResponse.suggestions.length) {
          suggestionsHtml = `
            <div class="mt-3 pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5">
              <span class="text-[11px] text-slate-400 font-medium mr-1">Related:</span>
              ${botResponse.suggestions.map(s => `
                <button type="button" class="inline-ai-chip px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-orange-400 hover:text-[#EE6226] text-[11px] text-slate-700 font-medium transition-all shadow-2xs">
                  ${s}
                </button>
              `).join('')}
            </div>
          `;
        }

        responseText.innerHTML = `
          <div class="text-slate-800 text-xs sm:text-sm leading-relaxed">
            ${formattedText}
            ${cardHtml}
            ${suggestionsHtml}
          </div>
        `;

        // Bind clicks for related chips
        responseText.querySelectorAll('.inline-ai-chip').forEach(btn => {
          btn.addEventListener('click', () => {
            const nextQuery = btn.textContent?.trim() || '';
            if (inputEl) inputEl.value = nextQuery;
            handleQuery(nextQuery);
          });
        });
      }, 350);
    }
  };

  promptChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const text = chip.textContent?.trim() || '';
      inputEl.value = text;
      handleQuery(text);
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      handleQuery(inputEl.value);
    });
  }

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleQuery(inputEl.value);
    }
  });

  if (voiceBtn) {
    voiceBtn.addEventListener('click', () => {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        inputEl.focus();
        inputEl.placeholder = 'Type your question here...';
        return;
      }
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      inputEl.placeholder = '🎙️ Listening... Speak your question';
      voiceBtn.classList.add('animate-pulse');

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        inputEl.value = transcript;
        handleQuery(transcript);
      };
      recognition.onend = () => {
        voiceBtn.classList.remove('animate-pulse');
        inputEl.placeholder = 'Ask about Damper Valves, Flue Gas Solutions, Custom Designs...';
      };
      recognition.start();
    });
  }
}

/* ==========================================================================
   Scope of Work Dynamic Connector Lines (Exact Card-to-Hub Attachment)
   ========================================================================== */
function initScopeConnectorLines() {
  const container = document.getElementById('scope-lifecycle-container');
  const svg = document.getElementById('scope-dynamic-connectors') as SVGSVGElement | null;
  const hubDisc = document.querySelector('.scope-central-disc') as HTMLElement | null;
  if (!container || !svg || !hubDisc) return;

  const cardsData = [
    { selector: '.scope-card-01', color: '#F97316', angle: 215, side: 'left' },
    { selector: '.scope-card-02', color: '#2563EB', angle: 192, side: 'left' },
    { selector: '.scope-card-03', color: '#16A34A', angle: 168, side: 'left' },
    { selector: '.scope-card-04', color: '#9333EA', angle: 145, side: 'left' },
    { selector: '.scope-card-05', color: '#EF4444', angle: 325, side: 'right' },
    { selector: '.scope-card-06', color: '#2563EB', angle: 348, side: 'right' },
    { selector: '.scope-card-07', color: '#D97706', angle: 12, side: 'right' },
    { selector: '.scope-card-08', color: '#0D9488', angle: 35, side: 'right' },
  ];

  function updateLines() {
    const currentContainer = document.getElementById('scope-lifecycle-container');
    const currentSvg = document.getElementById('scope-dynamic-connectors') as SVGSVGElement | null;
    const currentHubDisc = document.querySelector('.scope-central-disc') as HTMLElement | null;
    if (!currentContainer || !currentSvg || !currentHubDisc) return;

    if (window.innerWidth < 1024) {
      currentSvg.innerHTML = '';
      return;
    }

    const cRect = currentContainer.getBoundingClientRect();
    const hRect = currentHubDisc.getBoundingClientRect();

    const hubCenterX = hRect.left + hRect.width / 2 - cRect.left;
    const hubCenterY = hRect.top + hRect.height / 2 - cRect.top;
    const hubRadius = (hRect.width / 2) + 24; // Align with outer orbital guide ring

    let pathsHtml = '';

    cardsData.forEach((item) => {
      const cardEl = currentContainer.querySelector(item.selector) as HTMLElement | null;
      if (!cardEl) return;

      const cardRect = cardEl.getBoundingClientRect();
      const badgeEl = cardEl.querySelector('.rounded-full') as HTMLElement | null;

      let targetX = 0;
      let targetY = 0;

      if (badgeEl) {
        const bRect = badgeEl.getBoundingClientRect();
        targetX = (item.side === 'left')
          ? bRect.right - cRect.left
          : bRect.left - cRect.left;
        targetY = bRect.top + bRect.height / 2 - cRect.top;
      } else {
        targetX = (item.side === 'left')
          ? cardRect.right - cRect.left
          : cardRect.left - cRect.left;
        targetY = cardRect.top + cardRect.height / 2 - cRect.top;
      }

      // Hub origin point along outer orbital circle
      const rad = (item.angle * Math.PI) / 180;
      const startX = hubCenterX + hubRadius * Math.cos(rad);
      const startY = hubCenterY + hubRadius * Math.sin(rad);

      // Smooth horizontal-leaning bezier curve
      const cpX1 = startX + (item.side === 'left' ? -45 : 45);
      const cpY1 = startY;
      const cpX2 = targetX + (item.side === 'left' ? 45 : -45);
      const cpY2 = targetY;

      const pathData = `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${cpX1.toFixed(1)} ${cpY1.toFixed(1)}, ${cpX2.toFixed(1)} ${cpY2.toFixed(1)}, ${targetX.toFixed(1)} ${targetY.toFixed(1)}`;

      // Dotted connector path
      pathsHtml += `<path d="${pathData}" stroke="${item.color}" stroke-width="1.8" stroke-dasharray="3 5" opacity="0.85" fill="none" stroke-linecap="round" />`;

      // Satellite node dot on hub orbit
      pathsHtml += `<circle cx="${startX.toFixed(1)}" cy="${startY.toFixed(1)}" r="4.5" fill="${item.color}" stroke="#FFFFFF" stroke-width="2" />`;
    });

    currentSvg.innerHTML = pathsHtml;
  }

  updateLines();
  window.addEventListener('resize', updateLines);
  window.addEventListener('scroll', updateLines, { passive: true });

  // Dynamically redraw connectors while cards and hub animate/transition
  let rafId: number | null = null;
  function trackTransition() {
    updateLines();
    rafId = requestAnimationFrame(trackTransition);
  }

  container.addEventListener('transitionrun', () => {
    if (!rafId) {
      rafId = requestAnimationFrame(trackTransition);
    }
  });

  container.addEventListener('transitionend', () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    updateLines();
  });
}

/* ==========================================================================
   Standards & Global Leaders Carousel (Continuous Movable Infinite Marquee)
   ========================================================================== */
function initStandardsCarousel() {
  const viewport = document.getElementById('leaders-carousel-viewport') as HTMLElement | null;
  const track = document.getElementById('leaders-carousel-track') as HTMLElement | null;
  const prevBtn = document.getElementById('leaders-prev-btn') as HTMLButtonElement | null;
  const nextBtn = document.getElementById('leaders-next-btn') as HTMLButtonElement | null;
  const dots = [
    document.getElementById('leaders-dot-0') as HTMLButtonElement | null,
    document.getElementById('leaders-dot-1') as HTMLButtonElement | null,
    document.getElementById('leaders-dot-2') as HTMLButtonElement | null
  ];

  if (!viewport || !track) return;

  const originalCards = Array.from(track.querySelectorAll<HTMLElement>('.leaders-card'));
  if (originalCards.length === 0) return;

  // Duplicate cards twice to guarantee an unbroken, seamless continuous loop even on 4K displays
  for (let c = 0; c < 2; c++) {
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }

  const allCards = Array.from(track.querySelectorAll<HTMLElement>('.leaders-card'));

  // Calculate pixel distance of one full set of cards for seamless wrap-around
  let singleLoopWidth = 0;
  function measureLoopWidth() {
    if (allCards.length > originalCards.length) {
      const firstClone = allCards[originalCards.length];
      const firstCard = allCards[0];
      if (firstClone && firstCard) {
        singleLoopWidth = firstClone.offsetLeft - firstCard.offsetLeft;
      }
    }
    if (singleLoopWidth <= 0 && track) {
      singleLoopWidth = track.scrollWidth / 3;
    }
  }

  // Update dots indicator
  function updateDots() {
    if (singleLoopWidth <= 0) return;
    const scrollPos = viewport!.scrollLeft % singleLoopWidth;
    const progress = scrollPos / singleLoopWidth;
    const activeIndex = Math.min(dots.length - 1, Math.max(0, Math.floor(progress * dots.length)));

    dots.forEach((dot, idx) => {
      if (!dot) return;
      if (idx === activeIndex) {
        dot.className = 'leaders-indicator-dot w-6 h-2 rounded-full bg-[#EE6226] transition-all cursor-pointer';
      } else {
        dot.className = 'leaders-indicator-dot w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-all cursor-pointer';
      }
    });
  }

  // Dot click navigation
  dots.forEach((dot, index) => {
    if (!dot) return;
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      if (singleLoopWidth <= 0) return;
      const targetScroll = (index / dots.length) * singleLoopWidth;
      viewport.scrollTo({ left: targetScroll, behavior: 'smooth' });
      pauseGlide(3000);
      updateDots();
    });
  });

  // Continuous gliding state
  const glideSpeed = 0.75; // Smooth, legible, continuous gliding (~45px per second)
  let isPaused = false;
  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let hasMoved = false;
  let pauseTimer: number | null = null;

  function pauseGlide(resumeDelayMs: number = 2500) {
    isPaused = true;
    if (pauseTimer) window.clearTimeout(pauseTimer);
    pauseTimer = window.setTimeout(() => {
      if (!isDown && !viewport?.matches(':hover') && !track?.matches(':hover')) {
        isPaused = false;
      }
    }, resumeDelayMs);
  }

  // Continuous loop runner via requestAnimationFrame
  function glideAnimationLoop() {
    if (!viewport) return;

    if (!isPaused && !isDown && singleLoopWidth > 0) {
      viewport.scrollLeft += glideSpeed;

      // Wrap seamlessly when one full loop has scrolled
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
      }

      updateDots();
    }

    requestAnimationFrame(glideAnimationLoop);
  }

  // Prev / Next button step actions
  const stepAmount = 260; // Card width + gap

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!viewport) return;
      if (viewport.scrollLeft < stepAmount) {
        viewport.scrollLeft += singleLoopWidth;
      }
      viewport.scrollBy({ left: -stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!viewport) return;
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
      }
      viewport.scrollBy({ left: stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    });
  }

  // Keyboard navigation
  viewport.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (viewport.scrollLeft < stepAmount) {
        viewport.scrollLeft += singleLoopWidth;
      }
      viewport.scrollBy({ left: -stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
      }
      viewport.scrollBy({ left: stepAmount, behavior: 'smooth' });
      pauseGlide(3000);
    }
  });

  // Pause on hover so users can inspect logos and accreditations comfortably
  const handleHoverStart = () => {
    isPaused = true;
  };
  const handleHoverEnd = () => {
    if (!isDown) {
      pauseGlide(400);
    }
  };

  viewport.addEventListener('mouseenter', handleHoverStart);
  viewport.addEventListener('mouseleave', handleHoverEnd);
  viewport.addEventListener('pointerenter', handleHoverStart);
  viewport.addEventListener('pointerleave', handleHoverEnd);
  track.addEventListener('mouseenter', handleHoverStart);
  track.addEventListener('mouseleave', handleHoverEnd);

  // Touch drag support for mobile / tablets
  let touchStartX = 0;
  let touchScrollLeft = 0;

  viewport.addEventListener('touchstart', (e) => {
    isPaused = true;
    if (e.touches[0]) {
      touchStartX = e.touches[0].pageX - viewport.offsetLeft;
      touchScrollLeft = viewport.scrollLeft;
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches[0] && singleLoopWidth > 0) {
      const x = e.touches[0].pageX - viewport.offsetLeft;
      const walk = (x - touchStartX) * 1.25;
      viewport.scrollLeft = touchScrollLeft - walk;
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
        touchScrollLeft -= singleLoopWidth;
      } else if (viewport.scrollLeft < 0) {
        viewport.scrollLeft += singleLoopWidth;
        touchScrollLeft += singleLoopWidth;
      }
      updateDots();
    }
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    pauseGlide(2500);
  }, { passive: true });

  // Mouse drag support ("movable")
  viewport.addEventListener('mousedown', (e) => {
    isDown = true;
    hasMoved = false;
    isPaused = true;
    startX = e.pageX - viewport.offsetLeft;
    scrollLeftStart = viewport.scrollLeft;
    viewport.classList.add('is-dragging');
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    viewport.classList.remove('is-dragging');
    pauseGlide(2000);
  });

  viewport.addEventListener('mousemove', (e) => {
    if (!isDown || !viewport) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startX) * 1.35;
    if (Math.abs(walk) > 4) hasMoved = true;
    viewport.scrollLeft = scrollLeftStart - walk;

    // Wrap seamlessly while dragging
    if (singleLoopWidth > 0) {
      if (viewport.scrollLeft >= singleLoopWidth) {
        viewport.scrollLeft -= singleLoopWidth;
        scrollLeftStart -= singleLoopWidth;
      } else if (viewport.scrollLeft < 0) {
        viewport.scrollLeft += singleLoopWidth;
        scrollLeftStart += singleLoopWidth;
      }
      updateDots();
    }
  });

  // Prevent click triggering if user was dragging
  track.addEventListener('click', (e) => {
    if (hasMoved) {
      hasMoved = false;
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Re-measure on window resize
  window.addEventListener('resize', () => {
    measureLoopWidth();
  }, { passive: true });

  // Initialize and kick off continuous gliding loop
  requestAnimationFrame(() => {
    setTimeout(() => {
      measureLoopWidth();
      updateDots();
      glideAnimationLoop();
    }, 150);
  });
}

/* ==========================================================================
   Facility Tour Video Modal Controller
   ========================================================================== */
function initFacilityVideoModal() {
  const modal = document.getElementById('facility-video-modal');
  const video = document.getElementById('facility-modal-video') as HTMLVideoElement | null;
  const closeBtn = document.getElementById('close-facility-video-btn');
  const triggers = document.querySelectorAll('.facility-video-trigger');

  if (!modal || !video) return;

  const openModal = () => {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    const modalDialog = modal.firstElementChild as HTMLElement | null;
    if (modalDialog) {
      modalDialog.classList.remove('scale-95');
      modalDialog.classList.add('scale-100');
    }
    video.play().catch(() => { });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    const modalDialog = modal.firstElementChild as HTMLElement | null;
    if (modalDialog) {
      modalDialog.classList.remove('scale-100');
      modalDialog.classList.add('scale-95');
    }
    video.pause();
    video.currentTime = 0;
    document.body.style.overflow = '';
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', openModal);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });
}

// Initialize all interactive components
initSharedNavigation('home');
init3DFluidWave();
initHeroTypewriter();
initNavbarScroll();
initTestimonialSlider();
initScrollLoadUnload();
initWhatWeDoCarousel();
initIndustriesDossier();
initAiAssistant();
initScopeConnectorLines();
initStandardsCarousel();
initFacilityVideoModal();


