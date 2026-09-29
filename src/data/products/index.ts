export interface MaterialTableItem {
  component: string;
  material: string;
}

export interface SpecTableItem {
  parameter: string;
  details: string;
}

export interface ReferenceItem {
  endUser: string;
  application: string;
  logo?: string;
}

export interface ProductDetail {
  id: string;
  title: string;
  model: string;
  image: string;
  category: 'isolation' | 'control' | 'severe';
  categoryLabel: string;
  tagline: string;
  desc: string;
  longDesc?: string;
  keyHighlights: string[];
  leakage: string;
  temp: string;
  pressure: string;
  sizes: string;
  materials: string;
  actuation: string;
  standards: string;
  features: string[];
  applications: string[];
  // Brochure enriched fields
  taglineBrochure?: string;
  shapes?: string;
  endConnection?: string;
  rectangularSize?: string;
  technicalSpecs?: SpecTableItem[];
  mocTable?: MaterialTableItem[];
  automationOptions?: { name: string; desc?: string }[];
  optionalFeatures?: string[];
  inspectionTesting?: string[];
  engineeringAdvantages?: string[];
  majorReferences?: ReferenceItem[];
  galleryImages?: { title: string; subtitle?: string; image?: string }[];
  industriesServed?: { name: string; image?: string }[];
}

// Automatically import all individual product JSON files using Vite's glob import
const productModules = import.meta.glob<ProductDetail>('./*.json', { eager: true, import: 'default' });

export const productsData: Record<string, ProductDetail> = {};

for (const [filePath, product] of Object.entries(productModules)) {
  const filename = filePath.split('/').pop()?.replace('.json', '');
  const key = product.id || filename;
  if (key) {
    productsData[key] = product;
  }
}
