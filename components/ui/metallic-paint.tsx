"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function MetallicPaint({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-10">{children}</div>
      <motion.div
        animate={{
          left: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 55%, transparent 100%)',
          width: '50%',
          transform: 'skewX(-25deg)',
        }}
      />
    </div>
  );
}
