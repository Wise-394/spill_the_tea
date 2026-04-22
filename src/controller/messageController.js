import {
  insertMessage,
  deleteMessageById,
  getAllMessages,
  getMessageById,
} from "../model/messageQueries.js";
import { validationResult } from "express-validator";

export const postMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("index", {
      user: req.user,
      messageErrors: errors.array(),
    });
  }
  const user_id = req.user.id;
  const title = req.body.title;
  const content = req.body.content;
  await insertMessage(title, content, user_id);
  res.redirect("/");
};

export const deleteMessage = async (req, res) => {
  const messageId = req.params.id;
  const message = await getMessageById(messageId);

  if (!message || message.user_id !== req.user.id) {
    return res.redirect("/");
  }

  await deleteMessageById(messageId);
  res.redirect("/");
};

export const getMessages = async (req, res, next) => {
  try {
    let messages = await getAllMessages();
    if (!req.isAuthenticated()) {
      messages = messages.map((message) => ({
        ...message,
        author: "anonymous",
      }));
    }

    res.locals.messages = messages;
    next();
  } catch (err) {
    console.error("Unable to get messages, messageController", err);
    next(err);
  }
};
