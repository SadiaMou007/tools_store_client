import React from "react";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  BadgeCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

const BusinessSummery = () => {
  return (
    <div className=" my-12 shadow-lg p-6 bg-primary">
      <h2 className="text-3xl text-center my-4">BUSINESS SUMMERY</h2>
      <h2 className="text-xl text-center mb-4">
        WE ARE HERE TO PROVIDE YOU BEST SERVICE
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-12">
        <div className="shadow-md flex flex-col justify-center items-center p-6 mb-3">
          <UserGroupIcon className="h-16 w-16 text-yellow-200" />
          <h2 className="text-3xl font-bold my-2">125+ </h2>
          <h2 className="text-xl ">Customer Clients </h2>
        </div>
        <div className="shadow-md flex flex-col justify-center items-center p-6 mb-3">
          <CurrencyDollarIcon className="h-16 w-16 text-yellow-200" />
          <h2 className="text-3xl font-bold my-2">20% </h2>
          <h2 className="text-xl ">Discount Product </h2>
        </div>
        <div className="shadow-md flex flex-col justify-center items-center p-6 mb-3">
          <BadgeCheckIcon className="h-16 w-16 text-yellow-200" />
          <h2 className="text-3xl font-bold my-2">78+ </h2>
          <h2 className="text-xl ">Customer Review </h2>
        </div>
        <div className="shadow-md flex flex-col justify-center items-center p-6 mb-3">
          <ChartBarIcon className="h-16 w-16 text-yellow-200" />
          <h2 className="text-3xl font-bold my-2">17% </h2>
          <h2 className="text-xl ">Increment </h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
