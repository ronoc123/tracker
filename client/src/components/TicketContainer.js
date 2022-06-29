import React from "react";
import { useAppContext } from "../context/appContext";
import Ticket from "../components/Ticket.js";

const TicketContainer = () => {
  const { myTickets } = useAppContext();
  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="ticket-title">title</div>
        <div className="ticket-description big-screen">description</div>
        <div className="ticket-type big-screen">type</div>
        <div className="ticket-severity">Severity</div>
        <div className="ticket-status">status</div>
        <div className="ticket-dev">devs assigned</div>
      </div>
      {myTickets.map((ticket) => {
        const { id } = ticket;
        return <Ticket key={id} {...ticket} />;
      })}
    </div>
  );
};

export default TicketContainer;
