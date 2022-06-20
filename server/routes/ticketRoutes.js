import express from "express";
const router = express.Router();

import {
  createTicket,
  getAllUserTicket,
  editTicket,
  deleteTicket,
  getAllTicketOnProject,
} from "../contollers/ticket.js";

router.route("/").get(getAllUserTicket);
router
  .route("/:id")
  .patch(editTicket)
  .delete(deleteTicket)
  .post(createTicket)
  .get(getAllTicketOnProject);

export default router;
