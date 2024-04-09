import { createContext, useReducer, useContext } from "react";

const initialState = {
  hasAttemptedSignUp: localStorage.getItem("dribbbleDiamond") ? true : false,
  userDetails: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    case "SET_USER_TOKEN":
      return {
        ...state,
        userToken: action.payload,
      };
    case "SET_AVATAR_IMAGE":
      return {
        ...state,
        avatarImage: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const UserContext = createContext();

export const useUserState = () => {
  return useContext(UserContext)[0];
};

export const useUserDispatch = () => {
  return useContext(UserContext)[1];
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
