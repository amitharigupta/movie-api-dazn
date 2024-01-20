import express, { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user.js";

import { getAllMovies, createMovie, updateMovie, deleteMovie, getMovieByQuery } from "../controllers/movieController.js"
import { adminOnly } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllMovies);
router.post("/", adminOnly, createMovie);
router.patch("/", adminOnly, updateMovie);
router.delete("/", adminOnly, deleteMovie);
router.get("/search", getMovieByQuery);

export default router;
