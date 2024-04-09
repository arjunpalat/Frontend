// FormContainer.js
import React from "react";

const FormContainer = ({ children, maxWidth = "" }) => (
  <div className={`${maxWidth} px-2 w-full`}>{children}</div>
);

export default FormContainer;
