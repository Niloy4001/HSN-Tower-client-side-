import React from "react";
// import Banner from "./Banner";
import About from "./About";
import Coupon from "./Coupon";
import Location from "./Location";
import Banner1 from "./Banner1";

const Home = () => {
  return (
    <div className="space-y-9 md:space-y-20">
      {/* <Banner></Banner> */}
      <Banner1></Banner1>
      <About></About>
      <Coupon></Coupon>
      <Location></Location>
    </div>
  );
};

export default Home;
