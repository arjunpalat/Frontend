// FormContainer.js
import React from "react";

const FormContainer = ({ children, maxWidth = "" }) => (
  <div className={`${maxWidth} px-2`}>{children}</div>
);

export default FormContainer;
