import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Tables from "./component/tables";
import Info from "./component/info";
import Header from "./component/header";
import Layout from "./component/layout";
import OldResult from "./component/old.result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patti from "./component/patti";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
          <QueryClientProvider client={queryClient}>
          <Router>
    <Routes>
      

      <Route path="/" element={<Layout />} />
      <Route path="/old-result" element={<OldResult />} />
      <Route path="/patti" element={<Patti />} />

    </Routes>
  </Router>
            </QueryClientProvider>

    </>

   

    
  );
}

export default App;
