import type { NavItem, PageRoute } from '../../types';

export const PAGES_CONFIG: Record<PageRoute, NavItem> = {
  'home': {
    id: 'home',
    label: 'Home',
    path: '/',
    meta: {
      title: 'Bella | Next-Gen Enterprise Intelligent Digital Solutions',
      description: 'Pioneering innovation with high-performance cloud architecture and generative AI workflows.',
      keywords: 'cloud, AI, enterprise development, architecture'
    }
  },
  'products': {
    id: 'products',
    label: 'Products',
    path: '/products.html',
    meta: {
      title: 'Industrial Damper Valve Products | Bellator Engineers',
      description: 'Explore Bellator Engineers full portfolio of 21 heavy-duty industrial damper valves for marine, power, and severe process applications.',
      keywords: 'damper valves, industrial dampers, butterfly damper, diverter valve, guillotine damper'
    }
  },
  'about-us': {
    id: 'about-us',
    label: 'About Us',
    path: '/about-us',
    meta: {
      title: 'About Us | Architects of Digital Innovation | Bella',
      description: 'Learn about Bella\'s mission, engineering craftsmanship, and global leadership team.',
      keywords: 'about bella, engineering leadership, tech culture'
    }
  },
  'careers': {
    id: 'careers',
    label: 'Careers',
    path: '/careers',
    badge: 'Hiring',
    meta: {
      title: 'Careers & Open Positions | Join Bella',
      description: 'Join our remote-first team of senior engineers and product designers solving bold challenges.',
      keywords: 'tech careers, remote engineering jobs, AI jobs'
    }
  },
  'contact-us': {
    id: 'contact-us',
    label: 'Contact Us',
    path: '/contact-us',
    meta: {
      title: 'Contact Us | Partner with Bellator Engineers',
      description: 'Get in touch with Bella\'s enterprise advisory team for strategic consultations.',
      keywords: 'contact bella, enterprise consulting, digital transformation partnership'
    }
  }
};

export function renderNavbar(activeRoute: PageRoute): string {
  const navList = Object.values(PAGES_CONFIG);

  return `
    <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg px-6 py-3.5 transition-all">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a href="/" data-route="home" class="nav-link flex items-center space-x-2.5 group cursor-pointer" aria-label="Bellator Engineers Homepage">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            B
          </div>
          <span class="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">Bellator Engineers</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          ${navList.map(item => {
            const isActive = item.id === activeRoute;
            return `
              <a 
                href="${item.path}" 
                data-route="${item.id}"
                class="nav-link relative px-3.5 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                  isActive 
                    ? 'text-white bg-slate-800/90 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }"
                ${isActive ? 'aria-current="page"' : ''}
              >
                ${item.label}
                ${item.badge ? `
                  <span class="ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                    ${item.badge}
                  </span>
                ` : ''}
                ${isActive ? `<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-500 rounded-full"></span>` : ''}
              </a>
            `;
          }).join('')}
        </nav>

        <!-- CTA & Mobile Trigger -->
        <div class="flex items-center space-x-3">
          <a href="/contact-us" data-route="contact-us" class="nav-link hidden sm:inline-flex px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all cursor-pointer">
            Get Started
          </a>
          <button id="mobile-menu-btn" aria-label="Toggle navigation menu" class="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-slate-800/80 mt-3 pt-3 pb-2 flex flex-col space-y-1">
        ${navList.map(item => `
          <a 
            href="${item.path}" 
            data-route="${item.id}"
            class="nav-link px-4 py-2 rounded-lg text-sm font-medium ${item.id === activeRoute ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-white hover:bg-slate-900'}"
            ${item.id === activeRoute ? 'aria-current="page"' : ''}
          >
            ${item.label}
          </a>
        `).join('')}
      </div>
    </header>
  `;
}
