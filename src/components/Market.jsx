import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpeg";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.png";

function Market() {
  const products = [
    {
      name: "Star",
      image: product1,
    },
    {
      name: "Astro",
      image: product2,
    },
    {
      name: "Monkey",
      image: product3,
    },
    {
      name: "skeleton",
      image: product4,
    },
    {
      name: "Sad Man",
      image: product5,
    },
    {
      name: "Warrior",
      image: product6,
    },
    {
      name: "Business",
      image: product7,
    },
    {
      name: "Laser",
      image: product8,
    },
  ];
  return (
    <>
      <div className="flex justify-between my-5">
        <h2 className="sm:text-3xl">
          Built on <span className=" text-gradient">Egychain</span>
        </h2>
        <button className="btn">Explore Now</button>
      </div>
      <ul className="flex gap-2 md:gap-5 justify-center sm:justify-between  flex-wrap">
        {products.map(({ name, image }, index) => (
          <li
            key={index}
            className="w-96 sm:w-49 md:w-31 lg:w-23 trangle relative p-1 my-3"
          >
            <div className="trangl relative">
              <img className="min-w-full h-96 md:h-72 " src={image} alt="" />
            </div>
            <div className="flex justify-around items-center my-3 gap-3">
              <h3 className="text-center text-orange-100 my-1 md:text-xl">
                {name}
              </h3>{" "}
              <p className=" text-gradient">16:48:45</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Market;
