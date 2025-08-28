'use client';
import { Container, FadeUp, Step } from '@/components/ui';

const steps = [
  { id: '01', title: 'Discovery', desc: 'Goals, constraints, tech choices, milestones.' },
  { id: '02', title: 'Design',    desc: 'Wireframes → UI → content structure & states.' },
  { id: '03', title: 'Build',     desc: 'Components, pages, API routes, Android modules.' },
  { id: '04', title: 'Deploy',    desc: 'Vercel/Cloudflare or VPS (Webuzo/OLS) with CI/CD.' },
  { id: '05', title: 'Measure',   desc: 'RUM, SEO, performance budgets, error tracking.' },
  { id: '06', title: 'Iterate',   desc: 'Feature updates, patches, support SLAs.' },
];

export function Process() {
  return (
    <section>
      <Container className="section">
        <FadeUp>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Process</h2>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">Transparent and predictable — focused on outcomes that matter.</p>
        </FadeUp>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <FadeUp key={s.id} delay={0.05 * i}>
              <Step id={s.id} title={s.title} desc={s.desc} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
