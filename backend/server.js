import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
import leaveRoutes from "./routes/leave.js";
app.use("/", leaveRoutes);

app.use(cors());
app.use(express.json());
app.use(express.static("../frontend"));

// ✅ USE ROUTES
app.use("/", authRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
