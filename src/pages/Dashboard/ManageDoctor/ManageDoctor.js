import { signOut } from "firebase/auth";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import EachDoctorRow from "../EachDoctorRow/EachDoctorRow";

const ManageDoctor = () => {
  const navigate = useNavigate();

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        window.localStorage.removeItem("accessToken");
        navigate("/login");

        return;
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl">Manage DOCTOR</h2>

      <div className="manageDoctorContainer mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {doctors?.map((doctor, index) => (
                <EachDoctorRow
                  refetch={refetch}
                  index={index}
                  key={index}
                  doctor={doctor}
                ></EachDoctorRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;
