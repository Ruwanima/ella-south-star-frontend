"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, Calendar, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Bookings",
      value: "1,234",
      change: "+12.5%",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+8.2%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Guests",
      value: "573",
      change: "+3.1%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Occupancy Rate",
      value: "87%",
      change: "+5.4%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Ella South Star Admin Portal</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your hotel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New booking received</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Guest checked in</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-yellow-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Maintenance request</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <p className="font-medium">Create New Booking</p>
                <p className="text-xs text-muted-foreground">Add a new reservation</p>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <p className="font-medium">Check-in Guest</p>
                <p className="text-xs text-muted-foreground">Process guest arrival</p>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <p className="font-medium">Generate Report</p>
                <p className="text-xs text-muted-foreground">View analytics</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
