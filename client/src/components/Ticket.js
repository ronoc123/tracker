import React from "react";

import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const Ticket = ({ title, description, type, severity, status, id }) => {
  return (
    <div className="ticket">
      <div>{title}</div>
      <div>{description}</div>
      <div>{type}</div>
      <div>{severity}</div>
      <div>{status}</div>
      <div className="ticket-links">
        <Link to={`/singleticket/${id}`}>Info</Link>
        <Link to={`/addticket/${id}`}>Edit</Link>
        <BsTrash className="trash-icon" />
      </div>
    </div>
  );
};

export default Ticket;
