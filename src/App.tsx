import { HashRouter } from "react-router";
import AppRouter from "@/router/AppRouter";

export function App() {
  return (
    <HashRouter>
      <AppRouter/>
    </HashRouter>
  )
}
