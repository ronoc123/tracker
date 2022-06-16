import express from "express";
const router = express.Router();

import { userOnProject, addUserToProject } from "../contollers/projectUsers.js";

router.route("/:id").get(userOnProject);
router.route("/:id").post(addUserToProject);

export default router;
