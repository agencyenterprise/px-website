import './globals.css'

import type { Metadata } from 'next'
import Script from 'next/script'

import { siteConfig } from './config/site'
import { ibmPlexMono, merriweather, rubik } from './fonts'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  robots: 'follow, index',
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title.default,
    description: siteConfig.description,
    siteName: siteConfig.title.default,
    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: siteConfig.title.default,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title.default,
    description: siteConfig.description,
    images: [siteConfig.images.og],
    site: siteConfig.url,
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
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        {children}
      </body>
    </html>
  )
}
