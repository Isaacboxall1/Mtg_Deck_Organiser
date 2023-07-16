'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
const metadata = {
  title: 'Jank Box',
  description: 'MTG deck and collection manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body style={{ margin: 0, padding: 0 }}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
