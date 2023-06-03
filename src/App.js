import { Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";

function App() {
  return (

    <Routes>
      <Route index path="/" element={<Home />} >
      </Route>
    </Routes>
  );
}

export default App;
