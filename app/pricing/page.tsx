import { Container, Card, CTA } from "@/components/ui";

const tiers = [
  { name: "Starter",  price: "$499",  features: ["Single-page site","Responsive design","Basic SEO","Contact form"], cta: "Get Starter" },
  { name: "Growth",   price: "$1,499", features: ["Multi-page site","Blog or CMS","Analytics + SEO","Vercel/Cloud deploy"], popular: true, cta: "Choose Growth" },
  { name: "Scale",    price: "Custom", features: ["Dashboards & APIs","Android app","CI/CD & monitoring","SLA support"], cta: "Talk to us" },
];

export default function Pricing(){
  return (
    <main>
      <section className="bg-sky-50 dark:bg-slate-950">
        <Container className="section">
          <h1 className="text-4xl font-black tracking-tight">Pricing</h1>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">Flexible plans that grow with you.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tiers.map(t => (
              <Card key={t.name} className={`${t.popular ? "ring-2 ring-blue-500" : ""}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <div className="text-3xl font-black">{t.price}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {t.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <div className="mt-6"><CTA href="/contact">{t.cta}</CTA></div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
