import './globals.css'

import type { Metadata } from 'next'

import { ibmPlexMono, merriweather, rubik } from './fonts'

export const metadata: Metadata = {
  title: {
    default: 'px | Run commands across different package managers',
    template: '%s | px',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${merriweather.variable} ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
