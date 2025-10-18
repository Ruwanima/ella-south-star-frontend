"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, AlertTriangle, CheckCircle } from "lucide-react"

export default function InventoryPage() {
  const inventoryItems = [
    { name: "Bed Linens", stock: 250, status: "Good", category: "Bedding" },
    { name: "Towels", stock: 180, status: "Good", category: "Bathroom" },
    { name: "Toiletries", stock: 45, status: "Low", category: "Bathroom" },
    { name: "Room Keys", stock: 150, status: "Good", category: "Security" },
    { name: "Mini Bar Items", stock: 320, status: "Good", category: "Food & Beverage" },
    { name: "Cleaning Supplies", stock: 15, status: "Critical", category: "Maintenance" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Inventory Management</h1>
        <p className="text-muted-foreground">Track and manage hotel inventory</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">960</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Critical Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">1</div>
            <p className="text-xs text-muted-foreground">Urgent restock needed</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
          <CardDescription>Current stock levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {inventoryItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium">{item.stock} units</p>
                    <div className="flex items-center gap-1">
                      {item.status === "Good" && (
                        <>
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <p className="text-xs text-green-600">{item.status}</p>
                        </>
                      )}
                      {item.status === "Low" && (
                        <>
                          <AlertTriangle className="h-3 w-3 text-yellow-600" />
                          <p className="text-xs text-yellow-600">{item.status}</p>
                        </>
                      )}
                      {item.status === "Critical" && (
                        <>
                          <AlertTriangle className="h-3 w-3 text-red-600" />
                          <p className="text-xs text-red-600">{item.status}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
