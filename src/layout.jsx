import { Outlet } from "react-router-dom";
import Footer from "../src/pages/Header.jsx";
import Navbar from "../src/pages/Navbar.jsx";

function layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
