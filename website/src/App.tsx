import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Tables from "./component/tables";
import Info from "./component/info";
import Header from "./component/header";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Tables />
        <Info />
      </QueryClientProvider>
    </>
  );
}

export default App;
