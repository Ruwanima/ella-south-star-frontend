import { Trash2, Edit2, Eye } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Vendor {
  id: string
  name: string
  email: string
  category: string
  phone: string
  status: "active" | "inactive" | "pending"
  joinDate: string
}

const vendorsData: Vendor[] = [
  {
    id: "1",
    name: "Premium Catering Co.",
    email: "contact@premiumcatering.com",
    category: "Food & Beverage",
    phone: "+1 (555) 111-2222",
    status: "active",
    joinDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Elite Cleaning Services",
    email: "info@elitecleaning.com",
    category: "Housekeeping",
    phone: "+1 (555) 222-3333",
    status: "active",
    joinDate: "2024-02-20",
  },
  {
    id: "3",
    name: "Luxury Spa & Wellness",
    email: "bookings@luxuryspa.com",
    category: "Wellness",
    phone: "+1 (555) 333-4444",
    status: "pending",
    joinDate: "2024-10-10",
  },
  {
    id: "4",
    name: "Event Management Pro",
    email: "events@eventpro.com",
    category: "Events",
    phone: "+1 (555) 444-5555",
    status: "inactive",
    joinDate: "2023-12-05",
  },
]

export default function VendorsTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "inactive":
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
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Vendor Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Category</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Phone</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Join Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendorsData.map((vendor) => (
            <tr key={vendor.id} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/user-avatar.jpg" />
                    <AvatarFallback>
                      {vendor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-foreground">{vendor.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{vendor.email}</td>
              <td className="px-6 py-4 text-sm text-foreground">{vendor.category}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{vendor.phone}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{vendor.joinDate}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vendor.status)}`}>
                  {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
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
