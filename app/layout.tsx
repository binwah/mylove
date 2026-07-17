import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Caveat, Special_Elite, Gochi_Hand } from 'next/font/google'
import './globals.css'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special-elite',
  display: 'swap',
})

const gochiHand = Gochi_Hand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-gochi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Surat cinta untuk Nidaul H.A',
  description:
    'Scrapbook romantis untuk Nidaul H.A — polaroid, stiker, catatan manis, dan janji-janji kecil yang ditempel dengan cinta.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FBF3D9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`light ${caveat.variable} ${specialElite.variable} ${gochiHand.variable} bg-background`}
    >
      <body className="antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
