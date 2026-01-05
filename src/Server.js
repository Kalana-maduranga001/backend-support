const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
dotenv.config();

(async () => {
  await connectDB();

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));

  const authRoutes = require("./routes/authRoutes");
  app.use("/api/auth", authRoutes);

  app.get("/", (req, res) => {
    res.send("Clothing API Running 🚀");
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
