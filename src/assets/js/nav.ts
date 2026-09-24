/**
 * Shared layout navigation handler for all Bella HTML pages
 */
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
}
