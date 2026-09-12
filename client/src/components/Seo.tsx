import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE = 'https://sparnuotis.lt';
const DEFAULT_IMAGE = `${SITE}/manus-storage/hero-fpv_aaf565b5.jpg`;

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let node = document.head.querySelector<HTMLMetaElement>(selector);
  if (!node) {
    node = document.createElement('meta');
    node.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(node);
  }
  node.content = content;
}

export default function Seo({ title, description, path, type = 'website', image = DEFAULT_IMAGE, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;
    setMeta('description', description);
    setMeta('robots', 'index,follow,max-image-preview:large,max-video-preview:-1');
    setMeta('og:type', type, true);
    setMeta('og:locale', 'lt_LT', true);
    setMeta('og:site_name', 'Sparnuotis', true);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:image', image, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const existing = document.head.querySelector<HTMLScriptElement>('script[data-route-jsonld]');
    existing?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.routeJsonld = 'true';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.head.querySelector<HTMLScriptElement>('script[data-route-jsonld]')?.remove();
    };
  }, [description, image, jsonLd, path, title, type]);

  return null;
}

export { SITE };
