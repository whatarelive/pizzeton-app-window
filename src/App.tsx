// import { BrowserRouter } from "react-router";
import AppRouter from "@/router/AppRouter";
import { HashRouter } from "react-router";

export function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <AppRouter/>
    </HashRouter>
    // </BrowserRouter>
  )
}
