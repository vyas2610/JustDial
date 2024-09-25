import React, { useState } from "react";

const HomeCategories = () => {
  const [categories, setCategories] = useState([
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Hotels",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Beauty Spa",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Home Decor",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Wedding Planner",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Education",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Rent & Hire",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Hospitals",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Contractors",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Pet Shops",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "PG/Hostels",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Estate Agent",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Dentist",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Gym",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Loans",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Event Organizer",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Driving Schools",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Packers & Moves",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Services",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Popular Categories",
      image: require("../../../images/img1.webp"),
    },
  ]);
  return (
    <div className="container mx-auto py-16 bg-white px-5">
      <div className="grid lg:grid-cols-10 grid-cols-3 gap-10">
        {categories.map((cat, cIndex) => (
          <div key={cIndex}>
            <div className="w-full">

            <img
              src={cat.image}
              alt=""
              className="border border-gray-400 rounded-lg w-full h-24"
            />
            </div>
            <div className="">
              <p className="text-center font-bold">{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
