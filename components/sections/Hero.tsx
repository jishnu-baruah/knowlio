import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#5B4DFF] to-[#7B6DFF] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
              Valuing Students
            </h1>
            <p className="text-xl mb-6">
              Digital Book Rental & Academic Resource Platform
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#5B4DFF] hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="Students using KNOWlio" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}