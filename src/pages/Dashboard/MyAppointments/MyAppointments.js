import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import EachAppointmentRow from "../EachAppointmentRow/EachAppointmentRow";

const MyAppointments = () => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const email = user?.email;

  const { data: appointments, isLoading } = useQuery(
    ["appointments", user],
    () =>
      fetch(`http://localhost:5000/appointments/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      }).then((res) => {
        console.log(res.status);
        if (res.status === 403 || res.status === 401) {
          window.localStorage.removeItem("accessToken");
          signOut(auth);
          navigate("/login");
          return;
        } else {
          return res.json();
        }
      })
  );

  return (
    <div className="m-6">
      <h2 className="text-2xl">My appointments {appointments?.length}</h2>
      <div className="appointmentsContainer mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head -->    */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Service</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {appointments?.map((appointment, index) => (
                <EachAppointmentRow
                  index={index}
                  key={appointment._id}
                  appointment={appointment}
                ></EachAppointmentRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
