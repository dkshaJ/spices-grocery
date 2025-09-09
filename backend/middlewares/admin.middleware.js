import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../configs/.env" });

export const requireAdmin = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (
    decoded.adminUsername !== process.env.ADMIN_USERNAME ||
    decoded.adminPassword !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(403).json({ message: "Forbidden" });
  }
  return next();
};
