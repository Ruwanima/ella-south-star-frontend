"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, Dumbbell, Waves, Sparkles, Car, Wifi, Coffee, Wine } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      name: "Fine Dining",
      icon: Utensils,
      description: "Experience culinary excellence at our award-winning restaurant",
      hours: "6:00 AM - 11:00 PM",
      price: "À la carte",
    },
    {
      name: "Fitness Center",
      icon: Dumbbell,
      description: "State-of-the-art gym equipment and personal training available",
      hours: "24/7",
      price: "Complimentary",
    },
    {
      name: "Swimming Pool",
      icon: Waves,
      description: "Heated infinity pool with stunning city views",
      hours: "6:00 AM - 10:00 PM",
      price: "Complimentary",
    },
    {
      name: "Spa & Wellness",
      icon: Sparkles,
      description: "Rejuvenate with our signature spa treatments and massages",
      hours: "9:00 AM - 9:00 PM",
      price: "From $80",
    },
    {
      name: "Valet Parking",
      icon: Car,
      description: "Secure parking with valet service for your convenience",
      hours: "24/7",
      price: "$25/day",
    },
    {
      name: "Business Center",
      icon: Wifi,
      description: "High-speed internet and meeting rooms for business travelers",
      hours: "24/7",
      price: "Complimentary",
    },
    {
      name: "Room Service",
      icon: Coffee,
      description: "Enjoy meals and beverages delivered to your room",
      hours: "24/7",
      price: "Menu prices apply",
    },
    {
      name: "Bar & Lounge",
      icon: Wine,
      description: "Craft cocktails and premium wines in an elegant setting",
      hours: "4:00 PM - 2:00 AM",
      price: "À la carte",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Hotel Services</h1>
        <p className="text-muted-foreground text-lg">
          Discover our world-class amenities and services
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Hours:</span>
                  <span className="font-medium">{service.hours}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-medium text-blue-600">{service.price}</span>
                </div>
                <Button className="w-full mt-2" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Special Offers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Special Packages</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle>Spa Day Package</CardTitle>
              <CardDescription>Full day of relaxation and pampering</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">$299</p>
              <p className="text-sm text-muted-foreground mb-4">
                Includes: Massage, Facial, Pool Access, Lunch
              </p>
              <Button className="w-full">Book Package</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <CardHeader>
              <CardTitle>Romantic Getaway</CardTitle>
              <CardDescription>Perfect for couples celebration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600 mb-2">$499</p>
              <p className="text-sm text-muted-foreground mb-4">
                Includes: Suite Upgrade, Dinner, Champagne, Spa
              </p>
              <Button className="w-full">Book Package</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle>Business Traveler</CardTitle>
              <CardDescription>Everything for the modern professional</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600 mb-2">$179</p>
              <p className="text-sm text-muted-foreground mb-4">
                Includes: Business Center, Meeting Room, WiFi
              </p>
              <Button className="w-full">Book Package</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
