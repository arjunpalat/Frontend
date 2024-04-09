import React from "react";
import Form from "./Form";
import FormContainer from "./FormContainer";
import FormTitle from "./FormTitle";
import FormError from "./FormError";
import { useUserState } from "../UserContext";

const SignUpForm = () => {
  const { error } = useUserState();
  return (
    <div className="flex flex-col px-4 py-4 w-full items-center">
      <p className="self-end text-base">
        Already a member? <a href="www.google.com">Sign in</a>
      </p>
      <FormContainer maxWidth="max-w-[440px]">
        <FormTitle>Sign up to Dribbble</FormTitle>
        {error && <FormError error={error} />}
        <Form />
      </FormContainer>
    </div>
  );
};

export default SignUpForm;
