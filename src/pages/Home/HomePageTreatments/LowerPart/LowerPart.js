import React from "react";
import MainBtn from "../../../Shared/MainBtn/MainBtn";

const LowerPart = () => {
  return (
    <div className="hero min-h-screen md:px-16 pb-24 mt-[80px]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/1bdwC5f/treatment.png"
            className="md:max-w-sm mx-auto rounded-lg shadow-2xl"
            alt="exeptional treatment"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <MainBtn>GET STARTED</MainBtn>
        </div>
      </div>
    </div>
  );
};

export default LowerPart;
