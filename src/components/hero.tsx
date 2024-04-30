import { InstallCommandBox } from './install-command-box'

// TODO Add gradients
export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-14 py-36">
      <h1 className="text-gradient-primary max-w-2xl text-center font-merriweather text-5xl font-bold leading-14">
        Run Commands Across different package managers
      </h1>

      <InstallCommandBox />
    </section>
  )
}
