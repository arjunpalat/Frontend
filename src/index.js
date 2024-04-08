import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { UserContextProvider } from "./components/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </UserContextProvider>
);
