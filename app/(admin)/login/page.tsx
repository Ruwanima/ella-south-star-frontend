import { redirect } from "next/navigation"

export default function AdminLoginRedirect() {
  // redirect any admin-scoped /login visits to the standalone AdminLogin page
  redirect("/AdminLogin")
}
