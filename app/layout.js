import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InternLink',
  description: 'A platform for connecting interns and attaches to companies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={'corporate'}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
