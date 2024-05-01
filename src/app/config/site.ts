export const siteConfig = {
  title: {
    default: 'px | Run commands across different JavaScript package managers',
    template: '%s | px',
  },
  description:
    'Command-line application used to run commands across different JavaScript package managers. Switch between npm, yarn and pnpm with ease, without changing your workflow.',
  url: 'https://pxcli.com/',
  images: {
    og: 'https://pxcli.com/og.png',
  },
  keywords: [
    'px',
    'pxcli',
    'package',
    'manager',
    'cli',
    'npm',
    'yarn',
    'pnpm',
    'install',
    'run',
    'command',
    'javascript',
    'typescript',
  ],
}

export type SiteConfig = typeof siteConfig
