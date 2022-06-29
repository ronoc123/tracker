import Wrapper from "../assests/wrappers/TicketPage.js";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext.js";
import { Link } from "react-router-dom";
import TicketContainer from "../components/TicketContainer.js";

const MyTickets = () => {
  const { getMyTickets } = useAppContext();

  useEffect(() => {
    getMyTickets();
  }, []);
  return (
    <Wrapper className="full-page">
      <div className="heading">
        <h1 className="heading-title">My Tickets</h1>
        <Link className="btn heading-btn" to="/addticket">
          Add Ticket
        </Link>
      </div>
      <TicketContainer />
    </Wrapper>
  );
};

export default MyTickets;
