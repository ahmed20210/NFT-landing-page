import React from "react";
import image from '../assets/img1.jpg'
function Home() {
 
  return (
    <>
      <div className="flex justify-between gap-5 flex-col md:flex-row mt-10 mb-20 items-center ">
        <div className="lg:w-5/12 md:w-6/12 sm:w-9/12 w-11/12">
          <h1 className="sm:text-4xl text-xl font-bold">
            Faster, Cheaper and more Powerful <span className=" text-gradient">Staking</span>
          </h1>
          <p className="my-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            porro ullam, tempora quos repellendus debitis.
          </p>
         <div className="flex gap-4"> <button className="btn">GET STARTED</button>
          <button className="btn">GET STARTED</button></div>
        </div>

        <div className="lg:w-5/12 md:w-5/12 sm:w-9/12 w-11/12">
          <div className="relative trangle md:h-72">
            <img className="h-full"  src={image} alt="" />
          </div>
          <ul className="flex justify-between my-5 text-center">
            <li className="">
              <div>
                <h5 className="text-xl">22k+</h5>
                <p className="text-xs text-gray-300">Digital Artist</p>
              </div>
            </li>
            <li className="">
              <h5 className="text-xl">38k+</h5>
              <p className="text-xs text-gray-300">World Art</p>
            </li>
            <li className="">
              <h5 className="text-xl">40m+</h5>
              <p className="text-xs text-gray-300">
                Excluslve 
                Products
              </p>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
}

export default Home;
