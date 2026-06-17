import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ronak Hariya — Cosmos & Photography',
  description: 'A personal space for astronomy, cosmology, astrophotography, and science exploration by Ronak Hariya — Software Engineer & Space Enthusiast.',
  openGraph: {
    title: 'Ronak Hariya · Cosmos',
    description: 'Astronomy • Cosmology • Astrophotography • Code & Cosmos',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
