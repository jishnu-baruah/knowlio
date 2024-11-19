import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Audience } from '@/components/sections/Audience'
import { Challenges } from '@/components/sections/Challenges'
import { Opportunity } from '@/components/sections/Opportunity'
import { Revenue } from '@/components/sections/Revenue'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function KNOWlioLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E9FF]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Audience />
        <Challenges />
        <Opportunity />
        <Revenue />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-[#5B4DFF] to-[#7B6DFF] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Knowledge Revolution</h2>
            <p className="text-xl mb-8">
              Start accessing affordable academic resources today and transform your learning experience.
            </p>
            <Link href="https://knowlio-mvp.vercel.app/login">
              <Button 
                size="lg" 
                className="bg-white text-[#5B4DFF] hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Sign Up Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}