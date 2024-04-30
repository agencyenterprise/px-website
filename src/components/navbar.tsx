import Image from 'next/image'

import githubLogo from '@/assets/logos/github.svg'
import pxCliLogo from '@/assets/logos/px-cli.svg'

import { GradientButton } from './gradient-button'

export function Navbar() {
  return (
    <div className="w-full border-b border-white/25">
      <nav className="mx-auto flex h-30 w-full max-w-7xl items-center justify-between">
        <Image src={pxCliLogo} alt="" />

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/agencyenterprise/px-cli"
            className="transition-all hover:brightness-75"
            target="_blank"
          >
            <Image src={githubLogo} alt="" />
            <span className="sr-only">Open GitHub repository</span>
          </a>

          <GradientButton asChild>
            <a href="https://ae.studio/join-us" target="_blank">
              Join Us
            </a>
          </GradientButton>
        </div>
      </nav>
    </div>
  )
}
