import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import EachAvailableAppointment from "../EachAvailableAppointment/EachAvailableAppointment";
import { useQuery } from "react-query";

const AvailableAppointments = ({ dateState }) => {
  const [selectedDate, setSelectedDate] = dateState;

  // const [availableAppointments, setAvailableAppointments] = useState([]);

  const [appointmentForBook, setAppointmentForBook] = useState(null);

  const formattedDate = format(selectedDate, "PP");

  // useEffect(() => {

  // }, [selectedDate]);

  const {
    data: availableAppointments,
    isLoading,
    refetch,
  } = useQuery(["availableServices", selectedDate], () =>
    fetch(`http://localhost:5000/availableServices?date=${formattedDate}`).then(
      (res) => res.json()
    )
  );

  return (
    <div className="my-24">
      <h2 className="text-center text-secondary text-[22px] ">
        Available Appointments on {format(selectedDate, "PP")}
      </h2>

      <div className="appointments grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-20">
        {availableAppointments?.map((availableAppointment) => (
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
          refetch={refetch}
          selectedDate={selectedDate}
          appointmentForBook={appointmentForBook}
          setAppointmentForBook={setAppointmentForBook}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
