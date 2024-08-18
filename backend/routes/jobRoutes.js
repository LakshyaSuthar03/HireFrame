import { Router } from "express";
import { job, getJobs } from "../controllers/jobController.js";
const router = Router();

router.post("/create", job);
router.post("/", getJobs);
export default router;
