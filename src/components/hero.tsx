import { InstallCommandBox } from './install-command-box'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-14 py-32">
      <h1 className="text-gradient-primary max-w-2xl text-center font-merriweather text-5xl font-bold leading-14">
        Run commands across different package managers
      </h1>

      <InstallCommandBox />
    </section>
  )
}
