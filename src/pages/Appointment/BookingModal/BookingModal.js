import { format } from "date-fns";
import React from "react";

const BookingModal = ({
  selectedDate,
  appointmentForBook,
  setAppointmentForBook,
}) => {
  const { treatmentName, _id, slots } = appointmentForBook;

  const handleBooking = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;

    console.log({ date, slot, name, phoneNumber, email, treatmentName });
    setAppointmentForBook(null);
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
              name="email"
              placeholder="Email"
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
