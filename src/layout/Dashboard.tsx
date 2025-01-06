import { Outlet } from "react-router";
import { SideMenu } from "@/components/global/SideMenu";

export default function Dashboard() {
  return (
    <main className="inline-flex min-h-screen w-full">
      <SideMenu/>

      <section className="w-full">
        <Outlet/>
      </section>
    </main>
  )
}
