'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#audience", label: "Who We Serve" },
    { href: "#challenges", label: "Challenges" },
    { href: "#opportunity", label: "Market" },
    { href: "#revenue", label: "Revenue" }
  ]

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-[#5B4DFF] mr-2"></div>
            <span className="text-2xl font-bold text-[#5B4DFF]">KNOWlio</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#5B4DFF] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-[#5B4DFF]">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-600 hover:text-[#5B4DFF]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}