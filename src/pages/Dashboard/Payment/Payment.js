import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L105BIxM8sRxo2mh9agH6bogilwho5NgGj1UqtzfXtlLoaBTG4ufhc31Kem5Og0H5bfx1cfv87lGEZTNgDWGTTR007hgLkB5x"
);

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
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
