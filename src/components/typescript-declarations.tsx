import Image from 'next/image'

import typescriptLogo from '@/assets/logos/typescript.svg'
import tsDeclarationsArrows from '@/assets/ts-declarations-arrow.svg'

import { CommandBox } from './command-box'
import { PxCommandBox } from './px-command-box'

// TODO Update copy
export function TypeScriptDeclarations() {
  return (
    <section className="flex items-center gap-16 py-32">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-5xl font-bold leading-14 tracking-tight">
          Install TypeScript declarations
        </h2>
        <p className="text-xl font-light tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus
          voluptatibus cumque blanditiis adipisci explicabo eaque perspiciatis
          eligendi nulla! Iusto velit accusantium quis minima repellendus fugiat
          libero odit illo inventore!
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center gap-5">
        <div className="flex items-center gap-11">
          <Image src={typescriptLogo} alt="TypeScript" />
          <div className="flex flex-col gap-5">
            <CommandBox
              size="sm"
              segments={[
                { text: 'pnpm install', highlighted: true },
                { text: 'bcryptjs' },
              ]}
            />
            <CommandBox
              size="sm"
              segments={[
                { text: 'pnpm install', highlighted: true },
                { text: '-D @types/bcryptjs' },
              ]}
            />
          </div>
        </div>

        <Image src={tsDeclarationsArrows} alt="" />

        <PxCommandBox command="px install bcryptjs" />
      </div>
    </section>
  )
}
