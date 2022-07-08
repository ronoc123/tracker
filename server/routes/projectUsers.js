import express from "express";
const router = express.Router();

import { userOnProject, addUserToProject } from "../contollers/projectUsers.js";

import authenticateUser from "../middleware/authorize.js";
import authorizePermissions from "../middleware/authorizePermissions.js";

router.route("/:id").get(authenticateUser, userOnProject);
router.route("/:id").post(authenticateUser, addUserToProject);

export default router;
