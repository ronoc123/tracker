import React from "react";
import Wrapper from "../assests/wrappers/Navbar.js";
import Logo from "../components/Logo.js";
import NavLinks from "../components/NavLinks.js";
import { useAppContext } from "../context/appContext.js";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logoutUser } = useAppContext();

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
      <FaBars className="small-screen" />
      {/* NAV LINKS END */}
      {/* USER INFO */}
      <div className="user-info">
        <div className="item item-1">
          <Link to="/profile">
            <FaUserCircle className="icon-1" />
          </Link>
          <Link to="/profile" className="profile-link">
            {user[0]?.user_name || "User"}
          </Link>
        </div>
        <h2 className="item">
          <button type="button" className="btn logout-btn" onClick={logoutUser}>
            Logout
          </button>
        </h2>
      </div>
      {/* USER INFO END */}
    </Wrapper>
  );
};

export default Navbar;
