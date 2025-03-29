import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    {/* <LogIn /> */}
    {/* <SignUp /> */}
    <Dashboard />
    <Footer />
  </StrictMode>
);
