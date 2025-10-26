import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ella South Star - Admin Login",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}