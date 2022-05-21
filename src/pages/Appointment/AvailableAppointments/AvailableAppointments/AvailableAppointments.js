import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import EachAvailableAppointment from "../EachAvailableAppointment/EachAvailableAppointment";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

const AvailableAppointments = ({ dateState }) => {
  const [selectedDate, setSelectedDate] = dateState;

  // console.log(selectedDate);

  // const [availableAppointments, setAvailableAppointments] = useState([]);

  const [appointmentForBook, setAppointmentForBook] = useState(null);

  // useEffect(() => {
  //   console.log(selectedDate);
  //   const formattedDate = format(selectedDate, "PP");
  //   if (formattedDate) {
  //     fetch(`http://localhost:5000/availableServices?date=${formattedDate}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setAvailableAppointments(data);
  //       });
  //   }
  // }, [selectedDate]);

  const formattedDate = format(selectedDate, "PP");

  const {
    data: availableAppointments,
    isLoading,
    refetch,
  } = useQuery(["availableServices", selectedDate, formattedDate], () =>
    fetch(`http://localhost:5000/availableServices?date=${formattedDate}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

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
