import { initSharedNavigation } from '../../assets/js/nav';
import { productsData, ProductDetail } from '../../data/products/index';

document.addEventListener('DOMContentLoaded', () => {
  initSharedNavigation('products');

  // Parse product ID from query parameter or path
  const urlParams = new URLSearchParams(window.location.search);
  let productId = urlParams.get('id');

  if (!productId) {
    const pathParts = window.location.pathname.replace(/\.html$/, '').split('/').filter(Boolean);
    if (pathParts.length >= 2 && (pathParts[0] === 'products' || pathParts[0] === 'product')) {
      productId = pathParts[1];
    }
  }

  if (!productId || !productsData[productId]) {
    productId = 'butterfly-damper-valves';
  }

  const data: ProductDetail = productsData[productId];

  // Update Page Title and Metadata
  document.title = `${data.title} (${data.model}) | Bellator Engineers`;
  const metaDesc = document.getElementById('meta-desc');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${data.title} manufactured by Bellator Engineers in Pune. ${data.desc}`);
  }

  // Populate Elements
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = data.title;

  const detailCategoryBadge = document.getElementById('detail-category-badge');
  if (detailCategoryBadge) detailCategoryBadge.textContent = data.categoryLabel || data.category;

  const detailModelBadge = document.getElementById('detail-model-badge');
  if (detailModelBadge) detailModelBadge.textContent = data.model;

  const detailImage = document.getElementById('detail-image') as HTMLImageElement | null;
  if (detailImage) {
    detailImage.src = data.image;
    detailImage.alt = `${data.title} (${data.model})`;
  }

  const quickLeakage = document.getElementById('quick-leakage');
  if (quickLeakage) quickLeakage.textContent = data.leakage.split('(')[0].trim();

  const quickTemp = document.getElementById('quick-temp');
  if (quickTemp) quickTemp.textContent = data.temp;

  const quickPressure = document.getElementById('quick-pressure');
  if (quickPressure) quickPressure.textContent = data.pressure;

  const detailTitle = document.getElementById('detail-title');
  if (detailTitle) detailTitle.textContent = data.title;

  const detailTagline = document.getElementById('detail-tagline');
  if (detailTagline) detailTagline.textContent = data.tagline || data.desc;

  const detailDesc = document.getElementById('detail-desc');
  if (detailDesc) detailDesc.textContent = data.longDesc || data.desc;

  // Key Highlights
  const detailHighlights = document.getElementById('detail-highlights');
  if (detailHighlights) {
    const highlights = data.keyHighlights && data.keyHighlights.length > 0
      ? data.keyHighlights
      : [
        `Sizes: ${data.sizes}`,
        `Materials: ${data.materials}`,
        `Actuation: ${data.actuation}`,
        `Standards: ${data.standards}`
      ];

    detailHighlights.innerHTML = highlights.map(h => `
      <li class="flex items-start gap-2.5">
        <span class="text-[#EE6226] font-bold">&check;</span>
        <span>${h}</span>
      </li>
    `).join('');
  }

  // Full Specs Table
  const specSizes = document.getElementById('spec-sizes');
  if (specSizes) specSizes.textContent = data.sizes;

  const specTemp = document.getElementById('spec-temp');
  if (specTemp) specTemp.textContent = data.temp;

  const specPressure = document.getElementById('spec-pressure');
  if (specPressure) specPressure.textContent = data.pressure;

  const specLeakage = document.getElementById('spec-leakage');
  if (specLeakage) specLeakage.textContent = data.leakage;

  const specMaterials = document.getElementById('spec-materials');
  if (specMaterials) specMaterials.textContent = data.materials;

  const specActuation = document.getElementById('spec-actuation');
  if (specActuation) specActuation.textContent = data.actuation;

  const specStandards = document.getElementById('spec-standards');
  if (specStandards) specStandards.textContent = data.standards;

  // Applications
  const applicationsContainer = document.getElementById('detail-applications');
  if (applicationsContainer) {
    const apps = data.applications && data.applications.length > 0
      ? data.applications
      : [
        'Power Generation & Boiler Exhaust Ducts',
        'Cement Rotary Kiln & Clinker Cooling',
        'Steel Plant Sintering & Blast Furnace Gas',
        'Chemical and Petrochemical Processing'
      ];

    applicationsContainer.innerHTML = apps.map(app => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#EE6226]"></span>
        <span>${app}</span>
      </div>
    `).join('');
  }

  // RFQ Model Display
  const rfqModelDisplay = document.getElementById('rfq-model-display') as HTMLInputElement | null;
  if (rfqModelDisplay) {
    rfqModelDisplay.value = `${data.title} (${data.model})`;
  }

  const rfqProductId = document.getElementById('rfq-product-id') as HTMLInputElement | null;
  if (rfqProductId) {
    rfqProductId.value = data.id;
  }

  // RFQ Form Submission
  const rfqForm = document.getElementById('detail-rfq-form') as HTMLFormElement | null;
  const rfqSuccess = document.getElementById('detail-rfq-success');
  if (rfqForm && rfqSuccess) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      rfqSuccess.classList.remove('hidden');
      setTimeout(() => {
        rfqForm.reset();
        if (rfqModelDisplay) rfqModelDisplay.value = `${data.title} (${data.model})`;
      }, 3000);
    });
  }

  // Render Other Products
  const otherGrid = document.getElementById('other-products-grid');
  if (otherGrid) {
    const allProducts = Object.values(productsData);
    const otherProducts = allProducts.filter(p => p.id !== data.id).slice(0, 6);

    otherGrid.innerHTML = otherProducts.map(p => `
      <a href="/product-detail.html?id=${p.id}" class="p-2.5 rounded-xl border border-slate-200 hover:border-[#EE6226] bg-slate-50 hover:bg-white transition-all group flex flex-col items-center text-center">
        <div class="w-full h-16 flex items-center justify-center mb-2 bg-white rounded-lg p-1 border border-slate-100">
          <img src="${p.image}" alt="${p.title}" class="max-h-14 max-w-full object-contain group-hover:scale-105 transition-transform" />
        </div>
        <span class="text-[11px] font-bold text-slate-800 group-hover:text-[#EE6226] line-clamp-1">${p.title}</span>
        <span class="text-[10px] font-mono text-slate-400 font-medium">${p.model}</span>
      </a>
    `).join('');
  }
});
