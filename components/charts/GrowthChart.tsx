'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface GrowthChartProps {
  data: Array<{
    year: string;
    amount: number;
    growth: string;
  }>;
}

export function GrowthChart({ data }: GrowthChartProps) {
  return (
    <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl h-[400px]">
      {/* Chart background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5B4DFF]/5 to-[#7B6DFF]/5 
        opacity-50" />
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#E2E8F0" 
            vertical={false} 
          />
          <XAxis 
            dataKey="year" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748B' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748B' }}
            tickFormatter={(value) => `₹${value / 100000}L`}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(91, 77, 255, 0.1)' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: '#5B4DFF',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(91, 77, 255, 0.1)'
            }}
            formatter={(value: number) => [`₹${value / 100000}L`, 'Revenue']}
          />
          <Bar 
            dataKey="amount" 
            fill="url(#colorGradient)"
            radius={[8, 8, 0, 0]}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B4DFF" />
              <stop offset="100%" stopColor="#7B6DFF" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>

      {/* Growth labels */}
      {data.map((item, index) => (
        <div
          key={index}
          className="absolute text-sm text-[#5B4DFF] font-medium"
          style={{
            left: `${25 + (index * 33)}%`,
            top: '15%',
            transform: 'translateX(-50%)'
          }}
        >
          {item.growth}
        </div>
      ))}
    </div>
  )
}