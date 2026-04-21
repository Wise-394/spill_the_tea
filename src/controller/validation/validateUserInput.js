import { body } from "express-validator";

export const validateUserInput = {
  signup: [
    body("username")
      .trim()
      .notEmpty()
      .isLength({ min: 3, max: 10 })
      .withMessage("Username must be within 3-10 characters"),

    body("password")
      .notEmpty()
      .isLength({ min: 6, max: 15 })
      .withMessage("Password must be within 6-15 characters"),
  ],
  login: [
    body("username").trim().notEmpty().withMessage("Username cannot be empty"),
    body("password").trim().notEmpty().withMessage("password cannot be empty"),
  ],
};
