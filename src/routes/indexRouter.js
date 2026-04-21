import { Router } from "express";
import { renderIndex } from "../controller/indexController.js";
import { getMessages } from "../controller/messageController.js";
export const indexRouter = Router();

indexRouter.get("/", getMessages, renderIndex);
