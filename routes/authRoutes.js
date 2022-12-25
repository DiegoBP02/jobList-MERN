import express from "express";
const router = express.Router();

import {
  login,
  register,
  getCurrentUser,
  logoutUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logoutUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
