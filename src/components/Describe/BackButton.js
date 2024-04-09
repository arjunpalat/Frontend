// BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/get-started/profile", { replace: true })}
        className="bg-gray-100 text-gray-500 h-10 w-10 rounded"
      >
        &lt;
      </button>
    </div>
  );
};

export default BackButton;
