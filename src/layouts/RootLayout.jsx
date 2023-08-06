import { NavLink, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
export default function RootLayout() {
  return (
    <main className="space-y-10">
        <Navbar/>
        <Outlet/>
    </main>
  )
}
