import React from "react";

const GradientBtn = ({ children }) => {
  return (
    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-accent to-primary">
      {children}
    </button>
  );
};

export default GradientBtn;
