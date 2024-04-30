import Image from 'next/image'

import aeStudioLogo from '@/assets/logos/ae-studio.svg'

import { GradientButton } from './gradient-button'

export function JoinUs() {
  return (
    <section className="flex items-center justify-center gap-24 py-32">
      <div className="rounded-md bg-white/15 p-8">
        <Image src={aeStudioLogo} alt="Agency Enterprise" />
      </div>
      <div className="max-w-lg space-y-6">
        <h2 className="font-merriweather text-5xl font-bold leading-14">
          Join Us
        </h2>

        <p className="text-xl font-light leading-8">
          Work with the{' '}
          <strong className="font-semibold">
            world&apos;s most effective developers
          </strong>
          , data scientists, designers, and leaders who are{' '}
          <strong className="font-semibold">
            shaping the future of humanity.
          </strong>
        </p>

        <GradientButton asChild>
          <a
            href="https://ae.studio/join-us"
            target="_blank"
            className="block w-fit"
          >
            Join Us
          </a>
        </GradientButton>
      </div>
    </section>
  )
}
