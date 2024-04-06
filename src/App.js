import React from "react";
import {
  DescribeYourself,
  ProfileDetails,
  ConfirmMail,
  SignUp,
} from "./pages/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-started/profile" element={<ProfileDetails />} />
        <Route
          path="/get-started/describe-yourself"
          element={<DescribeYourself />}
        />
        <Route path="/confirm-email" element={<ConfirmMail />} />
      </Routes>
    </Router>
  );
}

export default App;
