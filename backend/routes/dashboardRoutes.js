import { Router } from "express";
import { dashboard, createLayout } from "../controllers/dashboardController.js";
const router = Router();

router.post("/", dashboard);
router.post("/create", createLayout);

export default router;
