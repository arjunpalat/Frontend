// NextButton.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserDetails } from "../../utils/services/api";
import { useUserState } from "../UserContext";

const NextButton = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserState();
  const buttonDisabled = !userDetails.location;
  const [isSaving, setIsSaving] = useState(false);

  const handleNext = async () => {
    try {
      setIsSaving(true);
      const { location, avatarUrl } = userDetails;
      await updateUserDetails({ location, avatarUrl });
      navigate("/get-started/describe-yourself", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const handleEnterKey = (event) => {
      if (event.key === "Enter" && !buttonDisabled && !isSaving) {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleEnterKey);
    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [buttonDisabled, isSaving]);

  return (
    <div className="flex flex-col gap-2 mt-8 w-1/3">
      <button
        onClick={handleNext}
        className="text-white disabled:bg-pink-300 bg-pink-500 rounded-lg self-start w-full px-3 py-3"
        disabled={buttonDisabled || isSaving}
      >
        {isSaving ? "Saving..." : "Next"}
      </button>
      <div className="text-gray-400 hidden md:block text-sm font-semibold self-center">
        or Press RETURN
      </div>
    </div>
  );
};

export default NextButton;
