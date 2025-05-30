import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "LaunchedByFriday - AI Coding Bootcamp | Build MVP in One Week",
  description:
    "Join our AI coding bootcamp and build your MVP in just one week. Learn AI-powered development, get expert mentorship, and launch your startup fast. 7-day intensive retreat for entrepreneurs.",
  keywords: [
    "ai coding",
    "bootcamp",
    "one week mvp",
    "ai coding bootcamp",
    "startup bootcamp",
    "mvp development",
    "ai development tools",
    "entrepreneur retreat",
    "coding bootcamp",
    "startup accelerator",
    "ai powered development",
    "lovable ai",
    "no code development",
    "rapid prototyping",
    "tech entrepreneur",
    "startup mentorship",
    "build mvp fast",
    "7 day bootcamp",
    "intensive coding",
    "ai tools training",
  ],
  authors: [{ name: "LaunchedByFriday" }],
  creator: "LaunchedByFriday",
  publisher: "LaunchedByFriday",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://launchedbyfriday.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/laptop_plane_logo.png",
    shortcut: "/images/laptop_plane_logo.png",
    apple: "/images/laptop_plane_logo.png",
  },
  openGraph: {
    title: "LaunchedByFriday - AI Coding Bootcamp | Build MVP in One Week",
    description:
      "Join our AI coding bootcamp and build your MVP in just one week. Learn AI-powered development, get expert mentorship, and launch your startup fast. 7-day intensive retreat for entrepreneurs.",
    url: "https://launchedbyfriday.com",
    siteName: "LaunchedByFriday",
    images: [
      {
        url: "/images/laptop_plane_logo.png",
        width: 1200,
        height: 630,
        alt: "LaunchedByFriday - AI Coding Bootcamp Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchedByFriday - AI Coding Bootcamp | Build MVP in One Week",
    description:
      "Join our AI coding bootcamp and build your MVP in just one week. Learn AI-powered development, get expert mentorship, and launch your startup fast.",
    images: ["/images/laptop_plane_logo.png"],
    creator: "@launchedbyfriday",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LaunchedByFriday",
              description: "AI coding bootcamp helping entrepreneurs build MVPs in one week",
              url: "https://launchedbyfriday.com",
              logo: "https://launchedbyfriday.com/images/laptop_plane_logo.png",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@launchedbyfriday.com",
                contactType: "customer service",
              },
              offers: {
                "@type": "Offer",
                name: "AI Coding Bootcamp - 7 Day MVP Development Retreat",
                description: "Intensive 7-day bootcamp teaching AI-powered development and MVP creation",
                category: "Educational Service",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "AI Coding Bootcamp - Build MVP in One Week",
              description:
                "Learn AI-powered development tools and build your startup MVP in just 7 days. Intensive bootcamp with expert mentorship and hands-on training.",
              provider: {
                "@type": "Organization",
                name: "LaunchedByFriday",
                url: "https://launchedbyfriday.com",
              },
              courseMode: "In-person",
              educationalLevel: "Beginner to Intermediate",
              teaches: [
                "AI-powered development",
                "MVP development",
                "Startup methodology",
                "No-code/low-code tools",
                "Product validation",
              ],
              timeRequired: "P7D",
              numberOfCredits: 1,
              coursePrerequisites: "No coding experience required",
            }),
          }}
        />
      </head>
      <body>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
