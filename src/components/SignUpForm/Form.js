// Form.js
import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const Form = () => (
  <div className="flex flex-col gap-8 mt-8">
    <div className="flex justify-between">
      <FormInput
        id="name"
        type="text"
        placeholder="Kiran Kumar"
        label="Name"
        w="w-[48%]"
      />
      <FormInput
        id="username"
        type="text"
        placeholder="kiran331"
        label="Username"
        w="w-[48%]"
      />
    </div>
    <FormInput
      id="email"
      type="email"
      placeholder="kirankumar@email.com"
      label="Email"
    />
    <FormInput
      id="password"
      type="password"
      placeholder="6+ characters"
      label="Password"
    />
    <div className="flex gap-2 items-start">
      <div className="w-5 h-5 border border-gray-200 shrink-0"></div>
      <p>
        Creating an account means you're okay with our Terms of Service, Privacy
        Policy, and our default Notification Settings.
      </p>
    </div>
    <div>
      <FormButton>Create Account</FormButton>
    </div>
    <p className="text-xs text-gray-400">
      This site is protected by reCAPTCHA and the Google Privacy Policy and
      Terms of Service apply.
    </p>
  </div>
);

export default Form;
