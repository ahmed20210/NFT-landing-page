import React from "react";
import sheild from "../assets/shield.png";
import easy from "../assets/easy.png";
import insurance from "../assets/insurance.png";
import scalbility from "../assets/scalbility.png";

function WhyUs() {
  return (
    <>
      <ul className="flex gap-2 my-20 flex-col lg:flex-row">
        <li className="lg:w-4/12 p-3 px-4 bg-gray-900 rounded-lg border border-violet-500">
          <h3 className="text-gradient text-4xl font-bold">Why Egychain?</h3>
          <div>
            <p className="my-3 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et
              quibusdam.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              sequi facilis nihil recusandae.
            </p>
          </div>
        </li>
        <li className="lg:w-8/12">
          <ul className="flex justify-between flex-col sm:flex-row flex-wrap items-center gap-y-5">
            <li className="card">
              <div className="card-header">
                <span className="p-3 rounded-full bg-slate-700"><img width={40} height={40} src={easy} alt="" /></span>
                <h3>Easy</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="card">
              <div className="card-header">
                <span className="p-3 rounded-full bg-slate-700"><img width={40} height={40} src={insurance} alt="" />
                </span>
                <h3>Inurance</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li className="card">
              <div className="card-header">
                <span className="p-3 rounded-full bg-slate-700"><img width={40} height={40} src={scalbility} alt="" /></span>
                <h3>Scalable</h3>
              </div>{" "}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li className="card">
              <div className="card-header">
                <span className="p-3 rounded-full bg-slate-700"><img width={40} height={40} src={sheild} alt="" /></span>
                <h3>Security</h3>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default WhyUs;
