import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";

const createProject = async (req, res) => {
  const { title, description } = req.body;
  const { id: user_id } = req.user.user;

  const newProject = await db.query(
    "INSERT INTO project(title, description, createdby) VALUES($1, $2, $3) RETURNING *",
    [title, description, user_id]
  );

  res.status(StatusCodes.CREATED).json({ project: newProject.rows });
};
const getAllProjects = async (req, res) => {
  const projects = await db.query("SELECT * FROM project");
  res
    .status(StatusCodes.OK)
    .json({ projects: projects.rows, totalProject: projects.rows.length });
};

const getSingleProject = async (req, res) => {
  const { id } = req.params;

  const project = await db.query("SELECT * FROM project WHERE id = $1", [id]);

  res.status(StatusCodes.OK).json({ project: project.rows });
};

const editProject = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  const { id: user_id } = req.user.user;

  const testId = await db.query("SELECT createdby FROM project WHERE id = $1", [
    id,
  ]);

  if (testId.rows[0].createdby != user_id) {
    throw new UnauthenticatedError("You did not create this project!");
  }

  const updatedProject = await db.query(
    "UPDATE project SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  res.status(StatusCodes.OK).json({ project: updatedProject.rows });
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  const { id: user_id } = req.user.user;

  const testId = await db.query("SELECT createdby FROM project WHERE id = $1", [
    id,
  ]);

  // Check if the user was the one who created the project

  if (testId.rows[0].createdby != user_id) {
    throw new UnauthenticatedError("You did not create this project!");
  }

  // DELETE FROM COMPOSITE TABLE
  await db.query("DELETE FROM project_interactions WHERE projectid = $1", [id]);
  // DELETE PROJECT
  await db.query("DELETE FROM project WHERE id = $1", [id]);

  res.status(StatusCodes.OK).send("Project Deleted!");
};

export {
  getAllProjects,
  getSingleProject,
  editProject,
  deleteProject,
  createProject,
};
