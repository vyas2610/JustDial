import React from "react";

import slider1 from "../../images/slider-1.webp";

import img1 from "../../images/img1.webp";
import HomeCategories from "./HomeCategories";

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
      {/* <div className="container bg-w flex py-5  mx-auto bg-white p-5 flex-col ">
        
        <div className="flex gap-10 ">
          <div className="w-1/6">
            <div className="flex flex-col gap-4">
              <div className="border p-1 rounded-lg">
                <img src={img1} alt="" width="60" />
              </div>
              <div className="text-center font-bold text-xs">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <div className="flex flex-col ">
              <div className="">
                <img src={img1} alt="" width="w-100" />
              </div>
              <div className="text-center">
                <p>Restaurants</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomeScreen;
