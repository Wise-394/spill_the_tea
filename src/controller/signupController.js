import bcrypt from "bcryptjs";
import { userQueries } from "../model/userQueries.js";
import { validationResult } from "express-validator";
export const signupController = {
  renderSignup: (req, res) => {
    return res.render("signup");
  },

  checkIfUserExist: async (req, res, next) => {
    const user = await userQueries.getUserByUsername(req.body.username);
    if (user) {
      return res.render("signup", {
        errors: [{ msg: "username already exist" }],
      });
    }
    next();
  },

  signupUser: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("signup", { errors: errors.array() });
      }

      const hashed = await bcrypt.hash(req.body.password, 10);
      const username = req.body.username;
      await userQueries.insertUser(username, hashed);
      return res.redirect("/login");
    } catch (err) {
      console.error("unable to signup user, signupController.js", err);
      next(err);
    }
  },
};
