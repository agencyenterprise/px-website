import Image from 'next/image'

import pxLogo from '@/assets/logos/px.svg'

interface PxCommandBoxProps {
  command: string
}

export function PxCommandBox({ command }: PxCommandBoxProps) {
  return (
    <div className="relative rounded-md bg-gradient-to-r from-primary-400 to-primary-600 p-px">
      <div className="rounded-md bg-black px-4 py-6">
        <code>
          <span className="text-gradient-primary whitespace-nowrap text-2xl font-medium">
            $ {command}
          </span>
        </code>
      </div>

      <div className="absolute inset-x-0 -bottom-4">
        <Image src={pxLogo} alt="" className="mx-auto size-8 rounded-md" />
      </div>
    </div>
  )
}
