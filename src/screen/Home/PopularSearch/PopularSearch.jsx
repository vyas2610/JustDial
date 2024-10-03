import React from "react";

import img1 from "../../../images/img1.webp";
import { Link } from "react-router-dom";
const PopularSearch = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-2xl">Popular Seaerches</h1>
      </div>
      <div className="flex py-5 gap-3 ">
        <div className="flex flex-col border rounded-xl">
          <Link to="popularSearch">
            <div className="flex flex-col">
              <div>
                <img src={img1} alt="" className="wrap" />
              </div>
              <div className=" flex bg-blue-600 flex-col  gap-5 p-3">
                <div className="font-bold  text-white">Interial Designers</div>
                <div className="bg-white rounded-lg p-2 w-32 text-blue-400 font-bold">
                  Enquire Now
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col border rounded-xl">
          <div className="flex flex-col">
            <div>
              <img src={img1} alt="" className="wrap" />
            </div>
            <div className=" flex bg-blue-600 flex-col  gap-5 p-3">
              <div className="font-bold  text-white">Interial Designers</div>
              <div className="bg-white rounded-lg p-2 w-32 text-blue-400 font-bold">
                Enquire Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl">
          <div className="flex flex-col">
            <div>
              <img src={img1} alt="" className="wrap" />
            </div>
            <div className=" flex bg-blue-600 flex-col  gap-5 p-3">
              <div className="font-bold  text-white">Interial Designers</div>
              <div className="bg-white rounded-lg p-2 w-32 text-blue-400 font-bold">
                Enquire Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl">
          <div className="flex flex-col">
            <div>
              <img src={img1} alt="" className="wrap" />
            </div>
            <div className=" flex bg-blue-600 flex-col  gap-5 p-3">
              <div className="font-bold  text-white">Interial Designers</div>
              <div className="bg-white rounded-lg p-2 w-32 text-blue-400 font-bold">
                Enquire Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl">
          <div className="flex flex-col">
            <div>
              <img src={img1} alt="" className="wrap" />
            </div>
            <div className=" flex bg-blue-600 flex-col  gap-5 p-3">
              <div className="font-bold  text-white">Interial Designers</div>
              <div className="bg-white rounded-lg p-2 w-32 text-blue-400 font-bold">
                Enquire Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl">
          <div className="flex flex-col">
            <div>
              <img src={img1} alt="" className="wrap" />
            </div>
            <div className=" flex bg-blue-600 flex-col  gap-5 p-3">
              <div className="font-bold  text-white">Interial Designers</div>
              <div className="bg-white rounded-lg p-2 w-32 text-blue-400 font-bold">
                Enquire Now
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl">
          <div className="flex flex-col">
            <div>
              <img src={img1} alt="" className="wrap" />
            </div>
            <div className=" flex bg-blue-600 flex-col  gap-5 p-3">
              <div className="font-bold  text-white">Interial Designers</div>
              <div className="bg-white rounded-lg p-2 w-32 text-blue-400 font-bold">
                Enquire Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularSearch;
