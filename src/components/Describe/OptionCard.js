// OptionCard.js
import React from "react";
import { useUserState, useUserDispatch } from "../UserContext";

const OptionCard = ({ image, title, description, name }) => {
  const { userDetails } = useUserState();
  const dispatch = useUserDispatch();
  const checked = userDetails.platformUseCase[name];
  const handleClick = () => {
    dispatch({
      type: "SET_USER_DETAILS",
      payload: {
        ...userDetails,
        platformUseCase: { ...userDetails.platformUseCase, [name]: !checked },
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`border ${
        checked ? "border-pink-500" : "border-gray-100"
      } px-5 py-3 w-72 h-60 gap-1 rounded-lg flex flex-col items-center justify-end hover:cursor-pointer`}
    >
      <img src={image} className="w-52 h-52" />
      <div className="font-bold text-center text-lg">{title}</div>
      <p
        className={`${
          !checked ? "hidden" : ""
        } text-sm text-center font-light text-slate-500`}
      >
        {description}
      </p>
      <div
        className={`h-5 w-5 rounded-full ${
          checked ? "bg-pink-500" : ""
        } border border-gray-200 flex justify-center items-center shrink-0`}
      >
        <div className={`${!checked ? "hidden" : ""} text-white text-sm `}>
          &#10003;
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
