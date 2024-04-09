import React, { useEffect } from "react";
import {
  DescribeYourself,
  ProfileDetails,
  ConfirmMail,
  SignUp,
} from "./pages/index.js";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserState, useUserDispatch } from "./components/UserContext";
import { getUserDetails } from "./utils/services/api";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { hasAttemptedSignUp, error } = useUserState();

  const dispatch = useUserDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await getUserDetails();
        dispatch({ type: "SET_USER_DETAILS", payload: user });
        if (!user.location) {
          navigate("/get-started/profile");
        } else if (!user.platformUseCase.set) {
          navigate("/get-started/describe-yourself");
        } else {
          navigate("/confirm-email");
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: "SET_ERROR",
          payload: {
            message: error.response?.data.error || error.message,
            inputField: error.response?.data.errorField || null,
          },
        });
      } finally {
        setIsLoading(false);
      }
    };
    if (hasAttemptedSignUp) {
      fetchUserDetails();
    } else {
      setIsLoading(false);
      navigate("/signup");
    }
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/get-started/profile" element={<ProfileDetails />} />
      <Route
        path="/get-started/describe-yourself"
        element={<DescribeYourself />}
      />
      <Route path="/confirm-email" element={<ConfirmMail />} />
    </Routes>
  );
}

export default App;
