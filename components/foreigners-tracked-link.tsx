"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ForeignersPartnerAction } from '@/lib/foreigners-partner-analytics';
import { trackForeignersPartner } from '@/lib/foreigners-partner-analytics';

type ForeignersTrackedLinkProps = {
  href: string;
  action: ForeignersPartnerAction;
  label: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export function ForeignersTrackedLink({ href, action, label, className, children, external = false }: ForeignersTrackedLinkProps) {
  const onClick = () => trackForeignersPartner({ action, label });

  if (href.startsWith('#') || href.startsWith('/')) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
