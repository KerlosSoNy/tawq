'use client';

import { useEffect, useState } from 'react';

export function useNavTheme() {
  const [isWhiteBg, setIsWhiteBg] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-bg]');

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setIsWhiteBg(visible.target.getAttribute('data-nav-bg') === 'white');
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return isWhiteBg;
}