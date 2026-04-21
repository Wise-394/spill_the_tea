import { body } from "express-validator";

export const validateUserInput = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 10 })
    .withMessage("Username must be within 3-10 characters"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 15 })
    .withMessage("Password must be within 6-15 characters"),
];
