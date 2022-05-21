import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import EachDoctorRow from "../EachDoctorRow/EachDoctorRow";

const ManageDoctor = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
