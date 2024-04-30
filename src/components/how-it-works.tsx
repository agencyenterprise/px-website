import Image from 'next/image'

import howItWorksArrows from '@/assets/how-it-works-arrows.svg'

import { CommandBox } from './command-box'
import { PxCommandBox } from './px-command-box'

export function HowItWorks() {
  return (
    <section className="flex items-center gap-16 py-32">
      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-fit gap-10">
          <CommandBox
            segments={[{ text: 'npm run', highlighted: true }, { text: 'dev' }]}
            className="w-full"
          />
          <CommandBox
            segments={[{ text: 'pnpm', highlighted: true }, { text: 'dev' }]}
            className="w-full"
          />
          <CommandBox
            segments={[{ text: 'yarn', highlighted: true }, { text: 'dev' }]}
            className="w-full"
          />
        </div>

        <Image src={howItWorksArrows} alt="" />

        <PxCommandBox command="px start" />
      </div>
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-5xl font-bold leading-14 tracking-tight">
          How it works?
        </h2>
        <p className="text-xl font-light tracking-tight">
          There are multiple JavaScript runtimes and package managers. To name
          the main ones, we have <strong>npm, pnpm, yarn, deno and bun.</strong>{' '}
          It&apos;s common developers use more than one in a daily basis,
          specially when working in different projects, because each project
          uses one or another.
        </p>
      </div>
    </section>
  )
}
