const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes (User must be logged in)
exports.protect = async (req, res, next) => {
  let token;

  // 1. Check token exists in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 2. Extract token
      token = req.headers.authorization.split(" ")[1];

      // 3. Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 4. Get user from DB and attach to request
      req.user = await User.findById(decoded.id).select("-password");

      // 5. Go to next function
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  // If token not found
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Admin-only access
exports.adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin access only" });
  }
};