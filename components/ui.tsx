'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import React from 'react';

export function Container({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`container-xl ${className}`}>{children}</div>;
}

export function CTA({ href = '#', children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-lg transition hover:from-blue-500 hover:to-indigo-500 no-underline"
    >
      {children} <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export const FadeUp: React.FC<React.PropsWithChildren<{ delay?: number }>> = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);

export function Card({ className = '', children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl border border-black/10 dark:border-white/10 bg-[rgb(var(--card))] p-6 ${className}`}>{children}</div>;
}

export function Step({ id, title, desc }: { id: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[rgb(var(--card))] p-6">
      <div className="text-sm font-semibold text-blue-600 dark:text-blue-300">{id}</div>
      <div className="mt-1 text-lg font-semibold">{title}</div>
      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{desc}</p>
    </div>
  );
}

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 text-sm"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'} mode</span>
    </button>
  );
}
