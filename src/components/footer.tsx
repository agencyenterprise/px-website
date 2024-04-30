import Image from 'next/image'

import npmIcon from '@/assets/logos/npm.svg'

export function Footer() {
  return (
    <div className="border-t border-white/25">
      <footer className="mx-auto flex h-30 w-full max-w-7xl items-center justify-between">
        <span className="text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} AE Studio | px
        </span>

        <a
          href="https://www.npmjs.com/package/@ae-studio/px"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all hover:brightness-75"
        >
          <Image src={npmIcon} alt="npm icon" />
          <span className="sr-only">Open npm package</span>
        </a>
      </footer>
    </div>
  )
}
