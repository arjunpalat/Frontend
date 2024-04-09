// AvatarSection.js
import React, { useState, useRef } from "react";
import AvatarUpload from "./AvatarUpload";
import DefaultAvatars from "./DefaultAvatars";
import { trigger } from "../../assets";
import { useUserDispatch, useUserState } from "../UserContext.js";

const AvatarSection = () => {
  const [chooseDefault, setChooseDefault] = useState(false);
  const fileInputRef = useRef();
  const dispatch = useUserDispatch();
  const { userDetails } = useUserState();
  console.log("url", userDetails.avatarUrl);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({
          type: "SET_USER_DETAILS",
          payload: { ...userDetails, avatarUrl: reader.result },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="">
      <p className="text-xl text-black mt-8 font-bold">Add an avatar</p>
      <div className="md:flex mt-6">
        <AvatarUpload />
        <div className="md:flex md:flex-col md:ml-4 relative">
          <div className="absolute top-[-103px] left-[130px] md:static">
            <button
              onClick={onButtonClick}
              className="border text-xs md:text-sm font-semibold rounded-lg border-gray-300 px-5 py-2"
            >
              Choose image
            </button>
            <input
              type="file"
              onChange={onFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>
          <div className="mt-7">
            <div
              onClick={() => setChooseDefault(!chooseDefault)}
              className="flex items-center gap-1 text-base text-slate-400 font-normal hover:text-slate-500 hover:cursor-pointer"
            >
              <img
                src={trigger}
                className={`${chooseDefault ? "rotate-90" : ""}`}
              />
              <p>Or choose one of our defaults</p>
            </div>
            {chooseDefault && (
              <DefaultAvatars setChooseDefault={setChooseDefault} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSection;
