import React from "react";

const EachAvailableAppointment = ({
  availableAppointment,
  setAppointmentForBook,
}) => {
  const { treatmentName, slots, _id } = availableAppointment;

  return (
    <div className="card w-96 bg-base-100 shadow">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{treatmentName}</h2>

        <div>
          {slots.map((slot, index) => (
            <p className="text-sm mb-0" key={index}>
              {slot}
            </p>
          ))}
        </div>
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
