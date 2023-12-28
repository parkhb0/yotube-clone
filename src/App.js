import "./App.css";
import { Outlet } from "react-router-dom";
import Navar from "./components/Navar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Navar />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
