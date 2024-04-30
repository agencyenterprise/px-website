export function HowItWorks() {
  return (
    <section className="flex items-center gap-16 py-32">
      <div className="flex-1"></div>
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-5xl font-bold leading-14 tracking-tight">
          How it works?
        </h2>
        <p className="text-xl font-light tracking-tight">
          There are multiple JavaScript runtimes and package managers. To name
          the main ones, we have <strong>npm, pnpm, yarn, deno and bun.</strong>{' '}
          It&apos;s common developers use more than one in a daily basis,
          specially when working in different projects, because each project
          uses one or another.
        </p>
      </div>
    </section>
  )
}
