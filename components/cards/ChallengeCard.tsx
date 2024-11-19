'use client'

import { useState } from 'react'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ChallengeCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export function ChallengeCard({ 
  icon: Icon, 
  title, 
  description,
  gradientFrom,
  gradientTo
}: ChallengeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className="relative group bg-white/80 backdrop-blur-lg border-none
        transform transition-all duration-500 hover:scale-[1.02]
        hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r opacity-0 
        group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }} />

      {/* Content container */}
      <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-lg p-6">
        {/* Icon container */}
        <div className="relative mb-6 inline-block">
          <div className="absolute -inset-2 rounded-lg opacity-0 blur-lg transition-all duration-500
            group-hover:opacity-30"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }} />
          <div className="relative w-12 h-12 rounded-lg flex items-center justify-center
            transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900
            transform transition-all duration-500 group-hover:translate-x-1">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed
            transform transition-all duration-500 group-hover:translate-x-1">
            {description}
          </p>
        </div>

        {/* Corner accents */}
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 
          opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-tr-lg"
          style={{ borderColor: gradientFrom }} />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2
          opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-bl-lg"
          style={{ borderColor: gradientTo }} />

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10
          bg-gradient-to-r from-transparent via-white to-transparent
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-all duration-1000 ease-in-out" />
      </div>
    </Card>
  )
}