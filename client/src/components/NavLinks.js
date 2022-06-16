import links from "../utils/links.js";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav-link">
      {links.map((link) => {
        const { text, path, icon, id } = link;
        return (
          <NavLink to={path} key={id} className="link">
            <span className="icon">{icon}</span>
            <h1 className="text">{text}</h1>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
