import { Router } from "express";
import { login, logout, signup } from "../controllers/user_controller.js";

const userRouter = Router();

userRouter.post("/user/signup", signup);
userRouter.post("user/login", login);
userRouter.post("/user/logout", logout);

export default userRouter;