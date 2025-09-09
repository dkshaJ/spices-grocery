import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./configs/.env" });

export const generateToken = async (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  console.log("Token generated:", token);
  return token;
};
