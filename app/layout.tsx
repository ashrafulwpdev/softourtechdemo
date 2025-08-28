import type { Metadata } from 'next'
import './globals.css'
import { Container } from '@/components/ui'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Softourtech — Premium Websites, Android & DevOps',
  description: 'Softourtech crafts premium websites (Next.js/WordPress), Android apps, and reliable DevOps on your VPS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/70 backdrop-blur">
          <Container className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-gradient-to-b from-blue-500 to-indigo-600 grid place-items-center text-white font-bold">S</div>
              <span className="text-lg font-extrabold tracking-tight text-white">Softourtech</span>
            </Link>
            <nav className="hidden md:flex items-center gap-7 text-sm">
              <Link href="/#services" className="text-slate-300 hover:text-white">Services</Link>
              <Link href="/work" className="text-slate-300 hover:text-white">Work</Link>
              <Link href="/pricing" className="text-slate-300 hover:text-white">Pricing</Link>
              <Link href="/blog" className="text-slate-300 hover:text-white">Blog</Link>
              <Link href="/contact" className="text-slate-300 hover:text-white">Contact</Link>
            </nav>
          </Container>
        </header>
        {children}
        <footer className="bg-slate-950 border-t border-white/10">
          <Container className="py-8 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Softourtech. All rights reserved.
          </Container>
        </footer>
      </body>
    </html>
  )
}
