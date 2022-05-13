import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import EachAvailableAppointment from "../EachAvailableAppointment/EachAvailableAppointment";

const AvailableAppointments = ({ dateState }) => {
  const [selectedDate, setSelectedDate] = dateState;

  const [availableAppointments, setAvailableAppointments] = useState([]);

  const [appointmentForBook, setAppointmentForBook] = useState(null);

  useEffect(() => {
    fetch("availableAppointment.json")
      .then((res) => res.json())
      .then((data) => setAvailableAppointments(data));
  }, []);

  return (
    <div className="my-24">
      <h2 className="text-center text-secondary text-[22px] ">
        Available Appointments on {format(selectedDate, "PP")}
      </h2>

      <div className="appointments grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-20">
        {availableAppointments.map((availableAppointment) => (
          <EachAvailableAppointment
            key={availableAppointment._id}
            setAppointmentForBook={setAppointmentForBook}
            availableAppointment={availableAppointment}
          ></EachAvailableAppointment>
        ))}
      </div>

      {/* Setting appointment for book */}
      {appointmentForBook && (
        <BookingModal
          selectedDate={selectedDate}
          appointmentForBook={appointmentForBook}
          setAppointmentForBook={setAppointmentForBook}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
