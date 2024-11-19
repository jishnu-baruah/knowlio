import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react'
interface RevenueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    percentage: number;
    color: string;
  }
  
  export function RevenueCard({ 
    icon: Icon, 
    title, 
    description, 
    percentage,
    color
  }: RevenueCardProps) {
    return (
      <div className="group relative rounded-2xl bg-white/90 backdrop-blur-lg p-8
        transform transition-all duration-500 hover:scale-[1.02]
        hover:shadow-xl">
        {/* Card border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 
          group-hover:opacity-100 transition-all duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${color}, ${color}90)`,
            padding: '1px'
          }} />
  
        <div className="relative h-full bg-white/90 rounded-2xl p-6">
          {/* Icon with background */}
          <div className="relative mb-6">
            <div className="absolute -inset-2 rounded-xl blur-lg opacity-0 
              group-hover:opacity-30 transition-all duration-500"
              style={{ background: color }} />
            <div className="relative w-14 h-14 rounded-xl flex items-center justify-center
              transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{ background: color }}>
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
  
          {/* Content */}
          <h3 className="text-xl font-semibold mb-3 text-gray-900
            transform transition-all duration-500 group-hover:translate-x-1">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
  
          {/* Progress bar */}
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
            <div 
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000"
              style={{ 
                width: `${percentage}%`,
                background: color
              }} 
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {percentage}% of revenue
          </p>
        </div>
      </div>
    )
  }