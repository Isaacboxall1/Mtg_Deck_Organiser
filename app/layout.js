import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Jank Box',
  description: 'MTG deck and collection manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
