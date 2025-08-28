"use client";
import { Container, CTA, FadeUp } from "@/components/ui";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl dark:bg-blue-600/20" />
      </div>
      <Container className="py-20 md:py-28">
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200">
            <Sparkles className="h-3 w-3 text-blue-500" />
            Premium Web, Android & DevOps
          </span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Build fast. Scale safely. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Softourtech</span> makes it real.
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-5 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            Next.js & WordPress websites, Java/Kotlin Android apps, and reliable VPS/Cloud deployments — optimized for performance, SEO, and security.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTA href="/contact">Start a project</CTA>
            <a href="/work" className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-black/5 px-5 py-3 no-underline dark:border-white/15 dark:bg-white/5">
              See our work
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="mt-14 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
            {["next.js", "react", "android", "openlitespeed", "vercel", "cloudflare"].map(k => (
              <div key={k} className="rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-center text-xs uppercase tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {k}
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
