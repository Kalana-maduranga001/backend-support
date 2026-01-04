const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const morgan = require("morgan");
const dotenv = require("dotenv") // Reads values from a .env  file / Node cannot read this automatically ❌

dotenv.config();
connectDB();
console.log("ENV CHECK:", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

// AUTH ROUTTES
const authRoutes = require("./routes/authRoutes");
app.use("api/auth" , authRoutes);

app.get("/", (req, res) => {
  res.send("Clothing API Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
