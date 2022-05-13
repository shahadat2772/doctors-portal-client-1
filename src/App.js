import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Navber from "./pages/Shared/Navber/Navber";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      {/* <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
