import{a as e}from"./chatbot-BvMC4zPH.js";import{t}from"./nav-P46k54Jq.js";document.addEventListener(`DOMContentLoaded`,()=>{t(`products`);let r=new URLSearchParams(window.location.search).get(`id`);if(!r){let e=window.location.pathname.replace(/\.html$/,``).split(`/`).filter(Boolean);e.length>=2&&(e[0]===`products`||e[0]===`product`)&&(r=e[1])}(!r||!e[r])&&(r=`butterfly-damper-valves`);let i=e[r];document.title=`${i.title} (${i.model}) | Bellator Engineers`;let a=document.getElementById(`meta-desc`);a&&a.setAttribute(`content`,`${i.title} manufactured by Bellator Engineers in Pune. ${i.desc}`);let o=document.getElementById(`breadcrumb-current`);o&&(o.textContent=i.title);let s=document.getElementById(`detail-category-badge`);s&&(s.textContent=i.categoryLabel||i.category);let c=document.getElementById(`detail-model-badge`);c&&(c.textContent=i.model);let l=`/test_web/`,u=l.endsWith(`/`)?l:l+`/`,d=document.getElementById(`detail-image`);d&&(d.src=i.image.startsWith(`/`)?`${u}${i.image.slice(1)}`:i.image,d.alt=`${i.title} (${i.model})`);let f=document.getElementById(`quick-leakage`);f&&(f.textContent=i.leakage.split(`(`)[0].trim());let p=document.getElementById(`quick-temp`);p&&(p.textContent=i.temp);let m=document.getElementById(`quick-pressure`);m&&(m.textContent=i.pressure);let h=document.getElementById(`detail-title`);h&&(h.textContent=i.title);let g=document.getElementById(`detail-tagline`);g&&(g.textContent=i.tagline||i.desc);let _=document.getElementById(`detail-desc`);if(_){let e=i.longDesc||i.desc;e.includes(`

`)?_.innerHTML=e.split(`

`).map(e=>`<p class="mb-3 last:mb-0">${e.trim()}</p>`).join(``):_.textContent=e}let v=document.getElementById(`detail-highlights`);v&&(v.innerHTML=(i.keyHighlights&&i.keyHighlights.length>0?i.keyHighlights:[`Sizes: ${i.sizes}`,`Materials: ${i.materials}`,`Actuation: ${i.actuation}`,`Standards: ${i.standards}`]).map(e=>`
      <li class="flex items-start gap-2.5">
        <span class="text-[#EE6226] font-bold">&check;</span>
        <span>${e}</span>
      </li>
    `).join(``));let y=document.getElementById(`spec-sizes`);y&&(y.textContent=i.sizes);let b=document.getElementById(`spec-temp`);b&&(b.textContent=i.temp);let x=document.getElementById(`spec-pressure`);x&&(x.textContent=i.pressure);let S=document.getElementById(`spec-leakage`);S&&(S.textContent=i.leakage);let C=document.getElementById(`spec-materials`);C&&(C.textContent=i.materials);let w=document.getElementById(`spec-actuation`);w&&(w.textContent=i.actuation);let T=document.getElementById(`spec-standards`);T&&(T.textContent=i.standards);let E=document.getElementById(`specs-table-container`);E&&i.technicalSpecs&&i.technicalSpecs.length>0&&(E.innerHTML=i.technicalSpecs.map(e=>`
      <div class="spec-table-row">
        <span class="font-semibold text-slate-600 w-1/3">${e.parameter}</span>
        <span class="font-bold text-slate-900 w-2/3 text-right sm:text-left">${e.details}</span>
      </div>
    `).join(``));let D=document.getElementById(`moc-section`),O=document.getElementById(`moc-table-container`);D&&O&&(i.mocTable&&i.mocTable.length>0?(D.classList.remove(`hidden`),O.innerHTML=i.mocTable.map(e=>`
        <div class="spec-table-row">
          <span class="font-semibold text-slate-700 w-1/3">${e.component}</span>
          <span class="font-medium text-slate-900 w-2/3 text-right sm:text-left">${e.material}</span>
        </div>
      `).join(``)):D.classList.add(`hidden`));let k=document.getElementById(`automation-section`),A=document.getElementById(`automation-cards-container`);k&&A&&(i.automationOptions&&i.automationOptions.length>0?(k.classList.remove(`hidden`),A.innerHTML=i.automationOptions.map(e=>`
        <div class="p-3 rounded-xl bg-orange-50/50 border border-orange-200/60 text-center flex flex-col items-center justify-center">
          <span class="text-xs font-extrabold text-[#EE6226] uppercase tracking-wider">${e.name}</span>
          ${e.desc?`<span class="text-[10px] text-slate-500 mt-1 leading-tight line-clamp-2">${e.desc}</span>`:``}
        </div>
      `).join(``)):k.classList.add(`hidden`));let j=document.getElementById(`features-wrapper`),M=document.getElementById(`features-box`),N=document.getElementById(`features-list`),P=document.getElementById(`optional-features-box`),F=document.getElementById(`optional-features-list`),I=!!(i.features&&i.features.length>0),L=!!(i.optionalFeatures&&i.optionalFeatures.length>0);j&&(!I&&!L?j.classList.add(`hidden`):(j.classList.remove(`hidden`),I&&!L?(j.className=`grid grid-cols-1 gap-4 flex-1`,N&&(N.className=`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 text-sm leading-relaxed text-slate-700`)):(j.className=`grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1`,N&&(N.className=`space-y-3 text-sm leading-relaxed text-slate-700`)))),M&&N&&(I?(M.classList.remove(`hidden`),N.innerHTML=i.features.map(e=>`
        <li class="flex items-start gap-2.5">
          <span class="text-[#EE6226] font-bold text-base leading-none mt-0.5">&bull;</span>
          <span class="text-slate-700 font-medium">${e}</span>
        </li>
      `).join(``)):M.classList.add(`hidden`)),P&&F&&(L?(P.classList.remove(`hidden`),F.innerHTML=i.optionalFeatures.map(e=>`
        <li class="flex items-start gap-2.5">
          <span class="text-[#EE6226] font-bold text-base leading-none mt-0.5">&bull;</span>
          <span class="text-slate-700 font-medium">${e}</span>
        </li>
      `).join(``)):P.classList.add(`hidden`));let R=document.getElementById(`inspection-box`),z=document.getElementById(`inspection-list`);R&&z&&(i.inspectionTesting&&i.inspectionTesting.length>0?(R.classList.remove(`hidden`),z.innerHTML=i.inspectionTesting.map(e=>`
        <div class="flex items-center gap-2.5 py-1">
          <span class="w-2 h-2 rounded-full bg-[#EE6226] shrink-0"></span>
          <span class="truncate font-medium text-slate-700">${e}</span>
        </div>
      `).join(``)):R.classList.add(`hidden`));let B=document.getElementById(`detail-applications`);B&&(B.innerHTML=(i.applications&&i.applications.length>0?i.applications:[`Boiler Air & Flue Gas Lines`,`ID / FD Fan Isolation`,`Hot Air Systems`,`Exhaust Systems`]).map(e=>`
      <div class="p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors border border-slate-200 text-sm font-medium text-slate-800 flex items-center gap-3">
        <span class="w-2 h-2 rounded-full bg-[#EE6226] shrink-0"></span>
        <span>${e}</span>
      </div>
    `).join(``));let V=document.getElementById(`references-section`),H=document.getElementById(`references-grid`);if(V&&H){if(i.majorReferences&&i.majorReferences.length>0){V.classList.remove(`hidden`);let e=e=>{let t=e.endUser.toLowerCase();return t.includes(`aramco`)?`
            <div class="flex items-center">
              <div class="px-2 py-1 rounded bg-[#00142e] flex items-center justify-center border border-slate-700/40 shadow-xs">
                <img src="${u}aramco-logo--white.webp" alt="Saudi Aramco" class="h-5 w-auto object-contain" />
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
              <img src="${u}Unilever.webp" alt="Unilever" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`asian paints`)?`
            <div class="flex items-center">
              <img src="${u}asian.png" alt="Asian Paints" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`welspun`)?`
            <div class="flex items-center">
              <img src="${u}welspun.webp" alt="Welspun" class="h-6 w-auto object-contain" />
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
              <img src="${u}images/clients/jsw-logo.png" alt="JSW" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`am/ns`)||t.includes(`amns`)||t.includes(`arcelormittal`)?`
            <div class="flex items-center">
              <img src="${u}images/clients/amns-logo.png" alt="AM/NS India" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`rio grande`)?`
            <div class="flex items-center">
              <img src="${u}images/clients/rio-grande-lng-logo.png" alt="Rio Grande LNG" class="h-6 w-auto object-contain" />
            </div>
          `:t.includes(`shree cement`)||t.includes(`shree`)?`
            <div class="flex items-center">
              <img src="${u}images/clients/shree-cement-logo.png" alt="Shree Cement" class="h-6 w-auto object-contain" />
            </div>
          `:e.logo?`
            <div class="flex items-center">
              <img src="${e.logo.startsWith(`/`)?`${u}${e.logo.slice(1)}`:e.logo}" alt="${e.endUser}" class="h-6 sm:h-7 max-w-[120px] object-contain" />
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
      `).join(``);H.innerHTML=t(i.majorReferences)+t(i.majorReferences)}else V.classList.add(`hidden`)}let U=document.getElementById(`gallery-section`),W=document.getElementById(`gallery-grid`);U&&W&&(i.galleryImages&&i.galleryImages.length>0?(U.classList.remove(`hidden`),W.innerHTML=(i.galleryImages||[]).map((e,t)=>{let n=e.image?e.image.startsWith(`/`)?`${u}${e.image.slice(1)}`:e.image:i.image,r=e.subtitle||e.title,a=e.subtitle?e.title:`Manufactured Assembly`;return`
          <div class="scroll-reveal-item rounded-lg border border-slate-200 overflow-hidden bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col group" style="--stagger-delay: ${t%4*110}ms;">
            <div class="w-full h-48 sm:h-52 bg-slate-50 flex items-center justify-center p-3 overflow-hidden border-b border-slate-100">
              <img src="${n}" alt="${r}" class="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" loading="lazy" />
            </div>
            <div class="p-3.5 flex flex-col flex-1 justify-between bg-white">
              <h4 class="text-xs sm:text-sm font-semibold text-slate-900 leading-snug line-clamp-2">${r}</h4>
              <span class="text-[11px] text-slate-500 mt-1 block">${a}</span>
            </div>
          </div>
        `}).join(``)):U.classList.add(`hidden`));let G=document.getElementById(`industries-section`),K=document.getElementById(`industries-grid`);G&&K&&(i.industriesServed&&i.industriesServed.length>0?(G.classList.remove(`hidden`),K.innerHTML=i.industriesServed.map(e=>{let t=typeof e==`string`?e:e.name,n=typeof e==`object`&&e.image?e.image.startsWith(`/`)?`${u}${e.image.slice(1)}`:e.image:``;return`
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
        `}).join(``)):G.classList.add(`hidden`));let q=document.getElementById(`rfq-model-display`);q&&(q.value=`${i.title} (${i.model})`);let J=document.getElementById(`rfq-product-id`);J&&(J.value=i.id);let Y=document.getElementById(`detail-rfq-form`),X=document.getElementById(`detail-rfq-success`);Y&&X&&Y.addEventListener(`submit`,e=>{e.preventDefault(),X.classList.remove(`hidden`),setTimeout(()=>{Y.reset(),q&&(q.value=`${i.title} (${i.model})`)},3e3)});let Z=document.getElementById(`other-products-grid`);if(Z){let t=[`double-offset-butterfly-damper-valves`,`triple-offset-butterfly-damper-valves`,`three-lever-shut-off-damper-valves`,`air-seal-damper-valves`],n=Object.values(e),r=t.filter(t=>t!==i.id&&e[t]).map(t=>e[t]);if(r.length<4){let e=n.filter(e=>e.id!==i.id&&!t.includes(e.id));r=[...r,...e].slice(0,4)}let a=[{bg:`bg-damper-emerald`,badgeBg:`bg-white/90 text-[#15803D]`,badgeText:`Double Offset`,subText:`BE20 SERIES`},{bg:`bg-damper-purple`,badgeBg:`bg-white/90 text-[#7E22CE]`,badgeText:`Triple Offset`,subText:`BE30 SERIES`},{bg:`bg-damper-blue`,badgeBg:`bg-white/90 text-[#1D4ED8]`,badgeText:`Three Lever`,subText:`BE40 SERIES`},{bg:`bg-damper-orange`,badgeBg:`bg-white/90 text-[#C2410C]`,badgeText:`Air Seal`,subText:`BE50 SERIES`}];Z.innerHTML=r.map((e,t)=>{let n=a[t%a.length],r=e.image.startsWith(`/`)?`${u}${e.image.slice(1)}`:e.image,i=e.tagline||e.desc,o=t*110;return`
        <a class="infosys-damper-card scroll-reveal-item group block" href="${u}product-detail.html?id=${e.id}" style="--stagger-delay: ${o}ms;">
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
      `}).join(``)}n()});function n(){document.querySelectorAll(`#specs-table-container .spec-table-row`).forEach((e,t)=>{e.style.setProperty(`--stagger-delay`,`${t*65}ms`)}),document.querySelectorAll(`#features-list > li, #optional-features-list > li`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.setProperty(`--stagger-delay`,`${t*60}ms`)}),document.querySelectorAll(`#inspection-list > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.setProperty(`--stagger-delay`,`${t%3*85}ms`)}),document.querySelectorAll(`#detail-applications > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.setProperty(`--stagger-delay`,`${t*60}ms`)}),document.querySelectorAll(`#industries-grid > div`).forEach((e,t)=>{e.classList.add(`scroll-reveal-item`),e.style.setProperty(`--stagger-delay`,`${t%6*70}ms`)});let e=document.querySelectorAll(`.scroll-reveal, .scroll-reveal-item, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-heading, .scroll-subtext, .scroll-badge, .scroll-mask-wrap, .spec-table-row`);if(e.length===0)return;if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.forEach(e=>e.classList.add(`is-loaded`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;e.isIntersecting?t.classList.add(`is-loaded`):t.classList.remove(`is-loaded`)})},{root:null,rootMargin:`0px 0px -40px 0px`,threshold:.1});e.forEach(e=>t.observe(e))}