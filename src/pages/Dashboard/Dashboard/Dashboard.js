import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="side-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"myAppointments"}>My Appointments</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to={"users"}>Add Doctor</Link>
              </li>
              <li>
                <Link to={"users"}>Manage Doctor</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
