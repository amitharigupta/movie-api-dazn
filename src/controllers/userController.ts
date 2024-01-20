import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user.js";
import { NewUserRequestBody } from "../types/type.js";

export const addUser = async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => {
    try {
        const { name, email, photo, password, gender, role, _id, dob } = req.body;

        const user = await UserModel.create({name, email, password, photo, gender, role, _id, dob: new Date(dob) });

        return res.status(201).json({ status: 201, message: "User created successfully", data: user });
    } catch (error) {
        console.log(`Something went wrong...`);
        return res.status(500).json({ status: 500, message: `Something went wrong while creating user, ${error}` });
    }
}

export const getAllUsers = async (req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => {
    try {
        const user = await UserModel.find({});
        return res.status(200).json({ status: 200, message: "User fetched successfully", data: user });
    } catch (error) {
        console.log(`Something went wrong...`);
        return res.status(500).json({ status: 500, message: `Something went wrong while fetching user, ${error}` });
    }
}