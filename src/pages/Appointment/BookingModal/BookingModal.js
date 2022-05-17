import { format } from "date-fns";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth } from "../../../firebase.init";

const BookingModal = ({
  selectedDate,
  appointmentForBook,
  setAppointmentForBook,
  refetch,
}) => {
  const { treatmentName, _id, slots } = appointmentForBook;

  // Getting current users info
  const [user, loading] = useAuthState(auth);
  const userEmail = user?.email;
  const userName = user?.displayName;

  // Handling booking button
  const handleBooking = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const patientName = e.target.name.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;

    const bookedAppointment = {
      treatmentName,
      date,
      slot,
      email,
      patientName,
      phoneNumber,
    };

    fetch("http://localhost:5000/bookAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedAppointment),
    })
      .then((res) => {
        if (res.status === 403) {
          refetch();
          setAppointmentForBook(null);
          toast.error(
            `You already have an appointment on ${treatmentName}, ${date}, at ${slot}`,
            { id: "bookingUnsuccess" }
          );
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data?.insertedId) {
          refetch();
          setAppointmentForBook(null);
          toast.success(
            `Appointment booked successfully,on ${treatmentName}, ${date}, at ${slot}`
          );
        }
        refetch();
        setAppointmentForBook(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-3 text-[18px]">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="pl-1 mb-3">{treatmentName}</h2>
          <form onSubmit={handleBooking}>
            <input
              name="date"
              disabled
              value={format(selectedDate, "PP")}
              className="w-full border h-[48px] rounded-lg mb-[23px] p-2"
            />
            <select
              name="slot"
              className="w-full border h-[48px] rounded-lg mb-[23px] p-2"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              disabled
              value={userEmail}
              name="email"
              placeholder="Email"
              className="w-full border h-[48px] rounded-lg mb-[23px] p-2"
            />
            <input
              disabled
              value={userName}
              name="name"
              placeholder="Name"
              className="w-full border h-[48px] rounded-lg mb-[23px] p-2"
            />
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full border h-[48px] rounded-lg mb-[23px] p-2"
            />

            <input
              className="w-full border h-[48px] rounded-lg  bg-accent text-white"
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
