import React from "react";
import { useForm } from "react-hook-form";

const StayConnected = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/thZvpDP/appointment.png')`,
      }}
      class="hero min-h-screen"
    >
      <div class="hero-content">
        <form className="w-[440px]" onSubmit={handleSubmit(onSubmit)}>
          <h3 className=" text-center text-xl text-secondary">Contact Us</h3>
          <h2 className="mb-2 text-center text-white md:text-4xl text-2xl mt-2">
            Stay connected with us
          </h2>
          <input
            placeholder="Email"
            className=" p-2 w-full mt-4 h-[45px] rounded-lg"
            {...register("email")}
          />
          <input
            placeholder="Subject"
            className=" p-2 w-full mt-4 h-[45px] rounded-lg"
            {...register("subject")}
          />
          <textarea
            placeholder="Your Message"
            className=" p-2 w-full mt-4 h-36 rounded-lg"
            {...register("message")}
          />
          <input
            className="block mx-auto mt-4 text-white bg-gradient-to-r from-secondary to-primary p-2 rounded-lg w-[150px]"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default StayConnected;
