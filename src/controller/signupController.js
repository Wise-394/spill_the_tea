import bcrypt from "bcryptjs";
import { userQueries } from "../model/userQueries.js";

export const signupController = {
  renderSignup: (req, res) => {
    res.render("signup");
  },

  signupUser: async (req, res, next) => {
    try {
      const hashed = await bcrypt.hash(req.body.password, 10);
      const username = req.body.username;
      await userQueries.insertUser(username, hashed);
      res.redirect("/");
    } catch (err) {
      console.error("unable to signup user, signupController.js", err);
      next(err);
    }
  },
};
