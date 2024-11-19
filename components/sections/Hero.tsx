'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Book, Users, Star } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#5B4DFF] to-[#7B6DFF] animate-hero-gradient overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] rounded-full 
          bg-gradient-to-r from-white/10 to-white/5
          blur-3xl opacity-70 mix-blend-soft-light
          animate-orb-float -top-48 -left-48" />
        <div className="absolute w-[500px] h-[500px] rounded-full
          bg-gradient-to-r from-white/10 to-white/5
          blur-3xl opacity-70 mix-blend-soft-light
          animate-orb-float-delayed -bottom-48 -right-48" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
        bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]
        animate-grid-fade" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className={`max-w-3xl mx-auto text-center space-y-12 transform transition-all duration-1000 ease-out pt-16
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          {/* Feature badges */}
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { icon: Book, text: "Digital Library" },
              { icon: Users, text: "Community" },
              { icon: Star, text: "Premium" }
            ].map((badge, index) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm 
                  rounded-full px-4 py-2 text-sm font-medium text-white
                  shadow-lg shadow-white/5 animate-badge-float"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <badge.icon className="h-4 w-4" />
                {badge.text}
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white space-y-2">
              <span className="inline-block transform transition-all duration-700
                hover:scale-105 cursor-default">
                Valuing
              </span>
              <br />
              <span className="inline-block transform transition-all duration-700
                hover:scale-105 cursor-default animate-text-shine">
                Students
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto
              transform transition-all duration-700 delay-200">
              Digital Book Rental & Academic Resource Platform
            </p>

            {/* New Call-to-Action Button */}
            <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Link href="https://knowlio-mvp.vercel.app/login">
                <Button 
                  size="lg" 
                  className="bg-white text-[#5B4DFF] hover:bg-blue-50 
                    transition-all duration-300 transform hover:scale-105
                    shadow-xl hover:shadow-2xl hover:shadow-white/20
                    font-semibold text-lg px-8 py-6"
                >
                  Start Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;