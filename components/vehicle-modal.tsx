"use client"

import React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface VehicleModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function VehicleModal({ open, onOpenChange }: VehicleModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add a New Vehicle</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 bg-muted p-6 rounded">
          <div>
            <Label className="mb-1">Vehicle Name / Model</Label>
            <Input placeholder="e.g. Honda Dio" />
          </div>

          <div>
            <Label className="mb-1">Vehicle Type</Label>
            <Input placeholder="e.g. Scooter / Car" />
          </div>

          <div>
            <Label className="mb-1">Rental Price (Per Day)</Label>
            <Input placeholder="Rs. 3000" />
          </div>

          <div>
            <Label className="mb-1">Description</Label>
            <Input placeholder="Short description" />
          </div>

          <div>
            <Label className="mb-1">Image</Label>
            <input type="file" className="block" />
          </div>

          <div className="pt-4">
            <Button className="bg-emerald-600 text-white">Add Vehicle</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
