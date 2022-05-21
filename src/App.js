import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import AddDoctor from "./pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import ManageDoctor from "./pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointments from "./pages/Dashboard/MyAppointments/MyAppointments";
import Payment from "./pages/Dashboard/Payment/Payment";
import Users from "./pages/Dashboard/Users/Users";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAdmin from "./pages/Login/RequireAdmin/RequireAdmin";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
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
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route
            path="/dashboard/myAppointments"
            element={<MyAppointments></MyAppointments>}
          ></Route>

          <Route
            path="/dashboard/myAppointments/payment/:id"
            element={<Payment></Payment>}
          ></Route>

          <Route
            path="/dashboard/addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="/dashboard/users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="/dashboard/manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
