"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'María de Madrid', action: 'acaba de solicitar orientación para Salud', time: 'hace 2 min' },
  { name: 'Jordi de Barcelona', action: 'ha pedido información sobre Vida', time: 'hace 5 min' },
  { name: 'Elena de Valencia', action: 'está revisando el seguro de Mascotas', time: 'hace 8 min' },
  { name: 'Carlos de Sevilla', action: 'acaba de consultar por el seguro Dental', time: 'hace 12 min' },
];

export function SocialProof() {
  const [current, setCurrent] = useState<number>(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 1000);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (current === -1) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed bottom-24 left-6 z-[60] hidden md:flex items-center gap-4 glass p-4 rounded-3xl border border-white/30 shadow-2xl max-w-sm"
        >
          <div className="bg-[#4CAF50] p-2 rounded-2xl text-white shadow-lg">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div className="flex-1 pr-6">
            <p className="text-sm font-bold text-[var(--blue-deep)] leading-tight">
              {NOTIFICATIONS[current].name}
            </p>
            <p className="text-xs text-[var(--muted)] mt-1">
              {NOTIFICATIONS[current].action}
            </p>
            <p className="text-[10px] text-[#4CAF50] font-bold uppercase tracking-widest mt-1">
              {NOTIFICATIONS[current].time}
            </p>
          </div>
          <button 
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 p-1 text-[var(--muted)] hover:text-[var(--blue-deep)]"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
