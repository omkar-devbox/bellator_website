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

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : base + '/';

  const detailImage = document.getElementById('detail-image') as HTMLImageElement | null;
  if (detailImage) {
    const imgSrc = data.image.startsWith('/') ? `${cleanBase}${data.image.slice(1)}` : data.image;
    detailImage.src = imgSrc;
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

  // Custom technical specs table if available
  const specsTableContainer = document.getElementById('specs-table-container');
  if (specsTableContainer && data.technicalSpecs && data.technicalSpecs.length > 0) {
    specsTableContainer.innerHTML = data.technicalSpecs.map(s => `
      <div class="spec-table-row">
        <span class="font-semibold text-slate-600 w-1/3">${s.parameter}</span>
        <span class="font-bold text-slate-900 w-2/3 text-right sm:text-left">${s.details}</span>
      </div>
    `).join('');
  }

  // MOC Table Section
  const mocSection = document.getElementById('moc-section');
  const mocTableContainer = document.getElementById('moc-table-container');
  if (mocSection && mocTableContainer) {
    if (data.mocTable && data.mocTable.length > 0) {
      mocSection.classList.remove('hidden');
      mocTableContainer.innerHTML = data.mocTable.map(m => `
        <div class="spec-table-row">
          <span class="font-semibold text-slate-700 w-1/3">${m.component}</span>
          <span class="font-medium text-slate-900 w-2/3 text-right sm:text-left">${m.material}</span>
        </div>
      `).join('');
    } else {
      mocSection.classList.add('hidden');
    }
  }

  // Automation Options Section
  const automationSection = document.getElementById('automation-section');
  const automationCardsContainer = document.getElementById('automation-cards-container');
  if (automationSection && automationCardsContainer) {
    if (data.automationOptions && data.automationOptions.length > 0) {
      automationSection.classList.remove('hidden');
      automationCardsContainer.innerHTML = data.automationOptions.map(opt => `
        <div class="p-3 rounded-xl bg-orange-50/50 border border-orange-200/60 text-center flex flex-col items-center justify-center">
          <span class="text-xs font-extrabold text-[#EE6226] uppercase tracking-wider">${opt.name}</span>
          ${opt.desc ? `<span class="text-[10px] text-slate-500 mt-1 leading-tight line-clamp-2">${opt.desc}</span>` : ''}
        </div>
      `).join('');
    } else {
      automationSection.classList.add('hidden');
    }
  }

  // Key Features
  const featuresBox = document.getElementById('features-box');
  const featuresList = document.getElementById('features-list');
  if (featuresBox && featuresList) {
    if (data.features && data.features.length > 0) {
      featuresBox.classList.remove('hidden');
      featuresList.innerHTML = data.features.map(f => `
        <li class="flex items-start gap-2">
          <span class="text-[#EE6226] font-bold text-xs mt-0.5">&bull;</span>
          <span>${f}</span>
        </li>
      `).join('');
    } else {
      featuresBox.classList.add('hidden');
    }
  }

  // Optional Features
  const optionalFeaturesBox = document.getElementById('optional-features-box');
  const optionalFeaturesList = document.getElementById('optional-features-list');
  if (optionalFeaturesBox && optionalFeaturesList) {
    if (data.optionalFeatures && data.optionalFeatures.length > 0) {
      optionalFeaturesBox.classList.remove('hidden');
      optionalFeaturesList.innerHTML = data.optionalFeatures.map(f => `
        <li class="flex items-start gap-2">
          <span class="text-[#EE6226] font-bold text-xs mt-0.5">&bull;</span>
          <span>${f}</span>
        </li>
      `).join('');
    } else {
      optionalFeaturesBox.classList.add('hidden');
    }
  }

  // Inspection & Testing
  const inspectionBox = document.getElementById('inspection-box');
  const inspectionList = document.getElementById('inspection-list');
  if (inspectionBox && inspectionList) {
    if (data.inspectionTesting && data.inspectionTesting.length > 0) {
      inspectionBox.classList.remove('hidden');
      inspectionList.innerHTML = data.inspectionTesting.map(t => `
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
          <span class="truncate">${t}</span>
        </div>
      `).join('');
    } else {
      inspectionBox.classList.add('hidden');
    }
  }

  // Applications
  const applicationsContainer = document.getElementById('detail-applications');
  if (applicationsContainer) {
    const apps = data.applications && data.applications.length > 0
      ? data.applications
      : [
        'Boiler Air & Flue Gas Lines',
        'ID / FD Fan Isolation',
        'Hot Air Systems',
        'Exhaust Systems'
      ];

    applicationsContainer.innerHTML = apps.map(app => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#EE6226]"></span>
        <span>${app}</span>
      </div>
    `).join('');
  }

  // Major References
  const referencesSection = document.getElementById('references-section');
  const referencesGrid = document.getElementById('references-grid');
  if (referencesSection && referencesGrid) {
    if (data.majorReferences && data.majorReferences.length > 0) {
      referencesSection.classList.remove('hidden');
      referencesGrid.innerHTML = data.majorReferences.map(ref => `
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div class="flex items-center gap-2.5 mb-2">
            <span class="w-2 h-2 rounded-full bg-[#EE6226]"></span>
            <span class="text-xs font-bold text-slate-900">${ref.endUser}</span>
          </div>
          <div class="text-[11px] text-slate-500 font-medium">
            Application: <span class="text-slate-800 font-semibold">${ref.application}</span>
          </div>
        </div>
      `).join('');
    } else {
      referencesSection.classList.add('hidden');
    }
  }

  // Manufactured Units Gallery
  const gallerySection = document.getElementById('gallery-section');
  const galleryGrid = document.getElementById('gallery-grid');
  if (gallerySection && galleryGrid) {
    if (data.galleryImages && data.galleryImages.length > 0) {
      gallerySection.classList.remove('hidden');
      galleryGrid.innerHTML = data.galleryImages.map(item => {
        const itemImg = item.image ? (item.image.startsWith('/') ? `${cleanBase}${item.image.slice(1)}` : item.image) : data.image;
        return `
          <div class="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col group hover:border-[#EE6226] transition-all">
            <div class="w-full h-36 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center p-3 relative overflow-hidden">
              <img src="${itemImg}" alt="${item.title}" class="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-3 bg-white border-t border-slate-100 flex flex-col text-left">
              <span class="text-[11px] font-bold text-slate-800 group-hover:text-[#EE6226] transition-colors line-clamp-1">${item.title}</span>
              ${item.subtitle ? `<span class="text-[10px] font-mono font-semibold text-slate-500">${item.subtitle}</span>` : ''}
            </div>
          </div>
        `;
      }).join('');
    } else {
      gallerySection.classList.add('hidden');
    }
  }

  // Industries Served
  const industriesSection = document.getElementById('industries-section');
  const industriesGrid = document.getElementById('industries-grid');
  if (industriesSection && industriesGrid) {
    if (data.industriesServed && data.industriesServed.length > 0) {
      industriesSection.classList.remove('hidden');
      industriesGrid.innerHTML = data.industriesServed.map(ind => {
        const indName = typeof ind === 'string' ? ind : ind.name;
        const indImg = typeof ind === 'object' && ind.image ? (ind.image.startsWith('/') ? `${cleanBase}${ind.image.slice(1)}` : ind.image) : '';
        return `
          <div class="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm hover:shadow-md hover:border-[#EE6226] transition-all flex flex-col items-center justify-end h-36">
            ${indImg ? `
              <img src="${indImg}" alt="${indName}" class="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-110 group-hover:opacity-90 transition-all duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            ` : `
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800"></div>
            `}
            <div class="relative z-10 p-3 text-center w-full">
              <span class="text-xs font-bold text-white tracking-wide block drop-shadow-md group-hover:text-[#EE6226] transition-colors">${indName}</span>
            </div>
          </div>
        `;
      }).join('');
    } else {
      industriesSection.classList.add('hidden');
    }
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
      <a href="${cleanBase}product-detail.html?id=${p.id}" class="p-2.5 rounded-xl border border-slate-200 hover:border-[#EE6226] bg-slate-50 hover:bg-white transition-all group flex flex-col items-center text-center">
        <div class="w-full h-16 flex items-center justify-center mb-2 bg-white rounded-lg p-1 border border-slate-100">
          <img src="${p.image.startsWith('/') ? cleanBase + p.image.slice(1) : p.image}" alt="${p.title}" class="max-h-14 max-w-full object-contain group-hover:scale-105 transition-transform" />
        </div>
        <span class="text-[11px] font-bold text-slate-800 group-hover:text-[#EE6226] line-clamp-1">${p.title}</span>
        <span class="text-[10px] font-mono text-slate-400 font-medium">${p.model}</span>
      </a>
    `).join('');
  }
});
