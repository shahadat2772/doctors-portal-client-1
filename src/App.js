import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Navber from "./pages/Shared/Navber/Navber";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={<Appointment></Appointment>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
