import React from "react";
import MainBtn from "../../../Shared/MainBtn/MainBtn";

const EachAvailableAppointment = ({ availableAppointment }) => {
  const { treatmentName, slots, _id } = availableAppointment;
  console.log(availableAppointment);
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{treatmentName}</h2>

        <div>
          {slots.map((slot, index) => (
            <p className="text-sm mb-0" key={index}>
              {slot}
            </p>
          ))}
        </div>
        <div class="card-actions block mt-auto">
          <MainBtn>BOOK APPOINTMENT</MainBtn>
        </div>
      </div>
    </div>
  );
};

export default EachAvailableAppointment;
