import React from "react";
import { logo, search } from "../../assets/index.js";
import { useUserState } from "../UserContext.js";

const Navbar = () => {
  const { userDetails } = useUserState();
  const navLinks = [
    "Inspiration",
    "Find Work",
    "Learn Design",
    "Go Pro",
    "Hire Designers",
  ];

  return (
    <div className="py-5 px-3 md:px-10 flex justify-between items-center border border-b-gray-300">
      <div className="flex gap-4 items-center">
        <button className="lg:hidden">
          <div className="flex flex-col gap-1">
            <span className="w-5 h-0.5 bg-black"></span>
            <span className="w-5 h-0.5 bg-black"></span>
            <span className="w-3.5 h-0.5 bg-black"></span>
          </div>
        </button>
        <img src={logo} alt="dribbble" className="w-24 h-auto" />
        <div className="hidden lg:flex gap-6 ml-3 items-center">
          {navLinks.map((link, index) => (
            <div key={index} className="text-slate-600 font-semibold">
              {link}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <input
            placeholder="Search"
            className="hidden lg:block px-7 py-2 w-36 border border-gray-200 rounded-lg"
          />
          <img
            src={search}
            alt="search"
            className="lg:absolute lg:top-2 lg:left-0.5 lg:w-7 w-8 h-auto"
          />
        </div>
        <img
          src={userDetails.avatarUrl}
          alt=""
          className="md:w-10 md:h-10 h-6 w-6 rounded-full"
        />
        <button className="text-white md:text-base text-sm py-2 px-2 rounded-lg bg-pink-500">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Navbar;
