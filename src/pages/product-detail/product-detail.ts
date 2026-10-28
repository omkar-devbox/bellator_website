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

  const detailCategoryEyebrow = document.getElementById('detail-category-eyebrow');
  if (detailCategoryEyebrow) {
    detailCategoryEyebrow.textContent = (data.categoryLabel || data.category || 'ISOLATION & FLOW CONTROL').toUpperCase();
  }

  const detailModelBadge = document.getElementById('detail-model-badge');
  if (detailModelBadge) {
    detailModelBadge.textContent = (data.model || 'BE10 SERIES').toUpperCase();
  }

  const floatingFeatureTitle = document.getElementById('floating-feature-title');
  if (floatingFeatureTitle) {
    floatingFeatureTitle.textContent = data.categoryLabel || 'Isolation & Flow Control';
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : base + '/';

  const detailImage = document.getElementById('detail-image') as HTMLImageElement | null;
  if (detailImage) {
    const imgSrc = data.image.startsWith('/') ? `${cleanBase}${data.image.slice(1)}` : data.image;
    detailImage.src = imgSrc;
    detailImage.alt = `${data.title} (${data.model})`;
  }

  // Interactive Thumbnail Carousel for Main Product Image
  const thumbnailsContainer = document.getElementById('detail-thumbnails-container');
  const thumbPrevBtn = document.getElementById('thumb-prev-btn');
  const thumbNextBtn = document.getElementById('thumb-next-btn');

  const allThumbnails: string[] = [];
  if (data.image) {
    const mainSrc = data.image.startsWith('/') ? `${cleanBase}${data.image.slice(1)}` : data.image;
    allThumbnails.push(mainSrc);
  }
  if (data.galleryImages && Array.isArray(data.galleryImages)) {
    data.galleryImages.forEach(g => {
      if (g && g.image) {
        const gSrc = g.image.startsWith('/') ? `${cleanBase}${g.image.slice(1)}` : g.image;
        if (!allThumbnails.includes(gSrc)) {
          allThumbnails.push(gSrc);
        }
      }
    });
  }

  if (thumbnailsContainer && allThumbnails.length > 0) {
    thumbnailsContainer.innerHTML = allThumbnails.map((src, idx) => `
      <button type="button" data-index="${idx}" data-src="${src}" aria-label="View photo ${idx + 1}"
        class="product-thumb-btn w-16 h-13 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 bg-slate-100 flex items-center justify-center p-1 ${idx === 0 ? 'border-[#EE6226] ring-2 ring-orange-200 shadow-xs' : 'border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100'}">
        <img src="${src}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-contain pointer-events-none" />
      </button>
    `).join('');

    const thumbButtons = thumbnailsContainer.querySelectorAll<HTMLButtonElement>('.product-thumb-btn');
    thumbButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSrc = btn.getAttribute('data-src');
        if (detailImage && targetSrc) {
          detailImage.src = targetSrc;
        }
        thumbButtons.forEach(b => {
          b.className = 'product-thumb-btn w-16 h-13 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 bg-slate-100 flex items-center justify-center p-1 border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100';
        });
        btn.className = 'product-thumb-btn w-16 h-13 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 bg-slate-100 flex items-center justify-center p-1 border-[#EE6226] ring-2 ring-orange-200 shadow-xs';
      });
    });

    if (thumbPrevBtn) {
      thumbPrevBtn.addEventListener('click', () => {
        thumbnailsContainer.scrollBy({ left: -160, behavior: 'smooth' });
      });
    }
    if (thumbNextBtn) {
      thumbNextBtn.addEventListener('click', () => {
        thumbnailsContainer.scrollBy({ left: 160, behavior: 'smooth' });
      });
    }
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
  if (detailDesc) {
    const text = data.longDesc || data.desc;
    if (text.includes('\n\n')) {
      detailDesc.innerHTML = text.split('\n\n').map(p => `<p class="mb-3 last:mb-0">${p.trim()}</p>`).join('');
    } else {
      detailDesc.textContent = text;
    }
  }

  // Key Highlights (2-Column Checklist with Orange Checkmark Circles)
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

    detailHighlights.innerHTML = highlights.map((h, i) => `
      <div class="scroll-reveal-item flex items-start gap-2.5" style="--stagger-delay: ${i * 45}ms;">
        <div class="w-4 h-4 rounded-full bg-[#EE6226] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
          <svg class="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2.5 6 4.8 8.5 9.5 3.5"></polyline>
          </svg>
        </div>
        <span class="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">${h}</span>
      </div>
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

  // Helper for technical specs icons matching screenshot
  const getParamIcon = (param: string) => {
    const p = param.toLowerCase();
    if (p.includes('type')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`;
    }
    if (p.includes('rectangular')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/></svg>`;
    }
    if (p.includes('size')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`;
    }
    if (p.includes('temp')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`;
    }
    if (p.includes('pressure')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>`;
    }
    if (p.includes('leakage')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
    }
    if (p.includes('operation')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
    }
    if (p.includes('connection')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    }
    if (p.includes('shape')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="8" height="8" rx="1.5"/><circle cx="16" cy="16" r="5"/></svg>`;
    }
    if (p.includes('standard')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/></svg>`;
    }
    if (p.includes('automation')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    }
    return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>`;
  };

  // Custom technical specs table if available
  const specsTableContainer = document.getElementById('specs-table-container');
  if (specsTableContainer && data.technicalSpecs && data.technicalSpecs.length > 0) {
    specsTableContainer.innerHTML = data.technicalSpecs.map((s, i) => `
      <div class="spec-table-row flex items-center justify-between py-2 sm:py-2.5 border-b border-slate-100 last:border-0 gap-3" style="--stagger-delay: ${i * 35}ms;">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center shrink-0 text-[#EE6226]">
            ${getParamIcon(s.parameter)}
          </div>
          <span class="font-semibold text-slate-600 text-xs sm:text-sm truncate">${s.parameter}</span>
        </div>
        <span class="font-bold text-slate-900 text-xs sm:text-sm text-right shrink-0">${s.details}</span>
      </div>
    `).join('');
  }

  // MOC Helper & Rendering
  const getMocImage = (component: string) => {
    const c = component.toLowerCase();
    if (c.includes('body')) return `${cleanBase}images/moc/moc-body.jpg`;
    if (c.includes('disc')) return `${cleanBase}images/moc/moc-disc.jpg`;
    if (c.includes('shaft')) return `${cleanBase}images/moc/moc-shaft.jpg`;
    if (c.includes('seat')) return `${cleanBase}images/moc/moc-seat.svg`;
    if (c.includes('seal')) return `${cleanBase}images/moc/moc-seal.svg`;
    if (c.includes('bearing')) return `${cleanBase}images/moc/moc-bearing.svg`;
    return `${cleanBase}images/moc/moc-body.jpg`;
  };

  // MOC Table Section
  const mocSection = document.getElementById('moc-section');
  const mocTableContainer = document.getElementById('moc-table-container');
  if (mocSection && mocTableContainer) {
    if (data.mocTable && data.mocTable.length > 0) {
      mocSection.classList.remove('hidden');
      mocTableContainer.innerHTML = data.mocTable.map((m, i) => {
        const cleanMaterial = m.material.replace(/\s*\/\s*Customer Specific/i, '').trim();
        return `
          <div class="scroll-reveal-item bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:py-3.5 sm:px-4 flex items-center gap-3.5 hover:border-orange-200 hover:bg-white hover:shadow-2xs transition-all h-full" style="--stagger-delay: ${(i % 6) * 55}ms;">
            <div class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
              <img src="${getMocImage(m.component)}" alt="${m.component}" class="max-h-full max-w-full object-contain rounded-lg" />
            </div>
            <div class="flex flex-col leading-tight min-w-0">
              <span class="font-extrabold text-[#0F172A] text-sm sm:text-base">${m.component}</span>
              <span class="text-xs font-semibold text-slate-700 truncate mt-0.5">${cleanMaterial}</span>
              <span class="text-[10px] text-slate-400 font-medium mt-0.5">Customer Specific</span>
            </div>
          </div>
        `;
      }).join('');
    } else {
      mocSection.classList.add('hidden');
    }
  }

  // Automation Helper & Rendering
  const getActuatorImage = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('pneu')) return `${cleanBase}images/actuators/actuator-pneumatic.svg`;
    if (n.includes('elec')) return `${cleanBase}images/actuators/actuator-electric.svg`;
    if (n.includes('hydr')) return `${cleanBase}images/actuators/actuator-hydraulic.svg`;
    if (n.includes('manu')) return `${cleanBase}images/actuators/actuator-manual.svg`;
    return `${cleanBase}images/actuators/actuator-pneumatic.svg`;
  };

  // Automation Options Section
  const automationSection = document.getElementById('automation-section');
  const automationCardsContainer = document.getElementById('automation-cards-container');
  if (automationSection && automationCardsContainer) {
    if (data.automationOptions && data.automationOptions.length > 0) {
      automationSection.classList.remove('hidden');
      automationCardsContainer.innerHTML = data.automationOptions.map((opt, i) => `
        <div class="scroll-reveal-item bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center hover:border-orange-200 hover:bg-white hover:shadow-2xs transition-all group h-full justify-between" style="--stagger-delay: ${(i % 4) * 70}ms;">
          <div class="w-full h-14 sm:h-16 flex items-center justify-center p-1 mb-2">
            <img src="${getActuatorImage(opt.name)}" alt="${opt.name}" class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
          </div>
          <span class="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">${opt.name}</span>
          <p class="text-[11px] text-slate-500 leading-relaxed text-left line-clamp-3">
            ${opt.desc || ''}
          </p>
        </div>
      `).join('');
    } else {
      automationSection.classList.add('hidden');
    }
  }

  // Section 3: Engineered Solutions (Features & Applications) Helpers
  const getFeatureIcon = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes('pressure') || n.includes('drop')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 3"/></svg>`;
    }
    if (n.includes('heavy') || n.includes('fabricated') || n.includes('construction')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
    }
    if (n.includes('torque') || n.includes('operating')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
    }
    if (n.includes('maintenance') || n.includes('friendly') || n.includes('service')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
    }
    if (n.includes('automation') || n.includes('option') || n.includes('motor')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="16" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v2m0 12v2m-6-8H4m16 0h-2"/></svg>`;
    }
    if (n.includes('custom') || n.includes('application') || n.includes('designed')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.71 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    }
    if (n.includes('corrosive') || n.includes('dusty') || n.includes('media') || n.includes('protection')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
    }
    return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>`;
  };

  const getOptionalFeatureIcon = (name: string): string => {
    const n = name.toLowerCase();
    if (n.includes('air seal') || n.includes('seal') || n.includes('purge') || n.includes('air')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`;
    }
    if (n.includes('spark')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polygon points="12 8 10 13 13 13 11 18 15 12 12 12 12 8"/></svg>`;
    }
    if (n.includes('static') || n.includes('ground') || n.includes('earth')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="15"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="7" y1="18" x2="17" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg>`;
    }
    if (n.includes('blowout') || n.includes('shaft')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`;
    }
    if (n.includes('seismic') || n.includes('vibration') || n.includes('earthquake')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 12 6 12 8 6 11 18 14 9 16 15 18 12 22 12"/></svg>`;
    }
    if (n.includes('temperature') || n.includes('heat') || n.includes('thermal')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`;
    }
    if (n.includes('paint') || n.includes('norsok') || n.includes('c5') || n.includes('coating')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="5" rx="1"/><path d="M12 8v4a2 2 0 0 0 2 2h2v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4"/></svg>`;
    }
    if (n.includes('refractory') || n.includes('lining') || n.includes('brick')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="8" y1="9" x2="8" y2="15"/><line x1="16" y1="9" x2="16" y2="15"/><line x1="12" y1="15" x2="12" y2="21"/></svg>`;
    }
    if (n.includes('insulation') || n.includes('external') || n.includes('lagging') || n.includes('blanket')) {
      return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="12" r="5"/><path d="M8 7h11a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8"/><circle cx="8" cy="12" r="2"/></svg>`;
    }
    return `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;
  };

  // Update Section 3 banner valve images if product has a specific image
  const bannerBlueprintImg = document.getElementById('features-banner-blueprint-img') as HTMLImageElement | null;
  const bannerPhotoImg = document.getElementById('features-banner-photo-img') as HTMLImageElement | null;
  if (data.image) {
    if (bannerBlueprintImg) bannerBlueprintImg.src = data.image;
    if (bannerPhotoImg) bannerPhotoImg.src = data.image;
  }

  // Key Features & Optional Features
  const featuresBox = document.getElementById('features-box');
  const featuresList = document.getElementById('features-list');
  const optionalFeaturesBox = document.getElementById('optional-features-box');
  const optionalFeaturesList = document.getElementById('optional-features-list');

  const hasFeatures = Boolean(data.features && data.features.length > 0);
  const hasOptionalFeatures = Boolean(data.optionalFeatures && data.optionalFeatures.length > 0);

  if (featuresBox && featuresList) {
    if (hasFeatures) {
      featuresBox.classList.remove('hidden');
      featuresList.innerHTML = data.features.map(f => `
        <div class="scroll-reveal-item flex items-center gap-3 py-2.5 sm:py-3 hover:bg-slate-50/70 rounded-xl px-1.5 transition-colors">
          <div class="w-8 h-8 rounded-full bg-orange-50 border border-orange-200/60 flex items-center justify-center shrink-0 text-[#EE6226]">
            ${getFeatureIcon(f)}
          </div>
          <div class="w-4 h-4 rounded-full bg-[#EE6226] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <svg class="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2.5 6 4.8 8.5 9.5 3.5"/></svg>
          </div>
          <span class="font-semibold text-slate-800 text-xs sm:text-sm">${f}</span>
        </div>
      `).join('');
    } else {
      featuresBox.classList.add('hidden');
    }
  }

  if (optionalFeaturesBox && optionalFeaturesList) {
    if (hasOptionalFeatures) {
      optionalFeaturesBox.classList.remove('hidden');
      optionalFeaturesList.innerHTML = data.optionalFeatures!.map(f => `
        <div class="scroll-reveal-item bg-white border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center gap-3 hover:border-orange-200 hover:bg-orange-50/20 hover:shadow-2xs transition-all shadow-2xs">
          <div class="w-6 h-6 flex items-center justify-center shrink-0 text-[#EE6226]">
            ${getOptionalFeatureIcon(f)}
          </div>
          <span class="font-semibold text-slate-800 text-xs sm:text-sm">${f}</span>
        </div>
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
        <div class="flex items-center gap-2.5 py-1">
          <span class="w-2 h-2 rounded-full bg-[#EE6226] shrink-0"></span>
          <span class="truncate font-medium text-slate-700">${t}</span>
        </div>
      `).join('');
    } else {
      inspectionBox.classList.add('hidden');
    }
  }

  // Applications & Process Duties (Column 3)
  const applicationsContainer = document.getElementById('detail-applications');
  if (applicationsContainer) {
    const apps = data.applications && data.applications.length > 0
      ? data.applications
      : [
        'Boiler Air & Flue Gas Lines',
        'ID / FD Fan Isolation',
        'Hot Air Systems',
        'Exhaust Systems',
        'Dust Collection Systems',
        'HVAC Ventilation Systems',
        'Kiln & Furnace Systems'
      ];

    applicationsContainer.innerHTML = apps.map((app, idx) => `
      <div class="scroll-reveal-item flex items-center gap-3 py-2.5 sm:py-3 hover:bg-slate-50/70 rounded-xl px-1.5 transition-colors">
        <span class="font-extrabold text-xs sm:text-sm text-[#EE6226] w-6 shrink-0">${String(idx + 1).padStart(2, '0')}</span>
        <span class="text-slate-300 font-light select-none">|</span>
        <span class="font-semibold text-slate-800 text-xs sm:text-sm">${app}</span>
      </div>
    `).join('');
  }

  // Major References
  const referencesSection = document.getElementById('references-section');
  const referencesGrid = document.getElementById('references-grid');
  if (referencesSection && referencesGrid) {
    if (data.majorReferences && data.majorReferences.length > 0) {
      referencesSection.classList.remove('hidden');

      const getBrandLogo = (ref: typeof data.majorReferences[number]) => {
        const endUser = ref.endUser;
        const lower = endUser.toLowerCase();
        if (lower.includes('aramco')) {
          return `
            <div class="flex items-center">
              <div class="px-2 py-1 rounded bg-[#00142e] flex items-center justify-center border border-slate-700/40 shadow-xs">
                <img src="${cleanBase}aramco-logo--white.webp" alt="Saudi Aramco" class="h-5 w-auto object-contain" />
              </div>
            </div>
          `;
        }
        if (lower.includes('reliance')) {
          return `
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-white text-[11px] font-serif font-bold shadow-xs">R</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-black text-slate-900 tracking-tight font-serif">Reliance</span>
                <span class="text-[8px] font-bold tracking-widest text-slate-500 uppercase">Industries Limited</span>
              </div>
            </div>
          `;
        }
        if (lower.includes('pdo') || lower.includes('oman')) {
          return `
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full border-2 border-emerald-600 bg-emerald-50 flex items-center justify-center text-emerald-700 text-[10px] font-black">PDO</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs font-bold text-emerald-900 leading-tight">PDO Oman</span>
                <span class="text-[8px] text-slate-500 font-arabic">شركة تنمية نفط عمان</span>
              </div>
            </div>
          `;
        }
        if (lower.includes('unilever')) {
          return `
            <div class="flex items-center">
              <img src="${cleanBase}Unilever.webp" alt="Unilever" class="h-6 w-auto object-contain" />
            </div>
          `;
        }
        if (lower.includes('asian paints')) {
          return `
            <div class="flex items-center">
              <img src="${cleanBase}asian.png" alt="Asian Paints" class="h-6 w-auto object-contain" />
            </div>
          `;
        }
        if (lower.includes('welspun')) {
          return `
            <div class="flex items-center">
              <img src="${cleanBase}welspun.webp" alt="Welspun" class="h-6 w-auto object-contain" />
            </div>
          `;
        }
        if (lower.includes('npcil')) {
          return `
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#0d3b66] border border-[#0d3b66] flex items-center justify-center text-white text-[9px] font-bold shadow-xs">NPCIL</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-extrabold text-[#0d3b66] tracking-tight">NPCIL</span>
                <span class="text-[7.5px] font-semibold text-slate-500 uppercase">Nuclear Power Corp</span>
              </div>
            </div>
          `;
        }
        if (lower.includes('tata electronics')) {
          return `
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#00529b] flex items-center justify-center text-white text-[11px] font-sans font-extrabold shadow-xs">T</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-black text-[#00529b] tracking-wider font-sans">TATA</span>
                <span class="text-[7.5px] font-bold text-slate-500 uppercase tracking-wider">ELECTRONICS</span>
              </div>
            </div>
          `;
        }
        if (lower.includes('tata')) {
          return `
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#00529b] flex items-center justify-center text-white text-[11px] font-sans font-extrabold shadow-xs">T</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-black text-[#00529b] tracking-wider font-sans">TATA STEEL</span>
              </div>
            </div>
          `;
        }
        if (lower.includes('adani')) {
          return `
            <div class="flex items-center gap-1.5">
              <div class="flex flex-col leading-none">
                <div class="text-sm font-extrabold tracking-tight">
                  <span class="text-[#004b87]">ada</span><span class="text-[#c4161c]">ni</span>
                </div>
                <span class="text-[7.5px] font-bold tracking-wider text-slate-500 uppercase">Petrochemicals</span>
              </div>
            </div>
          `;
        }
        if (lower.includes('equinor')) {
          return `
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-[#ff1243] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 9l3 13h12l3-13z" />
              </svg>
              <span class="text-xs sm:text-sm font-black text-slate-900 tracking-tight">equinor</span>
            </div>
          `;
        }
        if (lower.includes('jsw')) {
          return `
            <div class="flex items-center">
              <img src="${cleanBase}images/clients/jsw-logo.png" alt="JSW" class="h-6 w-auto object-contain" />
            </div>
          `;
        }
        if (lower.includes('am/ns') || lower.includes('amns') || lower.includes('arcelormittal')) {
          return `
            <div class="flex items-center">
              <img src="${cleanBase}images/clients/amns-logo.png" alt="AM/NS India" class="h-6 w-auto object-contain" />
            </div>
          `;
        }
        if (lower.includes('rio grande')) {
          return `
            <div class="flex items-center">
              <img src="${cleanBase}images/clients/rio-grande-lng-logo.png" alt="Rio Grande LNG" class="h-6 w-auto object-contain" />
            </div>
          `;
        }
        if (lower.includes('shree cement') || lower.includes('shree')) {
          return `
            <div class="flex items-center">
              <img src="${cleanBase}images/clients/shree-cement-logo.png" alt="Shree Cement" class="h-6 w-auto object-contain" />
            </div>
          `;
        }
        if (ref.logo) {
          const logoSrc = ref.logo.startsWith('/') ? `${cleanBase}${ref.logo.slice(1)}` : ref.logo;
          return `
            <div class="flex items-center">
              <img src="${logoSrc}" alt="${ref.endUser}" class="h-6 sm:h-7 max-w-[120px] object-contain" />
            </div>
          `;
        }
        return `
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#EE6226]"></span>
            <span class="text-xs font-bold text-slate-900">${ref.endUser}</span>
          </div>
        `;
      };

      const renderCards = (list: typeof data.majorReferences) => list.map(ref => `
        <div class="reference-card-item p-4 rounded-xl border border-slate-200/90 bg-white hover:border-[#EE6226]/60 transition-all flex flex-col justify-between group shadow-xs shrink-0">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 min-h-[44px]">
            <div>
              ${getBrandLogo(ref)}
            </div>
            <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">Verified</span>
          </div>
          <div class="pt-3 flex flex-col">
            <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Process Duty / Application</span>
            <span class="text-xs font-semibold text-slate-800 mt-0.5 line-clamp-2">${ref.application}</span>
          </div>
        </div>
      `).join('');

      // Duplicate list twice for seamless 100% smooth infinite marquee
      referencesGrid.innerHTML = renderCards(data.majorReferences) + renderCards(data.majorReferences);
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

      function formatGalleryTitle(str: string): string {
        if (!str) return '';
        const acronyms = new Set(['SS', 'FRP', 'RIL', 'ETFE', 'WHRS', 'MPL', 'TATA', 'OSAT', 'PN16', 'PN10', 'PN6', 'ISO', 'ASME', 'API', 'DN', 'MOC']);
        return str
          .toLowerCase()
          .split(' ')
          .map(word => {
            const upper = word.toUpperCase();
            if (acronyms.has(upper)) return upper;
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');
      }

      const normalizedItems = (data.galleryImages || []).map((item) => {
        const itemImg = item.image ? (item.image.startsWith('/') ? `${cleanBase}${item.image.slice(1)}` : item.image) : data.image;
        const displayTitle = item.subtitle ? item.subtitle : formatGalleryTitle(item.title);
        const displaySubtitle = item.subtitle ? formatGalleryTitle(item.title) : (data.title ? formatGalleryTitle(data.title) : 'Manufactured Assembly');
        return {
          title: displayTitle,
          subtitle: displaySubtitle,
          img: itemImg,
        };
      });

      function renderGalleryCard(item: { title: string; subtitle: string; img: string }, idx: number, isFeatured = false) {
        if (isFeatured) {
          return `
            <div class="gallery-card group relative flex flex-col h-full bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" data-gallery-idx="${idx}" role="button" tabindex="0" aria-label="View ${item.title}">
              <!-- Image Container -->
              <div class="w-full flex-1 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-slate-100 overflow-hidden relative">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <!-- Card Details Bar -->
              <div class="p-5 sm:p-6 flex items-center justify-between gap-4 bg-white border-t border-slate-100 shrink-0">
                <div class="min-w-0 pr-2">
                  <h4 class="font-bold text-slate-900 text-base sm:text-lg leading-tight truncate">${item.title}</h4>
                  <p class="text-xs sm:text-sm text-slate-500 mt-1 truncate font-medium">${item.subtitle}</p>
                </div>
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFF3EC] text-[#EE6226] group-hover:bg-[#EE6226] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </div>
            </div>
          `;
        }
        return `
          <div class="gallery-card group relative flex flex-col h-full bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" data-gallery-idx="${idx}" role="button" tabindex="0" aria-label="View ${item.title}">
            <!-- Image Container -->
            <div class="w-full h-40 sm:h-44 md:h-48 bg-slate-100 overflow-hidden relative">
              <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </div>
            <!-- Card Details Bar -->
            <div class="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white border-t border-slate-100 shrink-0">
              <div class="min-w-0 pr-2">
                <h4 class="font-bold text-slate-900 text-sm sm:text-base leading-tight truncate">${item.title}</h4>
                <p class="text-xs sm:text-sm text-slate-500 mt-1 truncate font-medium">${item.subtitle}</p>
              </div>
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF3EC] text-[#EE6226] group-hover:bg-[#EE6226] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs">
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </div>
          </div>
        `;
      }

      if (normalizedItems.length >= 5) {
        const featuredItem = normalizedItems[0];
        const gridItems = normalizedItems.slice(1, 5);
        const remainingItems = normalizedItems.slice(5);

        let html = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            <!-- Left Featured Tall Card (5 cols) -->
            <div class="lg:col-span-5 flex flex-col h-full">
              ${renderGalleryCard(featuredItem, 0, true)}
            </div>

            <!-- Right 4 Cards in 2x2 Grid (7 cols) -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              ${gridItems.map((item, i) => renderGalleryCard(item, i + 1, false)).join('')}
            </div>
          </div>
        `;

        if (remainingItems.length > 0) {
          html += `
            <div id="gallery-extra-container" class="mt-5 sm:mt-6 hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              ${remainingItems.map((item, i) => renderGalleryCard(item, i + 5, false)).join('')}
            </div>
            <div class="mt-8 flex justify-center">
              <button id="gallery-expand-btn" type="button" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:border-[#EE6226] hover:text-[#EE6226] text-slate-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow cursor-pointer">
                <span id="gallery-expand-text">View More Units (+${remainingItems.length})</span>
                <svg id="gallery-expand-icon" class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>
          `;
        }
        galleryGrid.innerHTML = html;

        // Wire expand button
        if (remainingItems.length > 0) {
          const expandBtn = document.getElementById('gallery-expand-btn');
          const extraContainer = document.getElementById('gallery-extra-container');
          const expandText = document.getElementById('gallery-expand-text');
          const expandIcon = document.getElementById('gallery-expand-icon');

          if (expandBtn && extraContainer && expandText && expandIcon) {
            expandBtn.addEventListener('click', () => {
              const isHidden = extraContainer.classList.contains('hidden');
              if (isHidden) {
                extraContainer.classList.remove('hidden');
                expandText.textContent = 'Show Less Units';
                expandIcon.classList.add('rotate-180');
              } else {
                extraContainer.classList.add('hidden');
                expandText.textContent = `View More Units (+${remainingItems.length})`;
                expandIcon.classList.remove('rotate-180');
              }
            });
          }
        }
      } else if (normalizedItems.length === 4) {
        galleryGrid.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            ${normalizedItems.map((item, i) => renderGalleryCard(item, i, false)).join('')}
          </div>
        `;
      } else if (normalizedItems.length === 3) {
        galleryGrid.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            ${normalizedItems.map((item, i) => renderGalleryCard(item, i, false)).join('')}
          </div>
        `;
      } else if (normalizedItems.length === 2) {
        galleryGrid.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            ${normalizedItems.map((item, i) => renderGalleryCard(item, i, false)).join('')}
          </div>
        `;
      } else {
        galleryGrid.innerHTML = `
          <div class="max-w-md mx-auto">
            ${renderGalleryCard(normalizedItems[0], 0, false)}
          </div>
        `;
      }

      // Lightbox functionality
      const lightbox = document.getElementById('gallery-lightbox');
      const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
      const lightboxTitle = document.getElementById('lightbox-title');
      const lightboxSubtitle = document.getElementById('lightbox-subtitle');
      const lightboxCounter = document.getElementById('lightbox-counter');
      const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
      const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
      const lightboxNextBtn = document.getElementById('lightbox-next-btn');

      let currentLightboxIdx = 0;

      function showLightboxImage(idx: number) {
        if (!normalizedItems[idx] || !lightboxImg || !lightboxTitle || !lightboxSubtitle || !lightboxCounter) return;
        currentLightboxIdx = idx;
        const item = normalizedItems[idx];
        lightboxImg.src = item.img;
        lightboxImg.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxSubtitle.textContent = item.subtitle;
        lightboxCounter.textContent = `${idx + 1} / ${normalizedItems.length}`;
      }

      function openLightbox(idx: number) {
        if (!lightbox) return;
        showLightboxImage(idx);
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        requestAnimationFrame(() => {
          lightbox.classList.remove('opacity-0');
          lightbox.classList.add('opacity-100');
        });
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('opacity-100');
        lightbox.classList.add('opacity-0');
        setTimeout(() => {
          lightbox.classList.add('hidden');
          lightbox.classList.remove('flex');
          document.body.style.overflow = '';
        }, 250);
      }

      galleryGrid.querySelectorAll<HTMLElement>('.gallery-card').forEach((card) => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-gallery-idx') || '0', 10);
          openLightbox(idx);
        });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const idx = parseInt(card.getAttribute('data-gallery-idx') || '0', 10);
            openLightbox(idx);
          }
        });
      });

      if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener('click', closeLightbox);
      }
      if (lightbox) {
        lightbox.addEventListener('click', (e) => {
          if (e.target === lightbox) {
            closeLightbox();
          }
        });
      }
      if (lightboxPrevBtn) {
        lightboxPrevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const nextIdx = (currentLightboxIdx - 1 + normalizedItems.length) % normalizedItems.length;
          showLightboxImage(nextIdx);
        });
      }
      if (lightboxNextBtn) {
        lightboxNextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const nextIdx = (currentLightboxIdx + 1) % normalizedItems.length;
          showLightboxImage(nextIdx);
        });
      }

      document.addEventListener('keydown', (e) => {
        if (!lightbox || lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          const nextIdx = (currentLightboxIdx - 1 + normalizedItems.length) % normalizedItems.length;
          showLightboxImage(nextIdx);
        } else if (e.key === 'ArrowRight') {
          const nextIdx = (currentLightboxIdx + 1) % normalizedItems.length;
          showLightboxImage(nextIdx);
        }
      });
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

  // Render Related Models (Exact Visual Format matching reference)
  const otherGrid = document.getElementById('other-products-grid');
  if (otherGrid) {
    // Preferred related models list: BE20, BE30, BE40, BE50, etc.
    const priorityIds = [
      'double-offset-butterfly-damper-valves', // BE20
      'triple-offset-butterfly-damper-valves', // BE30
      'three-lever-shut-off-damper-valves',    // BE40
      'air-seal-damper-valves'                 // BE50
    ];

    const allProducts = Object.values(productsData);
    let otherProducts = priorityIds
      .filter(id => id !== data.id && productsData[id])
      .map(id => productsData[id]);

    if (otherProducts.length < 4) {
      const remaining = allProducts.filter(p => p.id !== data.id && !priorityIds.includes(p.id));
      otherProducts = [...otherProducts, ...remaining].slice(0, 4);
    }

    const themeGradients = [
      {
        bg: 'bg-gradient-to-br from-[#F0FDF4] via-[#DCFCE7] to-[#BBF7D0]',
        badgeText: 'Double Offset',
        textColor: 'text-[#15803D]',
        iconSvg: `<svg class="w-3.5 h-3.5 text-[#15803D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/></svg>`
      },
      {
        bg: 'bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#DDD6FE]',
        badgeText: 'Triple Offset',
        textColor: 'text-[#7C3AED]',
        iconSvg: `<svg class="w-3.5 h-3.5 text-[#7C3AED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor"/><path d="M12 9.5V2.5C9.5 2.5 8 4 8 6.5s2 3 4 3z"/><path d="M14.5 12h7c0-2.5-1.5-4-4-4s-3 2-3 4z"/><path d="M12 14.5v7c2.5 0 4-1.5 4-4s-2-3-4-3z"/><path d="M9.5 12h-7c0 2.5 1.5 4 4 4s3-2 3-4z"/></svg>`
      },
      {
        bg: 'bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE]',
        badgeText: 'Three Lever',
        textColor: 'text-[#2563EB]',
        iconSvg: `<svg class="w-3.5 h-3.5 text-[#2563EB]" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`
      },
      {
        bg: 'bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA]',
        badgeText: 'Air Seal',
        textColor: 'text-[#EA580C]',
        iconSvg: `<svg class="w-3.5 h-3.5 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M8 5c-1.5 2-1.5 3.5 0 5s1.5 3.5 0 5-1.5 3.5 0 5"/><path d="M12 4c-1.5 2-1.5 3.5 0 5s1.5 3.5 0 5-1.5 3.5 0 5"/><path d="M16 5c-1.5 2-1.5 3.5 0 5s1.5 3.5 0 5-1.5 3.5 0 5"/></svg>`
      },
    ];

    otherGrid.innerHTML = otherProducts.map((p, idx) => {
      const theme = themeGradients[idx % themeGradients.length];
      const pImg = p.image.startsWith('/') ? `${cleanBase}${p.image.slice(1)}` : p.image;
      const shortDesc = p.tagline || p.desc;
      const delay = idx * 110;

      return `
        <a class="damper-showcase-card scroll-reveal-item group flex flex-col justify-between" href="${cleanBase}product-detail.html?id=${p.id}" style="--stagger-delay: ${delay}ms;">
          <div class="damper-showcase-visual ${theme.bg}">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.65),transparent_60%)]"></div>
            <!-- Top Left Icon + Badge -->
            <div class="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
              <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0">
                ${theme.iconSvg}
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md ${theme.textColor} shadow-sm border border-white/70">
                ${p.categoryLabel || p.category || theme.badgeText}
              </span>
            </div>
            <img alt="${p.title}" src="${pImg}" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="damper-showcase-body flex flex-col flex-1 justify-between p-5 bg-white">
            <div>
              <h3 class="mb-1.5 text-base font-bold leading-snug text-[#0F172A] group-hover:text-[#EE6226] transition-colors line-clamp-2">
                ${p.title}
              </h3>
              <p class="text-xs leading-relaxed text-slate-600 mb-3 flex-1 line-clamp-3">
                ${shortDesc}
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors">
              <span class="flex items-center gap-1.5 underline decoration-slate-900 group-hover:decoration-[#EE6226] group-hover:text-[#EE6226] underline-offset-4 transition-colors">
                Learn More
                <span class="text-[#EE6226] text-sm leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
              <span class="text-[11px] font-medium text-slate-400 font-mono tracking-tight">${p.model}</span>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

  // Initialize 1-by-1 Row & Card Scroll Reveal Animations
  initScrollLoadUnload();
});

/**
 * 1-by-1 Row & Item Load / Unload Animation System
 */
function initScrollLoadUnload(): void {
  // Stagger rows in specs table
  document.querySelectorAll<HTMLElement>('#specs-table-container .spec-table-row, #specs-table-container > div').forEach((row, i) => {
    row.classList.add('spec-table-row');
    if (!row.style.getPropertyValue('--stagger-delay')) {
      row.style.setProperty('--stagger-delay', `${i * 35}ms`);
    }
  });

  // Stagger MOC cards
  document.querySelectorAll<HTMLElement>('#moc-table-container > div').forEach((card, i) => {
    card.classList.add('scroll-reveal-item');
    if (!card.style.getPropertyValue('--stagger-delay')) {
      card.style.setProperty('--stagger-delay', `${(i % 6) * 55}ms`);
    }
  });

  // Stagger Actuator cards
  document.querySelectorAll<HTMLElement>('#automation-cards-container > div').forEach((card, i) => {
    card.classList.add('scroll-reveal-item');
    if (!card.style.getPropertyValue('--stagger-delay')) {
      card.style.setProperty('--stagger-delay', `${(i % 4) * 70}ms`);
    }
  });

  // Stagger feature items
  document.querySelectorAll<HTMLElement>('#features-list > div, #optional-features-list > div').forEach((item, i) => {
    item.classList.add('scroll-reveal-item');
    if (!item.style.getPropertyValue('--stagger-delay')) {
      item.style.setProperty('--stagger-delay', `${(i % 10) * 45}ms`);
    }
  });

  // Stagger inspection items
  document.querySelectorAll<HTMLElement>('#inspection-list > div').forEach((item, i) => {
    item.classList.add('scroll-reveal-item');
    if (!item.style.getPropertyValue('--stagger-delay')) {
      item.style.setProperty('--stagger-delay', `${(i % 3) * 85}ms`);
    }
  });

  // Stagger applications
  document.querySelectorAll<HTMLElement>('#detail-applications > div').forEach((app, i) => {
    app.classList.add('scroll-reveal-item');
    if (!app.style.getPropertyValue('--stagger-delay')) {
      app.style.setProperty('--stagger-delay', `${(i % 10) * 50}ms`);
    }
  });

  // Stagger industries
  document.querySelectorAll<HTMLElement>('#industries-grid > div').forEach((ind, i) => {
    ind.classList.add('scroll-reveal-item');
    ind.style.setProperty('--stagger-delay', `${(i % 6) * 70}ms`);
  });

  const allElements = document.querySelectorAll<HTMLElement>(
    '.scroll-reveal, .scroll-reveal-item, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-heading, .scroll-subtext, .scroll-badge, .scroll-mask-wrap, .spec-table-row'
  );
  if (allElements.length === 0) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    allElements.forEach((el) => el.classList.add('is-loaded'));
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
      if (entry.isIntersecting) {
        // Loads row/card 1 by 1 based on its staggered delay
        el.classList.add('is-loaded');
      } else {
        // Unloads when scrolled out of view so it re-triggers 1 by 1 on re-entry
        el.classList.remove('is-loaded');
      }
    });
  }, observerOptions);

  allElements.forEach((el) => observer.observe(el));
}


