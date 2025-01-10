import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import AppRouter from "@/router/AppRouter";
// import { HashRouter } from "react-router";

const queryClient = new QueryClient();

export function App() {
  return (
    // <HashRouter> 
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter/>
      </QueryClientProvider>
    </BrowserRouter>
    // </HashRouter>
  )
}
