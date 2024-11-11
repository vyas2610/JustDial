import React from "react";
import img from "./../../../images/articls.jpg";
import { Data } from "./RelatedData";

const RelatedtArticals = () => {
  return (
    <>
      <div className=" container flex bg-white mx-auto p-5 flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold">Related Articals</h1>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-7 ">
            {Data.map((items) => (
              <div className="border rounded p-2">
                <div className="group overflow-hidden">
                  <img
                    src={items.image}
                    alt=""
                    className="wrap group-hover:scale-125 transition-all"
                  />
                </div>
                <p className="py-2 text-justify leading-7">{items.data}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="font-bold rounded-b-lg border px-10 py-3 border-blue-600 text-blue-600">
              {" "}
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedtArticals;
