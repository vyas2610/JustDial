import React from "react";
import { CiStar } from "react-icons/ci";
import { FaPhone, FaStar } from "react-icons/fa";
import { FaPencil, FaShare, FaWhatsapp } from "react-icons/fa6";
import img1 from "../../images/afzal-mao-restaurant-masjid-bunder-mumbai-restaurants-g2bc6c31bd.jpg";

export const DataDesc = () => {
  return (
    <>
      <div className=" container mx-auto bg-white p-5">
        <p className=" text-xs">
          Kalyan | Restaurants In Kalyan | Restaurants in Kalyan West | Hotel
          Leela
        </p>

        <div className="flex mt-5">
          <div className="text-2xl font-bold"> Alfaz Mao Restaurnat </div>
          <div className="ms-auto text-sm text-gray-300 bg-slate-200 rounded-sm p-1">
            Restaurnats
          </div>
        </div>
        <div className="flex mt-5">
          <div className="flex font-bold gap-5">
            <div>Masjid Bunder, Mumbai </div>
            <div className="text-sm">
              <span className="text-green-600">Open </span> until 12:00 am
            </div>
            <div> ₹ 1050 Price for two</div>
            <div> 24 Years in Business</div>
          </div>
          <div className="ms-auto text-sm">Click to Rate</div>
        </div>

        <div className="flex mt-5 items-center">
          <div className="flex font-bold gap-5 items-center">
            <div className="flex flex-row items-center gap-2  border px-4 py-2 rounded-xl bg-green-700 text-white shadow-md">
              <div className="text-white-500 text-2xl">
                <FaPhone></FaPhone>
              </div>
              <div>09972349574</div>
            </div>
            <div className="flex flex-row items-center gap-2  border px-4 py-2 rounded-xl border-green-700 shadow-md">
              <div className="text-green-500 text-2xl">
                <FaWhatsapp></FaWhatsapp>
              </div>
              <div>WhatsApp</div>
            </div>
            <div className="text-2xl text-gray-500 border rounded-2xl px-4 py-2 shadow-md">
              <FaShare></FaShare>
            </div>
            <div className="text-2xl text-gray-500 border rounded-2xl px-4 py-2 shadow-md">
              <FaPencil></FaPencil>
            </div>
          </div>
          <div className="ms-auto text-sm">
            <div className="flex flex-row gap-4">
              <div className="text-4xl border rounded-xl border-gray-200 p-1 shadow">
                <CiStar />
              </div>
              <div className="text-4xl border rounded-xl border-gray-200 p-1 shadow">
                <CiStar />
              </div>
              <div className="text-4xl border rounded-xl border-gray-200 p-1 shadow">
                <CiStar />
              </div>
              <div className="text-4xl border rounded-xl border-gray-200 p-1 shadow">
                <CiStar />
              </div>
              <div className="text-4xl border rounded-xl border-gray-200 p-1 shadow">
                <CiStar />
              </div>
            </div>
          </div>
        </div>

        <div className="flex py-6 gap-10 text-xl">
          <div className="border-b-4 py-1 border-blue-500 text-blue-500">
            Overview
          </div>
          <div className="">Menu</div>
          <div className="">Quick Info</div>
          <div className="">Services</div>
          <div className="">Photos</div>
          <div className="">Key Insights</div>
          <div className="">Reviews</div>
        </div>
        <div className="flex gap-5">
          <div className="w-4/5 p-5 border rounded-xl border-gray-300">
            <h2 className="font-bold text-xl">Quick Information</h2>
            <p className="text-gray-400 mt-6">Business Summary</p>
            <p className="text-bold">
              Banquet hall providing exceptional services and facilities for
              conferences, exhibitions, seminars, and board meetings.
            </p>
            <p className="text-gray-400 mt-6">Year of Estalishment</p>
            <p className="text-bold">1995</p>

            <h2 className="text-xl font-bold">Menu</h2>
            <div className="flex gap-5">
              <div className="w-60">
                <img src={img1} alt="" srcset="" className="w-full" />
              </div>
              <div className="w-60">
                <img src={img1} alt="" srcset="" className="w-full" />
              </div>
            </div>
            <div className="mt-5">
              <button className="bg-blue-600 px-5 py-3 font-bold rounded-xl text-white">
                Upload Images
              </button>
            </div>

            <div className="mt-5">
              <h2 className="font-bold text-xl">Questions & Answers</h2>
              <p className="text-gray-400">
                Would you like to ask a question ?
              </p>
              <div>
                <button className=" rounded border px-5 py-3 text-blue-700 border-blue-700 ">
                  Post your Question
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/5  p-5 border rounded-xl border-gray-300">
            <h2 className="text-xl font-bold">Contact</h2>
          </div>
        </div>
      </div>
    </>
  );
};
