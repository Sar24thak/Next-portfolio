
import { ReactNode } from "react"
import Navbar from "./Navbar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
