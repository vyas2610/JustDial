import React from "react";
import brands from "../../../images/brands.png";
const PopularBrands = () => {
  return (
    <>
      <div className="flex container bg-white mx-auto flex-col p-4 gap-4">
        <div>
          <h1 className="font-bold text-2xl ">Popular Brands</h1>
        </div>
        <div>
          <div className="flex gap-x-5">
            <div className="w-1/3">
              <img src={brands} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={brands} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={brands} alt="" className="wrap" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularBrands;
