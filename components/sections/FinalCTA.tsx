'use client';
import { Container, CTA, FadeUp, Card } from '@/components/ui';

export function FinalCTA() {
  return (
    <section className="bg-sky-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <Container className="section">
        <FadeUp>
          <Card className="p-10 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Ready to ship something great?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-slate-700 dark:text-slate-300">
              Tell us about your website or app. We’ll suggest a lean plan you can grow from.
            </p>
            <div className="mt-6 flex justify-center">
              <CTA href="/contact">Start a project</CTA>
            </div>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}
