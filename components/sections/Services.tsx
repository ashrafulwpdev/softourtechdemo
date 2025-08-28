"use client";
import { Container, FadeUp, Card } from "@/components/ui";
import { Code2, Smartphone, Globe, Server, GaugeCircle, ShieldCheck } from "lucide-react";

const items = [
  { icon: Code2,     title: "Web Apps (Next.js)",  desc: "SEO-ready, ultra fast. SSR/SSG, API routes, CMS-friendly." },
  { icon: Globe,     title: "WordPress Sites",     desc: "Clean themes, speed tuned, secure, custom blocks." },
  { icon: Smartphone,title: "Android Apps",        desc: "Java/Kotlin apps with modern architecture & Play Store ready." },
  { icon: Server,    title: "VPS & DevOps",        desc: "OpenLiteSpeed/Nginx, Docker, CI/CD, backups, monitoring." },
  { icon: GaugeCircle,title:"Performance",         desc: "Lighthouse wins: caching, image optimization, edge delivery." },
  { icon: ShieldCheck,title:"Security & SSL",      desc: "Hardened configs, WAF/CDN, HTTPS, uptime checks." },
];

export function Services() {
  return (
    <section id="services">
      <Container className="section">
        <FadeUp>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">Pick what you need now; scale later. Modular, maintainable, measurable.</p>
        </FadeUp>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <FadeUp key={title} delay={0.05 * i}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-black/5 p-3 dark:bg-white/10"><Icon className="h-6 w-6" /></div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{desc}</p>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
