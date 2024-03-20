import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";

 import Layout from "./component/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patti from "./component/patti";
import Tips from "./component/tips";
import Navbar from "./component/Navbar";
import OldResult from "./component/old_result";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    
      <QueryClientProvider client={queryClient}>
        
        <Router>
        <Navbar />
          <Routes>


            <Route path="/" element={<Layout />} />
            <Route path="/old-result" element={<OldResult />} />
            <Route path="/patti" element={<Patti />} />
            <Route path="/tips" element={<Tips />} />


          </Routes>
        </Router>
      </QueryClientProvider>

    </>




  );
}

export default App;
