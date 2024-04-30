import { InstallCommandBox } from './install-command-box'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 py-24 sm:gap-14 sm:py-32">
      <h1 className="text-gradient-primary max-w-2xl text-center font-merriweather text-2xl font-bold leading-10 sm:text-4xl sm:!leading-14 lg:text-5xl">
        Run commands across different package managers
      </h1>

      <InstallCommandBox />
    </section>
  )
}
