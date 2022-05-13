import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomePageTreatments from "../HomePageTreatments/HomePageTreatments/HomePageTreatments";
import Info from "../Info/Info";
import Testimonial from "../Testimonials/Testimonials/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Info></Info>
      <HomePageTreatments></HomePageTreatments>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
