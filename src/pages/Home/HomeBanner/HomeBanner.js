import React from "react";
import MainBtn from "../../Shared/MainBtn/MainBtn";

const HomeBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/8r9ZCnQ/bg.png')`,
        backgroundSize: `cover`,
      }}
      class="hero min-h-screen md:px-4"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/5MWmg5w/chair.png"
            class="rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <MainBtn>GET STARTED</MainBtn>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
