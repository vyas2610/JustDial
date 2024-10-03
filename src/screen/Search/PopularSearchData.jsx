import React from "react";
import adsImg from "../../images/ads.jpg";
const PopularSearchData = () => {
  return (
    <>
      <div className=" container mx-auto   bg-white">
        <img src={adsImg} alt="" srcset="" className="w-full" />

        {/* Heading & Filters */}
        <div className="flex py-5 p-5 flex-col">
          <div>
            <p className="text-gray-400 text-sm">
              Jodhpur | Interior Designers in Jodhpur | 526+ Listings
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">
              Popular Interior Designers in Jodhpur
            </h1>
          </div>
          <div></div>
        </div>

        {/* Data  */}
      </div>
    </>
  );
};

export default PopularSearchData;
