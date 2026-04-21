import { body } from "express-validator";

export const validateSignup = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 10 })
    .withMessage("Username must be within 3-10 characters"),

  body("password")
    .isLength({ min: 6, max: 15 })
    .withMessage("Password must be within 6-15 characters"),
];
