import { IBM_Plex_Mono, Merriweather, Rubik } from 'next/font/google'

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-rubik',
})

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-merriweather',
})

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-ibm-plex-mono',
})
