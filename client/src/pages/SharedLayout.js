import Navbar from "../components/Navbar.js";
import { Outlet, Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
