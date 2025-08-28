'use client';

import { Sparkles, ArrowRight, Code2, Smartphone, Globe, Server, GaugeCircle, ShieldCheck } from 'lucide-react';

export default function Page() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <Sparkles className="h-3 w-3 text-blue-400" />
            Premium Web, Android & DevOps
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Build fast. Scale safely. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Softourtech</span> makes it real.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Next.js & WordPress websites, Java/Kotlin Android apps, and reliable VPS/Cloud deployments — optimized for
            performance, SEO, and security.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-lg transition hover:from-blue-500 hover:to-indigo-500"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white"
            >
              See our work
            </a>
          </div>

          {/* Tech tags */}
          <div className="mt-14 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
            {['next.js', 'react', 'android', 'openlitespeed', 'vercel', 'cloudflare'].map((k) => (
              <div
                key={k}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs uppercase tracking-wide text-slate-300"
              >
                {k}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">Services</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Pick what you need now; scale later. Modular, maintainable, measurable.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { Icon: Code2, title: 'Web Apps (Next.js)', desc: 'SEO-ready, ultra fast. SSR/SSG, API routes, CMS-friendly.' },
            { Icon: Globe, title: 'WordPress Sites', desc: 'Clean themes, speed tuned, secure, custom blocks.' },
            { Icon: Smartphone, title: 'Android Apps', desc: 'Java/Kotlin apps with modern architecture & Play Store ready.' },
            { Icon: Server, title: 'VPS & DevOps', desc: 'OpenLiteSpeed/Nginx, Docker, CI/CD, backups, monitoring.' },
            { Icon: GaugeCircle, title: 'Performance', desc: 'Lighthouse wins: caching, image optimization, edge delivery.' },
            { Icon: ShieldCheck, title: 'Security & SSL', desc: 'Hardened configs, WAF/CDN, HTTPS, uptime checks.' },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
            <h3 className="text-2xl font-bold text-white md:text-3xl">Ready to ship something great?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-slate-300">
              Tell us about your website or app. We’ll suggest a lean plan you can grow from.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-lg transition hover:from-blue-500 hover:to-indigo-500"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
