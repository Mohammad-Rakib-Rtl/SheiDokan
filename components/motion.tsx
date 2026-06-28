'use client';

import Lenis from '@studio-freight/lenis';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    let raf = 0;
    const frame = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(frame); };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return null;
}

export function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest).toLocaleString()}${suffix}`);
  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
