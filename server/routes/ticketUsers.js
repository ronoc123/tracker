import express from "express";
const router = express.Router();

import { userOnTicket, addUserToTicket } from "../contollers/ticketUsers.js";

import authenticateUser from "../middleware/authorize.js";
import authorizePermissions from "../middleware/authorizePermissions.js";

router.route("/:id").get(authenticateUser, userOnTicket);
router.route("/:id").post(authenticateUser, addUserToTicket);

export default router;
