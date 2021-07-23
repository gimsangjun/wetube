import express from "express";
import { join } from "../controllers/userController";
import {treding } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", treding);
globalRouter.get("/join", join);

export default globalRouter;