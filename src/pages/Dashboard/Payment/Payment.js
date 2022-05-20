import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Payment = () => {
  const { id } = useParams();

  const { data: appointment, isLoading } = useQuery(
    "paymentForAppointmentById",
    () =>
      fetch(`http://localhost:5000/appointmentById/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { date, email, patientName, slot, treatmentName, price } = appointment;

  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col ">
          <div class="card md:w-[460px] bg-base-100 shadow-xl">
            <div class="card-body">
              <p className="text-secondary">Hello, {patientName}</p>
              <p className="card-title">Please pay for, {treatmentName}</p>
              <p>
                Your appointment {date} at {slot}, Total payable ${price}
              </p>
            </div>
          </div>
          <div class="card md:w-[460px] bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Payment Card</h2>
              <p>This is going to be payment element form stripe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
