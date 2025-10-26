"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Star, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"

export default function ClientHomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to Ella South Star
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience luxury and comfort in the heart of the city. Your perfect stay awaits.
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Calendar className="mr-2 h-5 w-5" />
            Book Now
          </Button>
          <Button size="lg" variant="outline">
            Explore Rooms
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Star className="h-10 w-10 text-yellow-500 mb-2" />
            <CardTitle>Luxury Amenities</CardTitle>
            <CardDescription>
              Enjoy world-class facilities including spa, pool, and fine dining
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <MapPin className="h-10 w-10 text-blue-500 mb-2" />
            <CardTitle>Prime Location</CardTitle>
            <CardDescription>
              Situated in the heart of the city with easy access to attractions
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="h-10 w-10 text-purple-500 mb-2" />
            <CardTitle>5-Star Service</CardTitle>
            <CardDescription>
              Our dedicated staff ensures your every need is met with excellence
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Featured Rooms */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Featured Rooms</h2>
          <p className="text-muted-foreground">Discover our most popular accommodations</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Deluxe Suite",
              price: "$299",
              features: ["King Bed", "City View", "50 sqm"],
            },
            {
              name: "Executive Room",
              price: "$199",
              features: ["Queen Bed", "Garden View", "35 sqm"],
            },
            {
              name: "Presidential Suite",
              price: "$599",
              features: ["2 Bedrooms", "Ocean View", "120 sqm"],
            },
          ].map((room, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <p className="text-6xl">🏨</p>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{room.name}</CardTitle>
                  <p className="text-2xl font-bold text-blue-600">{room.price}<span className="text-sm text-muted-foreground">/night</span></p>
                </div>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {room.features.map((feature, idx) => (
                      <span key={idx} className="bg-muted px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">What Our Guests Say</h2>
          <p className="text-muted-foreground">Read reviews from our satisfied customers</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              rating: 5,
              comment: "Absolutely wonderful stay! The staff was incredible and the room was spotless.",
            },
            {
              name: "Michael Chen",
              rating: 5,
              comment: "Best hotel experience I've had. The location is perfect and amenities are top-notch.",
            },
            {
              name: "Emily Rodriguez",
              rating: 5,
              comment: "Exceeded all expectations. Will definitely be returning on my next visit!",
            },
          ].map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{review.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
