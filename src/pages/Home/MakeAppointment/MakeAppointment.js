import React from "react";
import MainBtn from "../../Shared/MainBtn/MainBtn";

const MakeAppointment = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/thZvpDP/appointment.png')`,
      }}
      class="md:flex justify-center items-center my-20 px-6 "
    >
      <div className="flex-1">
        <img
          src="https://i.ibb.co/6Nysx9m/doctor-small.png"
          class="mt-[-120px]"
          alt="DOC"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-xl mb-2 text-primary">Appointment</h4>
        <h1 class="text-4xl font-bold text-white">Make an appointment Today</h1>
        <p class="py-6 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="pb-2">
          <MainBtn>GET STARTED</MainBtn>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
