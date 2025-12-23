import express from "express";
import { requireAuth } from "../middleware/auth.js";
import { generateProjectAndVariants } from "../controllers/projectController.js";

const router = express.Router();

router.post("/generate", requireAuth, generateProjectAndVariants);

export default router;
