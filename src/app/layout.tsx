import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Premium Edge Curbing LLC | Concrete Landscape Curbing | Jackson, Michigan",
  description:
    "Professional concrete landscape curbing services for residential and commercial properties in Jackson, Michigan. Enhance your property with beautiful, durable concrete edging.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 