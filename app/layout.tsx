import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "LaunchedByFriday",
  description:
    "Go from idea to deployed MVP—fast. Leverage AI tools and expert mentorship in our premium and focused retreat to rapidly build your market-ready, commercially viable startup.",
  icons: {
    icon: "/images/laptop_plane_logo.png",
    shortcut: "/images/laptop_plane_logo.png",
    apple: "/images/laptop_plane_logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics />
      </body>
    </html>
  )
}
