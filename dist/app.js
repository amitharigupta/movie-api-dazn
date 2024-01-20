import express from "express";
import "dotenv/config";
// importing index Routes
import indexRoutesApi from "./routes/index.routes.js";
import { connectDB } from "./utils/features.js";
const app = express();
connectDB();
const PORT = process.env.PORT || "5000";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', indexRoutesApi);
app.listen(PORT, () => {
    console.log(`Express is listening on PORT : ${PORT}`);
});
