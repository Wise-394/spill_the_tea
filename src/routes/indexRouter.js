import { Router } from "express";
import { indexController } from "../controller/indexController.js";

export const indexRouter = Router();

indexRouter.get("/", indexController.renderIndex);
