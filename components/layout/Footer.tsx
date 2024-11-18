import { Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#2D2D3D] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="h-10 w-10 rounded-full bg-[#5B4DFF] inline-block mr-2"></div>
            <span className="text-2xl font-bold">KNOWlio</span>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#5B4DFF]"><Mail className="h-6 w-6" /></a>
            <a href="#" className="hover:text-[#5B4DFF]"><Phone className="h-6 w-6" /></a>
          </div>
          <div>
            <p>&copy; 2024 KNOWlio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}