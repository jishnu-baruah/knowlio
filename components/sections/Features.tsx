import { Book, Users, Shield, MessageCircle, Layers } from 'lucide-react'
import { FeatureCard } from '../cards/FeatureCard'

export function Features() {
  const features = [
    {
      icon: Book,
      title: "Cost-Effective Digital Library",
      description: "Up to 70% cheaper than traditional textbooks."
    },
    {
      icon: Users,
      title: "Direct Professor Connect",
      description: "Access verified study materials and mentorship directly from professors."
    },
    {
      icon: Shield,
      title: "Verified Content",
      description: "Anti-piracy measures and manual quality checks ensure content reliability."
    },
    {
      icon: MessageCircle,
      title: "Active Learning Community",
      description: "Peer-to-peer support, study groups, and forums."
    },
    {
      icon: Layers,
      title: "Seamless Integration",
      description: "Comprehensive access to textbooks, notes, past question solutions, and more."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need for Your Academic Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}