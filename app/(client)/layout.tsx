"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Calendar, Bed, Sparkles, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/rooms", label: "Rooms", icon: Bed },
    { href: "/bookings", label: "My Bookings", icon: Calendar },
    { href: "/services", label: "Services", icon: Sparkles },
    { href: "/profile", label: "Profile", icon: User },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Client Portal Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ella South Star
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              )
            })}
          </nav>
          

          <div className="flex items-center gap-4">
            
            <Link href="/login">
              <Button variant="outline" size="sm">
                Admin Portal
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t bg-background p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </header>

      {/* Client Portal Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Client Portal Footer */}
      <footer className="border-t bg-muted/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Ella South Star</h3>
              <p className="text-sm text-muted-foreground">
                Experience luxury and comfort at our premium hotel.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/home" className="hover:text-foreground">Home</Link></li>
                <li><Link href="/rooms" className="hover:text-foreground">Rooms</Link></li>
                <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Email: info@ellasouthstar.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            © 2025 Ella South Star. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
