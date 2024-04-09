// FormError.js
import React from "react";

const FormError = ({ error }) => (
  <p className="text-red-400 mt-6">&#x2022; {error.message}</p>
);

export default FormError;
