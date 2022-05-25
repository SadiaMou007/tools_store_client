import React from "react";
import bgBanner from "../../assets/images/tools1.png";
import GradientBtn from "../Shared/GradientBtn";

const Contact = () => {
  return (
    <div
      className=" mb-24 mt-12 text-white rounded py-12"
      style={{
        background: `url(${bgBanner})`,
      }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-mono uppercase my-3 text-primary">
          stay connected with us
        </h2>
      </div>
      <div className="w-1/2 mx-auto ">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-md w-full my-3 text-primary"
        />
        <input
          type="number"
          placeholder="Phone no"
          className="input input-bordered input-md w-full my-3 text-primary"
        />
        <textarea
          className="textarea textarea-bordered w-full my-3 text-primary"
          placeholder="Your Message"
        ></textarea>
        <button className="btn btn-outline w-full">SUBMIT</button>
      </div>
    </div>
  );
};

export default Contact;
