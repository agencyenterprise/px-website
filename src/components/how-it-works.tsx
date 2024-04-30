import Image from 'next/image'

import howItWorksArrows from '@/assets/how-it-works-arrows.svg'

import { CommandBox } from './command-box'
import { PxCommandBox } from './px-command-box'

export function HowItWorks() {
  return (
    <section className="flex items-center gap-16 py-32">
      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-fit gap-9">
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
        <h2 className="font-merriweather text-5xl font-bold leading-14">
          How it works?
        </h2>
        <p className="text-xl font-light leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente
          sint animi voluptate velit, corporis quidem deleniti soluta, culpa
          dolorem vel. Dolor alias a vitae quidem blanditiis quod tenetur odio?
        </p>
      </div>
    </section>
  )
}
