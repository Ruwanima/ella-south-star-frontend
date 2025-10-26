"use client"

import { Home, Users, Package, DollarSign, FileText, Star, Megaphone, Moon, Sun, LogOut, Globe } from "lucide-react"
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
    { id: "sales-marketing", label: "Sales & Marketing", icon: Megaphone, href: "/sales-marketing" },
    { id: "finance", label: "Finance", icon: DollarSign, href: "/finance" },
    { id: "vehicles", label: "Vehicles", icon: Package, href: "/vehicles" },
    { id: "reviews", label: "Reviews", icon: Star, href: "/reviews" },
    { id: "reports", label: "Report", icon: FileText, href: "/reports" },
  ]

  return (
    <aside className="w-64 bg-card border-r border-border p-6 flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
      <div className="space-y-3 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center gap-4 transition-colors ${isActive ? 'bg-emerald-600 text-white rounded-2xl px-4 py-3' : 'text-foreground hover:bg-muted px-4 py-3 rounded-lg'}`}
            >
              <Icon size={20} className={isActive ? 'text-white' : ''} />
              <span className={`${isActive ? 'text-lg font-semibold' : 'text-sm font-medium'}`}>{item.label}</span>
            </Link>
          )
        })}
      </div>

      <div className="space-y-3 pt-4 mt-auto">
        <Link
          href="/"
          className="w-full flex items-center gap-4 px-4 py-3 text-foreground hover:bg-muted rounded-lg"
        >
          <Globe size={20} />
          <span className="text-sm font-medium">Client Portal</span>
        </Link>

        <button
          onClick={() => onDarkModeToggle(!isDarkMode)}
          className={`w-full flex items-center gap-4 px-6 py-3 ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-50 text-black'} rounded-2xl shadow-sm transition-colors`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span className="text-base font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <button className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
