import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
       <h1>Home</h1>
       <NavLink to={"/auth"} className="text-blue-400">
          Ir al Login
       </NavLink>
    </div>
  )
}
