import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/auth.controller.js";

const router = express.Router();

router.get("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logoutUser);

export default router;
