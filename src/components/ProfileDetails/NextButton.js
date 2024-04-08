// NextButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { updateUserDetails } from "../../utils/services/api";
import { useUserState } from "../UserContext";

const NextButton = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserState();

  const handleNext = async () => {
    try {
      await updateUserDetails(userDetails);
      navigate("/get-started/describe-yourself");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-2 mt-8 w-1/3">
      <button
        onClick={handleNext}
        className="text-white bg-pink-500 rounded-lg self-start w-full px-3 py-3"
      >
        Next
      </button>
      <div className="text-gray-400 hidden md:block text-sm font-semibold self-center">
        or Press RETURN
      </div>
    </div>
  );
};

export default NextButton;
