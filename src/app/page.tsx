import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Separator } from '@/components/separator'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl">
        <Hero />
        <Separator />
      </main>
    </>
  )
}
