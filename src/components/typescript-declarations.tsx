import Image from 'next/image'

import typescriptLogo from '@/assets/logos/typescript.svg'
import tsDeclarationsArrows from '@/assets/ts-declarations-arrow.svg'

import { CommandBox } from './command-box'
import { PxCommandBox } from './px-command-box'

// TODO Update copy
export function TypeScriptDeclarations() {
  return (
    <section className="flex flex-col items-center gap-10 py-24 sm:gap-16 sm:py-32 lg:flex-row">
      <div className="w-full max-w-md space-y-6 text-center lg:text-left">
        <Image
          src={typescriptLogo}
          alt=""
          className="mx-auto mb-8 w-24 sm:hidden"
        />
        <h2 className="font-merriweather text-2xl font-bold sm:text-3xl sm:!leading-14 lg:text-5xl">
          Install TypeScript declarations
        </h2>
        <p className="text-lg font-light sm:text-xl sm:leading-8">
          In TypeScript projects you always need to install the types for the
          packages you are using. This is required so TypeScript can understand
          the package and provide you with a better DX.
          <br />
          <br />
          Instead of installing the TypeScript declarations manually,{' '}
          <strong className="text-gradient-primary">px</strong> allows you to
          install them with a{' '}
          <strong className="text-gradient-primary">single command</strong>. It
          detects if a package has a TypeScript declaration package and it
          automatically installs it for you!
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-11 sm:flex-row">
          <Image
            src={typescriptLogo}
            alt=""
            className="hidden sm:inline-flex"
          />
          <div className="flex flex-col items-center gap-5 sm:items-start">
            <CommandBox
              size="sm"
              segments={[
                { text: 'pnpm i', highlighted: true },
                { text: 'bcryptjs' },
              ]}
            />
            <CommandBox
              size="sm"
              segments={[
                { text: 'pnpm i', highlighted: true },
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
