import { redirect } from "next/navigation"

export default function AdminPage() {
  // redirect the admin root to the standalone AdminLogin page
  redirect("/AdminLogin")
}