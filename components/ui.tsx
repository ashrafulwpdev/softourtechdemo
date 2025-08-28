'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export function Container({ children, className='' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`container-xl ${className}`}>{children}</div>
}

export function CTA({ href='#', children }:{href?: string, children: React.ReactNode}) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-lg hover:from-blue-500 hover:to-indigo-500 transition">
      {children} <ArrowRight className="h-4 w-4"/>
    </a>
  )
}

export const FadeUp: React.FC<React.PropsWithChildren<{delay?: number}>> = ({ children, delay=0 }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
)
