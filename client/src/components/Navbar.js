import React from "react";
import Wrapper from "../assests/wrappers/Navbar.js";
import Logo from "../components/Logo.js";
import NavLinks from "../components/NavLinks.js";
import { useAppContext } from "../context/appContext.js";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logoutUser, openSidebar, closeSidebar, isSidebarOpen } =
    useAppContext();

  return (
    <Wrapper>
      {/* LOGO */}
      <div className="center">
        <Logo />
        <span>Zapper</span>
      </div>
      {/* LOGO END */}
      {/* NAV LINKS */}
      <NavLinks className="big-screen" />
      <FaBars className="small-screen" onClick={openSidebar} />
      {/* NAV LINKS END */}
      {/* USER INFO */}
      <div className="user-info">
        <Link to={"/about"} className="about">
          About
        </Link>
        <Link to="/profile" className="profile-link">
          <FaUserCircle className="icon-1" />
          <div className="name">{user[0]?.user_name || "User"}</div>
        </Link>
        <button type="button" className="btn logout-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
      {/* USER INFO END */}
    </Wrapper>
  );
};

export default Navbar;
