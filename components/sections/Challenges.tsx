import { TrendingUp, Book, DollarSign, Layers } from 'lucide-react'
import { ChallengeCard } from '../cards/ChallengeCard'

export function Challenges() {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Rising Tuition Costs",
      description: "KNOWlio helps offset the impact of tuition costs outpacing inflation."
    },
    {
      icon: Book,
      title: "High Textbook Costs",
      description: "We provide affordable alternatives to expensive textbooks and limited rural library resources."
    },
    {
      icon: DollarSign,
      title: "Limited Government Grants",
      description: "Access reliable academic notes without relying on reduced government support."
    },
    {
      icon: Layers,
      title: "Limited Access to Resources",
      description: "Find affordable textbook rentals and solutions for past-year questions (PYQs) easily."
    }
  ]

  return (
    <section id="challenges" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Solving the Challenges of Today's Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
      </div>
    </section>
  )
}
