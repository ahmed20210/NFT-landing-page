import React from 'react'
import menu from '../assets/menu.png'
import logo from '../assets/logo.png'
function Header() {
  const [showMenu, setShowMenu] = React.useState("deActive");
  return (
    <div className="relative">
      <nav className="flex justify-between items-center mb-5">
        <div>
          <img className=" w-14 md:w-20" src={logo} alt="" />
        </div>
        <ul
          className={`flex gap-3 flex-col md:flex-row menu text-center ${showMenu}`}
        >
          <li className="">Home</li>
          <li>Feature</li>
          <li>Roadmap</li>
          <li>Token</li>
          <li className="mb-3 md:mb-0">Contact Us</li>
        </ul>
        <ul className="flex gap-3 items-center text-xs sm:text-base">
          <li>Login</li>
          <li className="btn">Register here</li>
        </ul>
        <div
          onClick={() => {
            setShowMenu(showMenu === "deActive" ? "active" : "deActive");
          }}
          className="z-50 p-2 md:hidden block"
        >
          <img className="w-8 h-8" src={menu} alt="" />
        </div>
      </nav>
    </div>
  );
      
}

export default Header