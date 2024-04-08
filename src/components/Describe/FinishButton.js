// FinishButton.js
import React from "react";
import { updateUserDetails } from "../../utils/services/api";
import { useUserDispatch, useUserState } from "../UserContext";
import { useNavigate } from "react-router-dom";

const FinishButton = () => {
  const dispatch = useUserDispatch();
  const { userDetails } = useUserState();
  const navigate = useNavigate();

  const handleNext = async () => {
    try {
      const updatedPlatformUseCase = {
        ...userDetails.platformUseCase,
        edited: true,
      };
      await updateUserDetails({ ...userDetails, updatedPlatformUseCase });
      dispatch({
        type: "SET_USER_DETAILS",
        payload: { ...userDetails, updatedPlatformUseCase },
      });
      navigate("/confirm-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4 self-center">
      <button
        onClick={handleNext}
        className="text-white py-2 px-2 w-40 rounded-lg bg-pink-500"
      >
        Finish
      </button>
    </div>
  );
};

export default FinishButton;
