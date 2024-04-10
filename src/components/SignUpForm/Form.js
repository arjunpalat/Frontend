import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/services/api";
import { useUserDispatch, useUserState } from "../UserContext";
import { nameEmptyFormField, notAgreedTOS } from "../../utils/services/helpers";

const Form = () => {
  const navigate = useNavigate();
  const { error } = useUserState();
  const dispatch = useUserDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [tc, setTc] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      const invalidField = nameEmptyFormField(form);
      if (invalidField) {
        dispatch({
          type: "SET_ERROR",
          payload: {
            message: invalidField.message,
            inputField: invalidField.field,
          },
        });
        return;
      }
      const tos = notAgreedTOS(tc);
      if (tos) {
        dispatch({
          type: "SET_ERROR",
          payload: {
            message: tos.message,
          },
        });
        return;
      }

      const response = await registerUser({ ...form, agreeToTOS: tc });
      dispatch({ type: "SET_USER_DETAILS", payload: response });
      dispatch({ type: "SET_HAS_ATTEMPTED_SIGNUP", payload: true });
      navigate("/get-started/profile", { replace: true });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: {
          message: error.response?.data.error || error.message,
          inputField: error.response?.data.errorField || null,
        },
      });
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
          errorField={error?.inputField}
        />
        <FormInput
          id="username"
          type="text"
          placeholder="johndoe88"
          label="Username"
          w="w-[48%]"
          value={form.username}
          handleChange={handleChange}
          errorField={error?.inputField}
        />
      </div>
      <FormInput
        id="email"
        type="email"
        placeholder="johndoe@xyz.com"
        label="Email"
        value={form.email}
        handleChange={handleChange}
        errorField={error?.inputField}
      />
      <FormInput
        id="password"
        type="password"
        placeholder="6+ characters"
        label="Password"
        value={form.password}
        handleChange={handleChange}
        errorField={error?.inputField}
      />
      <div className="flex gap-2 items-start text-slate-500">
        <div
          className={`h-5 w-5 ${
            tc ? "bg-pink-500" : ""
          } border border-gray-200 flex justify-center items-center shrink-0`}
          onClick={() => setTc(!tc)}
        >
          <div className={`${!tc ? "hidden" : ""} text-white text-sm `}>
            &#10003;
          </div>
        </div>
        <p>
          Creating an account means you're okay with our{" "}
          <a href="" className="text-indigo-700">
            Terms of Service
          </a>
          ,{" "}
          <a href="" className="text-indigo-700">
            Privacy Policy
          </a>
          , and our default{" "}
          <a href="" className="text-indigo-700">
            Notification Settings
          </a>
          .
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
