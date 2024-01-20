import express from "express";
import { addUser, getAllUsers } from "../controllers/userController.js";
import { adminOnly } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", adminOnly, addUser);
router.get("/all", adminOnly, getAllUsers);

export default router;
