// Logo.js
import React from "react";
import { logo } from "../../assets/index.js";

const Logo = () => (
  <div className="lg:flex-start">
    <img src={logo} className="w-24 h-auto" />
  </div>
);

export default Logo;
