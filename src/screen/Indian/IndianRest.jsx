import React from "react";
import image1 from "../../images/b_89.jpg";
import biryani from "../../images/biryani.jpg";
import { Link } from "react-router-dom";
export const IndianRest = () => {
  return (
    <>
      <div className="container mx-auto bg-white">
        <div>
          <img src={image1} alt="" className="w-full" />
        </div>

        <div className="p-5 font-bold">
          <h1>Indian Flavours</h1>

          <div className="flex my-6 flex-row gap-5">
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <Link to={"/popularSearch"}>
              <div className="w-full">Biryani</div>
              </Link>
            </div>
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
          </div>
          <div className="flex my-6 flex-row gap-5">
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
          </div>
          <div className="flex my-6 flex-row gap-5">
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
            <div className="w-1/3 flex  gap-5 items-center border-2 rounded-sm bg-gray-100">
              <div>
                <img src={biryani} alt="" srcset="" className="w-24" />
              </div>
              <div className="w-full">Biryani</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
