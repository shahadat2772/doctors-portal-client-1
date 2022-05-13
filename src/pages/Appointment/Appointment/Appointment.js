import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  console.log(selectedDate);

  return (
    <div>
      <AppointmentBanner
        dateState={[selectedDate, setSelectedDate]}
      ></AppointmentBanner>
      <AvailableAppointments
        dateState={[selectedDate, setSelectedDate]}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
