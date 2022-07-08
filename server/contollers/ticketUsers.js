import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";

const addUserToTicket = async (req, res) => {
  const user_id = req.body.id;

  const ticket_id = req.params.id;

  await db.query(
    "INSERT INTO ticket_interactions(userID, ticketID) VALUES($1, $2)",
    [user_id, ticket_id]
  );

  res.status(StatusCodes.CREATED).send("User added to Ticket.");
};

const userOnTicket = async (req, res) => {
  const id = req.params.id;

  const users = await db.query(
    "SELECT user_name FROM user_account JOIN ticket_interactions ON user_account.user_id = ticket_interactions.userID JOIN ticket ON ticket.id = ticket_interactions.ticketID WHERE ticket.id = $1",
    [id]
  );
  let developers = [];
  users.rows.map((dev) => {
    developers.push(dev.user_name);
  });

  res.status(StatusCodes.OK).json({ developers });
};

export { userOnTicket, addUserToTicket };
