import { Router } from "express";
import { login, logout, signup } from "../controllers/user_controller.js";

const userRouter = Router();

userRouter.post("/users/signup", signup);
userRouter.post("users/login", login);
userRouter.post("/users/logout", logout);

export default userRouter;