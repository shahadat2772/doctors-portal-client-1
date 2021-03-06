import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const EachAppointmentRow = ({ appointment, index }) => {
  const { treatmentName, patientName, slot, _id, date } = appointment;

  const today = new Date();

  const currentDate = format(today, "PP");
  // console.log(formatedDate);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{patientName}</td>
      <td>{treatmentName}</td>
      <td>{slot}</td>
      <td className={`${currentDate === date && "bg-green-200"}`}>{date}</td>
      <td>
        {appointment.paid ? (
          <></>
        ) : (
          <>
            <button className="btn text-white btn-xs btn-secondary">
              <Link to={`payment/${_id}`}>PAY</Link>
            </button>
          </>
        )}
        {appointment?.paid && (
          <div>
            <p className="text-green-500 text-sm">PAID</p>
            <p className="text-green-500">
              Transaction id:{" "}
              <span className="text-orange-500">
                {appointment.transactionId}
              </span>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default EachAppointmentRow;
