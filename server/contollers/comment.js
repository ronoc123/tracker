import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";
import moment from "moment";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";

const createComment = async (req, res) => {
  const user_id = Number(req.user.user.id);
  const id = Number(req.params.id);
  const { description } = req.body;
  const date = new Date();
  const formattedDate = moment(date).format();
  const ticket = await db.query(
    "INSERT INTO comment(description, ticket_id, user_id, createdat) VALUES ($1, $2, $3, $4) RETURNING *",
    [description, id, user_id, formattedDate]
  );
  res.status(StatusCodes.CREATED).json({ ticket: ticket.rows });
};

const getAllCommentOnTicket = async (req, res) => {
  const id = req.params.id;

  const ticketComments = await db.query(
    "SELECT * FROM comment WHERE ticket_id = $1",
    [id]
  );

  res.status(StatusCodes.OK).json({ comments: ticketComments.rows });
};

const editComment = async (req, res) => {
  const id = req.params.id;
  const user = req.user.user.id;
  const { description } = req.body;
  console.log(req.user.user.id);

  const testId = await db.query("SELECT user_id FROM comment WHERE id = $1", [
    id,
  ]);

  // Check if the user was the one who created the TICKET
  if (testId.rows[0].user_id != user) {
    throw new UnauthenticatedError("You did not create this comment!");
  }

  const updatedComment = await db.query(
    "UPDATE comment SET description = $1 WHERE id = $2 RETURNING *",
    [description, id]
  );

  res.status(StatusCodes.OK).json({ comment: updatedComment.rows });
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  const { id: user } = req.user.user;

  const testId = await db.query("SELECT user_id FROM comment WHERE id = $1", [
    id,
  ]);

  // Check if the user was the one who created the TICKET
  if (testId.rows[0].user_id != user) {
    throw new UnauthenticatedError("You did not create this comment!");
  }
  // DELETE TICKET
  await db.query("DELETE FROM comment WHERE id = $1", [id]);

  res.status(StatusCodes.OK).send("Comment Deleted!");
};

export { createComment, getAllCommentOnTicket, editComment, deleteComment };
