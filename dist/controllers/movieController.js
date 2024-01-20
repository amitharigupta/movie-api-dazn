import { MovieModel } from "../models/movie.js";
export const createMovie = async (req, res, next) => {
    try {
        const { _id, title, genre, rating, streamingLink } = req.body;
        const movie = await MovieModel.create({ _id, title, genre, rating, streamingLink });
        return res.status(201).json({ status: 201, message: "Movie created successfully", data: movie });
    }
    catch (error) {
        console.log(`Something went wrong..., ${error}`);
        return res.status(500).json({ status: 500, message: `Something went wrong while creating movie, ${error}` });
    }
};
export const updateMovie = async (req, res, next) => {
    try {
        const { _id } = req.query;
        const isMovieExist = await MovieModel.findById(_id);
        if (!isMovieExist) {
            return res.status(404).json({ status: 404, message: "Movie not exist" });
        }
        const { title, genre, rating, streamingLink } = req.body;
        await MovieModel.findByIdAndUpdate(_id, { title, genre, rating, streamingLink });
        const movie = await MovieModel.findById(_id);
        return res.status(201).json({ status: 201, message: "Movie updated successfully", data: movie });
    }
    catch (error) {
        console.log(`Something went wrong..., ${error}`);
        return res.status(500).json({ status: 500, message: `Something went wrong while updating movie, ${error}` });
    }
};
export const deleteMovie = async (req, res, next) => {
    try {
        const { _id } = req.query;
        const isMovieExist = await MovieModel.findById(_id);
        if (!isMovieExist) {
            return res.status(404).json({ status: 404, message: "Movie not exist" });
        }
        const movie = await MovieModel.findByIdAndDelete(_id);
        return res.status(200).json({ status: 200, message: "Movie deleted successfully" });
    }
    catch (error) {
        console.log(`Something went wrong..., ${error}`);
        return res.status(500).json({ status: 500, message: `Something went wrong while deleting movie, ${error}` });
    }
};
export const getAllMovies = async (req, res, next) => {
    try {
        const movies = await MovieModel.find({});
        return res.status(200).json({ status: 200, message: "Movies fetched successfully", data: movies });
    }
    catch (error) {
        console.log(`Something went wrong..., ${error}`);
        return res.status(500).json({ status: 500, message: `Something went wrong while fetching movies, ${error}` });
    }
};
export const getMovieByQuery = async (req, res, next) => {
    try {
        const { title, genre } = req.query;
        if (!title && !genre) {
            return res.status(400).json({ error: 'Please provide a title or genre for the search.' });
        }
        const query = { $or: [
                { title: new RegExp(title, 'i') },
                { genre: new RegExp(genre, 'i') },
            ] };
        const movie = await MovieModel.find(query);
        return res.status(200).json({ status: 200, message: "Movie fetched successfully", data: movie });
    }
    catch (error) {
        console.log(`Something went wrong..., ${error}`);
        return res.status(500).json({ status: 500, message: `Something went wrong while fetching movies, ${error}` });
    }
};
