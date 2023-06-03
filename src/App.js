import { Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (

    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="dashboard" element={Dashboard}/>     
    </Routes>
  );
}

export default App;
