/* eslint-disable @next/next/no-img-element */
import { InstallCommandBox } from './install-command-box'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 py-24 sm:gap-16">
      <ProductHunt />

      <h1 className="text-gradient-primary max-w-2xl text-center font-merriweather text-2xl font-bold leading-10 sm:text-4xl sm:!leading-14 lg:text-5xl">
        Run commands across different package managers
      </h1>

      <InstallCommandBox />
    </section>
  )
}

function ProductHunt() {
  return (
    <div className="rounded-[10px] bg-gradient-to-r from-primary-400 to-primary-600 p-px">
      <a
        href="https://www.producthunt.com/posts/px-package-manager-executor?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-px&#0045;package&#0045;manager&#0045;executor"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=454998&theme=dark"
          alt="px&#0032;—&#0032;Package&#0032;Manager&#0032;Executor - Run&#0032;commands&#0032;across&#0032;different&#0032;JavaScript&#0032;package&#0032;managers | Product Hunt"
          width="250"
          height="54"
          className="h-[54px] w-[250px]"
          fetchPriority="high"
        />
      </a>
    </div>
  )
}
