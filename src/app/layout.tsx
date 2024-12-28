import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interior Design Portfolio',
  description: 'Showcasing beautiful interior design projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navigation />
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}

