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
import ticketRouter from "./routes/ticketRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import userTicketRouter from "./routes/ticketUsers.js";
import userInfoRouter from "./routes/userInfoRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/project", authenticateUser, projectRouter);
app.use("/api/v1/projectusers", projectUsersRouter);
app.use("/api/v1/ticket", authenticateUser, ticketRouter);
app.use("/api/v1/comment", authenticateUser, commentRouter);
app.use("/api/v1/ticketusers", userTicketRouter);
app.use("/api/v1/userinfo", userInfoRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
