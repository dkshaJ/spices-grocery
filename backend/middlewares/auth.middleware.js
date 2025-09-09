import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./configs/.env" });

export const checkAuth = (req, res, next) => {
  // Check for token in cookie or header
  const token =
    req.cookies?.token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    console.log("❌ No token found");
    return res.status(401).json({ message: "Unauthorized - No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id }; // should match what you signed in generateToken
    next();
  } catch (err) {
    console.error("❌ JWT Error:", err.message);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};
