'use client'

import Image from 'next/image'

import copyIcon from '@/assets/icons/copy.svg'

const INSTALL_COMMAND = 'npm i -g @ae-studio/px'

export function InstallCommandBox() {
  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND)
    } catch (error) {
      console.error('Failed to copy content:', error)
    }
  }

  return (
    <button
      title="Copy command to install with npm"
      className="cursor-copy transition-all sm:hover:brightness-75"
      onClick={handleCopyCommand}
    >
      <div className="rounded-md bg-gradient-to-r from-primary-400 to-primary-600 p-px">
        <div className="flex items-center gap-3 whitespace-nowrap rounded-md bg-black p-3 sm:px-6 sm:py-4">
          <code className="text-base font-medium sm:text-lg">
            $ {INSTALL_COMMAND}
          </code>
          <Image
            src={copyIcon}
            alt=""
            className="hidden size-6 sm:inline-flex"
          />
        </div>
      </div>
    </button>
  )
}
