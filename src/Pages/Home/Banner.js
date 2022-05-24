import React from "react";
import bgBanner from "../../assets/images/tools1.png";
import tools from "../../assets/images/re.png";
import GradientBtn from "../Shared/GradientBtn";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        background: `url(${bgBanner})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="mb-2">
          <h1 className="text-5xl font-bold text-primary px-2">
            Big Choice for Your Production!
          </h1>
          <p className="p-6">
            We provide the best quality tools for your daily activity. If you
            are searching for and efficient tools store, Here is the place for
            you to find your desire products.
          </p>
          <div className="px-6">
            {" "}
            <GradientBtn>SEE MORE</GradientBtn>
          </div>
        </div>
        <div className="h-full">
          <img src={tools} className="max-w-lg rounded-lg shadow-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
