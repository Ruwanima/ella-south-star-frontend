import type { Metadata } from "next"
import UserManagement from "@/components/user-management"

export const metadata: Metadata = {
  title: "Hotel Admin Dashboard - User Management",
  description: "Manage users for Ella South Star",
}

export default function UserManagementPage() {
  return <UserManagement />
}
