import React, { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";
import DocDeleteModal from "../DocDeleteModal/DocDeleteModal";
import useDoctor from "../../../hooks/useDoctor";

export const docDeleteContext = createContext("docDeleteContext");

const Dashboard = () => {
  const [docForDelete, setDoctorDelete] = useState(null);

  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const [doctor, doctorLoading] = useDoctor(user);

  console.log(doctor);

  if (loading || adminLoading || doctorLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <docDeleteContext.Provider value={{ docForDelete, setDoctorDelete }}>
          <Outlet></Outlet>
        </docDeleteContext.Provider>
      </div>
      <div className="drawer-side">
        <label htmlFor="side-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard/myAppointments"}>My Appointments</Link>
            <Link to={"/dashboard/myAppointments"}>Reviews</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to={"/dashboard/users"}>Users</Link>
              </li>
              <li>
                <Link to={"/dashboard/addDoctor"}>Add Doctor</Link>
              </li>
              <li>
                <Link to={"/dashboard/manageDoctors"}>Manage Doctor</Link>
              </li>
            </>
          )}
          {doctor && (
            <li>
              <Link to={"/dashboard"}>Meetings</Link>
            </li>
          )}
        </ul>
      </div>
      {docForDelete && (
        <DocDeleteModal
          setDoctorDelete={setDoctorDelete}
          docForDelete={docForDelete.doctor}
          refetch={docForDelete.refetch}
        ></DocDeleteModal>
      )}
    </div>
  );
};

export default Dashboard;
