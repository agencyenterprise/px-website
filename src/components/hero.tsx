import { InstallCommandBox } from './install-command-box'

// TODO Add gradients
export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-14 py-36">
      <h1 className="text-gradient-primary max-w-2xl text-center text-5xl font-bold leading-[56px] tracking-tight">
        Run commands across different package managers
      </h1>

      <InstallCommandBox />
    </section>
  )
}
