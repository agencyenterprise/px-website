import Image from 'next/image'

import { AE_JOIN_US_LINK } from '@/app/config/ae'
import aeStudioLogo from '@/assets/logos/ae-studio.svg'

import { GradientButton } from './gradient-button'

export function JoinUs() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-24 sm:gap-24 sm:py-32 lg:flex-row">
      <div className="rounded-md bg-white/15 p-6 sm:p-8">
        <Image
          src={aeStudioLogo}
          alt="Agency Enterprise"
          className="w-24 sm:w-auto"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-6 sm:max-w-lg lg:items-start">
        <h2 className="font-merriweather text-2xl font-bold sm:text-3xl sm:!leading-14 lg:text-5xl">
          Join Us
        </h2>
        <p className="text-center text-lg font-light sm:text-xl sm:leading-8 lg:text-start">
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
          <a href={AE_JOIN_US_LINK} target="_blank" className="block w-fit">
            Join Us
          </a>
        </GradientButton>
      </div>
    </section>
  )
}
