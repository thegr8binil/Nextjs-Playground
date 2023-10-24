import { Poppins } from 'next/font/google'
import './globals.css'

const pop = Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs Playground',
  description: 'Checking random stuff with Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  )
}
