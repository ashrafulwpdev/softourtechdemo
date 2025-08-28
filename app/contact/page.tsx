import { Container, Card } from '@/components/ui';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id'; // replace with your Formspree form ID

export default function Contact(){
  return (
    <main>
      <section className="bg-sky-50 dark:bg-slate-950">
        <Container className="section">
          <h1 className="text-4xl font-black tracking-tight">Contact</h1>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-300">Tell us about your project.</p>
          <Card className="mt-8">
            <form action={FORMSPREE_ENDPOINT} method="POST" className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="text-sm">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm">Message</label>
                <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100" />
              </div>
              <div className="md:col-span-2">
                <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white">Send message</button>
              </div>
            </form>
          </Card>
        </Container>
      </section>
    </main>
  )
}
