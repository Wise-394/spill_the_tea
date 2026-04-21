import {
  insertMessage,
  deleteMessageById,
  getAllMessages,
} from "../model/messageQueries.js";
import { validationResult } from "express-validator";

export const postMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("todo message controller");
    // TODO: Message conttroller
  }
  const user_id = req.user.id;
  const title = req.body.title;
  const content = req.body.content;
  await insertMessage(title, content, user_id);
  res.redirect("/");
};

export const deleteMessage = async (req, res) => {
  const id = req.query.id;
  await deleteMessageById(id);
  res.redirect("/");
};

export const getMessages = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    //TODO remove/ change to anonymous the author when not authenticated
  }
  const messages = await getAllMessages();
  res.locals.messages = messages;
  next();
};
