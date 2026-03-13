import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { authRoutes } from "./routes/userRoutes.js";
import { errorhandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./database/connect.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.use(errorhandler);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT.america}`);
});
