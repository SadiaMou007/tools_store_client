import React from "react";
import { Link } from "react-router-dom";
import errImg from "../../assets/images/pageNotFound.png";

const NotFoundPage = () => {
  return (
    <div className="hero h-[90vh] w-full bg-red-200">
      <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1 ">
        <div className="mb-2 text-center">
          <h1 className="text-6xl font-bold text-error">404!</h1>
          <h1 className="text-6xl font-bold text-error mb-3">Page Not Found</h1>
          <Link to={"/home"}>
            {" "}
            <button className="btn btn-outline">GO BACK HOME</button>
          </Link>
        </div>
        <div>
          <img src={errImg} alt="" className="w-full h-96 rounded" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
