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
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center group">
            <div className="h-10 w-10 rounded-full bg-[#5B4DFF] mr-2 relative
              transform transition-all duration-500 hover:scale-110 hover:rotate-[360deg]">
              <div className="absolute inset-0 rounded-full bg-[#5B4DFF]/20
                group-hover:animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-[#5B4DFF] relative
              transition-transform duration-500 group-hover:translate-x-1">
              knowlio.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5B4DFF]
                transition-all duration-500 group-hover:w-full"></span>
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 relative overflow-hidden
                  transform transition-all duration-300
                  hover:text-[#5B4DFF]
                  after:content-[''] after:absolute after:bottom-0 after:left-0
                  after:w-full after:h-0.5 after:bg-[#5B4DFF]
                  after:transform after:scale-x-0 after:origin-center
                  hover:after:scale-x-100
                  after:transition-transform after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#5B4DFF] p-2 rounded-lg
                transform transition-all duration-300
                hover:scale-110 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-[#5B4DFF]/50"
            >
              <Menu className={`h-6 w-6 transition-all duration-300
                ${isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`mt-4 space-y-2 transform transition-all duration-500
            ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-[#5B4DFF] p-2
                  transform transition-all duration-300
                  hover:translate-x-2 hover:bg-[#5B4DFF]/5 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;