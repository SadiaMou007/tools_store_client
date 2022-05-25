import React from "react";
import img1 from "../../assets/images/tools/screqDriver.png";
import img2 from "../../assets/images/tools/hammer.png";
import img3 from "../../assets/images/tools/axe.png";
import GradientBtn from "../Shared/GradientBtn";

const Sale = () => {
  const sale = [
    { name: "SCREW DRIVER", p1: 10, p2: 8, img: img1 },
    { name: "HAMMER", p1: 15, p2: 13, img: img2 },
    { name: "AXE", p1: 20, p2: 16, img: img3 },
  ];

  return (
    <div className="bg-secondary mx-12 rounded p-3">
      <h2 className="my-3 text-center text-3xl">PRODUCT ON SALE THIS WEEK</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {sale.map((product, index) => (
          <div
            key={index}
            className="mx-auto bg-white p-2 shadow-lg rounded my-4 w-3/4 text-center"
          >
            <img src={product.img} classNam="w-full h-24" alt="" />
            <h2 className="my-3 text-2xl text-primary">{product.name}</h2>
            <div className="flex justify-center gap-4 text-xl mb-3">
              <p className="font-bold">Price:</p>
              <p className=" line-through text-error">${product.p1}</p>
              <p className="text-success">${product.p2}</p>
            </div>
            <GradientBtn>BUY NOW</GradientBtn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
