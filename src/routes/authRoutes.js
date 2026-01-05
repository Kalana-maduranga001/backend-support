const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log("REGISTER HIT"); 
  res.status(201).json({
    message: "Register route working",
    body: req.body
  });
});

module.exports = router;
