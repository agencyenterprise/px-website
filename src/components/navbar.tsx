import Image from 'next/image'

import githubLogo from '@/assets/github.svg'
import pxLogo from '@/assets/logo.svg'

import { GradientButton } from './gradient-button'

export function Navbar() {
  return (
    <div className="w-full border-b border-neutral-700">
      <nav className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between">
        <Image src={pxLogo} alt="" />

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/agencyenterprise/px-cli"
            className="transition-all hover:brightness-90"
            target="_blank"
          >
            <Image src={githubLogo} alt="" />
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
