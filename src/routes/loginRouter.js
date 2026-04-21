import { Router } from "express";
import { renderLogin, loginUser } from "../controller/loginController.js";

export const loginRouter = Router();

loginRouter.get("/", renderLogin);
loginRouter.post("/", loginUser);
