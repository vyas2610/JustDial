import React from "react";
import image1 from "../../images/resfilter_banner_image.jpg";
import resImg from "../../images/i_indianflavours.jpg";
export const Restaurant = () => {
  return (
    <>
      <div className="container bg-white mx-auto">
        <div>
          <img src={image1} alt="" className=" " />
        </div>
        <div className="p-5">
          <div className="flex gap-10">
            <div className="w-1/4">
              <div>
                <img src={resImg} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-1/4">
              <div>
                <img src={resImg} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-1/4">
              <div>
                <img src={resImg} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-1/4">
              <div>
                <img src={resImg} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-1/4">
              <div>
                <img src={resImg} alt="" className="w-full" />
              </div>
            </div>
            <div className="w-1/4">
              <div>
                <img src={resImg} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
