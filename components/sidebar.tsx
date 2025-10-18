"use client"

import { Home, Users, Package, DollarSign, FileText, Star, Megaphone, Moon, LogOut, Globe } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  onNavigate: (page: string) => void
  currentPage: string
  isDarkMode: boolean
  onDarkModeToggle: (isDark: boolean) => void
}

export default function Sidebar({ onNavigate, currentPage, isDarkMode, onDarkModeToggle }: SidebarProps) {
  const pathname = usePathname()
  
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
    { id: "user-management", label: "User Management", icon: Users, href: "/user-management" },
    { id: "inventory", label: "Inventory", icon: Package, href: "/inventory" },
    { id: "finance", label: "Finance", icon: DollarSign, href: "/finance" },
    { id: "reports", label: "Reports", icon: FileText, href: "/reports" },
    { id: "reviews", label: "Reviews", icon: Star, href: "/reviews" },
    { id: "sales-marketing", label: "Sales & Marketing", icon: Megaphone, href: "/sales-marketing" },
  ]

  return (
    <aside className="w-56 bg-card border-r border-border p-6 flex flex-col">
      <div className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>

      <div className="space-y-2 border-t border-border pt-4">
        <Link
          href="/home"
          className="w-full flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
        >
          <Globe size={20} />
          <span className="text-sm font-medium">Client Portal</span>
        </Link>
        
        <button
          onClick={() => onDarkModeToggle(!isDarkMode)}
          className="w-full flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
        >
          <Moon size={20} />
          <span className="text-sm font-medium">Dark Mode</span>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 text-destructive hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
