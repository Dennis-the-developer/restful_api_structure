import { Router } from "express";
import { login, logout, signup } from "../controllers/user_controller.js";

const userRouter = Router();

userRouter.post("/auth/signup", signup);
userRouter.post("/auth/login", login);
userRouter.post("/auth/logout", logout);

export default userRouter;