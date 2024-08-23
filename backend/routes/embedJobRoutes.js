import { Router } from "express";
import { embedJobController } from "../controllers/embedJobController.js";
const router = Router();

router.post("/embed", embedJobController);

export default router;
