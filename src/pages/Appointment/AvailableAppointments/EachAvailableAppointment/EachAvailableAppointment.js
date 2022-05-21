import React from "react";
import { useQuery } from "react-query";
const EachAvailableAppointment = ({
  availableAppointment,
  setAppointmentForBook,
}) => {
  const { treatmentName, slots, _id, price } = availableAppointment;

  const { data: specialist, isLoading } = useQuery(
    ["specialist", treatmentName],
    () =>
      fetch(`http://localhost:5000/doctor/${treatmentName}`).then((res) =>
        res.json()
      )
  );

  console.log(specialist);

  return (
    <div className="card w-96 bg-base-100 shadow">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{treatmentName}</h2>
        {specialist && <h2 className="">Doc, {specialist.name}</h2>}
        <div>{slots[0]}</div>
        <div>{slots.length} SPACES AVAILABLE</div>
        <div>at ${price}</div>
        <div className="card-actions block mt-auto">
          <label
            disabled={slots.length === 0}
            onClick={() => setAppointmentForBook(availableAppointment)}
            htmlFor="bookingModal"
            className="btn bg-gradient-to-r  py-0 from-secondary border-0 to-primary text-white text-sm"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachAvailableAppointment;
