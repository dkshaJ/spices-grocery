import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../configs/.env" });

export const adminLogin = async (req, res) => {
  const { adminUsername, adminPassword } = req.body;
  if (!adminUsername || !adminPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (
    adminUsername !== process.env.ADMIN_USERNAME ||
    adminPassword !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign(
    {
      adminUsername,
      adminPassword,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({ message: "Admin logged in successfully" });
};

export const adminLogout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Admin logged out successfully" });
};
