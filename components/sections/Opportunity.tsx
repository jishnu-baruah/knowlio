'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, BookOpen, Laptop, VideoIcon } from 'lucide-react'

export function Opportunity() {
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

  const opportunities = [
    {
      icon: TrendingUp,
      title: "Increased Digital Demand",
      description: "Rising demand for remote and digital learning resources across all educational levels"
    },
    {
      icon: BookOpen,
      title: "Digital Over Physical",
      description: "Growing preference for digital materials over traditional physical textbooks"
    },
    {
      icon: Laptop,
      title: "Tech-Driven Education",
      description: "Technology-driven education accelerated by the COVID-19 pandemic"
    }
  ]

  // Sample data for the growth chart
  const growthData = [
    { year: '2020', users: 20, digital: 30, physical: 70 },
    { year: '2021', users: 45, digital: 48, physical: 52 },
    { year: '2022', users: 65, digital: 62, physical: 38 },
    { year: '2023', users: 82, digital: 75, physical: 25 },
    { year: '2024', users: 100, digital: 85, physical: 15 }
  ]

  return (
    <section id="opportunity" className="relative py-32 bg-[#E6E9FF] overflow-hidden" ref={ref}>
      {/* Animated background patterns */}
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6
            bg-clip-text text-transparent bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]">
            The Growing Demand for Digital Learning
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Exploring the rapid shift towards digital education and the emerging opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF] 
            mx-auto rounded-full transform transition-all duration-700 delay-300
            ${isVisible ? 'scale-x-100' : 'scale-x-0'}" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Opportunities */}
          <div className="space-y-8">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className={`group flex items-start gap-6 transform transition-all duration-700
                  ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]
                    rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]
                    flex items-center justify-center transform transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2 transform transition-all duration-500 group-hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Chart */}
          <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl
            transform transition-all duration-1000 h-[400px]
            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
            {/* Chart background effects */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5B4DFF]/5 to-[#7B6DFF]/5 
              opacity-50 transition-opacity duration-500" />
            
            <div className="relative h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="year" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: '#5B4DFF',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="digital" 
                    stroke="#5B4DFF" 
                    strokeWidth={3}
                    dot={{ fill: '#5B4DFF' }}
                    name="Digital Learning"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="physical" 
                    stroke="#7B6DFF" 
                    strokeWidth={3}
                    dot={{ fill: '#7B6DFF' }}
                    name="Traditional Learning"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opportunity;