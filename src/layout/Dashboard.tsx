import { Outlet } from "react-router";
import { SideMenu } from "@/components/global/SideMenu";
// import { NavBar } from "@/components/global/NavBar";

export default function Dashboard() {
  return (
    <main className="inline-flex min-h-screen w-full">
      <SideMenu/>

      <section className="w-full">
        {/* <NavBar/> */}
        <Outlet/>
      </section>
    </main>
  )
}
