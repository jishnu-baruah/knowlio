'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Book, Layers, DollarSign } from 'lucide-react'
import { RevenueCard } from '../cards/RevenueCard'
import { GrowthChart } from '../charts/GrowthChart'

export function Revenue() {
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

  const revenueStreams = [
    {
      icon: Book,
      title: "Book Rentals",
      description: "30% of the book's MRP for a 4-month rental period",
      percentage: 45,
      color: "#FF6B6B"
    },
    {
      icon: Layers,
      title: "Notes Subscription",
      description: "Pricing based on subject and course",
      percentage: 35,
      color: "#4ECDC4"
    },
    {
      icon: DollarSign,
      title: "Miscellaneous Income",
      description: "Advertising, data analytics services, affiliate marketing, and sponsored content",
      percentage: 20,
      color: "#FFD93D"
    }
  ]

  const financialData = [
    { year: 'Year 1', amount: 760000, growth: '+45%' },
    { year: 'Year 2', amount: 1100000, growth: '+60%' },
    { year: 'Year 3', amount: 1800000, growth: '+85%' }
  ]

  return (
    <div ref={ref}>
      {/* Revenue Streams Section */}
      <section className="relative py-32 bg-white/50 backdrop-blur-sm">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6
              bg-clip-text text-transparent bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]">
              How We Generate Value
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF] 
              mx-auto rounded-full transform transition-all duration-700 delay-300
              ${isVisible ? 'scale-x-100' : 'scale-x-0'}" />
          </div>

          {/* Revenue Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueStreams.map((stream, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <RevenueCard {...stream} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Chart Section */}
      <section className="py-32 bg-[#E6E9FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6
              bg-clip-text text-transparent bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]">
              Our Growth Trajectory
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF] 
              mx-auto rounded-full transform transition-all duration-700 delay-300
              ${isVisible ? 'scale-x-100' : 'scale-x-0'}" />
          </div>

          <div className={`transform transition-all duration-1000 delay-500
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <GrowthChart data={financialData} />
          </div>
        </div>
      </section>
    </div>
  )
}