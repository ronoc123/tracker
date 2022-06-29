import express from "express";
const router = express.Router();
import authenticateUser from "../middleware/authorize.js";
import { register, login, updateUser } from "../contollers/authController.js";

router.route("/register").post(register);

router.route("/login").post(login);
router.route("/updateuser").patch(authenticateUser, updateUser);

export default router;
