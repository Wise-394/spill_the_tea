import { Router } from "express";
import { loginController } from "../controller/loginController.js";
import { validateUserInput } from "../controller/validation/validateUserInput.js";

export const loginRouter = Router();

loginRouter.get("/", loginController.renderLogin);
loginRouter.post("/", validateUserInput.login, loginController.loginUser);
