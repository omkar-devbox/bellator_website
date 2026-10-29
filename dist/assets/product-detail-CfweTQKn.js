import{a as e,t}from"./nav-Cbb4lcxT.js";document.addEventListener(`DOMContentLoaded`,()=>{t(`products`);let r=new URLSearchParams(window.location.search).get(`id`);if(!r){let e=window.location.pathname.replace(/\.html$/,``).split(`/`).filter(Boolean);e.length>=2&&(e[0]===`products`||e[0]===`product`)&&(r=e[1])}(!r||!e[r])&&(r=`butterfly-damper-valves`);let i=e[r];document.title=`${i.title} (${i.model}) | Bellator Engineers`;let a=document.getElementById(`meta-desc`);a&&a.setAttribute(`content`,`${i.title} manufactured by Bellator Engineers in Pune. ${i.desc}`);let o=document.getElementById(`breadcrumb-current`);o&&(o.textContent=i.title);let s=document.getElementById(`detail-category-badge`);s&&(s.textContent=i.categoryLabel||i.category);let c=document.getElementById(`detail-category-eyebrow`);c&&(c.textContent=(i.categoryLabel||i.category||`ISOLATION & FLOW CONTROL`).toUpperCase());let l=document.getElementById(`detail-model-badge`);l&&(l.textContent=(i.model||`BE10 SERIES`).toUpperCase());let u=document.getElementById(`floating-feature-title`);u&&(u.textContent=i.categoryLabel||`Isolation & Flow Control`);let d=`/test_web/`,f=d.endsWith(`/`)?d:d+`/`,p=document.getElementById(`detail-image`);p&&(p.src=i.image.startsWith(`/`)?`${f}${i.image.slice(1)}`:i.image,p.alt=`${i.title} (${i.model})`);let m=document.getElementById(`detail-thumbnails-container`),h=document.getElementById(`thumb-prev-btn`),g=document.getElementById(`thumb-next-btn`),_=[];if(i.image){let e=i.image.startsWith(`/`)?`${f}${i.image.slice(1)}`:i.image;_.push(e)}if(i.galleryImages&&Array.isArray(i.galleryImages)&&i.galleryImages.forEach(e=>{if(e&&e.image){let t=e.image.startsWith(`/`)?`${f}${e.image.slice(1)}`:e.image;_.includes(t)||_.push(t)}}),m&&_.length>0){m.innerHTML=_.map((e,t)=>`
      <button type="button" data-index="${t}" data-src="${e}" aria-label="View photo ${t+1}"
        class="product-thumb-btn w-16 h-13 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 bg-slate-100 flex items-center justify-center p-1 ${t===0?`border-[#EE6226] ring-2 ring-orange-200 shadow-xs`:`border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100`}">
        <img src="${e}" alt="Thumbnail ${t+1}" class="w-full h-full object-contain pointer-events-none" />
      </button>
    `).join(``);let e=m.querySelectorAll(`.product-thumb-btn`);e.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-src`);p&&n&&(p.src=n),e.forEach(e=>{e.className=`product-thumb-btn w-16 h-13 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 bg-slate-100 flex items-center justify-center p-1 border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100`}),t.className=`product-thumb-btn w-16 h-13 sm:w-20 sm:h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 bg-slate-100 flex items-center justify-center p-1 border-[#EE6226] ring-2 ring-orange-200 shadow-xs`})}),h&&h.addEventListener(`click`,()=>{m.scrollBy({left:-160,behavior:`smooth`})}),g&&g.addEventListener(`click`,()=>{m.scrollBy({left:160,behavior:`smooth`})})}let v=document.getElementById(`quick-leakage`);v&&(v.textContent=i.leakage.split(`(`)[0].trim());let y=document.getElementById(`quick-temp`);y&&(y.textContent=i.temp);let b=document.getElementById(`quick-pressure`);b&&(b.textContent=i.pressure);let x=document.getElementById(`detail-title`);x&&(x.textContent=i.title);let S=document.getElementById(`detail-tagline`);S&&(S.textContent=i.tagline||i.desc);let C=document.getElementById(`detail-desc`);if(C){let e=i.longDesc||i.desc;e.includes(`

`)?C.innerHTML=e.split(`

`).map(e=>`<p class="mb-3 last:mb-0">${e.trim()}</p>`).join(``):C.textContent=e}let w=document.getElementById(`detail-highlights`);w&&(w.innerHTML=(i.keyHighlights&&i.keyHighlights.length>0?i.keyHighlights:[`Sizes: ${i.sizes}`,`Materials: ${i.materials}`,`Actuation: ${i.actuation}`,`Standards: ${i.standards}`]).map((e,t)=>`
      <div class="scroll-reveal-item flex items-start gap-2.5" style="--stagger-delay: ${t*45}ms;">
        <div class="w-4 h-4 rounded-full bg-[#EE6226] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
          <svg class="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="2.5 6 4.8 8.5 9.5 3.5"></polyline>
          </svg>
        </div>
        <span class="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">${e}</span>
      </div>
    `).join(``));let T=document.getElementById(`spec-sizes`);T&&(T.textContent=i.sizes);let E=document.getElementById(`spec-temp`);E&&(E.textContent=i.temp);let D=document.getElementById(`spec-pressure`);D&&(D.textContent=i.pressure);let O=document.getElementById(`spec-leakage`);O&&(O.textContent=i.leakage);let ee=document.getElementById(`spec-materials`);ee&&(ee.textContent=i.materials);let k=document.getElementById(`spec-actuation`);k&&(k.textContent=i.actuation);let A=document.getElementById(`spec-standards`);A&&(A.textContent=i.standards);let te=e=>{let t=e.toLowerCase();return t.includes(`type`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`:t.includes(`rectangular`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/></svg>`:t.includes(`size`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`:t.includes(`temp`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`:t.includes(`pressure`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"/></svg>`:t.includes(`leakage`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`:t.includes(`operation`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`:t.includes(`connection`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`:t.includes(`shape`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="8" height="8" rx="1.5"/><circle cx="16" cy="16" r="5"/></svg>`:t.includes(`standard`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/></svg>`:t.includes(`automation`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`:`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>`},j=document.getElementById(`specs-table-container`);j&&i.technicalSpecs&&i.technicalSpecs.length>0&&(j.innerHTML=i.technicalSpecs.map((e,t)=>`
      <div class="spec-table-row flex items-center justify-between py-2 sm:py-2.5 border-b border-slate-100 last:border-0 gap-3" style="--stagger-delay: ${t*35}ms;">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center shrink-0 text-[#EE6226]">
            ${te(e.parameter)}
          </div>
          <span class="font-semibold text-slate-600 text-xs sm:text-sm truncate">${e.parameter}</span>
        </div>
        <span class="font-bold text-slate-900 text-xs sm:text-sm text-right shrink-0">${e.details}</span>
      </div>
    `).join(``));let ne=e=>{let t=e.toLowerCase();return t.includes(`body`)?`${f}images/moc/moc-body.jpg`:t.includes(`disc`)?`${f}images/moc/moc-disc.jpg`:t.includes(`shaft`)?`${f}images/moc/moc-shaft.jpg`:t.includes(`seat`)?`${f}images/moc/moc-seat.svg`:t.includes(`seal`)?`${f}images/moc/moc-seal.svg`:t.includes(`bearing`)?`${f}images/moc/moc-bearing.svg`:`${f}images/moc/moc-body.jpg`},M=document.getElementById(`moc-section`),N=document.getElementById(`moc-table-container`);M&&N&&(i.mocTable&&i.mocTable.length>0?(M.classList.remove(`hidden`),N.innerHTML=i.mocTable.map((e,t)=>{let n=e.material.replace(/\s*\/\s*Customer Specific/i,``).trim();return`
          <div class="scroll-reveal-item bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:py-3.5 sm:px-4 flex items-center gap-3.5 hover:border-orange-200 hover:bg-white hover:shadow-2xs transition-all h-full" style="--stagger-delay: ${t%6*55}ms;">
            <div class="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
              <img src="${ne(e.component)}" alt="${e.component}" class="max-h-full max-w-full object-contain rounded-lg" />
            </div>
            <div class="flex flex-col leading-tight min-w-0">
              <span class="font-extrabold text-[#0F172A] text-sm sm:text-base">${e.component}</span>
              <span class="text-xs font-semibold text-slate-700 truncate mt-0.5">${n}</span>
              <span class="text-[10px] text-slate-400 font-medium mt-0.5">Customer Specific</span>
            </div>
          </div>
        `}).join(``)):M.classList.add(`hidden`));let re=e=>{let t=e.toLowerCase();return t.includes(`pneu`)?`${f}images/actuators/actuator-pneumatic.svg`:t.includes(`elec`)?`${f}images/actuators/actuator-electric.svg`:t.includes(`hydr`)?`${f}images/actuators/actuator-hydraulic.svg`:t.includes(`manu`)?`${f}images/actuators/actuator-manual.svg`:`${f}images/actuators/actuator-pneumatic.svg`},P=document.getElementById(`automation-section`),F=document.getElementById(`automation-cards-container`);P&&F&&(i.automationOptions&&i.automationOptions.length>0?(P.classList.remove(`hidden`),F.innerHTML=i.automationOptions.map((e,t)=>`
        <div class="scroll-reveal-item bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center hover:border-orange-200 hover:bg-white hover:shadow-2xs transition-all group h-full justify-between" style="--stagger-delay: ${t%4*70}ms;">
          <div class="w-full h-14 sm:h-16 flex items-center justify-center p-1 mb-2">
            <img src="${re(e.name)}" alt="${e.name}" class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
          </div>
          <span class="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-1">${e.name}</span>
          <p class="text-[11px] text-slate-500 leading-relaxed text-left line-clamp-3">
            ${e.desc||``}
          </p>
        </div>
      `).join(``)):P.classList.add(`hidden`));let ie=e=>{let t=e.toLowerCase();return t.includes(`pressure`)||t.includes(`drop`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 3"/></svg>`:t.includes(`heavy`)||t.includes(`fabricated`)||t.includes(`construction`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`:t.includes(`torque`)||t.includes(`operating`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`:t.includes(`maintenance`)||t.includes(`friendly`)||t.includes(`service`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`:t.includes(`automation`)||t.includes(`option`)||t.includes(`motor`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="16" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v2m0 12v2m-6-8H4m16 0h-2"/></svg>`:t.includes(`custom`)||t.includes(`application`)||t.includes(`designed`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.71 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`:t.includes(`corrosive`)||t.includes(`dusty`)||t.includes(`media`)||t.includes(`protection`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`:`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>`},ae=e=>{let t=e.toLowerCase();return t.includes(`air seal`)||t.includes(`seal`)||t.includes(`purge`)||t.includes(`air`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`:t.includes(`spark`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polygon points="12 8 10 13 13 13 11 18 15 12 12 12 12 8"/></svg>`:t.includes(`static`)||t.includes(`ground`)||t.includes(`earth`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="15"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="7" y1="18" x2="17" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg>`:t.includes(`blowout`)||t.includes(`shaft`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`:t.includes(`seismic`)||t.includes(`vibration`)||t.includes(`earthquake`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 12 6 12 8 6 11 18 14 9 16 15 18 12 22 12"/></svg>`:t.includes(`temperature`)||t.includes(`heat`)||t.includes(`thermal`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`:t.includes(`paint`)||t.includes(`norsok`)||t.includes(`c5`)||t.includes(`coating`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="5" rx="1"/><path d="M12 8v4a2 2 0 0 0 2 2h2v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4"/></svg>`:t.includes(`refractory`)||t.includes(`lining`)||t.includes(`brick`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="8" y1="9" x2="8" y2="15"/><line x1="16" y1="9" x2="16" y2="15"/><line x1="12" y1="15" x2="12" y2="21"/></svg>`:t.includes(`insulation`)||t.includes(`external`)||t.includes(`lagging`)||t.includes(`blanket`)?`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="12" r="5"/><path d="M8 7h11a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8"/><circle cx="8" cy="12" r="2"/></svg>`:`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`},I=document.getElementById(`features-banner-blueprint-img`),L=document.getElementById(`features-banner-photo-img`);i.image&&(I&&(I.src=i.image),L&&(L.src=i.image));let R=document.getElementById(`features-box`),z=document.getElementById(`features-list`),B=document.getElementById(`optional-features-box`),oe=document.getElementById(`optional-features-list`),se=!!(i.features&&i.features.length>0),ce=!!(i.optionalFeatures&&i.optionalFeatures.length>0);R&&z&&(se?(R.classList.remove(`hidden`),z.innerHTML=i.features.map(e=>`
        <div class="scroll-reveal-item flex items-center gap-3 py-2.5 sm:py-3 hover:bg-slate-50/70 rounded-xl px-1.5 transition-colors">
          <div class="w-8 h-8 rounded-full bg-orange-50 border border-orange-200/60 flex items-center justify-center shrink-0 text-[#EE6226]">
            ${ie(e)}
          </div>
          <div class="w-4 h-4 rounded-full bg-[#EE6226] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <svg class="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2.5 6 4.8 8.5 9.5 3.5"/></svg>
          </div>
          <span class="font-semibold text-slate-800 text-xs sm:text-sm">${e}</span>
        </div>
      `).join(``)):R.classList.add(`hidden`)),B&&oe&&(ce?(B.classList.remove(`hidden`),oe.innerHTML=i.optionalFeatures.map(e=>`
        <div class="scroll-reveal-item bg-white border border-slate-200/80 rounded-xl px-3.5 py-2.5 flex items-center gap-3 hover:border-orange-200 hover:bg-orange-50/20 hover:shadow-2xs transition-all shadow-2xs">
          <div class="w-6 h-6 flex items-center justify-center shrink-0 text-[#EE6226]">
            ${ae(e)}
          </div>
          <span class="font-semibold text-slate-800 text-xs sm:text-sm">${e}</span>
        </div>
      `).join(``)):B.classList.add(`hidden`));let V=document.getElementById(`inspection-box`),H=document.getElementById(`inspection-list`);V&&H&&(i.inspectionTesting&&i.inspectionTesting.length>0?(V.classList.remove(`hidden`),H.innerHTML=i.inspectionTesting.map(e=>`
        <div class="flex items-center gap-2.5 py-1">
          <span class="w-2 h-2 rounded-full bg-[#EE6226] shrink-0"></span>
          <span class="truncate font-medium text-slate-700">${e}</span>
        </div>
      `).join(``)):V.classList.add(`hidden`));let U=document.getElementById(`detail-applications`);U&&(U.innerHTML=(i.applications&&i.applications.length>0?i.applications:[`Boiler Air & Flue Gas Lines`,`ID / FD Fan Isolation`,`Hot Air Systems`,`Exhaust Systems`,`Dust Collection Systems`,`HVAC Ventilation Systems`,`Kiln & Furnace Systems`]).map((e,t)=>`
      <div class="scroll-reveal-item flex items-center gap-3 py-2.5 sm:py-3 hover:bg-slate-50/70 rounded-xl px-1.5 transition-colors">
        <span class="font-extrabold text-xs sm:text-sm text-[#EE6226] w-6 shrink-0">${String(t+1).padStart(2,`0`)}</span>
        <span class="text-slate-300 font-light select-none">|</span>
        <span class="font-semibold text-slate-800 text-xs sm:text-sm">${e}</span>
      </div>
    `).join(``));let W=document.getElementById(`references-section`),G=document.getElementById(`references-grid`);if(W&&G){if(i.majorReferences&&i.majorReferences.length>0){W.classList.remove(`hidden`);let e=e=>{let t=e.endUser.toLowerCase();return t.includes(`aramco`)?`
            <div class="flex items-center">
              <div class="px-2 py-1 rounded bg-[#00142e] flex items-center justify-center border border-slate-700/40 shadow-xs">
                <img src="${f}aramco-logo--white.webp" alt="Saudi Aramco" class="h-5 w-auto object-contain" />
              </div>
            </div>
          `:t.includes(`reliance`)?`
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-white text-[11px] font-serif font-bold shadow-xs">R</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-black text-slate-900 tracking-tight font-serif">Reliance</span>
                <span class="text-[8px] font-bold tracking-widest text-slate-500 uppercase">Industries Limited</span>
              </div>
            </div>
          `:t.includes(`pdo`)||t.includes(`oman`)?`
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full border-2 border-emerald-600 bg-emerald-50 flex items-center justify-center text-emerald-700 text-[10px] font-black">PDO</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs font-bold text-emerald-900 leading-tight">PDO Oman</span>
                <span class="text-[8px] text-slate-500 font-arabic">شركة تنمية نفط عمان</span>
              </div>
            </div>
          `:t.includes(`unilever`)?`
            <div class="flex items-center">
              <img src="${f}Unilever.webp" alt="Unilever" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`asian paints`)?`
            <div class="flex items-center">
              <img src="${f}asian.png" alt="Asian Paints" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`welspun`)?`
            <div class="flex items-center">
              <img src="${f}welspun.webp" alt="Welspun" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`npcil`)?`
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#0d3b66] border border-[#0d3b66] flex items-center justify-center text-white text-[9px] font-bold shadow-xs">NPCIL</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-extrabold text-[#0d3b66] tracking-tight">NPCIL</span>
                <span class="text-[7.5px] font-semibold text-slate-500 uppercase">Nuclear Power Corp</span>
              </div>
            </div>
          `:t.includes(`tata electronics`)?`
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#00529b] flex items-center justify-center text-white text-[11px] font-sans font-extrabold shadow-xs">T</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-black text-[#00529b] tracking-wider font-sans">TATA</span>
                <span class="text-[7.5px] font-bold text-slate-500 uppercase tracking-wider">ELECTRONICS</span>
              </div>
            </div>
          `:t.includes(`tata`)?`
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#00529b] flex items-center justify-center text-white text-[11px] font-sans font-extrabold shadow-xs">T</div>
              <div class="flex flex-col leading-none">
                <span class="text-xs sm:text-sm font-black text-[#00529b] tracking-wider font-sans">TATA STEEL</span>
              </div>
            </div>
          `:t.includes(`adani`)?`
            <div class="flex items-center gap-1.5">
              <div class="flex flex-col leading-none">
                <div class="text-sm font-extrabold tracking-tight">
                  <span class="text-[#004b87]">ada</span><span class="text-[#c4161c]">ni</span>
                </div>
                <span class="text-[7.5px] font-bold tracking-wider text-slate-500 uppercase">Petrochemicals</span>
              </div>
            </div>
          `:t.includes(`equinor`)?`
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-[#ff1243] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 9l3 13h12l3-13z" />
              </svg>
              <span class="text-xs sm:text-sm font-black text-slate-900 tracking-tight">equinor</span>
            </div>
          `:t.includes(`jsw`)?`
            <div class="flex items-center">
              <img src="${f}images/clients/jsw-logo.png" alt="JSW" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`am/ns`)||t.includes(`amns`)||t.includes(`arcelormittal`)?`
            <div class="flex items-center">
              <img src="${f}images/clients/amns-logo.png" alt="AM/NS India" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`rio grande`)?`
            <div class="flex items-center">
              <img src="${f}images/clients/rio-grande-lng-logo.png" alt="Rio Grande LNG" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`shree cement`)||t.includes(`shree`)?`
            <div class="flex items-center">
              <img src="${f}images/clients/shree-cement-logo.png" alt="Shree Cement" class="h-6 w-auto object-contain" />
            </div>
          `:e.logo?`
            <div class="flex items-center">
              <img src="${e.logo.startsWith(`/`)?`${f}${e.logo.slice(1)}`:e.logo}" alt="${e.endUser}" class="h-6 sm:h-7 max-w-[120px] object-contain" />
            </div>
          `:`
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#EE6226]"></span>
            <span class="text-xs font-bold text-slate-900">${e.endUser}</span>
          </div>
        `},t=t=>t.map(t=>`
        <div class="reference-card-item p-4 rounded-xl border border-slate-200/90 bg-white hover:border-[#EE6226]/60 transition-all flex flex-col justify-between group shadow-xs shrink-0">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 min-h-[44px]">
            <div>
              ${e(t)}
            </div>
            <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">Verified</span>
          </div>
          <div class="pt-3 flex flex-col">
            <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Process Duty / Application</span>
            <span class="text-xs font-semibold text-slate-800 mt-0.5 line-clamp-2">${t.application}</span>
          </div>
        </div>
      `).join(``);G.innerHTML=t(i.majorReferences)+t(i.majorReferences)}else W.classList.add(`hidden`)}let K=document.getElementById(`gallery-section`),q=document.getElementById(`gallery-grid`);if(K&&q){if(i.galleryImages&&i.galleryImages.length>0){K.classList.remove(`hidden`);function e(e){if(!e)return``;let t=new Set([`SS`,`FRP`,`RIL`,`ETFE`,`WHRS`,`MPL`,`TATA`,`OSAT`,`PN16`,`PN10`,`PN6`,`ISO`,`ASME`,`API`,`DN`,`MOC`]);return e.toLowerCase().split(` `).map(e=>{let n=e.toUpperCase();return t.has(n)?n:e.charAt(0).toUpperCase()+e.slice(1)}).join(` `)}let t=(i.galleryImages||[]).map(t=>{let n=t.image?t.image.startsWith(`/`)?`${f}${t.image.slice(1)}`:t.image:i.image;return{title:t.subtitle?t.subtitle:e(t.title),subtitle:t.subtitle?e(t.title):i.title?e(i.title):`Manufactured Assembly`,img:n}});function n(e,t,n=!1){return n?`
            <div class="gallery-card group relative flex flex-col h-full bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" data-gallery-idx="${t}" role="button" tabindex="0" aria-label="View ${e.title}">
              <!-- Image Container -->
              <div class="w-full flex-1 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-slate-100 overflow-hidden relative">
                <img src="${e.img}" alt="${e.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <!-- Card Details Bar -->
              <div class="p-5 sm:p-6 flex items-center justify-between gap-4 bg-white border-t border-slate-100 shrink-0">
                <div class="min-w-0 pr-2">
                  <h4 class="font-bold text-slate-900 text-base sm:text-lg leading-tight truncate">${e.title}</h4>
                  <p class="text-xs sm:text-sm text-slate-500 mt-1 truncate font-medium">${e.subtitle}</p>
                </div>
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFF3EC] text-[#EE6226] group-hover:bg-[#EE6226] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </div>
            </div>
          `:`
          <div class="gallery-card group relative flex flex-col h-full bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" data-gallery-idx="${t}" role="button" tabindex="0" aria-label="View ${e.title}">
            <!-- Image Container -->
            <div class="w-full h-40 sm:h-44 md:h-48 bg-slate-100 overflow-hidden relative">
              <img src="${e.img}" alt="${e.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </div>
            <!-- Card Details Bar -->
            <div class="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white border-t border-slate-100 shrink-0">
              <div class="min-w-0 pr-2">
                <h4 class="font-bold text-slate-900 text-sm sm:text-base leading-tight truncate">${e.title}</h4>
                <p class="text-xs sm:text-sm text-slate-500 mt-1 truncate font-medium">${e.subtitle}</p>
              </div>
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF3EC] text-[#EE6226] group-hover:bg-[#EE6226] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs">
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </div>
          </div>
        `}if(t.length>=5){let e=t[0],r=t.slice(1,5),i=t.slice(5),a=`
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            <!-- Left Featured Tall Card (5 cols) -->
            <div class="lg:col-span-5 flex flex-col h-full">
              ${n(e,0,!0)}
            </div>

            <!-- Right 4 Cards in 2x2 Grid (7 cols) -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              ${r.map((e,t)=>n(e,t+1,!1)).join(``)}
            </div>
          </div>
        `;if(i.length>0&&(a+=`
            <div id="gallery-extra-container" class="mt-5 sm:mt-6 hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              ${i.map((e,t)=>n(e,t+5,!1)).join(``)}
            </div>
            <div class="mt-8 flex justify-center">
              <button id="gallery-expand-btn" type="button" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:border-[#EE6226] hover:text-[#EE6226] text-slate-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow cursor-pointer">
                <span id="gallery-expand-text">View More Units (+${i.length})</span>
                <svg id="gallery-expand-icon" class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>
          `),q.innerHTML=a,i.length>0){let e=document.getElementById(`gallery-expand-btn`),t=document.getElementById(`gallery-extra-container`),n=document.getElementById(`gallery-expand-text`),r=document.getElementById(`gallery-expand-icon`);e&&t&&n&&r&&e.addEventListener(`click`,()=>{t.classList.contains(`hidden`)?(t.classList.remove(`hidden`),n.textContent=`Show Less Units`,r.classList.add(`rotate-180`)):(t.classList.add(`hidden`),n.textContent=`View More Units (+${i.length})`,r.classList.remove(`rotate-180`))})}}else q.innerHTML=t.length===4?`
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            ${t.map((e,t)=>n(e,t,!1)).join(``)}
          </div>
        `:t.length===3?`
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            ${t.map((e,t)=>n(e,t,!1)).join(``)}
          </div>
        `:t.length===2?`
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            ${t.map((e,t)=>n(e,t,!1)).join(``)}
          </div>
        `:`
          <div class="max-w-md mx-auto">
            ${n(t[0],0,!1)}
          </div>
        `;let r=document.getElementById(`gallery-lightbox`),a=document.getElementById(`lightbox-img`),o=document.getElementById(`lightbox-title`),s=document.getElementById(`lightbox-subtitle`),c=document.getElementById(`lightbox-counter`),l=document.getElementById(`lightbox-close-btn`),u=document.getElementById(`lightbox-prev-btn`),d=document.getElementById(`lightbox-next-btn`),p=0;function m(e){if(!t[e]||!a||!o||!s||!c)return;p=e;let n=t[e];a.src=n.img,a.alt=n.title,o.textContent=n.title,s.textContent=n.subtitle,c.textContent=`${e+1} / ${t.length}`}function h(e){r&&(m(e),r.classList.remove(`hidden`),r.classList.add(`flex`),requestAnimationFrame(()=>{r.classList.remove(`opacity-0`),r.classList.add(`opacity-100`)}),document.body.style.overflow=`hidden`)}function g(){r&&(r.classList.remove(`opacity-100`),r.classList.add(`opacity-0`),setTimeout(()=>{r.classList.add(`hidden`),r.classList.remove(`flex`),document.body.style.overflow=``},250))}q.querySelectorAll(`.gallery-card`).forEach(e=>{e.addEventListener(`click`,()=>{h(parseInt(e.getAttribute(`data-gallery-idx`)||`0`,10))}),e.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),h(parseInt(e.getAttribute(`data-gallery-idx`)||`0`,10)))})}),l&&l.addEventListener(`click`,g),r&&r.addEventListener(`click`,e=>{e.target===r&&g()}),u&&u.addEventListener(`click`,e=>{e.stopPropagation(),m((p-1+t.length)%t.length)}),d&&d.addEventListener(`click`,e=>{e.stopPropagation(),m((p+1)%t.length)}),document.addEventListener(`keydown`,e=>{r&&!r.classList.contains(`hidden`)&&(e.key===`Escape`?g():e.key===`ArrowLeft`?m((p-1+t.length)%t.length):e.key===`ArrowRight`&&m((p+1)%t.length))})}else K.classList.add(`hidden`)}let J=document.getElementById(`industries-section`),Y=document.getElementById(`industries-grid`);J&&Y&&(i.industriesServed&&i.industriesServed.length>0?(J.classList.remove(`hidden`),Y.innerHTML=i.industriesServed.map(e=>{let t=typeof e==`string`?e:e.name,n=typeof e==`object`&&e.image?e.image.startsWith(`/`)?`${f}${e.image.slice(1)}`:e.image:``;return`
          <div class="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm hover:shadow-md hover:border-[#EE6226] transition-all flex flex-col items-center justify-end h-36">
            ${n?`
              <img src="${n}" alt="${t}" class="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-110 group-hover:opacity-90 transition-all duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            `:`
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800"></div>
            `}
            <div class="relative z-10 p-3 text-center w-full">
              <span class="text-xs font-bold text-white tracking-wide block drop-shadow-md group-hover:text-[#EE6226] transition-colors">${t}</span>
            </div>
          </div>
        `}).join(``)):J.classList.add(`hidden`));let X=document.getElementById(`rfq-model-display`);X&&(X.value=`${i.title} (${i.model})`);let Z=document.getElementById(`rfq-product-id`);Z&&(Z.value=i.id);let Q=document.getElementById(`detail-rfq-form`),le=document.getElementById(`detail-rfq-success`);Q&&le&&Q.addEventListener(`submit`,e=>{e.preventDefault(),le.classList.remove(`hidden`),setTimeout(()=>{Q.reset(),X&&(X.value=`${i.title} (${i.model})`)},3e3)});let $=document.getElementById(`other-products-grid`);if($){let t=[`double-offset-butterfly-damper-valves`,`triple-offset-butterfly-damper-valves`,`three-lever-shut-off-damper-valves`,`air-seal-damper-valves`],n=Object.values(e),r=t.filter(t=>t!==i.id&&e[t]).map(t=>e[t]);if(r.length<4){let e=n.filter(e=>e.id!==i.id&&!t.includes(e.id));r=[...r,...e].slice(0,4)}let a=[{bg:`bg-gradient-to-br from-[#F0FDF4] via-[#DCFCE7] to-[#BBF7D0]`,badgeText:`Double Offset`,textColor:`text-[#15803D]`,iconSvg:`<svg class="w-3.5 h-3.5 text-[#15803D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/></svg>`},{bg:`bg-gradient-to-br from-[#FAF5FF] via-[#F3E8FF] to-[#DDD6FE]`,badgeText:`Triple Offset`,textColor:`text-[#7C3AED]`,iconSvg:`<svg class="w-3.5 h-3.5 text-[#7C3AED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5" fill="currentColor"/><path d="M12 9.5V2.5C9.5 2.5 8 4 8 6.5s2 3 4 3z"/><path d="M14.5 12h7c0-2.5-1.5-4-4-4s-3 2-3 4z"/><path d="M12 14.5v7c2.5 0 4-1.5 4-4s-2-3-4-3z"/><path d="M9.5 12h-7c0 2.5 1.5 4 4 4s3-2 3-4z"/></svg>`},{bg:`bg-gradient-to-br from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE]`,badgeText:`Three Lever`,textColor:`text-[#2563EB]`,iconSvg:`<svg class="w-3.5 h-3.5 text-[#2563EB]" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`},{bg:`bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA]`,badgeText:`Air Seal`,textColor:`text-[#EA580C]`,iconSvg:`<svg class="w-3.5 h-3.5 text-[#EA580C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M8 5c-1.5 2-1.5 3.5 0 5s1.5 3.5 0 5-1.5 3.5 0 5"/><path d="M12 4c-1.5 2-1.5 3.5 0 5s1.5 3.5 0 5-1.5 3.5 0 5"/><path d="M16 5c-1.5 2-1.5 3.5 0 5s1.5 3.5 0 5-1.5 3.5 0 5"/></svg>`}];$.innerHTML=r.map((e,t)=>{let n=a[t%a.length],r=e.image.startsWith(`/`)?`${f}${e.image.slice(1)}`:e.image,i=e.tagline||e.desc,o=t*110;return`
        <a class="damper-showcase-card scroll-reveal-item group flex flex-col justify-between" href="${f}product-detail.html?id=${e.id}" style="--stagger-delay: ${o}ms;">
          <div class="damper-showcase-visual ${n.bg}">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.65),transparent_60%)]"></div>
            <!-- Top Left Icon + Badge -->
            <div class="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
              <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0">
                ${n.iconSvg}
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md ${n.textColor} shadow-sm border border-white/70">
                ${e.categoryLabel||e.category||n.badgeText}
              </span>
            </div>
            <img alt="${e.title}" src="${r}" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="damper-showcase-body flex flex-col flex-1 justify-between p-5 bg-white">
            <div>
              <h3 class="mb-1.5 text-base font-bold leading-snug text-[#0F172A] group-hover:text-[#EE6226] transition-colors line-clamp-2">
                ${e.title}
              </h3>
              <p class="text-xs leading-relaxed text-slate-600 mb-3 flex-1 line-clamp-3">
                ${i}
              </p>
            </div>
            <div class="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors">
              <span class="flex items-center gap-1.5 underline decoration-slate-900 group-hover:decoration-[#EE6226] group-hover:text-[#EE6226] underline-offset-4 transition-colors">
                Learn More
                <span class="text-[#EE6226] text-sm leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
              <span class="text-[11px] font-medium text-slate-400 font-mono tracking-tight">${e.model}</span>
            </div>
          </div>
        </a>
      `}).join(``)}n()});function n(){document.querySelectorAll(`#specs-table-container .spec-table-row, #specs-table-container > div`).forEach((e,t)=>{e.classList.add(`spec-table-row`),e.style.getPropertyValue(`--stagger-delay`)||e.style.setProperty(`--stagger-delay`,`${t*35}ms`)}),document.querySelectorAll(`#moc-table-container > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.getPropertyValue(`--stagger-delay`)||e.style.setProperty(`--stagger-delay`,`${t%6*55}ms`)}),document.querySelectorAll(`#automation-cards-container > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.getPropertyValue(`--stagger-delay`)||e.style.setProperty(`--stagger-delay`,`${t%4*70}ms`)}),document.querySelectorAll(`#features-list > div, #optional-features-list > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.getPropertyValue(`--stagger-delay`)||e.style.setProperty(`--stagger-delay`,`${t%10*45}ms`)}),document.querySelectorAll(`#inspection-list > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.getPropertyValue(`--stagger-delay`)||e.style.setProperty(`--stagger-delay`,`${t%3*85}ms`)}),document.querySelectorAll(`#detail-applications > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.getPropertyValue(`--stagger-delay`)||e.style.setProperty(`--stagger-delay`,`${t%10*50}ms`)}),document.querySelectorAll(`#industries-grid > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.setProperty(`--stagger-delay`,`${t%6*70}ms`)});let e=document.querySelectorAll(`.scroll-reveal, .scroll-reveal-item, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-heading, .scroll-subtext, .scroll-badge, .scroll-mask-wrap, .spec-table-row`);if(e.length===0)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.forEach(e=>e.classList.add(`is-loaded`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;e.isIntersecting?t.classList.add(`is-loaded`):t.classList.remove(`is-loaded`)})},{root:null,rootMargin:`0px 0px -40px 0px`,threshold:.08});e.forEach(e=>t.observe(e))}