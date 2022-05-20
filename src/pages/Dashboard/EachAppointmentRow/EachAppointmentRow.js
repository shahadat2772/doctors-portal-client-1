import React from "react";
import { Link } from "react-router-dom";

const EachAppointmentRow = ({ appointment, index }) => {
  const { treatmentName, patientName, slot, _id } = appointment;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{patientName}</td>
      <td>{treatmentName}</td>
      <td>{slot}</td>
      <td>
        {appointment?.paid && (
          <div>
            <p className="text-green-500 text-sm">PAID</p>
            <p>
              Transaction id:{" "}
              <span className="text-green-500 text-sm">
                {appointment.transactionId}
              </span>
            </p>
          </div>
        )}
        {appointment?.paid || (
          <button className="btn btn-xs btn-secondary">
            <Link to={`payment/${_id}`}>PAY</Link>
          </button>
        )}
      </td>
    </tr>
  );
};

export default EachAppointmentRow;
