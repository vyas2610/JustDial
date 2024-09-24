import React, { useState } from "react";

const HomeCategories = () => {
  const [categories, setCategories] = useState([
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
    {
      name: "Restaurants",
      image: require("../../../images/img1.webp"),
    },
  ]);
  return (
    <div className="container mx-auto py-16 bg-white px-5">
      <div className="grid lg:grid-cols-10 grid-cols-3 gap-5">
        {categories.map((cat, cIndex) => (
          <div key={cIndex}>
            <img
              src={cat.image}
              alt=""
              className="border border-gray-400 rounded-lg w-full h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
