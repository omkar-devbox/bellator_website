import"./modulepreload-polyfill-P2Xu9kJm.js";import{t as e}from"./nav-xUi3SNx4.js";import{t}from"./products-DGMb3_ed.js";document.addEventListener(`DOMContentLoaded`,()=>{e(`products`);let n=new URLSearchParams(window.location.search).get(`id`);if(!n){let e=window.location.pathname.replace(/\.html$/,``).split(`/`).filter(Boolean);e.length>=2&&(e[0]===`products`||e[0]===`product`)&&(n=e[1])}(!n||!t[n])&&(n=`butterfly-damper-valves`);let r=t[n];document.title=`${r.title} (${r.model}) | Bellator Engineers`;let i=document.getElementById(`meta-desc`);i&&i.setAttribute(`content`,`${r.title} manufactured by Bellator Engineers in Pune. ${r.desc}`);let a=document.getElementById(`breadcrumb-current`);a&&(a.textContent=r.title);let o=document.getElementById(`detail-category-badge`);o&&(o.textContent=r.categoryLabel||r.category);let s=document.getElementById(`detail-model-badge`);s&&(s.textContent=r.model);let c=`/test_web/`,l=c.endsWith(`/`)?c:c+`/`,u=document.getElementById(`detail-image`);u&&(u.src=r.image.startsWith(`/`)?`${l}${r.image.slice(1)}`:r.image,u.alt=`${r.title} (${r.model})`);let d=document.getElementById(`quick-leakage`);d&&(d.textContent=r.leakage.split(`(`)[0].trim());let f=document.getElementById(`quick-temp`);f&&(f.textContent=r.temp);let p=document.getElementById(`quick-pressure`);p&&(p.textContent=r.pressure);let m=document.getElementById(`detail-title`);m&&(m.textContent=r.title);let h=document.getElementById(`detail-tagline`);h&&(h.textContent=r.tagline||r.desc);let g=document.getElementById(`detail-desc`);if(g){let e=r.longDesc||r.desc;e.includes(`

`)?g.innerHTML=e.split(`

`).map(e=>`<p class="mb-3 last:mb-0">${e.trim()}</p>`).join(``):g.textContent=e}let _=document.getElementById(`detail-highlights`);_&&(_.innerHTML=(r.keyHighlights&&r.keyHighlights.length>0?r.keyHighlights:[`Sizes: ${r.sizes}`,`Materials: ${r.materials}`,`Actuation: ${r.actuation}`,`Standards: ${r.standards}`]).map(e=>`
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
      `).join(``)):O.classList.add(`hidden`));let A=document.getElementById(`features-wrapper`),j=document.getElementById(`features-box`),M=document.getElementById(`features-list`),N=document.getElementById(`optional-features-box`),P=document.getElementById(`optional-features-list`),F=!!(r.features&&r.features.length>0),I=!!(r.optionalFeatures&&r.optionalFeatures.length>0);A&&(!F&&!I?A.classList.add(`hidden`):(A.classList.remove(`hidden`),F&&!I?(A.className=`grid grid-cols-1 gap-4 flex-1`,M&&(M.className=`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 text-sm leading-relaxed text-slate-700`)):(A.className=`grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1`,M&&(M.className=`space-y-3 text-sm leading-relaxed text-slate-700`)))),j&&M&&(F?(j.classList.remove(`hidden`),M.innerHTML=r.features.map(e=>`
        <li class="flex items-start gap-2.5">
          <span class="text-[#EE6226] font-bold text-base leading-none mt-0.5">&bull;</span>
          <span class="text-slate-700 font-medium">${e}</span>
        </li>
      `).join(``)):j.classList.add(`hidden`)),N&&P&&(I?(N.classList.remove(`hidden`),P.innerHTML=r.optionalFeatures.map(e=>`
        <li class="flex items-start gap-2.5">
          <span class="text-[#EE6226] font-bold text-base leading-none mt-0.5">&bull;</span>
          <span class="text-slate-700 font-medium">${e}</span>
        </li>
      `).join(``)):N.classList.add(`hidden`));let L=document.getElementById(`inspection-box`),R=document.getElementById(`inspection-list`);L&&R&&(r.inspectionTesting&&r.inspectionTesting.length>0?(L.classList.remove(`hidden`),R.innerHTML=r.inspectionTesting.map(e=>`
        <div class="flex items-center gap-2.5 py-1">
          <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <span class="truncate font-medium text-slate-700">${e}</span>
        </div>
      `).join(``)):L.classList.add(`hidden`));let z=document.getElementById(`detail-applications`);z&&(z.innerHTML=(r.applications&&r.applications.length>0?r.applications:[`Boiler Air & Flue Gas Lines`,`ID / FD Fan Isolation`,`Hot Air Systems`,`Exhaust Systems`]).map(e=>`
      <div class="p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-200 text-sm font-medium text-slate-800 flex items-center gap-3">
        <span class="w-2 h-2 rounded-full bg-[#EE6226] shrink-0"></span>
        <span>${e}</span>
      </div>
    `).join(``));let B=document.getElementById(`references-section`),V=document.getElementById(`references-grid`);if(B&&V){if(r.majorReferences&&r.majorReferences.length>0){B.classList.remove(`hidden`);let e=e=>{let t=e.endUser.toLowerCase();return t.includes(`aramco`)?`
            <div class="flex items-center">
              <div class="px-2 py-1 rounded bg-[#00142e] flex items-center justify-center border border-slate-700/40 shadow-xs">
                <img src="${l}aramco-logo--white.webp" alt="Saudi Aramco" class="h-5 w-auto object-contain" />
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
              <img src="${l}Unilever.webp" alt="Unilever" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`asian paints`)?`
            <div class="flex items-center">
              <img src="${l}asian.png" alt="Asian Paints" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`welspun`)?`
            <div class="flex items-center">
              <img src="${l}welspun.webp" alt="Welspun" class="h-6 w-auto object-contain" />
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
          `:t.includes(`orlen`)?`
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-[#d01e2b] flex items-center justify-center text-white text-[10px] font-black">
                &#9650;
              </div>
              <span class="text-xs sm:text-sm font-black text-[#d01e2b] tracking-wider">ORLEN</span>
            </div>
          `:e.logo?`
            <div class="flex items-center">
              <img src="${e.logo.startsWith(`/`)?`${l}${e.logo.slice(1)}`:e.logo}" alt="${e.endUser}" class="h-6 sm:h-7 max-w-[120px] object-contain" />
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
      `).join(``);V.innerHTML=t(r.majorReferences)+t(r.majorReferences)}else B.classList.add(`hidden`)}let H=document.getElementById(`gallery-section`),U=document.getElementById(`gallery-grid`);if(H&&U){if(r.galleryImages&&r.galleryImages.length>0){H.classList.remove(`hidden`);let e=e=>(e||[]).map(e=>`
          <div class="gallery-card-item rounded-2xl border border-slate-200 overflow-hidden bg-white flex flex-col group hover:border-[#EE6226] hover:shadow-xl transition-all duration-300 shrink-0">
            <div class="w-full h-60 sm:h-64 bg-slate-100 flex items-center justify-center p-2 relative overflow-hidden">
              <img src="${e.image?e.image.startsWith(`/`)?`${l}${e.image.slice(1)}`:e.image:r.image}" alt="${e.title}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-4 bg-white border-t border-slate-100 flex flex-col text-left">
              <span class="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#EE6226] transition-colors line-clamp-1">${e.title}</span>
              ${e.subtitle?`<span class="text-xs font-mono font-semibold text-[#EE6226] mt-0.5">${e.subtitle}</span>`:``}
            </div>
          </div>
        `).join(``);U.innerHTML=e(r.galleryImages)+e(r.galleryImages)}else H.classList.add(`hidden`)}let W=document.getElementById(`industries-section`),G=document.getElementById(`industries-grid`);W&&G&&(r.industriesServed&&r.industriesServed.length>0?(W.classList.remove(`hidden`),G.innerHTML=r.industriesServed.map(e=>{let t=typeof e==`string`?e:e.name,n=typeof e==`object`&&e.image?e.image.startsWith(`/`)?`${l}${e.image.slice(1)}`:e.image:``;return`
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
        `}).join(``)):W.classList.add(`hidden`));let K=document.getElementById(`rfq-model-display`);K&&(K.value=`${r.title} (${r.model})`);let q=document.getElementById(`rfq-product-id`);q&&(q.value=r.id);let J=document.getElementById(`detail-rfq-form`),Y=document.getElementById(`detail-rfq-success`);J&&Y&&J.addEventListener(`submit`,e=>{e.preventDefault(),Y.classList.remove(`hidden`),setTimeout(()=>{J.reset(),K&&(K.value=`${r.title} (${r.model})`)},3e3)});let X=document.getElementById(`other-products-grid`);if(X){let e=[`double-offset-butterfly-damper-valves`,`triple-offset-butterfly-damper-valves`,`three-lever-shut-off-damper-valves`,`air-seal-damper-valves`],n=Object.values(t),i=e.filter(e=>e!==r.id&&t[e]).map(e=>t[e]);if(i.length<4){let t=n.filter(t=>t.id!==r.id&&!e.includes(t.id));i=[...i,...t].slice(0,4)}let a=[{bg:`bg-damper-emerald`,badgeBg:`bg-white/90 text-[#15803D]`,badgeText:`Double Offset`,subText:`BE20 SERIES`},{bg:`bg-damper-purple`,badgeBg:`bg-white/90 text-[#7E22CE]`,badgeText:`Triple Offset`,subText:`BE30 SERIES`},{bg:`bg-damper-blue`,badgeBg:`bg-white/90 text-[#1D4ED8]`,badgeText:`Three Lever`,subText:`BE40 SERIES`},{bg:`bg-damper-orange`,badgeBg:`bg-white/90 text-[#C2410C]`,badgeText:`Air Seal`,subText:`BE50 SERIES`}];X.innerHTML=i.map((e,t)=>{let n=a[t%a.length],r=e.image.startsWith(`/`)?`${l}${e.image.slice(1)}`:e.image,i=e.tagline||e.desc;return`
        <a class="infosys-damper-card group block" href="${l}product-detail.html?id=${e.id}">
          <div class="infosys-damper-visual ${n.bg}">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]"></div>
            <div class="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${n.badgeBg} shadow-xs border border-white/60">
              ${e.model||n.subText}
            </div>
            <img alt="${e.title}" src="${r}" loading="lazy" class="max-h-[140px] max-w-[85%] object-contain" />
          </div>
          <div class="infosys-damper-body">
            <h3 class="mb-2 text-base font-bold leading-snug text-[#0F172A] group-hover:text-[#EE6226] transition-colors line-clamp-2">
              ${e.title}
            </h3>
            <p class="text-xs leading-relaxed text-slate-600 mb-3 flex-1 line-clamp-3">
              ${i}
            </p>
            <div class="infosys-damper-cta mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors">
              <span class="flex items-center gap-1.5 underline decoration-[#EE6226] underline-offset-4">
                Learn More
                <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#EE6226]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span class="text-[10px] font-medium text-slate-400 font-mono">${e.model}</span>
            </div>
          </div>
        </a>
      `}).join(``)}});