// FormInput.js
import React from "react";

const FormInput = ({ id, type, placeholder, label, w = "w-[100%]" }) => (
  <div className={`flex flex-col gap-1.5 ${w}`}>
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="border border-gray-200 rounded-lg bg-slate-50 px-2 py-2 hover:outline-4 hover:outline-pink-50 hover:outline hover:bg-white focus:outline focus:outline-pink-50 focus:outline-4 focus:border-pink-300"
    />
  </div>
);

export default FormInput;
