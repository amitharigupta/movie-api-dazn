import express from "express";

const router = express.Router();

// importing routes
import userRoutesApi from "./user.routes.js";
import movieRoutesApi from "./movie.routes.js";

router.get('/', (req, res) => {
    return res.json({ status: 200, message: "Movie API" });
});

router.use('/user', userRoutesApi);
router.use('/movies', movieRoutesApi);

export default router;
