import { Container, Card } from "@/components/ui";

const projects = [
  { title: "SaaS Dashboard",     stack: "Next.js • Tailwind • Vercel",     desc: "Admin analytics with SSR and caching." },
  { title: "Android Ecommerce",  stack: "Kotlin • Retrofit • Firebase",    desc: "Modern Android app with payments." },
  { title: "WP Corporate Site",  stack: "WordPress • OpenLiteSpeed",       desc: "Custom theme with 95+ Lighthouse." },
  { title: "DevOps Pipeline",    stack: "Docker • CI/CD • Cloudflare",     desc: "Blue/green deploys & observability." },
];

export default function Work(){
  return (
    <main>
      <section className="bg-sky-50 dark:bg-slate-950">
        <Container className="section">
          <h1 className="text-4xl font-black tracking-tight">Work</h1>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">A few representative projects.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map(p => (
              <Card key={p.title}>
                <div className="text-xl font-bold">{p.title}</div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.stack}</div>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{p.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
