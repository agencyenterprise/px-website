import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { JoinUs } from '@/components/join-us'
import { Navbar } from '@/components/navbar'
import { Separator } from '@/components/separator'
import { TypeScriptDeclarations } from '@/components/typescript-declarations'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-8">
        <Hero />
        <Separator />
        <HowItWorks />
        <Separator />
        <TypeScriptDeclarations />
        <Separator />
        <JoinUs />
      </main>
      <Footer />
    </>
  )
}
