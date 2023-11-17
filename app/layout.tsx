import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], display: 'swap', variable: '--font-poppins', weight: ['200', '300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Full stack developer Portfolio',
  icons: {
    icon: 'profile.jpg'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
