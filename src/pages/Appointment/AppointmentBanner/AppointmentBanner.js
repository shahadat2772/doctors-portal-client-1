import React, { useState, useSyncExternalStore } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ dateState }) => {
  const [selectedDate, setSelectedDate] = dateState;

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/8r9ZCnQ/bg.png')`,
        backgroundSize: `cover`,
      }}
      className="min-h-screen hero"
    >
      <div className="hero-content gap-6 flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/5MWmg5w/chair.png"
            className=" md:max-w-lg  rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="flex-1 md:mx-16 w-full shadow">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
