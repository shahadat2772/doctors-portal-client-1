import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomePageTreatments from "../HomePageTreatments/HomePageTreatments/HomePageTreatments";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import StayConnected from "../StayConnected/StayConnected";
import Testimonial from "../Testimonials/Testimonials/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Info></Info>
      <HomePageTreatments></HomePageTreatments>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <StayConnected></StayConnected>
    </div>
  );
};

export default Home;
