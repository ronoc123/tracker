import Wrapper from "../assests/wrappers/SingleTicketPage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const SingleTicketPage = () => {
  let { id } = useParams();
  const { singleTicket, fetchSingleTicket, fetchUsersOnTicket, devOnTicket } =
    useAppContext();

  useEffect(() => {
    fetchSingleTicket(id);
    fetchUsersOnTicket(id);
  }, []);

  return (
    <Wrapper className="full-page">
      <div className="container">
        <div className="ticket-dev-container">
          <div className="ticket-container">
            <div>{singleTicket[0]?.title}</div>
            <div>{singleTicket[0]?.description}</div>
            <div>{singleTicket[0]?.createdat}</div>
            <div>{singleTicket[0]?.severity}</div>
            <div>{singleTicket[0]?.status}</div>
            <div>{singleTicket[0]?.type}</div>
          </div>
          <div className="dev-container">users on ticket</div>
        </div>
        <div className="comment-container">Comments</div>
      </div>
    </Wrapper>
  );
};

export default SingleTicketPage;
