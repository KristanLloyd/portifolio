"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
            Kristan Lloyd
          </Link>
          <div className="hidden md:flex space-x-8">
            {["About", "Projects", "Skills"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-lg ${isScrolled ? "text-gray-600 hover:text-indigo-600" : "text-black hover:text-indigo-200"} transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

