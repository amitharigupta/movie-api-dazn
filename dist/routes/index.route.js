import express from "express";
const router = express.Router();
router.get('/', (req, res) => {
    return res.json({ status: 200, message: "Movie API" });
});
module.exports = router;
