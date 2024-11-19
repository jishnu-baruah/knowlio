'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Book, DollarSign, Layers } from 'lucide-react'
import { ChallengeCard } from '../cards/ChallengeCard'

export function Challenges() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const challenges = [
    {
      icon: TrendingUp,
      title: "Rising Tuition Costs",
      description: "KNOWlio helps offset the impact of tuition costs outpacing inflation.",
      gradientFrom: "#FF6B6B",
      gradientTo: "#FF8E8E"
    },
    {
      icon: Book,
      title: "High Textbook Costs",
      description: "We provide affordable alternatives to expensive textbooks and limited rural library resources.",
      gradientFrom: "#4ECDC4",
      gradientTo: "#45B7AF"
    },
    {
      icon: DollarSign,
      title: "Limited Government Grants",
      description: "Access reliable academic notes without relying on reduced government support.",
      gradientFrom: "#FFD93D",
      gradientTo: "#F6C90E"
    },
    {
      icon: Layers,
      title: "Limited Access to Resources",
      description: "Find affordable textbook rentals and solutions for past-year questions (PYQs) easily.",
      gradientFrom: "#6C63FF",
      gradientTo: "#5B4DFF"
    }
  ]

  return (
    <section id="challenges" className="relative py-32 bg-white/50 backdrop-blur-sm overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] rounded-full 
          bg-gradient-to-r from-[#5B4DFF]/5 to-transparent
          blur-3xl opacity-20 mix-blend-overlay
          animate-orb-float -top-[20%] -right-[20%]" />
        <div className="absolute w-[800px] h-[800px] rounded-full
          bg-gradient-to-r from-[#5B4DFF]/5 to-transparent
          blur-3xl opacity-20 mix-blend-overlay
          animate-orb-float-delayed -bottom-[20%] -left-[20%]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(91,77,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(91,77,255,0.03)_1px,transparent_1px)] 
        bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6
            bg-clip-text text-transparent bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]">
            Solving the Challenges of Today's Students
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Addressing key obstacles in modern education with innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF] 
            mx-auto rounded-full transform transition-all duration-700 delay-300
            ${isVisible ? 'scale-x-100' : 'scale-x-0'}" />
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ChallengeCard {...challenge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}