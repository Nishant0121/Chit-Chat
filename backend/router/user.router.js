import express from "express";
import { getUserForsideBar } from "../controller/user.controller.js";
import ProtectRoute from "../middleware/protectroute.js";

const router = express.Router();

router.get("/", ProtectRoute, getUserForsideBar);

export default router;
