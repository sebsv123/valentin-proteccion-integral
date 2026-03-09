"use client";

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const AuroraBackground = dynamic(() => import('@/components/ui/aurora-background'), { ssr: false });
const IridescenceBackground = dynamic(() => import('@/components/ui/iridescence-background'), { ssr: false });

export function BackgroundWrapper() {
  const pathname = usePathname();
  
  // Home page gets Iridescence, subpages get Aurora
  const isHome = pathname === '/';

  return (
    <>
      {isHome ? <IridescenceBackground /> : <AuroraBackground />}
    </>
  );
}
