export type PageRoute = 
  | 'home' 
  | 'products' 
  | 'about-us' 
  | 'careers' 
  | 'contact-us';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

export interface NavItem {
  id: PageRoute;
  label: string;
  path: string;
  badge?: string;
  meta: PageMeta;
}
