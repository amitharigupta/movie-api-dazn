import { UserModel } from "../models/user.js";
export const adminOnly = async (req, res, next) => {
    try {
        const id = req.headers.authorization;
        console.log(`Checking Auth`);
        if (!id) {
            return next(new Error("Please login first"));
        }
        const user = await UserModel.findById(id);
        if (!user) {
            return next(new Error("Invalid Credentials... Please login and retry"));
        }
        if (user.role !== 'admin') {
            return next(new Error("You are not valid user... Only Admin can access this routes"));
        }
        next();
    }
    catch (error) {
        console.log(`Error while checking Admin creds, ${error}`);
        return res.status(401).json({ status: 401, message: `Error while checking Admin creds, ${error}` });
    }
};
