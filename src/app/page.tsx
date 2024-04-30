import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Navbar } from '@/components/navbar'
import { Separator } from '@/components/separator'
import { TypeScriptDeclarations } from '@/components/typescript-declarations'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl">
        <Hero />
        <Separator />
        <HowItWorks />
        <Separator />
        <TypeScriptDeclarations />
      </main>
      <Footer />
    </>
  )
}
