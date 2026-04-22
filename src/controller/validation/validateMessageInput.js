import { body } from "express-validator";

export const validateMessageInput = [
  body("title")
    .trim()
    .isLength({ min: 5, max: 30 })
    .withMessage("title must be within 5-30 characters"),

  body("content")
    .isLength({ min: 5, max: 100 })
    .withMessage("content must be within 5-100 characters"),
];
