import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[-30px] justify-items-center">
      {/* INFO-1 */}
      <div class="card w-[350px] md:w-[375px] p-4 lg:card-side bg-gradient-to-r from-secondary to-primary text-white">
        <figure>
          <img src={clock} alt="Album" />
        </figure>
        <div class="card-body  p-4">
          <h2 class="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      {/* INFO-2 */}
      <div class="card w-[350px] md:w-[375px] p-4 lg:card-side bg-accent text-white">
        <figure>
          <img src={marker} alt="Album" />
        </figure>
        <div class="card-body  p-4">
          <h2 class="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      {/* INFO-3 */}
      <div class="card w-[350px] md:w-[375px] p-4 lg:card-side bg-gradient-to-r from-secondary to-primary text-white">
        <figure>
          <img src={phone} alt="Album" />
        </figure>
        <div class="card-body  p-4">
          <h2 class="card-title">Contact us now</h2>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
