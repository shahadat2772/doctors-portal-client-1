import React, { useEffect, useState } from "react";
import quote from "../../../../assets/icons/quote.svg";
import EachTestimonial from "../EachTestimonial/EachTestimonial";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="mb-28">
      {/* Upper part */}
      <div className="upperTestimonialPart flex items-center justify-between px-3 ">
        <div className="">
          <h2 className="text-xl font-medium text-secondary">Testimonial</h2>
          <h1 className="text-2xl md:text-4xl mt-1">What Our Patients Says</h1>
        </div>
        <div className="w-24 md:w-36">
          <img className="" src={quote} alt="" />
        </div>
      </div>
      {/* Upper part */}
      <div className="lowerTestimonialPart grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-[40px]">
        {testimonials.map((testimonial) => (
          <EachTestimonial
            key={testimonial._id}
            testimonial={testimonial}
          ></EachTestimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
