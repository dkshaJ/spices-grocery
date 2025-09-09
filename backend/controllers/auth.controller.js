import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../configs/token.config.js";

export const signUp = async (req, res) => {
  try {
    // Sign up logic
    const { firstName, lastName, contactNo, email, password } = req.body;

    if (!firstName || !lastName || !contactNo || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existsUser = await User.findOne({ email });
    if (existsUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      contactNo,
      email,
      password: hashedPassword,
    });

    console.log("User created:", user);

    const token = await generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      user: {
        firstName,
        lastName,
        contactNo,
        email,
      },
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logIn = async (req, res) => {
  try {
    // Log in logic
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Generate token
    const token = await generateToken(user._id);
    return res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signOut = async (req, res) => {
  try {
    // Sign out logic
    res.clearCookie("token"); // "token" is the name of the cookie created during signup function
    return res.status(200).json({ message: "User signed out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "User not found" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User dose not exist" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
