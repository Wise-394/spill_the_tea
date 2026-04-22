import { Router } from "express";
import { activateMemberOfUser } from "../controller/memberController.js";
import { isAuthenticated } from "../helper/helpers.js";
import { getMessages } from "../controller/messageController.js";
export const memberRouter = Router();

memberRouter.post("/", isAuthenticated, getMessages, activateMemberOfUser);
