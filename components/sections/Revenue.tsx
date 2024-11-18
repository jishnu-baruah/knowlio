import { Book, Layers, DollarSign } from 'lucide-react'
import { RevenueCard } from '../cards/RevenueCard'
import { GrowthChart } from '../charts/GrowthChart'

export function Revenue() {
  const revenueStreams = [
    {
      icon: Book,
      title: "Book Rentals",
      description: "30% of the book's MRP for a 4-month rental period"
    },
    {
      icon: Layers,
      title: "Notes Subscription",
      description: "Pricing based on subject and course"
    },
    {
      icon: DollarSign,
      title: "Miscellaneous Income",
      description: "Advertising, data analytics services, affiliate marketing, and sponsored content"
    }
  ]

  const financialData = [
    { year: 'Year 1', amount: 760000 },
    { year: 'Year 2', amount: 1100000 },
    { year: 'Year 3', amount: 1800000 },
  ]

  return (
    <>
      <section id="revenue" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How We Generate Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueStreams.map((stream, index) => (
              <RevenueCard key={index} {...stream} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E6E9FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Growth Path</h2>
          <GrowthChart data={financialData} />
        </div>
      </section>
    </>
  )
}