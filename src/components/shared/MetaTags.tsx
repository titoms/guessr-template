import React, { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = "GuessrTemplate - The Ultimate Mini-Game Template",
  description = "A premium, optimized, and reusable template for Guessr-style mini-games.",
  image = "/og-image.jpg",
  url = window.location.href
}) => {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        if (selector.startsWith('meta[name')) {
          meta.setAttribute('name', selector.match(/"([^"]+)"/)![1]);
        } else {
          meta.setAttribute('property', selector.match(/"([^"]+)"/)![1]);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:image"]', image);
    updateMeta('meta[property="og:url"]', url);
  }, [title, description, image, url]);

  return null;
};
