"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !closed) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [closed]);

  if (closed && !show) return null;

  const handleClose = () => {
    setShow(false);
    setClosed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[var(--blue-deep)]/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="relative w-full max-w-2xl glass p-8 md:p-12 rounded-[40px] border border-white/40 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4CAF50] via-[#f28c28] to-[#003366]" />
            
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-[var(--muted)] hover:text-[var(--blue-deep)] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-[#4CAF50]/10 p-6 rounded-[32px] md:w-1/3 flex items-center justify-center">
                <ShieldCheck className="h-24 w-24 text-[#4CAF50] drop-shadow-xl" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="kicker font-black tracking-[0.3em] mb-4">¿Te vas sin proteger lo que importa?</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[var(--blue-deep)] leading-tight">
                  Descarga nuestra <span className="text-[#4CAF50]">Guía Maestra 2026</span> de seguros en España
                </h2>
                <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
                  Evita los errores más comunes al contratar tu seguro de Salud, Vida o Mascotas. 100% gratuita y sin compromiso.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={buildWhatsAppHref('Hola, quiero descargar la Guía Maestra 2026 de seguros.')}
                    className="btn-primary hover-lift flex-1 shadow-lg"
                    onClick={handleClose}
                  >
                    <Download className="h-5 w-5" /> Descargar Gratis
                  </a>
                  <button 
                    onClick={handleClose}
                    className="btn-ghost flex-1 border-white/40 bg-white/20 backdrop-blur"
                  >
                    Seguir explorando
                  </button>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-[10px] text-center text-gradient uppercase font-bold tracking-[0.2em] opacity-60">
              Valentín Protección Integral — Más de 10 años cuidando de ti
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
