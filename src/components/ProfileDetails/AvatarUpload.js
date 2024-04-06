// AvatarUpload.js
import React from "react";
import { camera } from "../../assets/index.js";

const AvatarUpload = () => (
  <div className="h-28 w-28 md:h-44 md:w-44 flex justify-center items-center rounded-full border-4 border-dashed border-gray-200 hover:border-pink-400 hover:cursor-pointer">
    <img className="w-8 h-8" src={camera} alt="avatar" />
  </div>
);

export default AvatarUpload;
