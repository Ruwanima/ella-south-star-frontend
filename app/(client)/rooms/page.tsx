"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Wifi, Coffee, Tv, Wind, Bath } from "lucide-react"

export default function RoomsPage() {
  const rooms = [
    {
      name: "Standard Room",
      price: 149,
      capacity: 2,
      size: "25 sqm",
      amenities: ["WiFi", "TV", "AC", "Coffee Maker"],
      available: 5,
    },
    {
      name: "Deluxe Room",
      price: 199,
      capacity: 2,
      size: "35 sqm",
      amenities: ["WiFi", "TV", "AC", "Coffee Maker", "Bathtub"],
      available: 3,
    },
    {
      name: "Deluxe Suite",
      price: 299,
      capacity: 3,
      size: "50 sqm",
      amenities: ["WiFi", "TV", "AC", "Coffee Maker", "Bathtub", "Living Area"],
      available: 2,
    },
    {
      name: "Executive Room",
      price: 249,
      capacity: 2,
      size: "40 sqm",
      amenities: ["WiFi", "TV", "AC", "Coffee Maker", "Work Desk"],
      available: 4,
    },
    {
      name: "Family Suite",
      price: 399,
      capacity: 5,
      size: "70 sqm",
      amenities: ["WiFi", "TV", "AC", "Coffee Maker", "Bathtub", "Kitchen"],
      available: 1,
    },
    {
      name: "Presidential Suite",
      price: 599,
      capacity: 4,
      size: "120 sqm",
      amenities: ["WiFi", "TV", "AC", "Coffee Maker", "Bathtub", "Kitchen", "Balcony"],
      available: 1,
    },
  ]

  const amenityIcons: { [key: string]: any } = {
    WiFi: Wifi,
    TV: Tv,
    AC: Wind,
    "Coffee Maker": Coffee,
    Bathtub: Bath,
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Our Rooms</h1>
        <p className="text-muted-foreground text-lg">Choose the perfect accommodation for your stay</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, index) => (
          <Card key={index} className="flex flex-col">
            <div className="h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center relative">
              <p className="text-7xl">🛏️</p>
              {room.available <= 2 && (
                <Badge variant="destructive" className="absolute top-3 right-3">
                  Only {room.available} left
                </Badge>
              )}
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{room.name}</CardTitle>
                  <CardDescription className="mt-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>Up to {room.capacity} guests</span>
                      <span>•</span>
                      <span>{room.size}</span>
                    </div>
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">${room.price}</p>
                  <p className="text-xs text-muted-foreground">per night</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, idx) => {
                      const Icon = amenityIcons[amenity]
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md text-xs"
                        >
                          {Icon && <Icon className="h-3 w-3" />}
                          <span>{amenity}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {room.available} rooms available
                </p>
              </div>
              <Button className="w-full mt-4">Book Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
