// LocationInput.js
import React from "react";
import { useUserState, useUserDispatch } from "../UserContext";

const LocationInput = () => {
  const { userDetails } = useUserState();
  const dispatch = useUserDispatch();

  return (
    <div className="mt-3">
      <input
        type="text"
        placeholder="Enter a location"
        className="border-b border-gray-200 w-full py-3 focus:outline-none"
        value={userDetails.location}
        onChange={(e) =>
          dispatch({
            type: "SET_USER_DETAILS",
            payload: { ...userDetails, location: e.target.value },
          })
        }
      ></input>
    </div>
  );
};

export default LocationInput;
