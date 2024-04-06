// FormError.js
import React from "react";

const FormError = ({ children }) => (
  <p className="text-red-400 mt-6">&#x2022; {children}</p>
);

export default FormError;
