import express from "express";
import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/wacth", watch);
videoRouter.get("/edit", edit);

export default videoRouter;