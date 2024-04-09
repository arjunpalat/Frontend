// FormInput.js
import React from "react";
import { exclamation } from "../../assets";

const FormInput = ({
  id,
  type,
  placeholder,
  label,
  w = "w-[100%]",
  handleChange,
  value,
  errorField,
}) => {
  const hasError = errorField === id;
  return (
    <div className={`flex flex-col gap-1.5 ${w}`}>
      <label htmlFor={id} className="font-semibold">
        <div className="flex gap-1 items-center">
          {hasError && (
            <img src={exclamation} className="h-4 w-4 inline" alt="error" />
          )}
          <div>{label}</div>
        </div>
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`border ${
          hasError ? "text-red-400 bg-red-100" : ""
        } border-gray-200 rounded-lg bg-slate-50 px-2 py-2 hover:outline-4 hover:outline-pink-50 hover:outline hover:bg-white focus:outline focus:outline-pink-50 focus:outline-4 focus:border-pink-300`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormInput;
