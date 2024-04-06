// DefaultAvatars.js
import React from "react";
import { i1, i2, i3, i4, i5, i6 } from "../../assets/index.js";

const DefaultAvatars = () => (
  <div className="flex gap-2 mt-2.5">
    <img src={i1} className="h-9 w-9 md:h-11 md:w-11 rounded-full" alt="i1" />
    <img src={i2} className="h-9 w-9 md:h-11 md:w-11 rounded-full" alt="i2" />
    <img src={i3} className="h-9 w-9 md:h-11 md:w-11 rounded-full" alt="i3" />
    <img src={i4} className="h-9 w-9 md:h-11 md:w-11 rounded-full" alt="i4" />
    <img src={i5} className="h-9 w-9 md:h-11 md:w-11 rounded-full" alt="i5" />
    <img src={i6} className="h-9 w-9 md:h-11 md:w-11 rounded-full" alt="i6" />
  </div>
);

export default DefaultAvatars;
