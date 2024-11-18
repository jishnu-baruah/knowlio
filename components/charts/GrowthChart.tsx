'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface FinancialDataPoint {
  year: string;
  amount: number;
}

interface GrowthChartProps {
  data: FinancialDataPoint[];
}

export function GrowthChart({ data }: GrowthChartProps) {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#5B4DFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}