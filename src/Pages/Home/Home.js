import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Reviews from "./Reviews";
import Sale from "./Sale";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Reviews />
      <Sale />
      <Contact />
    </div>
  );
};

export default Home;
