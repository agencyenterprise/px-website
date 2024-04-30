import Image from 'next/image'

import pxLogo from '@/assets/logos/px.svg'

interface PxCommandBoxProps {
  command: string
}

export function PxCommandBox({ command }: PxCommandBoxProps) {
  return (
    <div className="relative rounded-md bg-gradient-to-r from-primary-400 to-primary-600 p-px">
      <div className="rounded-md bg-black p-4 sm:py-6">
        <code>
          <span className="text-gradient-primary whitespace-nowrap text-xl font-medium sm:text-2xl">
            $ {command}
          </span>
        </code>
      </div>

      <div className="absolute inset-x-0 -bottom-3 sm:-bottom-4">
        <Image
          src={pxLogo}
          alt=""
          className="mx-auto size-6 rounded-md sm:size-8"
        />
      </div>
    </div>
  )
}
