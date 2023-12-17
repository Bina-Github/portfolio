import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sabine Kokot | Softwareentwicklerin',
  description: 'Portfolio of Sabine Kokot'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={raleway.className + ' bg-cBlack'}>{children}</body>
    </html>
  )
}
