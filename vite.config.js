import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import fs from 'fs';

const pages = [
  'about-us',
  'products',
  'product-detail',
  'careers',
  'contact-us'
];

export default defineConfig({
  base: '/bellator_website/',
  plugins: [
    tailwindcss(),
    {
      name: 'multi-page-routing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next();
          const cleanUrl = req.url.split('?')[0];

          // Support clean product detail URLs like /products/butterfly-damper-valves or /product/butterfly-damper-valves
          const productDetailMatch = cleanUrl.match(/^\/(?:products|product)\/([a-zA-Z0-9_-]+)(?:\.html)?$/);
          if (productDetailMatch && productDetailMatch[1] && productDetailMatch[1] !== 'index') {
            const productSlug = productDetailMatch[1];
            req.url = `/src/pages/product-detail/product-detail.html?id=${productSlug}`;
            next();
            return;
          }

          for (const page of pages) {
            if (
              cleanUrl === `/${page}` ||
              cleanUrl === `/${page}.html` ||
              cleanUrl === `/${page}/`
            ) {
              req.url = `/src/pages/${page}/${page}.html` + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
              break;
            }
            if (cleanUrl === `/${page}.css`) {
              req.url = `/src/pages/${page}/${page}.css` + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
              break;
            }
            if (cleanUrl === `/${page}.ts` || cleanUrl === `/${page}.js`) {
              req.url = `/src/pages/${page}/${page}.ts` + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
              break;
            }
          }
          next();
        });
      },
      closeBundle() {
        // Ensure static HTML files are easily accessible at the root of dist/
        const distDir = resolve(import.meta.dirname, 'dist');
        if (!fs.existsSync(distDir)) return;

        for (const page of pages) {
          const srcHtml = resolve(distDir, `src/pages/${page}/${page}.html`);
          const targetHtml = resolve(distDir, `${page}.html`);
          const targetDir = resolve(distDir, page);

          if (fs.existsSync(srcHtml)) {
            // Copy to dist/<page>.html
            fs.copyFileSync(srcHtml, targetHtml);

            // Also copy to dist/<page>/index.html for directory-style URL resolution
            if (!fs.existsSync(targetDir)) {
              fs.mkdirSync(targetDir, { recursive: true });
            }
            fs.copyFileSync(srcHtml, resolve(targetDir, 'index.html'));
          }
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        'about-us': resolve(import.meta.dirname, 'src/pages/about-us/about-us.html'),
        products: resolve(import.meta.dirname, 'src/pages/products/products.html'),
        'product-detail': resolve(import.meta.dirname, 'src/pages/product-detail/product-detail.html'),
        careers: resolve(import.meta.dirname, 'src/pages/careers/careers.html'),
        'contact-us': resolve(import.meta.dirname, 'src/pages/contact-us/contact-us.html'),
      }
    }
  }
});
