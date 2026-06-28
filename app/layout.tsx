import "./globals.css";
import { ReactNode } from 'react'

export const metadata = {
  title: 'Portfolio',
  description: 'Personal developer portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
