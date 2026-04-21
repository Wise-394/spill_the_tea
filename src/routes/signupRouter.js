import { Router } from "express";
import { signupController } from "../controller/signupController.js";
import { validateUserInput } from "../controller/validation/validateUserInput.js";

export const signupRouter = Router();

signupRouter.get("/", signupController.renderSignup);
signupRouter.post("/", validateUserInput, signupController.signupUser);
