import React from "react";
import { LeftImageSidebar } from "../components/index.js";
import SignUpForm from "../components/SignUpForm/SignUpForm.js";

const SignUp = () => {
  return (
    <div className="flex">
      <LeftImageSidebar />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
