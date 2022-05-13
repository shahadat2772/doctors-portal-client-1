import React from "react";

const EachTestimonial = ({ testimonial }) => {
  const { userName, country, description, img } = testimonial;
  return (
    <div className="card w-80 md:w-96 shadow">
      <div className="p-4">
        <p className="text-sm pb-7">{description}</p>
        <div className="userInfo flex items-center">
          {/* Users avatar */}
          <div className="avatar ">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="users_photo" />
            </div>
          </div>
          <div className="subInfo pl-3">
            <h3 className="text-[20px]">{userName}</h3>
            <h6 className="text-[16px]">{country}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachTestimonial;
