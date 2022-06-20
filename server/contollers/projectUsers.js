import db from "../db/index.js";
import { StatusCodes } from "http-status-codes";

const addUserToProject = async (req, res) => {
  const user_id = req.user.user.id;

  const project_id = req.params.id;

  await db.query(
    "INSERT INTO project_interactions(userID, projectID) VALUES($1, $2)",
    [user_id, project_id]
  );

  res.status(StatusCodes.CREATED).send("User added to Project.");
};

const userOnProject = async (req, res) => {
  const id = req.params.id;

  const users = await db.query(
    "SELECT user_name FROM user_account JOIN project_interactions ON user_account.user_id = project_interactions.userID JOIN project ON project.id = project_interactions.projectID WHERE project.id = $1",
    [id]
  );
  let developers = [];
  users.rows.map((dev) => {
    developers.push(dev.user_name);
  });

  res.status(StatusCodes.OK).json({ developers });
};

export { userOnProject, addUserToProject };
