import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/services/api";
import { useUserDispatch } from "../UserContext";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      const response = await registerUser(form);
      dispatch({ type: "SET_USER_DETAILS", payload: response });
      navigate("/get-started/profile");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex justify-between">
        <FormInput
          id="name"
          type="text"
          placeholder="John Doe"
          label="Name"
          w="w-[48%]"
          value={form.name}
          handleChange={handleChange}
        />
        <FormInput
          id="username"
          type="text"
          placeholder="kiran331"
          label="Username"
          w="w-[48%]"
          value={form.username}
          handleChange={handleChange}
        />
      </div>
      <FormInput
        id="email"
        type="email"
        placeholder="kirankumar@email.com"
        label="Email"
        value={form.email}
        handleChange={handleChange}
      />
      <FormInput
        id="password"
        type="password"
        placeholder="6+ characters"
        label="Password"
        value={form.password}
        handleChange={handleChange}
      />
      <div className="flex gap-2 items-start">
        <div className="w-5 h-5 border border-gray-200 shrink-0"></div>
        <p>
          Creating an account means you're okay with our Terms of Service,
          Privacy Policy, and our default Notification Settings.
        </p>
      </div>
      <div>
        <FormButton handleCreate={handleCreate}>Create Account</FormButton>
      </div>
      <p className="text-xs text-gray-400">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </div>
  );
};

export default Form;
