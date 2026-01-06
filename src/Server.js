const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
dotenv.config();

(async () => {
  await connectDB();

  const app = express();

  // Configure CORS properly
  app.use(cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true
  }));
  
  app.use(express.json());
  app.use(morgan("dev"));

  app.get("/", (req, res) => {
    res.send("Clothing API Running 🚀");
  });

  // Mount routes BEFORE starting the server
  const authRoutes = require("./routes/authRoutes");
  app.use("/api/auth", authRoutes);

  const { protect } = require("./middleware/authMiddleware");
  app.get("/api/protected", protect, (req, res) => {
    res.json({
      message: "You have accessed a protected route",
      user: req.user,
    });
  });

  app.use("/api/admin", require("./routes/adminRoutes"));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();