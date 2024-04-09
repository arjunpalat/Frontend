import React from "react";
import { i1, i2, i3, i4, i5, i6 } from "../../assets/index.js";
import { useUserDispatch, useUserState } from "../UserContext.js";

const DefaultAvatars = () => {
  const avatars = [i1, i2, i3, i4, i5, i6];
  const { userDetails } = useUserState();
  const dispatch = useUserDispatch();
  const handleAvatarClick = (avatar) => {
    dispatch({
      type: "SET_USER_DETAILS",
      payload: { ...userDetails, avatarUrl: avatar },
    });
  };

  return (
    <div className="flex gap-1.5 mt-2.5">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          onClick={() => handleAvatarClick(avatar)}
          src={avatar}
          className="h-9 w-9 md:h-11 md:w-11 rounded-full hover:cursor-pointer"
          alt={`i${index + 1}`}
        />
      ))}
    </div>
  );
};

export default DefaultAvatars;
