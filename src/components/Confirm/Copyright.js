import { dribbble_red_icon } from "../../assets/index.js";

const Copyright = () => (
  <div className="flex justify-between flex-wrap items-center mt-4">
    <p className="text-slate-800">© 2023 Dribbble. All rights reserved.</p>
    <div className="flex gap-2 items-center">
      <p className="text-slate-800">
        <strong>20,501,853</strong> shots dribbbled
      </p>
      <img src={dribbble_red_icon} alt="dribbble" className="w-5 h-5" />
    </div>
  </div>
);

export default Copyright;
