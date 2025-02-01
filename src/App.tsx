import { BrowserRouter } from "react-router";
import AppRouter from "@/router/AppRouter";
// import { HashRouter } from "react-router";

export function App() {
  return (
    // <HashRouter> 
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    // </HashRouter>
  )
}
