// AvatarUpload.js
import React, { useRef } from "react";
import { camera, i1, deleteIcon } from "../../assets/index.js";
import { useUserState, useUserDispatch } from "../UserContext.js";

const AvatarUpload = () => {
  const { userDetails } = useUserState();
  const dispatch = useUserDispatch();
  const fileInputRef = useRef();

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

  const onDivClick = () => {
    fileInputRef.current.click();
  };

  const onDeleteClick = (e) => {
    e.stopPropagation();
    dispatch({
      type: "SET_USER_DETAILS",
      payload: { ...userDetails, avatarUrl: null },
    });
  };

  return (
    <div
      onClick={onDivClick}
      className={`group relative h-28 w-28 md:h-44 md:w-44 flex justify-center items-center rounded-full ${
        !userDetails.avatarUrl
          ? "border-4 border-dashed border-gray-200 hover:border-pink-400"
          : ""
      } hover:cursor-pointer`}
    >
      <input
        type="file"
        onChange={onFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      {userDetails.avatarUrl ? (
        <>
          <img
            src={userDetails.avatarUrl}
            alt="avatar"
            className="h-28 w-28 md:h-44 md:w-44 rounded-full"
          />
          <div
            onClick={onDeleteClick}
            className="absolute group-hover:flex hidden bottom-[-10px] hover:bg-red-300 bg-red-500 h-8 w-8 rounded-full justify-center items-center"
          >
            <img src={deleteIcon} alt="delete" className="z-10 h-5 w-5" />
          </div>
        </>
      ) : (
        <img className="w-8 h-8" src={camera} alt="avatar" />
      )}
    </div>
  );
};

export default AvatarUpload;
