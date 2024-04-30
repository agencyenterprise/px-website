import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// TODO Change font family
const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
