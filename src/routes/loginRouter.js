import { Router } from "express";
import { loginController } from "../controller/loginController.js";

export const loginRouter = Router();

loginRouter.get("/", loginController.renderLogin);
loginRouter.post("/", loginController.loginUser);
