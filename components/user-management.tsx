"use client"

import { useState } from "react"
import { Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import StaffTable from "./staff-table"
import GuestsTable from "./guests-table"
import VendorsTable from "./vendors-table"
import PermissionsTable from "./permissions-table"
import FiltersPanel from "./filters-panel"
import AuditLog from "./audit-log"

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState("staff")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">User Management</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg">
            <Bell size={20} className="text-muted-foreground" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/user-avatar.jpg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sarah Johnson</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
            <ChevronDown size={16} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Tabs */}
          <div className="flex gap-8 border-b border-border">
            {["Staff", "Guests", "Vendors", "Permissions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Staff Tab Content */}
          {activeTab === "staff" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 flex items-center gap-2">
                  <span>+</span> Add Staff Member
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                  />
                </div>
              </div>

              <StaffTable />
              <AuditLog />
            </div>
          )}

          {activeTab === "guests" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 flex items-center gap-2">
                  <span>+</span> Add Guest
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search guests..."
                    className="w-full px-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                  />
                </div>
              </div>

              <GuestsTable />
            </div>
          )}

          {activeTab === "vendors" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 flex items-center gap-2">
                  <span>+</span> Add Vendor
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search vendors..."
                    className="w-full px-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                  />
                </div>
              </div>

              <VendorsTable />
            </div>
          )}

          {activeTab === "permissions" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 flex items-center gap-2">
                  <span>+</span> Add Permission
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search permissions..."
                    className="w-full px-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                  />
                </div>
              </div>

              <PermissionsTable />
            </div>
          )}
        </div>

        {/* Filters Panel */}
        <FiltersPanel />
      </div>
    </div>
  )
}
