import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="hero h-[90vh] w-full bg-red-200">
      <div className="hero-content ">
        <div className="mb-2 text-center">
          <h1 className="text-5xl font-bold text-error">404!</h1>
          <h1 className="text-5xl font-bold text-error mb-3">Page Not Found</h1>
          <Link to={"/home"}>
            {" "}
            <button className="btn btn-outline">GO BACK HOME</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
