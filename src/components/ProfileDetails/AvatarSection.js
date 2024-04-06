// AvatarSection.js
import React from "react";
import AvatarUpload from "./AvatarUpload";
import DefaultAvatars from "./DefaultAvatars";

const AvatarSection = () => (
  <div>
    <p className="text-xl text-black mt-8 font-bold">Add an avatar</p>
    <div className="md:flex mt-6">
      <AvatarUpload />
      <div className="md:flex md:flex-col md:ml-4 relative">
        <div className="absolute top-[-103px] left-[130px] md:static">
          <button className="border text-xs md:text-sm font-semibold rounded-lg border-gray-300 px-5 py-2">
            Choose image
          </button>
        </div>
        <div className="mt-7">
          <p className="text-sm text-slate-400 font-normal hover:text-slate-500 hover:cursor-pointer">
            &gt; Or choose one of our defaults
          </p>
          <DefaultAvatars />
        </div>
      </div>
    </div>
  </div>
);

export default AvatarSection;
