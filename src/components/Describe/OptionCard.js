import { useUserState, useUserDispatch } from "../UserContext";
import {CardImage, CardText, CardCheckbox} from "./index.js";

const SET_USER_DETAILS = "SET_USER_DETAILS";

const createPayload = (userDetails, name, checked) => ({
  ...userDetails,
  platformUseCase: { ...userDetails.platformUseCase, [name]: !checked },
});

const OptionCard = ({ image, title, description, name }) => {
  const { userDetails } = useUserState();
  const dispatch = useUserDispatch();
  const checked = userDetails.platformUseCase[name];

  const handleClick = () => {
    const payload = createPayload(userDetails, name, checked);
    dispatch({ type: SET_USER_DETAILS, payload });
  };

  return (
    <div
      onClick={handleClick}
      className={`border ${
        checked ? "border-pink-500" : "border-gray-100"
      } px-5 py-3 w-72 h-60 gap-1 rounded-lg flex flex-col items-center justify-end hover:cursor-pointer`}
    >
      <CardImage image={image} />
      <CardText title={title} description={description} checked={checked} />
      <CardCheckbox checked={checked} />
    </div>
  );
};

export default OptionCard;
