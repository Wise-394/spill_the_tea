import { Router } from "express";
import {
  renderSignup,
  checkIfUserExist,
  signupUser,
} from "../controller/signupController.js";
import { validateSignup } from "../controller/validation/validateUserInput.js";
import { preventSignUpIfSessionExist } from "../helper/helpers.js";

export const signupRouter = Router();

signupRouter.get("/", preventSignUpIfSessionExist, renderSignup);
signupRouter.post("/", validateSignup, checkIfUserExist, signupUser);
