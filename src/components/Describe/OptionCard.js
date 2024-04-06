// OptionCard.js
import React from "react";

const OptionCard = ({ image, title, description }) => (
  <div className="border border-gray-100 px-5 py-3 w-72 h-60 gap-1 rounded-lg flex flex-col items-center justify-end">
    <img src={image} className="w-52 h-52" />
    <div className="font-bold text-center text-lg">{title}</div>
    <p className="text-sm text-center font-light text-slate-500">
      {description}
    </p>
    <input type="checkbox" name="describe1" className="h-6" />
  </div>
);

export default OptionCard;
