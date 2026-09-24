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
  const matrixLinks = document.querySelectorAll<HTMLAnchorElement>('.valve-matrix-item');

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
      window.location.href = `/product-detail.html?id=${encodeURIComponent(productId)}`;
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
  cards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const cardId = card.getAttribute('data-id');
      if (cardId) {
        navigateToProductDetail(cardId);
      }
    });
  });

  // Matrix item click handler
  matrixLinks.forEach(link => {
    link.addEventListener('click', () => {
      const jumpId = link.getAttribute('data-jump');
      if (jumpId) {
        matrixLinks.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');

        // Scroll to card
        const targetCard = document.getElementById(`card-${jumpId}`);
        if (targetCard) {
          // If category was filtered out, switch to all or its category
          if (targetCard.style.display === 'none') {
            currentCategory = 'all';
            tabBtns.forEach(b => {
              if (b.getAttribute('data-filter') === 'all') {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });
            updateFilter();
          }

          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('ring-2', 'ring-[#EE6226]');
          setTimeout(() => {
            targetCard.classList.remove('ring-2', 'ring-[#EE6226]');
          }, 2000);
        }
      }
    });
  });
});
