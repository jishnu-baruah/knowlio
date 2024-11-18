export function Audience() {
    return (
      <section id="audience" className="py-20 bg-[#E6E9FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-xl mb-6">
                KNOWlio is perfect for college, university, and PhD students 
                (approximately 92.2 million students in 2024), as well as individuals 
                seeking cost-effective academic solutions.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5B4DFF] rounded-full mr-2"></span>
                  College and University Students
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5B4DFF] rounded-full mr-2"></span>
                  PhD Researchers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#5B4DFF] rounded-full mr-2"></span>
                  Academic Institutions
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg?height=300&width=500" 
                alt="Diverse group of students" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>
    )
  }