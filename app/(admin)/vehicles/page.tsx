"use client"

import { useState } from "react"
import { Bell, Plus, Search, Trash2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Vehicle {
  id: number
  name: string
  image: string
  price: number
  status: string
  description: string
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "TVS Ntorq 125",
    image: "/V1.png",
    price: 3000,
    status: "Available",
    description: "A reliable and comfortable scooter ideal for exploring Ella's scenic routes.",
  },
  {
    id: 2,
    name: "TVS Ntorq 125",
    image: "/V2.png",
    price: 3000,
    status: "Available",
    description: "A reliable and comfortable scooter ideal for exploring Ella's scenic routes.",
  },
  {
    id: 3,
    name: "Honda Dio 01",
    image: "/V3.png",
    price: 3000,
    status: "Available",
    description: "A reliable and comfortable scooter ideal for exploring Ella's scenic routes.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Rent a Vehicle</h1>

        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Add Vehicle Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 bg-muted border-0 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <Plus className="w-4 h-4" />
            Add Vehicle
          </Button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCardItem key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </main>
  )
}

function VehicleCardItem({ vehicle }: { vehicle: Vehicle }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted overflow-hidden">
        <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} className="w-full h-full object-cover" />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-foreground">{vehicle.name}</h3>
            <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">
              {vehicle.status}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <p className="text-lg font-semibold text-foreground">Rs. {vehicle.price} per day</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{vehicle.description}</p>

        <div
          className="flex items-center justify-between pt-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View Details
          </button>
          <button
            className={`p-2 rounded-lg transition-colors ${
              isHovered ? "bg-destructive/10 text-destructive" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
