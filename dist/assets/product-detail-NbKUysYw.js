import"./modulepreload-polyfill-P2Xu9kJm.js";import{t as e}from"./nav-xUi3SNx4.js";import{t}from"./products-EmtdTJrC.js";document.addEventListener(`DOMContentLoaded`,()=>{e(`products`);let n=new URLSearchParams(window.location.search).get(`id`);if(!n){let e=window.location.pathname.replace(/\.html$/,``).split(`/`).filter(Boolean);e.length>=2&&(e[0]===`products`||e[0]===`product`)&&(n=e[1])}(!n||!t[n])&&(n=`butterfly-damper-valves`);let r=t[n];document.title=`${r.title} (${r.model}) | Bellator Engineers`;let i=document.getElementById(`meta-desc`);i&&i.setAttribute(`content`,`${r.title} manufactured by Bellator Engineers in Pune. ${r.desc}`);let a=document.getElementById(`breadcrumb-current`);a&&(a.textContent=r.title);let o=document.getElementById(`detail-category-badge`);o&&(o.textContent=r.categoryLabel||r.category);let s=document.getElementById(`detail-model-badge`);s&&(s.textContent=r.model);let c=`/test_web/`,l=c.endsWith(`/`)?c:c+`/`,u=document.getElementById(`detail-image`);u&&(u.src=r.image.startsWith(`/`)?`${l}${r.image.slice(1)}`:r.image,u.alt=`${r.title} (${r.model})`);let d=document.getElementById(`quick-leakage`);d&&(d.textContent=r.leakage.split(`(`)[0].trim());let f=document.getElementById(`quick-temp`);f&&(f.textContent=r.temp);let p=document.getElementById(`quick-pressure`);p&&(p.textContent=r.pressure);let m=document.getElementById(`detail-title`);m&&(m.textContent=r.title);let h=document.getElementById(`detail-tagline`);h&&(h.textContent=r.tagline||r.desc);let g=document.getElementById(`detail-desc`);g&&(g.textContent=r.longDesc||r.desc);let _=document.getElementById(`detail-highlights`);_&&(_.innerHTML=(r.keyHighlights&&r.keyHighlights.length>0?r.keyHighlights:[`Sizes: ${r.sizes}`,`Materials: ${r.materials}`,`Actuation: ${r.actuation}`,`Standards: ${r.standards}`]).map(e=>`
      <li class="flex items-start gap-2.5">
        <span class="text-[#EE6226] font-bold">&check;</span>
        <span>${e}</span>
      </li>
    `).join(``));let v=document.getElementById(`spec-sizes`);v&&(v.textContent=r.sizes);let y=document.getElementById(`spec-temp`);y&&(y.textContent=r.temp);let b=document.getElementById(`spec-pressure`);b&&(b.textContent=r.pressure);let x=document.getElementById(`spec-leakage`);x&&(x.textContent=r.leakage);let S=document.getElementById(`spec-materials`);S&&(S.textContent=r.materials);let C=document.getElementById(`spec-actuation`);C&&(C.textContent=r.actuation);let w=document.getElementById(`spec-standards`);w&&(w.textContent=r.standards);let T=document.getElementById(`specs-table-container`);T&&r.technicalSpecs&&r.technicalSpecs.length>0&&(T.innerHTML=r.technicalSpecs.map(e=>`
      <div class="spec-table-row">
        <span class="font-semibold text-slate-600 w-1/3">${e.parameter}</span>
        <span class="font-bold text-slate-900 w-2/3 text-right sm:text-left">${e.details}</span>
      </div>
    `).join(``));let E=document.getElementById(`moc-section`),D=document.getElementById(`moc-table-container`);E&&D&&(r.mocTable&&r.mocTable.length>0?(E.classList.remove(`hidden`),D.innerHTML=r.mocTable.map(e=>`
        <div class="spec-table-row">
          <span class="font-semibold text-slate-700 w-1/3">${e.component}</span>
          <span class="font-medium text-slate-900 w-2/3 text-right sm:text-left">${e.material}</span>
        </div>
      `).join(``)):E.classList.add(`hidden`));let O=document.getElementById(`automation-section`),k=document.getElementById(`automation-cards-container`);O&&k&&(r.automationOptions&&r.automationOptions.length>0?(O.classList.remove(`hidden`),k.innerHTML=r.automationOptions.map(e=>`
        <div class="p-3 rounded-xl bg-orange-50/50 border border-orange-200/60 text-center flex flex-col items-center justify-center">
          <span class="text-xs font-extrabold text-[#EE6226] uppercase tracking-wider">${e.name}</span>
          ${e.desc?`<span class="text-[10px] text-slate-500 mt-1 leading-tight line-clamp-2">${e.desc}</span>`:``}
        </div>
      `).join(``)):O.classList.add(`hidden`));let A=document.getElementById(`features-box`),j=document.getElementById(`features-list`);A&&j&&(r.features&&r.features.length>0?(A.classList.remove(`hidden`),j.innerHTML=r.features.map(e=>`
        <li class="flex items-start gap-2">
          <span class="text-[#EE6226] font-bold text-xs mt-0.5">&bull;</span>
          <span>${e}</span>
        </li>
      `).join(``)):A.classList.add(`hidden`));let M=document.getElementById(`optional-features-box`),N=document.getElementById(`optional-features-list`);M&&N&&(r.optionalFeatures&&r.optionalFeatures.length>0?(M.classList.remove(`hidden`),N.innerHTML=r.optionalFeatures.map(e=>`
        <li class="flex items-start gap-2">
          <span class="text-[#EE6226] font-bold text-xs mt-0.5">&bull;</span>
          <span>${e}</span>
        </li>
      `).join(``)):M.classList.add(`hidden`));let P=document.getElementById(`inspection-box`),F=document.getElementById(`inspection-list`);P&&F&&(r.inspectionTesting&&r.inspectionTesting.length>0?(P.classList.remove(`hidden`),F.innerHTML=r.inspectionTesting.map(e=>`
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
          <span class="truncate">${e}</span>
        </div>
      `).join(``)):P.classList.add(`hidden`));let I=document.getElementById(`detail-applications`);I&&(I.innerHTML=(r.applications&&r.applications.length>0?r.applications:[`Boiler Air & Flue Gas Lines`,`ID / FD Fan Isolation`,`Hot Air Systems`,`Exhaust Systems`]).map(e=>`
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#EE6226]"></span>
        <span>${e}</span>
      </div>
    `).join(``));let L=document.getElementById(`references-section`),R=document.getElementById(`references-grid`);L&&R&&(r.majorReferences&&r.majorReferences.length>0?(L.classList.remove(`hidden`),R.innerHTML=r.majorReferences.map(e=>`
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div class="flex items-center gap-2.5 mb-2">
            <span class="w-2 h-2 rounded-full bg-[#EE6226]"></span>
            <span class="text-xs font-bold text-slate-900">${e.endUser}</span>
          </div>
          <div class="text-[11px] text-slate-500 font-medium">
            Application: <span class="text-slate-800 font-semibold">${e.application}</span>
          </div>
        </div>
      `).join(``)):L.classList.add(`hidden`));let z=document.getElementById(`gallery-section`),B=document.getElementById(`gallery-grid`);z&&B&&(r.galleryImages&&r.galleryImages.length>0?(z.classList.remove(`hidden`),B.innerHTML=r.galleryImages.map(e=>`
          <div class="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col group hover:border-[#EE6226] transition-all">
            <div class="w-full h-36 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center p-3 relative overflow-hidden">
              <img src="${e.image?e.image.startsWith(`/`)?`${l}${e.image.slice(1)}`:e.image:r.image}" alt="${e.title}" class="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="p-3 bg-white border-t border-slate-100 flex flex-col text-left">
              <span class="text-[11px] font-bold text-slate-800 group-hover:text-[#EE6226] transition-colors line-clamp-1">${e.title}</span>
              ${e.subtitle?`<span class="text-[10px] font-mono font-semibold text-slate-500">${e.subtitle}</span>`:``}
            </div>
          </div>
        `).join(``)):z.classList.add(`hidden`));let V=document.getElementById(`industries-section`),H=document.getElementById(`industries-grid`);V&&H&&(r.industriesServed&&r.industriesServed.length>0?(V.classList.remove(`hidden`),H.innerHTML=r.industriesServed.map(e=>{let t=typeof e==`string`?e:e.name,n=typeof e==`object`&&e.image?e.image.startsWith(`/`)?`${l}${e.image.slice(1)}`:e.image:``;return`
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
        `}).join(``)):V.classList.add(`hidden`));let U=document.getElementById(`rfq-model-display`);U&&(U.value=`${r.title} (${r.model})`);let W=document.getElementById(`rfq-product-id`);W&&(W.value=r.id);let G=document.getElementById(`detail-rfq-form`),K=document.getElementById(`detail-rfq-success`);G&&K&&G.addEventListener(`submit`,e=>{e.preventDefault(),K.classList.remove(`hidden`),setTimeout(()=>{G.reset(),U&&(U.value=`${r.title} (${r.model})`)},3e3)});let q=document.getElementById(`other-products-grid`);q&&(q.innerHTML=Object.values(t).filter(e=>e.id!==r.id).slice(0,6).map(e=>`
      <a href="${l}product-detail.html?id=${e.id}" class="p-2.5 rounded-xl border border-slate-200 hover:border-[#EE6226] bg-slate-50 hover:bg-white transition-all group flex flex-col items-center text-center">
        <div class="w-full h-16 flex items-center justify-center mb-2 bg-white rounded-lg p-1 border border-slate-100">
          <img src="${e.image.startsWith(`/`)?l+e.image.slice(1):e.image}" alt="${e.title}" class="max-h-14 max-w-full object-contain group-hover:scale-105 transition-transform" />
        </div>
        <span class="text-[11px] font-bold text-slate-800 group-hover:text-[#EE6226] line-clamp-1">${e.title}</span>
        <span class="text-[10px] font-mono text-slate-400 font-medium">${e.model}</span>
      </a>
    `).join(``))});