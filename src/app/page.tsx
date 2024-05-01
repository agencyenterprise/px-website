import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { JoinUs } from '@/components/join-us'
import { KeepMeInTheLoop } from '@/components/keep-me-in-the-loop'
import { Navbar } from '@/components/navbar'
import { TypeScriptDeclarations } from '@/components/typescript-declarations'
import { Separator } from '@/components/ui/separator'

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
        <KeepMeInTheLoop />
        <Separator />
        <JoinUs />
      </main>
      <Footer />
    </>
  )
}
