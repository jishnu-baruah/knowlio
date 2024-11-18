import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react'

interface RevenueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function RevenueCard({ icon: Icon, title, description }: RevenueCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm border-none">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="h-8 w-8 text-[#5B4DFF]" />
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}