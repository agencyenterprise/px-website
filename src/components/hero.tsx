import { CommandBox } from './command-box'

// TODO Add gradients
export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-14 py-32">
      <h1 className="text-gradient-primary max-w-2xl text-center text-5xl font-bold leading-[56px] tracking-tight">
        Run commands across different package managers
      </h1>

      <CommandBox />
    </div>
  )
}
