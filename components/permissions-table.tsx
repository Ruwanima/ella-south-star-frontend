import { Trash2, Edit2, Eye } from "lucide-react"

interface Permission {
  id: string
  role: string
  description: string
  users: number
  canCreate: boolean
  canRead: boolean
  canUpdate: boolean
  canDelete: boolean
}

const permissionsData: Permission[] = [
  {
    id: "1",
    role: "Admin",
    description: "Full system access",
    users: 2,
    canCreate: true,
    canRead: true,
    canUpdate: true,
    canDelete: true,
  },
  {
    id: "2",
    role: "Manager",
    description: "Can manage staff and guests",
    users: 5,
    canCreate: true,
    canRead: true,
    canUpdate: true,
    canDelete: false,
  },
  {
    id: "3",
    role: "Staff",
    description: "Can view and update guest info",
    users: 12,
    canCreate: false,
    canRead: true,
    canUpdate: true,
    canDelete: false,
  },
  {
    id: "4",
    role: "Viewer",
    description: "Read-only access",
    users: 8,
    canCreate: false,
    canRead: true,
    canUpdate: false,
    canDelete: false,
  },
]

export default function PermissionsTable() {
  const PermissionBadge = ({ allowed }: { allowed: boolean }) => (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        allowed
          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
          : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
      }`}
    >
      {allowed ? "Yes" : "No"}
    </span>
  )

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-muted border-b border-border">
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Role</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Description</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Users</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Create</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Read</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Update</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Delete</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissionsData.map((permission) => (
            <tr key={permission.id} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-foreground">{permission.role}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{permission.description}</td>
              <td className="px-6 py-4 text-sm text-foreground font-medium">{permission.users}</td>
              <td className="px-6 py-4">
                <PermissionBadge allowed={permission.canCreate} />
              </td>
              <td className="px-6 py-4">
                <PermissionBadge allowed={permission.canRead} />
              </td>
              <td className="px-6 py-4">
                <PermissionBadge allowed={permission.canUpdate} />
              </td>
              <td className="px-6 py-4">
                <PermissionBadge allowed={permission.canDelete} />
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
