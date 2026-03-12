import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { authRoutes } from "./routes/userRoutes.js";
import { errorhandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./database/connect.js";
dotenv.config();
const app = express();

connectDB();

app.use(express.json);
app.use(express.urlencoded);

app.use("/api/auth", authRoutes);

app.use(errorhandler);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT.america}`);
});
