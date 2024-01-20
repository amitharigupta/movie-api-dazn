import mongoose from "mongoose";
import validator from "validator";

interface IMovie extends Document {
    _id: string;
    title: string;
    genre: string;
    rating: number;
    streamingLink: string;
}

const schema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: [true, "Please enter ID"],
        },
        title: {
            type: String,
            unique: [true, "Movie Title Already Exist"],
            required: [true, "Please enter Movie Title"],
        },
        genre: {
            type: String,
            unique: [true, "Movie Genre Already Exist"],
            required: [true, "Please enter Movie Genre"],
        },
        rating: {
            type: Number,
            required: [true, "Please enter Movie Rating"],
        },
        streamingLink: {
            type: String,
            required: [true, "Please enter Movie Streaming Link"],
        },
    }, {
    timestamps: true
});

export const MovieModel = mongoose.model<IMovie>('Movie', schema);