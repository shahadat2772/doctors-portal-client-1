import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomePageTreatments from "../HomePageTreatments/HomePageTreatments/HomePageTreatments";
import Info from "../Info/Info";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Info></Info>
      <HomePageTreatments></HomePageTreatments>
    </div>
  );
};

export default Home;
