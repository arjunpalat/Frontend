import React from "react";
import { logo, search } from "../../assets/index.js";
import { useUserState } from "../UserContext.js";

const Navbar = () => {
  const { userDetails } = useUserState();
  return (
    <div className="py-5 px-10 flex justify-between items-center border border-b-gray-300">
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
          <div className="text-slate-600 font-semibold">Inspiration</div>
          <div className="text-slate-600 font-semibold">Find Work</div>
          <div className="text-slate-600 font-semibold">Learn Design</div>
          <div className="text-slate-600 font-semibold">Go Pro</div>
          <div className="text-slate-600 font-semibold">Hire Designers</div>
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
          alt="me"
          className="w-10 h-10 rounded-full"
        />
        <button className="text-white py-2 px-2 rounded-lg bg-pink-500">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Navbar;
