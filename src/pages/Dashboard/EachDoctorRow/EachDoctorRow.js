import React, { useContext } from "react";
import { docDeleteContext } from "../Dashboard/Dashboard";

const EachDoctorRow = ({ doctor, index, refetch }) => {
  // console.log(doctor);
  // console.log(docDeleteContext);
  const { docForDelete, setDoctorDelete } = useContext(docDeleteContext);

  const { name, email, specialty, image } = doctor;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDoctorDelete({ doctor, refetch })}
          htmlFor="doc-delete-modal"
          className="btn  btn-xs"
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default EachDoctorRow;
