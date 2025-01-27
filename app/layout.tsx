import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portifolio",
  description: "A showcase of my projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}

