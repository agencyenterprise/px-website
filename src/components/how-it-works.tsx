import Image from 'next/image'

import howItWorksArrows from '@/assets/how-it-works-arrows.svg'

import { CommandBox } from './command-box'
import { PxCommandBox } from './px-command-box'
import { Separator } from './separator'

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente
          sint animi voluptate velit, corporis quidem deleniti soluta, culpa
          dolorem vel. Dolor alias a vitae quidem blanditiis quod tenetur odio?
        </p>
      </div>
    </section>
  )
}
