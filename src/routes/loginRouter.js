import { Router } from "express";
import { loginController } from "../controller/loginController.js";
import passport from "passport";
export const loginRouter = Router();

loginRouter.get("/", loginController.renderLogin);
loginRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  }),
);
