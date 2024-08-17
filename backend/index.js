import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import authMiddleware from "./middlewares/authMiddleware.js";
dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
app.get("/", authMiddleware, (req, res) => {
  res.send("Welcome to the server");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
