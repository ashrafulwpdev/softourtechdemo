import { Container, Card } from "@/components/ui";

const posts = [
  { title: "Why Next.js + Vercel is a perfect fit for SMEs", date: "2025-08-01", excerpt: "Speed, DX, and SSR/SSG flexibility explained in plain terms." },
  { title: "OpenLiteSpeed Reverse Proxy for Node — a quick guide", date: "2025-07-22", excerpt: "Configure External App and Proxy Context the right way." },
  { title: "Android app architecture that scales", date: "2025-06-10", excerpt: "Layers, testing, and packaging for long-term maintainability." },
];

export default function Blog(){
  return (
    <main>
      <section className="bg-sky-50 dark:bg-slate-950">
        <Container className="section">
          <h1 className="text-4xl font-black tracking-tight">Blog</h1>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">Short, useful posts on web, Android, and DevOps.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.map(p => (
              <Card key={p.title}>
                <div className="text-xs text-slate-600 dark:text-slate-400">{new Date(p.date).toLocaleDateString()}</div>
                <div className="mt-1 text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.excerpt}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
