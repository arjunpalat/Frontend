// FormButton.js
import React from "react";

const FormButton = ({ children }) => (
  <button className="bg-pink-500 text-white w-1/2 py-2 rounded-lg hover:bg-pink-400">
    {children}
  </button>
);

export default FormButton;
