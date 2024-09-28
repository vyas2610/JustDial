import React from "react";

import slider1 from "../../images/slider-1.webp";

import img1 from "../../images/img1.webp";
import HomeCategories from "./HomeCategories";

import catimg from "../../images/hkim_banquethall.png";

import expl from "../../images/Explorecities_Mumbai.png";

const HomeScreen = () => {
  return (
    <>
      <div className="container mx-auto py-5 bg-white font-bold">
        <div className="flex px-5 items-center">
          <div className="flex flex-col py-5">
            <div>
              <h1 className="text-2xl">
                Search across ' 5.6 Crore+'
                <span className="text-cyan-500">Products & Services</span>
              </h1>
            </div>
            <div>
              <div className="lg:flex gap-2">
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Select Location"
                  autoComplete="location"
                  className=""
                />

                <div className="border-2  flex items-center rounded">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Search for packages "
                    autoComplete="location"
                    className="grow outline-none px-3 py-2"
                  />
                  <span>icon</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ms-auto border p-3 ">Download App</div>
        </div>
      </div>
      <div className="container flex py-3 mx-auto bg-white px-5 gap-3">
        <div className="w-1/2">
          <img
            src={slider1}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-1/2 gap-5">
          <div className="wrap w-1/4 bg-blue-600 rounded-lg overflow-hidden">
            <div className="flex flex-col  px-5 text-white hover:scale-95">
              <div className="">
                <h1 className="font-bold">B2B</h1>
                <p>Quick Link</p>
              </div>
            </div>
            <img src={img1} loading="lazy" />
          </div>
          <div className="wrap w-1/4 bg-blue-900 rounded-lg">
            <img src={img1} loading="lazy" />
          </div>
          <div className="wrap w-1/4 bg-blue-950 rounded-lg">
            <img src={img1} loading="lazy" />
          </div>
          <div className="wrap w-1/4 bg-green-600 rounded-lg">
            <img src={img1} loading="lazy" />
          </div>
        </div>

        {/* Category */}
      </div>

      <HomeCategories />

      <div className=" container flex mx-auto bg-white p-5 gap-5">
        <div className="flex w-1/2 px-5 flex-col border border-gray-300 rounded-lg">
          <div className="p-2 font-bold">Wedding Requisites</div>
          <div className="flex f-c gap-3 py-4">
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
          </div>
        </div>
        <div className="flex w-1/2 px-5 flex-col border border-gray-300 rounded-lg">
          <div className="p-2 font-bold">Beauty & Spa</div>
          <div className="flex f-c gap-3 py-4">
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
          </div>
        </div>
      </div>

      <div className=" container flex mx-auto bg-white p-5 gap-5">
        <div className="flex w-1/2 px-5 flex-col border border-gray-300 rounded-lg">
          <div className="p-2 font-bold">Wedding Requisites</div>
          <div className="flex f-c gap-3 py-4">
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
          </div>
        </div>
        <div className="flex w-1/2 px-5 flex-col border border-gray-300 rounded-lg">
          <div className="p-2 font-bold">Beauty & Spa</div>
          <div className="flex f-c gap-3 py-4">
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
            <div className="w-1/3">
              <img src={catimg} alt="" className="wrap" />
            </div>
          </div>
        </div>
      </div>

      {/* Bills & Recharge --- Travel Booking */}

      <div className="container flex flex-col p-5 bg-white mx-auto">
        <div className="flex border p-4 rounded-lg">
          <div className="w-1/4 p-4 leading-10">
            <h1 className="font-bold text-2xl">Bills & Recharge</h1>
            <p className="leading-6 text-sm">
              Pay your bill & recharge instantly with justdial
            </p>
            <p className="text-sm text-blue-400 font-bold"> Explore More</p>
          </div>
          <div className="flex gap-10">
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
          </div>
        </div>
        <div className="flex border p-4 rounded-lg">
          <div className="w-1/4 p-4 leading-10">
            <h1 className="font-bold text-2xl">Travel Booking</h1>
            <p className="leading-6 text-sm">
              Instant ticket bookings for your best travel experience
            </p>
            <p className="text-sm text-blue-400 font-bold"> Explore More</p>
          </div>
          <div className="flex gap-10">
            <div className="w-1/3 py-2  hover:shadow  ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
            <div className="w-1/3 py-2 ">
              <img src={img1} alt="" width="100" className="border " />
              <p className="font-bold">Mobile</p>
            </div>
          </div>
        </div>

        {/* Explore City */}

        <div className="flex py-10 flex-col px-2">
          <div>
            <h1 className="font-bold text-2xl">Explore Top Cities new</h1>
          </div>
          <div>
            <p className="leading-6 text-sm">
              Dive into cities' unique vibes, from iconic landmarks to hidden
              gems.
            </p>
          </div>
          <div className="flex ">
            <div className="w-60 p-5 border">
              <div className="flex items-center">
                <div className="wrap">
                  <img src={expl} alt="" className=" " />
                </div>
                <div>MUMBAI </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
