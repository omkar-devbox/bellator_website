/**
 * Shared layout navigation handler for all Bella HTML pages
 */
import { initChatbot } from '../../components/chatbot';

export function initSharedNavigation(activePageId: string): void {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', (!isExpanded).toString());
      mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.classList.toggle('is-open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.classList.remove('is-open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target as Node) && !mobileMenuBtn.contains(e.target as Node)) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.classList.remove('is-open');
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
 * Slim top progress bar tracking scroll progress
 */
function initScrollProgress(): void {
  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'fixed top-0 left-0 h-[3px] bg-[#EE6226] z-[9999] transition-[width] duration-75 ease-out pointer-events-none w-0';
    document.body.appendChild(progressBar);
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/**
 * Floating Back-to-Top button that fades in past 300px scroll depth
 */
function initBackToTop(): void {
  let btn = document.getElementById('back-to-top-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Scroll back to top');
    btn.className = 'fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-[#EE6226] text-white shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none translate-y-3 hover:scale-110 cursor-pointer border border-white/10 backdrop-blur-sm';
    btn.innerHTML = `
      <svg class="w-5 h-5 stroke-current" fill="none" stroke-width="2.5" viewBox="0 0 24 24">
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
function initSmoothAnchorScroll(): void {
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

