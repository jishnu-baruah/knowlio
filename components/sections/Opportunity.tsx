export function Opportunity() {
    return (
      <section id="opportunity" className="py-20 bg-[#E6E9FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Growing Demand for Digital Learning Resources
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#5B4DFF] rounded-full mr-2 mt-2"></span>
                  Increased demand for remote and digital learning resources
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#5B4DFF] rounded-full mr-2 mt-2"></span>
                  Growing preference for digital materials over physical textbooks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#5B4DFF] rounded-full mr-2 mt-2"></span>
                  Technology-driven education accelerated by the COVID-19 pandemic
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg?height=300&width=500" 
                alt="Digital learning trend graph" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>
    )
  }