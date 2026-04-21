import { Router } from "express";
import { memberController } from "../controller/memberController.js";
import { helpers } from "../helper/helpers.js";
export const memberRouter = Router();

memberRouter.post(
  "/",
  helpers.isAuthenticated,
  memberController.activateMemberOfUser,
);
