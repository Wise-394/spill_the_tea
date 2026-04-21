import { body } from "express-validator";

export const validateMessageInput = [
  body("title")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage("title must be within 1-30 characters"),

  body("content")
    .isLength({ min: 1, max: 100 })
    .withMessage("content must be within 1-100 characters"),
];
