// NextButton.js
import React from "react";

const NextButton = () => (
  <div className="flex flex-col gap-2 mt-8 w-1/3">
    <button className="text-white bg-pink-500 rounded-lg self-start w-full px-3 py-3">
      Next
    </button>
    <div className="text-gray-400 hidden md:block text-sm font-semibold self-center">
      or Press RETURN
    </div>
  </div>
);

export default NextButton;
