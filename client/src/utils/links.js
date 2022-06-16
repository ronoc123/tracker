import { FaHome, FaUserAlt } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { BiStoreAlt } from "react-icons/bi";

const links = [
  {
    text: "Home",
    id: 5,
    path: "/",
    icon: <FaHome />,
  },
  {
    text: "Roles",
    id: 1,
    path: "/role",
    icon: <FaUserAlt />,
  },
  {
    text: "Tickets",
    id: 2,
    path: "/ticket",
    icon: <ImTicket />,
  },
  {
    text: "Profile",
    id: 3,
    path: "/profile",
    icon: <CgProfile />,
  },
  {
    text: "Projects",
    id: 4,
    path: "/project",
    icon: <BiStoreAlt />,
  },
];

export default links;
