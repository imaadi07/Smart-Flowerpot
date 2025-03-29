import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <LogIn /> */}
    <SignUp />
  </StrictMode>
);
