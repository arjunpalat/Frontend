// Logo.js
import React from "react";
import { logo } from "../../assets/index.js";

const Logo = () => (
  <div className="self-center lg:self-start lg:ml-10">
    <img src={logo} className="w-24 h-auto" />
  </div>
);

export default Logo;
