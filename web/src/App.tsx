import { QueryClient } from "@tanstack/react-query";
import "./App.css";
import { trpc, trpcClient } from "./lib/trpc";

const queryClient = new QueryClient();

function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      Hello
    </trpc.Provider>
  );
}

export default App;
