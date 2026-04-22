import { Router } from "express";
import { isAuthenticated } from "../helper/helpers.js";
import { validateMessageInput } from "../controller/validation/validateMessageInput.js";
import { getMessages, postMessage } from "../controller/messageController.js";
import { deleteMessage } from "../controller/messageController.js";
export const messageRouter = Router();

messageRouter.post(
  "/",
  isAuthenticated,
  validateMessageInput,
  getMessages,
  postMessage,
);

messageRouter.post("/:id/delete", isAuthenticated, deleteMessage);
