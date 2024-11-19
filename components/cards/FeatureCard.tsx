'use client'

import { useState } from 'react'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="relative group overflow-hidden bg-white/80 backdrop-blur-lg
        border-none transition-all duration-500 hover:scale-[1.02]
        hover:shadow-2xl hover:shadow-[#5B4DFF]/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5B4DFF]/5 to-[#7B6DFF]/5
        opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Animated border */}
      <div className="absolute inset-0 border border-[#5B4DFF]/10
        group-hover:border-[#5B4DFF]/30 transition-all duration-500" />

      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]
        opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />

      <CardHeader className="relative space-y-4 p-6">
        {/* Icon container with animated background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]
            blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
          <div className="relative flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]
              transform transition-all duration-500 group-hover:scale-110
              group-hover:rotate-6">
              <Icon className="h-6 w-6 text-white transform transition-all duration-500
                group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 transition-all duration-500
              group-hover:translate-x-1">
              {title}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative p-6 pt-2">
        <p className="text-gray-600 leading-relaxed transition-all duration-500
          group-hover:translate-x-1">
          {description}
        </p>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100
          transition-all duration-500">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent 
            via-[#5B4DFF]/50 to-transparent absolute -top-[100%] left-0
            animate-scan-slow" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 
          border-[#5B4DFF]/0 group-hover:border-[#5B4DFF]/30
          transition-all duration-500 translate-x-2 translate-y-2
          group-hover:translate-x-0 group-hover:translate-y-0" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2
          border-[#5B4DFF]/0 group-hover:border-[#5B4DFF]/30
          transition-all duration-500 -translate-x-2 -translate-y-2
          group-hover:translate-x-0 group-hover:translate-y-0" />
      </CardContent>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10
        bg-gradient-to-r from-transparent via-white to-transparent
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-1000 ease-in-out" />
    </Card>
  )
}