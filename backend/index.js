import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import authMiddleware from "./middlewares/authMiddleware.js";
import dashboardRouter from "./routes/dashboardRoutes.js";
import jobRouter from "./routes/jobRoutes.js";
import cookieParser from "cookie-parser";
import embedJobRouter from "./routes/embedJobRoutes.js";
import apiKeyCheckMiddleware from "./middlewares/apiKeyCheckMiddleware.js";
dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/", authMiddleware, dashboardRouter);
app.use("/job", authMiddleware, jobRouter);
app.use("/api/hireframe/", apiKeyCheckMiddleware, embedJobRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
