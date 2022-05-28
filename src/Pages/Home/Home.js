import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Reviews from "./Reviews";
import Sale from "./Sale";
import Tools from "./Tools";
import BusinessSummery from "./BusinessSummery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Reviews />
      <BusinessSummery />
      <Sale />
      <Contact />
    </div>
  );
};

export default Home;
