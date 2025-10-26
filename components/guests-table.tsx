import { Trash2, Edit2, Eye } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Guest {
  id: string
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  room: string
  status: "checked-in" | "checked-out" | "pending"
}

const guestsData: Guest[] = [
  {
    id: "1",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "+1 (555) 123-4567",
    checkIn: "2024-10-15",
    checkOut: "2024-10-18",
    room: "Suite 301",
    status: "checked-in",
  },
  {
    id: "2",
    name: "James Chen",
    email: "james.chen@email.com",
    phone: "+1 (555) 234-5678",
    checkIn: "2024-10-16",
    checkOut: "2024-10-20",
    room: "Room 205",
    status: "checked-in",
  },
  {
    id: "3",
    name: "Sarah Martinez",
    email: "sarah.martinez@email.com",
    phone: "+1 (555) 345-6789",
    checkIn: "2024-10-18",
    checkOut: "2024-10-22",
    room: "Suite 401",
    status: "pending",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+1 (555) 456-7890",
    checkIn: "2024-10-10",
    checkOut: "2024-10-14",
    room: "Room 102",
    status: "checked-out",
  },
]

export default function GuestsTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "checked-in":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "checked-out":
        return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-muted border-b border-border">
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Phone</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Room</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Check-In</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Check-Out</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {guestsData.map((guest) => (
            <tr key={guest.id} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/user-avatar.jpg" />
                    <AvatarFallback>
                      {guest.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-foreground">{guest.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{guest.email}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{guest.phone}</td>
              <td className="px-6 py-4 text-sm text-foreground font-medium">{guest.room}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{guest.checkIn}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{guest.checkOut}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(guest.status)}`}>
                  {guest.status.charAt(0).toUpperCase() + guest.status.slice(1).replace("-", " ")}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground">
                    <Eye size={16} />
                  </button>
                  <button className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-muted-foreground hover:text-destructive">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
