dotenv.config();
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";

import db from "./db/index.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/authorize.js";

import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import projectUsersRouter from "./routes/projectUsers.js";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/project", authenticateUser, projectRouter);
app.use("/api/v1/projectusers", authenticateUser, projectUsersRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
