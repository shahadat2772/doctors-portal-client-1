import React from "react";
import UpperPart from "../UpperPart/UpperPart";

const HomePageTreatments = () => {
  return (
    <div className="mt-[120px]">
      <h3 className="text-[20px] font-medium text-center text-primary">
        OUR SERVICES
      </h3>
      <h2 className="md:text-4xl text-2xl font-normal text-center">
        Services We Provide
      </h2>
      {/* Treatments */}
      <UpperPart></UpperPart>
    </div>
  );
};

export default HomePageTreatments;
