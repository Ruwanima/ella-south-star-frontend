"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Bell, User, Bed, Package as PackageIcon, Wrench, Search, Edit, Trash2, Calendar, Plus } from "lucide-react"

type TabType = "rooms" | "supplies" | "maintenance"

type Room = {
  id: number
  number: string
  type: string
  status: "Available" | "Occupied"
  capacity: number
}

type Supply = {
  id: number
  name: string
  stock: number
  total: number
  status: "In Stock" | "Low Stock" | "Ordered"
  expectedDate?: string
  quantity?: number
}

type MaintenanceEvent = {
  id: number
  date: number
  room: string
  type: string
}

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("maintenance")
  const [searchTerm, setSearchTerm] = useState("")
  const [roomTypeFilter, setRoomTypeFilter] = useState("All Types")
  const [floorFilter, setFloorFilter] = useState("All Floors")
  const [viewType, setViewType] = useState("All Views")
  const [showLowStockOnly, setShowLowStockOnly] = useState(false)
  const [showUrgentMaintenance, setShowUrgentMaintenance] = useState(false)

  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, number: "101", type: "Deluxe", status: "Available", capacity: 2 },
    { id: 2, number: "102", type: "Suite", status: "Occupied", capacity: 4 },
    { id: 3, number: "103", type: "Standard", status: "Available", capacity: 2 },
  ])

  const [supplies, setSupplies] = useState<Supply[]>([
    { id: 1, name: "Towels", stock: 85, total: 100, status: "In Stock" },
    { id: 2, name: "Shampoo", stock: 15, total: 100, status: "Low Stock" },
    { id: 3, name: "Bed sheets", stock: 65, total: 80, status: "In Stock" },
    { id: 4, name: "Toilet Paper", stock: 0, total: 0, status: "Ordered", expectedDate: "Dec 15 2024", quantity: 200 },
  ])

  const [maintenanceEvents, setMaintenanceEvents] = useState<MaintenanceEvent[]>([
    { id: 1, date: 3, room: "Room 101", type: "AC Repair" },
    { id: 2, date: 5, room: "Room 205", type: "Plumbing" },
    { id: 3, date: 6, room: "Room 101", type: "AC Repair" },
    { id: 4, date: 7, room: "Room 205", type: "Plumbing" },
  ])

  const handleReorder = (supplyId: number) => {
    setSupplies(supplies.map(supply => 
      supply.id === supplyId 
        ? { ...supply, stock: supply.stock + 20, total: supply.total + 20 }
        : supply
    ))
  }

  const handleAddRoom = () => {
    const newRoom: Room = {
      id: rooms.length + 1,
      number: `${100 + rooms.length + 1}`,
      type: "Standard",
      status: "Available",
      capacity: 2
    }
    setRooms([...rooms, newRoom])
  }

  const handleDeleteRoom = (roomId: number) => {
    setRooms(rooms.filter(room => room.id !== roomId))
  }

  // Calculate stats
  const availableRooms = rooms.filter(r => r.status === "Available").length
  const occupiedRooms = rooms.filter(r => r.status === "Occupied").length
  const lowStockItems = supplies.filter(s => s.status === "Low Stock").length
  const pendingMaintenance = maintenanceEvents.length

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
  const currentMonth = 11 // December (0-indexed)
  const currentYear = 2024
  const daysInMonth = getDaysInMonth(currentYear, currentMonth)

  const renderCalendar = () => {
    const days = []
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 bg-gray-50"></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const event = maintenanceEvents.find(e => e.date === day)
      days.push(
        <div key={day} className="h-16 border border-gray-200 p-1 hover:bg-gray-50">
          <div className="text-sm font-medium">{day}</div>
          {event && (
            <div className="text-xs mt-1">
              <div className="text-red-500 font-medium">{event.room}</div>
              <div className="text-gray-600">{event.type}</div>
            </div>
          )}
        </div>
      )
    }

    return days
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <div className="text-sm">
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex gap-6 border-b mb-6">
            <button
              onClick={() => setActiveTab("rooms")}
              className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
                activeTab === "rooms" 
                  ? "border-teal-600 text-teal-600" 
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <Bed className="h-4 w-4" />
              <span className="font-medium">Rooms</span>
            </button>
            <button
              onClick={() => setActiveTab("supplies")}
              className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
                activeTab === "supplies" 
                  ? "border-teal-600 text-teal-600" 
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <PackageIcon className="h-4 w-4" />
              <span className="font-medium">Supplies</span>
            </button>
            <button
              onClick={() => setActiveTab("maintenance")}
              className={`flex items-center gap-2 pb-3 border-b-2 transition-colors ${
                activeTab === "maintenance" 
                  ? "border-teal-600 text-teal-600" 
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <Wrench className="h-4 w-4" />
              <span className="font-medium">Maintenance</span>
            </button>
          </div>

          {/* Rooms Tab */}
          {activeTab === "rooms" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Room Inventory</h2>
                <Button onClick={handleAddRoom} className="bg-teal-600 hover:bg-teal-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Room
                </Button>
              </div>

              <div className="bg-white rounded-lg border">
                <div className="grid grid-cols-5 gap-4 p-4 border-b bg-gray-50 font-medium text-sm text-gray-600">
                  <div>Room Number</div>
                  <div>Type</div>
                  <div>Status</div>
                  <div>Capacity</div>
                  <div>Actions</div>
                </div>
                {rooms.map((room) => (
                  <div key={room.id} className="grid grid-cols-5 gap-4 p-4 border-b items-center hover:bg-gray-50">
                    <div className="font-medium">{room.number}</div>
                    <div className="text-gray-600">{room.type}</div>
                    <div>
                      <Badge 
                        variant={room.status === "Available" ? "default" : "secondary"}
                        className={room.status === "Available" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-red-100 text-red-700 hover:bg-red-100"}
                      >
                        {room.status}
                      </Badge>
                    </div>
                    <div className="text-gray-600">{room.capacity} Guests</div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteRoom(room.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Supplies Tab */}
          {activeTab === "supplies" && (
            <div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-gray-600 mb-1">In Stock</div>
                    <div className="text-2xl font-bold">{supplies.filter(s => s.status === "In Stock").length} Items</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-gray-600 mb-1">Low Stock</div>
                    <div className="text-2xl font-bold text-red-600">{lowStockItems} Items</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-gray-600 mb-1">Ordered</div>
                    <div className="text-2xl font-bold">{supplies.filter(s => s.status === "Ordered").length} Items</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supplies.map((supply) => (
                  <Card key={supply.id} className={supply.status === "Low Stock" ? "border-red-200 bg-red-50" : supply.status === "Ordered" ? "border-blue-200 bg-blue-50" : ""}>
                    <CardContent className="pt-6">
                      <div className="font-semibold text-lg mb-2">{supply.name}</div>
                      {supply.status !== "Ordered" ? (
                        <>
                          <div className="text-sm text-gray-600 mb-1">stock: {Math.round((supply.stock / supply.total) * 100)}%</div>
                          <div className="text-sm text-gray-600 mb-3">{supply.stock}/{supply.total}</div>
                          <Button 
                            onClick={() => handleReorder(supply.id)}
                            className={supply.status === "Low Stock" ? "bg-red-600 hover:bg-red-700 w-full" : "bg-teal-600 hover:bg-teal-700 w-full"}
                          >
                            {supply.status === "Low Stock" ? "Urgent Reorder" : "Reorder"}
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="text-sm text-gray-600 mb-1">Expected: {supply.expectedDate}</div>
                          <div className="text-sm font-semibold text-blue-600 mb-3">Quantity: {supply.quantity} units</div>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Pending Delivery</Badge>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Maintenance Tab */}
          {activeTab === "maintenance" && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Maintenance Calendar</h2>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">December 2024</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">&lt;</Button>
                    <Button variant="ghost" size="icon">&gt;</Button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-0 border rounded-lg overflow-hidden">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                    <div key={day} className="bg-gray-100 p-2 text-center text-sm font-medium border-b">
                      {day}
                    </div>
                  ))}
                  {renderCalendar()}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filters Sidebar */}
        <div className="w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Filters</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Room Type</label>
                <Select value={roomTypeFilter} onValueChange={setRoomTypeFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Types">All Types</SelectItem>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Deluxe">Deluxe</SelectItem>
                    <SelectItem value="Suite">Suite</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Floor</label>
                <Select value={floorFilter} onValueChange={setFloorFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Floors">All Floors</SelectItem>
                    <SelectItem value="Floor 1">Floor 1</SelectItem>
                    <SelectItem value="Floor 2">Floor 2</SelectItem>
                    <SelectItem value="Floor 3">Floor 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">View Type</label>
                <Select value={viewType} onValueChange={setViewType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Views">All Views</SelectItem>
                    <SelectItem value="Ocean View">Ocean View</SelectItem>
                    <SelectItem value="City View">City View</SelectItem>
                    <SelectItem value="Garden View">Garden View</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="lowStock" 
                  checked={showLowStockOnly}
                  onCheckedChange={(checked) => setShowLowStockOnly(checked as boolean)}
                />
                <label htmlFor="lowStock" className="text-sm text-gray-600">Low Stock Only</label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="urgent" 
                  checked={showUrgentMaintenance}
                  onCheckedChange={(checked) => setShowUrgentMaintenance(checked as boolean)}
                />
                <label htmlFor="urgent" className="text-sm text-gray-600">Urgent Maintenance</label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick stats</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Available Rooms</span>
                <span className="font-semibold">{availableRooms}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Occupied Rooms</span>
                <span className="font-semibold">{occupiedRooms}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Low Stock Items</span>
                <span className="font-semibold text-red-600">{lowStockItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pending Maintenance</span>
                <span className="font-semibold">{pendingMaintenance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
