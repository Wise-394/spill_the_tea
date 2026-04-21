import { Router } from "express";
import { signupController } from "../controller/signupController.js";

export const signupRouter = Router();

signupRouter.get("/", signupController.renderSignup);
signupRouter.post("/", signupController.signupUser);
