import { Router } from "express";
import { isAuthenticated } from "../helper/helpers.js";

export const logoutRouter = Router();

logoutRouter.post("/", isAuthenticated, (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});
