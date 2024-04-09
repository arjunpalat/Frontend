// FinishButton.js
import React, {useState} from "react";
import { updateUserDetails } from "../../utils/services/api";
import { useUserDispatch, useUserState } from "../UserContext";
import { useNavigate } from "react-router-dom";

const FinishButton = () => {
  const dispatch = useUserDispatch();
  const { userDetails } = useUserState();
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const buttonDisabled = !Object.values({
    ...userDetails.platformUseCase,
    edited: false,
  }).some((value) => value === true);
  console.log(userDetails.platformUseCase);
  console.log(buttonDisabled);
  console.log(buttonDisabled);

  const handleNext = async () => {
    try {
      setIsSaving(true);
      const updatedPlatformUseCase = {
        ...userDetails.platformUseCase,
        edited: true,
      };
      await updateUserDetails({ platformUseCase: updatedPlatformUseCase });
      dispatch({
        type: "SET_USER_DETAILS",
        payload: { ...userDetails, updatedPlatformUseCase },
      });
      localStorage.removeItem("dribbbleDiamond");
      navigate("/confirm-email");
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="mt-4 self-center">
      <button
        onClick={handleNext}
        className="text-white py-2 px-2 w-40 disabled:bg-pink-300 rounded-lg bg-pink-500"
        disabled={buttonDisabled || isSaving}
      >
        {isSaving ? "Saving..." : "Finish"}
      </button>
    </div>
  );
};

export default FinishButton;
