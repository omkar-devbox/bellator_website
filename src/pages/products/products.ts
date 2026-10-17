import { initSharedNavigation } from '../../assets/js/nav';
import { productsData } from '../../data/products/index';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Shared Header Navigation
  initSharedNavigation('products');

  // Elements
  const tabBtns = document.querySelectorAll<HTMLButtonElement>('.filter-tab-btn');
  const searchInput = document.getElementById('product-search-input') as HTMLInputElement | null;
  const clearSearchBtn = document.getElementById('clear-search-btn') as HTMLButtonElement | null;
  const cards = document.querySelectorAll<HTMLElement>('.valve-card');
  const visibleCountEl = document.getElementById('visible-count');

  let currentCategory = 'all';
  let searchQuery = '';

  // Function to filter cards
  function updateFilter() {
    let count = 0;
    const q = searchQuery.toLowerCase().trim();

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
      const cardModel = (card.getAttribute('data-model') || '').toLowerCase();
      const cardKeywords = (card.getAttribute('data-keywords') || '').toLowerCase();

      const matchesCategory = currentCategory === 'all' || cardCategory === currentCategory;
      const matchesSearch = !q || cardTitle.includes(q) || cardModel.includes(q) || cardKeywords.includes(q);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        count++;
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });

    if (visibleCountEl) {
      visibleCountEl.textContent = count.toString();
    }
  }

  // Category tab button click
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      updateFilter();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value;
      if (clearSearchBtn) {
        if (searchQuery.length > 0) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }
      updateFilter();
    });
  }

  // Clear search button
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      searchInput.focus();
      updateFilter();
    });
  }

  // Direct Page Navigation (No Popup)
  function navigateToProductDetail(productId: string) {
    if (productId && productsData[productId]) {
      const base = import.meta.env.BASE_URL || '/';
      const cleanBase = base.endsWith('/') ? base : base + '/';
      window.location.href = `${cleanBase}product-detail.html?id=${encodeURIComponent(productId)}`;
    }
  }

  // Card Open-Spec Buttons navigate to dedicated page
  document.querySelectorAll<HTMLElement>('.open-spec-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        navigateToProductDetail(targetId);
      }
    });
  });

  // Clicking anywhere on card itself navigates to dedicated detail page
  cards.forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.classList.add('scroll-reveal-item');
    card.style.setProperty('--stagger-delay', `${(idx % 3) * 110}ms`);
    card.addEventListener('click', () => {
      const cardId = card.getAttribute('data-id');
      if (cardId) {
        navigateToProductDetail(cardId);
      }
    });
  });

  // Initialize 1-by-1 Scroll Load/Unload Animations
  initScrollLoadUnload();
});

function initScrollLoadUnload(): void {
  const elements = document.querySelectorAll<HTMLElement>(
    '.scroll-reveal, .scroll-reveal-item, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-heading, .scroll-subtext, .scroll-badge, .scroll-mask-wrap'
  );
  if (elements.length === 0) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('is-loaded'));
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        // Loads row item 1 by 1
        el.classList.add('is-loaded');
      } else {
        // Unloads when scrolled out of view
        el.classList.remove('is-loaded');
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
}


