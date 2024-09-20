import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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

                <div className="border-2 border-red-700 flex items-center rounded">
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
    </>
  );
};

export default HomeScreen;
