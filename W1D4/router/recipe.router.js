import express from "express";
import uploadCloudinary from "../middlewares/uploadCloudinary.js";
import * as AuthorController from "../controllers/author.controller.js";
const router = express.Router();

router.post("/send-mail", recipeController.sendMailMiddleware);

export default router;
