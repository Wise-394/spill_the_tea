import { Router } from "express";
import { renderIndex } from "../controller/indexController.js";

export const indexRouter = Router();

indexRouter.get("/", renderIndex);
