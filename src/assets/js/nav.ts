/**
 * Shared layout navigation handler for all Bella HTML pages
 */
import { initChatbot } from '../../components/chatbot';

export function initSharedNavigation(activePageId: string): void {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const dockMenuBtn = document.getElementById('dock-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenu && (mobileMenuBtn || dockMenuBtn)) {
    const closeMenu = () => {
      mobileMenu.classList.add('hidden');
      if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.classList.remove('is-open');
      }
      if (dockMenuBtn) {
        dockMenuBtn.setAttribute('aria-expanded', 'false');
        dockMenuBtn.classList.remove('is-open');
      }
    };

    const toggleMenu = (e?: Event) => {
      if (e) e.stopPropagation();
      const isClosed = mobileMenu.classList.contains('hidden');
      if (isClosed) {
        mobileMenu.classList.remove('hidden');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'true');
          mobileMenuBtn.classList.add('is-open');
        }
        if (dockMenuBtn) {
          dockMenuBtn.setAttribute('aria-expanded', 'true');
          dockMenuBtn.classList.add('is-open');
        }
      } else {
        closeMenu();
      }
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMenu);
    }
    if (dockMenuBtn) {
      dockMenuBtn.addEventListener('click', toggleMenu);
    }

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Mobile Products Dropdown Accordion Toggle
    const mobileProductsToggle = document.getElementById('mobile-products-toggle');
    const mobileProductsSubmenu = document.getElementById('mobile-products-submenu');
    const mobileProductsChevron = document.getElementById('mobile-products-chevron');

    if (mobileProductsToggle && mobileProductsSubmenu) {
      mobileProductsToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isClosed = mobileProductsSubmenu.classList.contains('hidden');
        if (isClosed) {
          mobileProductsSubmenu.classList.remove('hidden');
          mobileProductsToggle.setAttribute('aria-expanded', 'true');
          if (mobileProductsChevron) {
            mobileProductsChevron.classList.add('rotate-180');
          }
        } else {
          mobileProductsSubmenu.classList.add('hidden');
          mobileProductsToggle.setAttribute('aria-expanded', 'false');
          if (mobileProductsChevron) {
            mobileProductsChevron.classList.remove('rotate-180');
          }
        }
      });
    }

    document.addEventListener('click', (e) => {
      const target = e.target as Node;
      const clickedInsideMenu = mobileMenu.contains(target);
      const clickedBtn =
        (mobileMenuBtn && mobileMenuBtn.contains(target)) ||
        (dockMenuBtn && dockMenuBtn.contains(target));
      if (!clickedInsideMenu && !clickedBtn) {
        closeMenu();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        closeMenu();
      }
    });
  }

  // Highlight active link if not already styled
  const currentLinks = document.querySelectorAll<HTMLAnchorElement>(`[data-page="${activePageId}"]`);
  currentLinks.forEach(link => {
    link.setAttribute('aria-current', 'page');
  });

  // Header blur and shadow on scroll (legacy header fallback)
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-lg', 'shadow-black/20', 'bg-slate-950/95');
        header.classList.remove('bg-slate-950/80');
      } else {
        header.classList.remove('shadow-lg', 'shadow-black/20', 'bg-slate-950/95');
        header.classList.add('bg-slate-950/80');
      }
    }, { passive: true });
  }

  // Techno-navbar Floating Pill Scroll Handler (Home style)
  const technoNav = document.getElementById('techno-navbar');
  if (technoNav) {
    const handleTechnoScroll = () => {
      if (window.scrollY > 30) {
        technoNav.classList.add('navbar-scrolled');
      } else {
        technoNav.classList.remove('navbar-scrolled');
      }
    };
    window.addEventListener('scroll', handleTechnoScroll, { passive: true });
    handleTechnoScroll();
  }

  // 1. Top Scroll Progress Indicator
  initScrollProgress();

  // 2. Floating Back-to-Top Button
  initBackToTop();

  // 3. Smooth In-Page Anchor Scroll
  initSmoothAnchorScroll();

  // Initialize Global Bellator AI Chatbot
  initChatbot();
}

/**
 * Slim top progress bar tracking scroll progress with orange-to-sky gradient
 */
export function initScrollProgress(): void {
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#EE6226] via-[#F97316] to-[#3B82F6] z-[9999] shadow-[0_0_10px_rgba(238,98,38,0.8)] transition-[width] duration-75 ease-out pointer-events-none w-0';
    document.body.appendChild(progressBar);
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    const clampedProgress = Math.min(100, Math.max(0, progress));
    if (progressBar) {
      progressBar.style.width = `${clampedProgress}%`;
    }

    // Update circular progress ring on back-to-top button if present
    const circle = document.getElementById('back-to-top-progress');
    if (circle) {
      const circumference = 113.1; // 2 * PI * 18
      const offset = circumference - (clampedProgress / 100) * circumference;
      circle.style.strokeDashoffset = `${offset}`;
    }
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/**
 * Floating Back-to-Top button with circular SVG scroll progress ring,
 * positioned cleanly above the chatbot launcher (bottom-24 right-6)
 */
export function initBackToTop(): void {
  let btn = document.getElementById('back-to-top-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Scroll back to top');
    btn.className = 'fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-[#0B1220]/90 hover:bg-[#0B1220] text-white shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none translate-y-3 hover:scale-105 hover:-translate-y-0.5 cursor-pointer border border-white/15 hover:border-[#EE6226] backdrop-blur-md group';
    btn.innerHTML = `
      <svg class="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="18" stroke="rgba(255,255,255,0.12)" stroke-width="2.5" fill="none" />
        <circle id="back-to-top-progress" cx="22" cy="22" r="18" stroke="#EE6226" stroke-width="2.5" fill="none" stroke-dasharray="113.1" stroke-dashoffset="113.1" stroke-linecap="round" class="transition-[stroke-dashoffset] duration-100 ease-out" />
      </svg>
      <svg class="w-4 h-4 text-white group-hover:text-[#EE6226] transition-colors relative z-10 stroke-current" fill="none" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    `;
    document.body.appendChild(btn);
  }

  const toggleBtn = () => {
    if (window.scrollY > 300) {
      btn?.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
      btn?.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      btn?.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
      btn?.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  };

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleBtn, { passive: true });
  toggleBtn();
}

/**
 * Smooth in-page anchor navigation with header offset compensation
 */
export function initSmoothAnchorScroll(): void {
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        history.pushState(null, '', href);
      }
    }
  });
}

