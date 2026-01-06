const express = require("express");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/dashboard", adminMiddleware, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;
