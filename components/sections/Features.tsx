'use client'

import { useEffect, useState } from 'react'
import { Book, Users, Shield, MessageCircle, Layers } from 'lucide-react'
import { FeatureCard } from '../cards/FeatureCard'
import { useInView } from 'react-intersection-observer'

export function Features() {
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

  const features = [
    {
      icon: Book,
      title: "Cost-Effective Digital Library",
      description: "Up to 70% cheaper than traditional textbooks."
    },
    {
      icon: Users,
      title: "Direct Professor Connect",
      description: "Access verified study materials and mentorship directly from professors."
    },
    {
      icon: Shield,
      title: "Verified Content",
      description: "Anti-piracy measures and manual quality checks ensure content reliability."
    },
    {
      icon: MessageCircle,
      title: "Active Learning Community",
      description: "Peer-to-peer support, study groups, and forums."
    },
    {
      icon: Layers,
      title: "Seamless Integration",
      description: "Comprehensive access to textbooks, notes, past question solutions, and more."
    }
  ]

  return (
    <section id="features" className="relative py-32 bg-[#E6E9FF] overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[1000px] h-[1000px] rounded-full 
          bg-gradient-to-r from-[#5B4DFF]/5 to-transparent
          blur-3xl opacity-30 mix-blend-overlay
          animate-orb-float top-[-20%] right-[-20%]" />
        <div className="absolute w-[1000px] h-[1000px] rounded-full
          bg-gradient-to-r from-[#5B4DFF]/5 to-transparent
          blur-3xl opacity-30 mix-blend-overlay
          animate-orb-float-delayed bottom-[-20%] left-[-20%]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(91,77,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(91,77,255,0.03)_1px,transparent_1px)] 
        bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-2xl mx-auto text-center mb-20 transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6
            bg-clip-text text-transparent bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]">
            Everything You Need for Your Academic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF] 
            mx-auto rounded-full transform transition-all duration-700 delay-300
            ${isVisible ? 'scale-x-100' : 'scale-x-0'}" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <FeatureCard {...feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}