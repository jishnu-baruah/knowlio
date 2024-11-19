'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, School } from 'lucide-react'

export function Audience() {
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

  const audienceGroups = [
    {
      icon: GraduationCap,
      title: "College and University Students",
      description: "Access affordable academic resources and collaborative learning tools"
    },
    {
      icon: BookOpen,
      title: "PhD Researchers",
      description: "Advanced research materials and specialized academic content"
    },
    {
      icon: School,
      title: "Academic Institutions",
      description: "Comprehensive digital solutions for educational organizations"
    }
  ]

  return (
    <section id="audience" className="relative py-32 bg-[#E6E9FF] overflow-hidden" ref={ref}>
      {/* Animated background elements */}
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
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            KNOWlio is perfect for college, university, and PhD students 
            <span className="font-semibold text-[#5B4DFF]"> (approximately 92.2 million students in 2024)</span>, 
            as well as individuals seeking cost-effective academic solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF] 
            mx-auto rounded-full transform transition-all duration-700 delay-300
            ${isVisible ? 'scale-x-100' : 'scale-x-0'}" />
        </div>

        {/* Audience Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audienceGroups.map((group, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8
                transform transition-all duration-700 hover:scale-[1.02]
                hover:shadow-xl hover:shadow-[#5B4DFF]/10
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                from-[#5B4DFF]/5 to-[#7B6DFF]/5 opacity-0 
                group-hover:opacity-100 transition-all duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]
                  rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF]
                  flex items-center justify-center transform transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-6">
                  <group.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3
                transform transition-all duration-500 group-hover:translate-x-1">
                {group.title}
              </h3>
              <p className="text-gray-600 leading-relaxed
                transform transition-all duration-500 group-hover:translate-x-1">
                {group.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 
                border-[#5B4DFF]/0 group-hover:border-[#5B4DFF]/20
                transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2
                border-[#5B4DFF]/0 group-hover:border-[#5B4DFF]/20
                transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Statistics Banner */}
        <div className={`mt-20 bg-gradient-to-r from-[#5B4DFF] to-[#7B6DFF] 
          rounded-2xl p-8 text-white transform transition-all duration-1000 delay-500
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(white_2px,transparent_2px),linear-gradient(90deg,white_2px,transparent_2px)]
                bg-[size:30px_30px]" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold">92.2M+</div>
                <div className="text-white/80">Students Worldwide</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-white/80">Platform Access</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">70%</div>
                <div className="text-white/80">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Audience;