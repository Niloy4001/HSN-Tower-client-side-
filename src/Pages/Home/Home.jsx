import React from "react";
// import Banner from "./Banner";
import About from "./About";
import Coupon from "./Coupon";
import Location from "./Location";
import Banner1 from "./Banner1";
import Reviews from "./Reviews";
import FeaturedApartments from "./FeaturedApartments";
import WhyHSNTower from "./WhyHSNTower";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="space-y-9 md:space-y-20">
      {/* <Banner></Banner> */}
      <Banner1></Banner1>
      <About></About>
      <FeaturedApartments></FeaturedApartments>
      <Coupon></Coupon>
      <WhyHSNTower></WhyHSNTower>
      <Location></Location>
      <Reviews></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
