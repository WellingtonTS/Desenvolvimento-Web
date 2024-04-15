import { Router } from "express";
import { fileControllers } from "../controllers/fileControllers";
import multer from "multer";
import { MULTER } from "../configs/uploadConfig";

export const router = Router();
const uploads = multer(MULTER);

router.post("/files", uploads.single("file"), fileControllers.uploads);
router.delete("/files/:id", fileControllers.delete);
