import Image from 'next/image'

import { AE_JOIN_US_LINK, AE_LINK } from '@/app/config/ae'
import githubLogo from '@/assets/logos/github.svg'
import pxCliLogo from '@/assets/logos/px-cli.svg'

import { GradientButton, TextGradientButton } from './gradient-button'

export function Navbar() {
  return (
    <div className="w-full border-b border-white/25 bg-black">
      <nav className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-4 sm:h-30">
        <Image src={pxCliLogo} alt="" priority className="w-20 sm:w-auto" />

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/agencyenterprise/px-cli"
            className="transition-all hover:brightness-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={githubLogo} alt="" priority />
            <span className="sr-only">Open GitHub repository</span>
          </a>

          <GradientButton asChild>
            <a href={AE_JOIN_US_LINK} target="_blank">
              Join Us
            </a>
          </GradientButton>

          <TextGradientButton asChild className="!hidden sm:!inline-flex">
            <a href={AE_LINK} target="_blank">
              Hire Us
            </a>
          </TextGradientButton>
        </div>
      </nav>
    </div>
  )
}
