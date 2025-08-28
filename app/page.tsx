'use client';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Page(){
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <FinalCTA />
    </main>
  )
}
