"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { useRouter } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const router = useRouter()

  const handleNavigate = (page: string) => {
    router.push(`/${page}`)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex">
          <Sidebar
            onNavigate={handleNavigate}
            currentPage=""
            isDarkMode={isDarkMode}
            onDarkModeToggle={setIsDarkMode}
          />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
