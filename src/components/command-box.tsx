'use client'

import Image from 'next/image'

import copyIcon from '@/assets/icons/copy.svg'

const COMMAND = 'npm install -g @ae-studio/px'

export function CommandBox() {
  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND)
    } catch (error) {
      console.error('Failed to copy content:', error)
    }
  }

  return (
    <button
      title="Copy command to install with npm"
      className="flex cursor-copy items-center gap-3 rounded-md border border-white p-6 py-4 transition-all hover:brightness-75"
      onClick={handleCopyCommand}
    >
      <code className="text-lg font-medium">$ {COMMAND}</code>
      <Image src={copyIcon} alt="" className="size-6" />
    </button>
  )
}
