import React from "react";
import Wrapper from "../assests/wrappers/Navbar.js";
import Logo from "../components/Logo.js";
import NavLinks from "../components/NavLinks.js";
import { useAppContext } from "../context/appContext.js";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
  const { user, logoutUser } = useAppContext();
  console.log(user[0].user_name);

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
          <FaUserCircle className="icon-1" />
          <h2>{user[0]?.user_name || "User"}</h2>
        </div>
        <h2 className="item item-2">
          <BsFillBellFill />
          <span className="notification">2</span>
        </h2>
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
