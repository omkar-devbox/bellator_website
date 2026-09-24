export function renderFooter(): string {
  return `
    <footer class="border-t border-slate-800/80 bg-slate-950 py-12 px-6 mt-auto">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center space-x-3">
          <div class="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          <span class="font-bold text-white text-base tracking-tight">Bellator Engineers</span>
          <span class="text-xs text-slate-500">© ${new Date().getFullYear()} All rights reserved.</span>
        </div>

        <nav class="flex flex-wrap items-center gap-6 text-xs text-slate-400" aria-label="Footer Navigation">
          <a href="/" data-route="home" class="nav-link hover:text-slate-200 transition-colors">Home</a>
          <a href="/products.html" data-route="products" class="nav-link hover:text-slate-200 transition-colors">Products</a>
          <a href="/about-us" data-route="about-us" class="nav-link hover:text-slate-200 transition-colors">About Us</a>
          <a href="/careers" data-route="careers" class="nav-link hover:text-slate-200 transition-colors">Careers</a>
          <a href="/contact-us" data-route="contact-us" class="nav-link hover:text-slate-200 transition-colors">Contact Us</a>
        </nav>
      </div>
    </footer>
  `;
}
