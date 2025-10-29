"use client"

import type React from "react"
import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Users, DollarSign, Star, Calendar } from "lucide-react"

const revenueData = [
  { month: "FEB", actual: 4.2, forecasted: 4.0 },
  { month: "MAR", actual: 5.1, forecasted: 4.8 },
  { month: "APR", actual: 5.8, forecasted: 5.5 },
  { month: "MAY", actual: 6.2, forecasted: 6.0 },
  { month: "JUN", actual: 5.9, forecasted: 6.3 },
  { month: "JUL", actual: 6.5, forecasted: 6.2 },
]

const occupancyTrendData = [
  { month: "JAN", occupancy: 65 },
  { month: "FEB", occupancy: 72 },
  { month: "MAR", occupancy: 78 },
  { month: "APR", occupancy: 85 },
  { month: "MAY", occupancy: 82 },
  { month: "JUN", occupancy: 88 },
  { month: "JUL", occupancy: 75 },
]

const reservationsData = [
  { name: "Confirmed", value: 45, fill: "#0f766e" },
  { name: "Checked In", value: 35, fill: "#14b8a6" },
  { name: "Checked Out", value: 20, fill: "#d1d5db" },
]

interface KPICardProps {
  title: string
  value: string | number
  trend: string
  trendPositive: boolean
  icon: React.ReactNode
}

function KPICard({ title, value, trend, trendPositive, icon }: KPICardProps) {
  return (
    <Card className="p-6 flex flex-col gap-3 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="text-teal-600">{icon}</div>
      </div>
      <p className={`text-sm ${trendPositive ? "text-green-600" : "text-red-600"}`}>{trend}</p>
    </Card>
  )
}

export default function Dashboard() {
  useEffect(() => {
    document.title = "Hotel Admin Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Occupancy Rate"
            value="85%"
            trend="+5% from last month"
            trendPositive={true}
            icon={<Users className="w-6 h-6" />}
          />
          <KPICard
            title="Revenue"
            value="$124K"
            trend="+12% from last month"
            trendPositive={true}
            icon={<DollarSign className="w-6 h-6" />}
          />
          <KPICard
            title="Guest Satisfaction"
            value="4.8"
            trend="+0.2 from last month"
            trendPositive={true}
            icon={<Star className="w-6 h-6" />}
          />
          <KPICard
            title="Active Booking"
            value="156"
            trend="-3% from last month"
            trendPositive={false}
            icon={<Calendar className="w-6 h-6" />}
          />
        </div>

        {/* Revenue Chart */}
        <Card className="p-6 mb-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-1 text-gray-800">Rs. 12.5M</h2>
            <p className="text-sm text-gray-500">Total Revenue</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 6 }}
                formatter={(value) => `${value}M`}
              />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#0f766e" strokeWidth={2} dot={{ r: 4 }} name="Actual" />
              <Line type="monotone" dataKey="forecasted" stroke="#14b8a6" strokeWidth={2} dot={{ r: 4 }} name="Forecasted" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reservations Pie Chart */}
          <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800">Reservations</h2>
              <p className="text-sm text-gray-500">This month</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={reservationsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {reservationsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 flex flex-wrap gap-4">
              {reservationsData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Occupancy Trend Bar Chart */}
          <Card className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800">Occupancy Trend</h2>
              <p className="text-sm text-gray-500">This week</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={occupancyTrendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 6 }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="occupancy" fill="#0f766e" radius={[8, 8, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  )
}
