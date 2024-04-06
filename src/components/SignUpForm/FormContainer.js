// FormContainer.js
import React from "react";

const FormContainer = ({ children, maxWidth }) => (
  <div className={`max-w-[${maxWidth}] w-full px-2`}>{children}</div>
);

export default FormContainer;
