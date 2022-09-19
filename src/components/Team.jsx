import React from "react";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

function Team() {
  return (
    <div>
      <div className="text-center my-5">
        <h2 className="text-2xl mb-5">Meet Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          eligendi minus? Sed earum explicabo dicta.
        </p>
      </div>
      <div>
        <ul className="flex justify-around my-10 flex-wrap gap-5">
          <li className="text-center">
            <div className="p-3 pl-0 relative border-blue-800 border rounded-full w-40 h-40">
              <img className="h-full w-full rounded-full" src={team1} alt="" />
              <div className=" absolute top-8 -right-3">
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-1"
                    src={facebook}
                    alt=""
                  />
                </div>
                <div className="relative my-1 w-7 h-7">
                  <img
                    className="w-7 h-7 absolute -right-0.5"
                    src={twitter}
                    alt=""
                  />
                </div>
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-0.5"
                    src={linkedin}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h3>name</h3>
            <p>proff</p>
          </li>
          <li className="text-center">
            <div className="p-3 pl-0 relative border-blue-800 border rounded-full w-40 h-40">
              <img className="h-full w-full rounded-full" src={team2} alt="" />
              <div className=" absolute top-8 -right-3">
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-1"
                    src={facebook}
                    alt=""
                  />
                </div>
                <div className="relative my-1 w-7 h-7">
                  <img
                    className="w-7 h-7 absolute -right-0.5"
                    src={twitter}
                    alt=""
                  />
                </div>
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-0.5"
                    src={linkedin}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h3>name</h3>
            <p>proff</p>
          </li>
          <li className="text-center">
            <div className="p-3 pl-0 relative border-blue-800 border rounded-full w-40 h-40">
              <img className="h-full w-full rounded-full" src={team3} alt="" />
              <div className=" absolute top-8 -right-3">
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-1"
                    src={facebook}
                    alt=""
                  />
                </div>
                <div className="relative my-1 w-7 h-7">
                  <img
                    className="w-7 h-7 absolute -right-0.5"
                    src={twitter}
                    alt=""
                  />
                </div>
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-0.5"
                    src={linkedin}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h3>name</h3>
            <p>proff</p>
          </li>
          <li className="text-center">
            <div className="p-3 pl-0 relative border-blue-800 border rounded-full w-40 h-40">
              <img className="h-full w-full rounded-full" src={team4} alt="" />
              <div className=" absolute top-8 -right-3">
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-1"
                    src={facebook}
                    alt=""
                  />
                </div>
                <div className="relative my-1 w-7 h-7">
                  <img
                    className="w-7 h-7 absolute -right-0.5"
                    src={twitter}
                    alt=""
                  />
                </div>
                <div className="relative w-7 h-7">
                  <img
                    className="w-7 h-7 absolute right-0.5"
                    src={linkedin}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h3>name</h3>
            <p>proff</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Team;
