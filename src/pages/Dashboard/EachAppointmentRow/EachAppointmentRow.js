import React from "react";

const EachAppointmentRow = ({ appointment, index }) => {
  const { treatmentName, patientName, slot } = appointment;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{patientName}</td>
      <td>{treatmentName}</td>
      <td>{slot}</td>
    </tr>
  );
};

export default EachAppointmentRow;
