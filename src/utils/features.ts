import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "movie-api-dazn",
    }).then(() => {
        console.log(`Database connected to Mongo DB Atlas`);
    }).catch(e => {
        console.log(`Error while connecting to database : ${e}`);
    })
}