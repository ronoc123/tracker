import React from "react";
const Ticket = ({ title, description, type, severity, status }) => {
  return (
    <div className="ticket">
      <div>{title}</div>
      <div>{description}</div>
      <div>{type}</div>
      <div>{severity}</div>
      <div>{status}</div>
      <div>Devs assigned</div>
    </div>
  );
};

export default Ticket;
