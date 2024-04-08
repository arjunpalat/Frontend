import React from "react";
import Form from "./Form";
import FormContainer from "./FormContainer";
import FormTitle from "./FormTitle";
import FormError from "./FormError";

const SignUpForm = () => {
  return (
    <div className="flex flex-col px-4 py-4 items-center w-full">
      <p className="self-end text-base">
        Already a member? <a href="www.google.com">Sign in</a>
      </p>
      <FormContainer maxWidth="548px">
        <FormTitle>Sign up to Dribbble</FormTitle>
        <FormError>Username has already been taken</FormError>
        <Form />
      </FormContainer>
    </div>
  );
};

export default SignUpForm;
