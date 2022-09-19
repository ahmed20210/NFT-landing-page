import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instgram from "../assets/instgram.png";
function Footer() {
  return (
    <div className=" bg-tertiary text-white rounded-tl-3xl rounded-tr-3xl">
      <div className="flex justify-around items-start gap-3 sm:gap-0  pb-5 p-2 flex-wrap md:flex-nowrap">
        <div className="md:w-4/12 w-full sm:w-7/12 flex flex-col gap-3 items-center sm:items-start text-center sm:text-start">
          <img src={logo} alt="logo" className="w-20" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae totam
            culpa, natus dignissimos suscipit nesciunt.
          </p>
          <ul className="flex gap-2">
            <li>
              <img className="h-8" src={twitter} alt="" />
            </li>
            <li>
              <img className="h-8" src={facebook} alt="" />
            </li>
            <li>
              <img className="h-8" src={instgram} alt="" />
            </li>
            <li>
              <img className="h-8" src={linkedin} alt="" />
            </li>
          </ul>
        </div>
        <div className="md:w-2/12 w-3/12 hidden sm:block">
          <h3 className="font-bold text-lg my-3">NFT</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a>Expolore</a>
            </li>
            <li>
              <a>Help center</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Bug bounty</a>
            </li>
          </ul>
        </div>
        <div className="md:w-2/12 sm:w-5/12 hidden sm:block  md:hidden lg:block">
          <h3 className="font-bold text-lg my-3">Community</h3>
          <ul className="flex flex-col gap-2">
            <li>BitCoin</li>
            <li>Ethereum</li>
            <li>Suggest Feature</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-5 sm:w-7/12 md:w-3/12 w-full text-center sm:text-start">
          <h2 className=" whitespace-nowrap font-bold text-lg my-3">
            News Letter
          </h2>
          <div className="flex">
            <input
              placeholder="Enter your email"
              className=" w-32 focus:outline-0 border-2 rounded-md p-1 bg-transparent border-purple-800"
              type="email"
              id=""
            />
            <button className="btn whitespace-nowrap">I'm in</button>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-xs sm:text-lg text-white py-1">
        Copyright © 2022 by SHARABASH. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
