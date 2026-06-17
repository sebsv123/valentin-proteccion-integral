"use client";

import { useEffect, useRef } from 'react';
import { trackForeignersPartner } from '@/lib/foreigners-partner-analytics';

export function ForeignersPartnerTracking() {
  const seenSections = useRef(new Set<string>());

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-foreigners-section]'));
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target.getAttribute('data-foreigners-section');
          if (!section || seenSections.current.has(section)) return;

          seenSections.current.add(section);
          trackForeignersPartner({ action: 'section_view', section });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
