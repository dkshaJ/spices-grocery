import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "./configs/.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) {
      return null;
    }
    const result = await cloudinary.uploader.upload(filePath);
    fs.unlinkSync(filePath); // Delete the file after upload
    return result.secure_url;
  } catch (error) {
    fs.unlinkSync(filePath); // Delete the file after upload
    console.error("Cloudinary upload error:", error);
  }
};

export default uploadOnCloudinary;
