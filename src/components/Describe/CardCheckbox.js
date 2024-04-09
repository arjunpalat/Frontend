
const CardCheckbox = ({ checked }) => (
  <div
    className={`h-5 w-5 rounded-full ${
      checked ? "bg-pink-500" : ""
    } border border-gray-200 flex justify-center items-center shrink-0`}
  >
    <div className={`${!checked ? "hidden" : ""} text-white text-sm `}>
      &#10003;
    </div>
  </div>
);

export default CardCheckbox;
