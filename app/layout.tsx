import type { Metadata } from "next";
import "./globals.css";
import { Container, ThemeToggle } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Softourtech — Premium Websites, Android & DevOps",
  description: "Softourtech crafts premium websites (Next.js/WordPress), Android apps, and reliable DevOps on your VPS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
          <Container className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-b from-blue-500 to-indigo-600 text-white font-bold">S</div>
              <span className="text-lg font-extrabold tracking-tight">Softourtech</span>
            </Link>
            <nav className="hidden items-center gap-7 text-sm md:flex">
              <Link href="/#services" className="text-slate-700 hover:opacity-80 dark:text-slate-300">Services</Link>
              <Link href="/work" className="text-slate-700 hover:opacity-80 dark:text-slate-300">Work</Link>
              <Link href="/pricing" className="text-slate-700 hover:opacity-80 dark:text-slate-300">Pricing</Link>
              <Link href="/blog" className="text-slate-700 hover:opacity-80 dark:text-slate-300">Blog</Link>
              <Link href="/contact" className="text-slate-700 hover:opacity-80 dark:text-slate-300">Contact</Link>
              <ThemeToggle />
            </nav>
            <div className="md:hidden"><ThemeToggle /></div>
          </Container>
        </header>

        {children}

        <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-slate-950">
          <Container className="py-8 text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Softourtech. All rights reserved.
          </Container>
        </footer>

        {/* initial theme script */}
        <script dangerouslySetInnerHTML={{__html:`
          (function() {
            try {
              var saved=localStorage.getItem('theme');
              var m=window.matchMedia('(prefers-color-scheme: dark)').matches;
              if(saved==='dark' || (!saved && m)) document.documentElement.classList.add('dark');
            } catch(e){}
          })();
        `}}/>
      </body>
    </html>
  );
}
