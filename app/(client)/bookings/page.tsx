"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, CreditCard } from "lucide-react"

export default function BookingsPage() {
  const upcomingBookings = [
    {
      id: "BK-001",
      room: "Deluxe Suite",
      checkIn: "Oct 25, 2025",
      checkOut: "Oct 28, 2025",
      guests: 2,
      status: "Confirmed",
      total: "$897",
    },
    {
      id: "BK-002",
      room: "Executive Room",
      checkIn: "Nov 15, 2025",
      checkOut: "Nov 17, 2025",
      guests: 1,
      status: "Pending",
      total: "$498",
    },
  ]

  const pastBookings = [
    {
      id: "BK-003",
      room: "Standard Room",
      checkIn: "Sep 10, 2025",
      checkOut: "Sep 12, 2025",
      guests: 2,
      status: "Completed",
      total: "$298",
    },
    {
      id: "BK-004",
      room: "Deluxe Room",
      checkIn: "Aug 5, 2025",
      checkOut: "Aug 8, 2025",
      guests: 2,
      status: "Completed",
      total: "$597",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800 border-green-200"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">My Bookings</h1>
        <p className="text-muted-foreground">Manage your reservations</p>
      </div>

      {/* Upcoming Bookings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Upcoming Stays</h2>
        {upcomingBookings.length > 0 ? (
          <div className="grid gap-4">
            {upcomingBookings.map((booking) => (
              <Card key={booking.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{booking.room}</CardTitle>
                      <CardDescription className="mt-1">Booking ID: {booking.id}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Check-in: {booking.checkIn}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Check-out: {booking.checkOut}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{booking.guests} Guest{booking.guests > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="font-bold">Total: {booking.total}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Modify
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">No upcoming bookings</p>
              <Button>Book a Room</Button>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Past Bookings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Past Stays</h2>
        <div className="grid gap-4">
          {pastBookings.map((booking) => (
            <Card key={booking.id} className="opacity-80">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{booking.room}</CardTitle>
                    <CardDescription className="mt-1">Booking ID: {booking.id}</CardDescription>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{booking.checkIn} - {booking.checkOut}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span>Total: {booking.total}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Book Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
