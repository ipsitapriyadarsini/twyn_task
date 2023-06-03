import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./layouts/Home";
import Dashboard from "./pages/Dashboard";
import EngergySystem from "./pages/EngergySystem";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="/dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="energy-monitoring" element={<EngergySystem />} />
    </Routes>
  );
}

export default App;
