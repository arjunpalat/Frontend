import React from "react";
import { logo, sideImage } from "../assets/index.js";

const LeftImageSidebar = () => {
  return (
    <div className="h-screen hidden bg-left_image_bg overflow-hidden gap-3 md:flex md:flex-col lg:px-14 lg:pt-12 md:px-10 md:pt-10 lg:max-w-[514px] md:max-w-[450px]">
      <img src={logo} alt="company" className="w-24 h-auto" />
      <p className="text-yellow-800 z-10 font-semibold lg:text-3xl lg:mt-7 md:mt-2 md:text-2xl">
        Discover the world's top Designers and Creatives.
      </p>
      <img
        src={sideImage}
        className="h-auto scale-150 mt-8 lg:w-full"
        alt="dribble"
      />
      <p className="text-yellow-800 mt-16 z-10">
        Art by <a href="www.google.com">Peter Tauka</a>
      </p>
    </div>
  );
};

export default LeftImageSidebar;
