"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FiltersPanel() {
  const [filters, setFilters] = useState({
    role: "All Types",
    status: [],
    department: "All Departments",
    lastLogin: "Any time",
  })

  return (
    <div className="w-64 bg-card rounded-lg border border-border p-6 h-fit shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-6">Filters</h3>

      <div className="space-y-6">
        {/* Role Filter */}
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">Role</label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-border rounded-md text-sm bg-background hover:bg-muted/50 transition-colors">
            <span className="text-foreground">{filters.role}</span>
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Status Filter */}
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">Status</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary" />
              <span className="text-sm text-foreground">Active</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary" />
              <span className="text-sm text-foreground">Inactive</span>
            </label>
          </div>
        </div>

        {/* Department Filter */}
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">Department</label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-border rounded-md text-sm bg-background hover:bg-muted/50 transition-colors">
            <span className="text-foreground">{filters.department}</span>
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Last Login Filter */}
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">Last Login</label>
          <button className="w-full flex items-center justify-between px-3 py-2 border border-border rounded-md text-sm bg-background hover:bg-muted/50 transition-colors">
            <span className="text-foreground">{filters.lastLogin}</span>
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="space-y-3 mt-8">
        <button className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
          Apply Filters
        </button>
        <button className="w-full text-accent bg-transparent border border-accent px-4 py-2 rounded-md font-medium text-sm hover:bg-accent/10 transition-colors">
          Reset Filters
        </button>
      </div>
    </div>
  )
}
