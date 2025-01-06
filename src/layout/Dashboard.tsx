import { Outlet } from "react-router";
import { SideMenu } from "@/components/global/SideMenu";

export default function Dashboard() {
  return (
    <main className="h-screen w-full">
        <SideMenu/>

        <section>
            <Outlet/>
        </section>
    </main>
  )
}
