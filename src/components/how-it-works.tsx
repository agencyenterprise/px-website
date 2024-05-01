import Image from 'next/image'

import howItWorksArrows from '@/assets/how-it-works-arrows.svg'

import { CommandBox } from './ui/command-box'
import { PxCommandBox } from './ui/px-command-box'
import { Separator } from './ui/separator'

export function HowItWorks() {
  return (
    <section className="flex flex-col-reverse items-center gap-16 py-24 sm:py-32 lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0">
        <div className="grid w-fit gap-4 sm:gap-9">
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

        <Image
          src={howItWorksArrows}
          alt=""
          className="hidden sm:inline-flex"
        />

        <Separator className="w-12 sm:hidden" />

        <PxCommandBox command="px dev" />
      </div>
      <div className="w-full max-w-md space-y-6 text-center lg:text-left">
        <h2 className="font-merriweather text-2xl font-bold sm:text-3xl sm:!leading-14 lg:text-5xl">
          How it works?
        </h2>
        <p className="text-lg font-light sm:text-xl sm:leading-8">
          There are multiple JavaScript runtimes and package managers nowadays,
          and it&apos;s common to see developers using more than one in a daily
          basis.
          <br />
          <br /> Instead of switching tools when working on different projects,{' '}
          <strong className="text-gradient-primary">px</strong> allows you to
          run the same command across different package managers. It detects the
          package manager in use and runs the command for you!
        </p>
      </div>
    </section>
  )
}
