'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // seconds
  delay?: number; // seconds
  precision?: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  precision = 0,
  suffix = '',
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(value),
        ease: 'easeOut',
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [inView, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(precision)}
      {suffix}
    </span>
  );
}
