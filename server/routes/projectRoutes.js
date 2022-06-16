import express from "express";
const router = express.Router();

import {
  getAllProjects,
  getSingleProject,
  editProject,
  deleteProject,
  createProject,
} from "../contollers/projectController.js";

router.route("/").get(getAllProjects).post(createProject);
router
  .route("/:id")
  .patch(editProject)
  .delete(deleteProject)
  .get(getSingleProject);

export default router;
