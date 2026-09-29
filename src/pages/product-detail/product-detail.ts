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
  if (detailDesc) {
    const text = data.longDesc || data.desc;
    if (text.includes('\n\n')) {
      detailDesc.innerHTML = text.split('\n\n').map(p => `<p class="mb-3 last:mb-0">${p.trim()}</p>`).join('');
    } else {
      detailDesc.textContent = text;
    }
  }

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

  // Key Features & Optional Features
  const featuresWrapper = document.getElementById('features-wrapper');
  const featuresBox = document.getElementById('features-box');
  const featuresList = document.getElementById('features-list');
  const optionalFeaturesBox = document.getElementById('optional-features-box');
  const optionalFeaturesList = document.getElementById('optional-features-list');

  const hasFeatures = Boolean(data.features && data.features.length > 0);
  const hasOptionalFeatures = Boolean(data.optionalFeatures && data.optionalFeatures.length > 0);

  if (featuresWrapper) {
    if (!hasFeatures && !hasOptionalFeatures) {
      featuresWrapper.classList.add('hidden');
    } else {
      featuresWrapper.classList.remove('hidden');
      if (hasFeatures && !hasOptionalFeatures) {
        // Full width single box with a 2-column internal list
        featuresWrapper.className = 'grid grid-cols-1 gap-4 flex-1';
        if (featuresList) {
          featuresList.className = 'grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 text-sm leading-relaxed text-slate-700';
        }
      } else {
        featuresWrapper.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1';
        if (featuresList) {
          featuresList.className = 'space-y-3 text-sm leading-relaxed text-slate-700';
        }
      }
    }
  }

  if (featuresBox && featuresList) {
    if (hasFeatures) {
      featuresBox.classList.remove('hidden');
      featuresList.innerHTML = data.features.map(f => `
        <li class="flex items-start gap-2.5">
          <span class="text-[#EE6226] font-bold text-base leading-none mt-0.5">&bull;</span>
          <span class="text-slate-700 font-medium">${f}</span>
        </li>
      `).join('');
    } else {
      featuresBox.classList.add('hidden');
    }
  }

  if (optionalFeaturesBox && optionalFeaturesList) {
    if (hasOptionalFeatures) {
      optionalFeaturesBox.classList.remove('hidden');
      optionalFeaturesList.innerHTML = data.optionalFeatures!.map(f => `
        <li class="flex items-start gap-2.5">
          <span class="text-[#EE6226] font-bold text-base leading-none mt-0.5">&bull;</span>
          <span class="text-slate-700 font-medium">${f}</span>
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
        <div class="flex items-center gap-2.5 py-1">
          <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <span class="truncate font-medium text-slate-700">${t}</span>
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
      <div class="p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-200 text-sm font-medium text-slate-800 flex items-center gap-3">
        <span class="w-2 h-2 rounded-full bg-[#EE6226] shrink-0"></span>
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

      const renderGalleryCards = (items: typeof data.galleryImages) => (items || []).map(item => {
        const itemImg = item.image ? (item.image.startsWith('/') ? `${cleanBase}${item.image.slice(1)}` : item.image) : data.image;
        return `
          <div class="gallery-card-item rounded-2xl border border-slate-200 overflow-hidden bg-white flex flex-col group hover:border-[#EE6226] hover:shadow-xl transition-all duration-300 shrink-0">
            <div class="w-full h-60 sm:h-64 bg-slate-100 flex items-center justify-center p-2 relative overflow-hidden">
              <img src="${itemImg}" alt="${item.title}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-4 bg-white border-t border-slate-100 flex flex-col text-left">
              <span class="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#EE6226] transition-colors line-clamp-1">${item.title}</span>
              ${item.subtitle ? `<span class="text-xs font-mono font-semibold text-[#EE6226] mt-0.5">${item.subtitle}</span>` : ''}
            </div>
          </div>
        `;
      }).join('');

      // Duplicate list twice for seamless right-to-left marquee
      galleryGrid.innerHTML = renderGalleryCards(data.galleryImages) + renderGalleryCards(data.galleryImages);
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
      { bg: 'bg-damper-emerald', badgeBg: 'bg-white/90 text-[#15803D]', badgeText: 'Double Offset', subText: 'BE20 SERIES' },
      { bg: 'bg-damper-purple', badgeBg: 'bg-white/90 text-[#7E22CE]', badgeText: 'Triple Offset', subText: 'BE30 SERIES' },
      { bg: 'bg-damper-blue', badgeBg: 'bg-white/90 text-[#1D4ED8]', badgeText: 'Three Lever', subText: 'BE40 SERIES' },
      { bg: 'bg-damper-orange', badgeBg: 'bg-white/90 text-[#C2410C]', badgeText: 'Air Seal', subText: 'BE50 SERIES' },
    ];

    otherGrid.innerHTML = otherProducts.map((p, idx) => {
      const theme = themeGradients[idx % themeGradients.length];
      const pImg = p.image.startsWith('/') ? `${cleanBase}${p.image.slice(1)}` : p.image;
      const shortDesc = p.tagline || p.desc;

      return `
        <a class="infosys-damper-card group block" href="${cleanBase}product-detail.html?id=${p.id}">
          <div class="infosys-damper-visual ${theme.bg}">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]"></div>
            <div class="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${theme.badgeBg} shadow-xs border border-white/60">
              ${p.model || theme.subText}
            </div>
            <img alt="${p.title}" src="${pImg}" loading="lazy" class="max-h-[140px] max-w-[85%] object-contain" />
          </div>
          <div class="infosys-damper-body">
            <h3 class="mb-2 text-base font-bold leading-snug text-[#0F172A] group-hover:text-[#EE6226] transition-colors line-clamp-2">
              ${p.title}
            </h3>
            <p class="text-xs leading-relaxed text-slate-600 mb-3 flex-1 line-clamp-3">
              ${shortDesc}
            </p>
            <div class="infosys-damper-cta mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors">
              <span class="flex items-center gap-1.5 underline decoration-[#EE6226] underline-offset-4">
                Learn More
                <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#EE6226]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span class="text-[10px] font-medium text-slate-400 font-mono">${p.model}</span>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }
});
