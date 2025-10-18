import { Trash2, Edit2, Eye } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const staffData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Hotel Manager",
    status: true,
    lastLogin: "2 hours ago",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    role: "Front Desk",
    status: true,
    lastLogin: "1 day ago",
    avatar: "JS",
  },
  {
    id: 3,
    name: "Mary Johns",
    email: "mary@example.com",
    role: "Housekeeping",
    status: false,
    lastLogin: "3 day ago",
    avatar: "MJ",
  },
  {
    id: 4,
    name: "Michele Brown",
    email: "michele@example.com",
    role: "Housekeeping",
    status: true,
    lastLogin: "5 hours ago",
    avatar: "MB",
  },
]

export default function StaffTable() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="bg-muted/50 border-b border-border">
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Last Login</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff) => (
            <tr key={staff.id} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/.jpg?height=32&width=32&query=${staff.avatar}`} />
                    <AvatarFallback className="bg-primary/10 text-primary">{staff.avatar}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-foreground">{staff.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{staff.email}</td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-primary/15 text-primary dark:bg-primary/25 dark:text-primary-foreground rounded-full text-xs font-medium">
                  {staff.role}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-6 rounded-full transition-colors ${staff.status ? "bg-primary" : "bg-muted"}`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-background border border-border transition-transform ${staff.status ? "translate-x-5" : "translate-x-0.5"} mt-0.5`}
                    />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{staff.lastLogin}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
                    <Trash2 size={16} className="text-destructive" />
                  </button>
                  <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
                    <Edit2 size={16} className="text-muted-foreground" />
                  </button>
                  <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
                    <Eye size={16} className="text-muted-foreground" />
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
