import express from "express";
import {
    watch, getEdit, getUpload, postEdit, postUpload, deleteVideo,
} from "../controllers/videoController";
import { protectorMiddleware,videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.
    route("/:id([0-9a-f]{24})/edit")
    .all(protectorMiddleware)
    .get(getEdit)
    .post(postEdit);
videoRouter
    .route("/:id([0-9a-f]{24})/delete")
    .all(protectorMiddleware)
    .get(deleteVideo);
videoRouter
    .route("/upload").
    get(getUpload)
    .all(protectorMiddleware)
    .post(videoUpload.single("video"),postUpload); //"video"는 보내준 post정보에서 name으로 지정한값이다. upload.pug에서.

export default videoRouter;