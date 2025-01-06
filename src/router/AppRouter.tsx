import { Route, Routes } from "react-router";
import Dashboard from "@/layout/Dashboard";
import Login from "@/pages/auth/Login";
import Config from "@/pages/dashboard/Config";
import CreateEvent from "@/pages/dashboard/events/CreateEvent";
import EditEvent from "@/pages/dashboard/events/EditEvent";
import Events from "@/pages/dashboard/events/Events";
import Home from "@/pages/dashboard/Home";
import Opinions from "@/pages/dashboard/opinions/Opinions";
import UserOpinions from "@/pages/dashboard/opinions/UserOpinions";
import CreateProduct from "@/pages/dashboard/products/CreateProduct";
import EditProduct from "@/pages/dashboard/products/EditProduct";
import Products from "@/pages/dashboard/products/Products";

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/auth" element={<Login/>}/>

        <Route element={<Dashboard/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/config" element={<Config/>}/>

            <Route>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/create" element={<CreateProduct/>}/>
                <Route path="/products/edit/:id" element={<EditProduct/>}/>
            </Route>

            <Route>
                <Route path="/events" element={<Events/>}/>
                <Route path="/events/create" element={<CreateEvent/>}/>
                <Route path="/events/edit/:id" element={<EditEvent/>}/>
            </Route>

            <Route>
                <Route path="/opinions" element={<Opinions/>}/>
                <Route path="/opinions/user/:email" element={<UserOpinions/>}/>
            </Route>
        </Route>
    </Routes>
  )
}
