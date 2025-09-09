import { Router } from "express";
import {
  signUp,
  logIn,
  signOut,
  getUser,
} from "../controllers/auth.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

export const authRouter = Router();

authRouter.post("/signup", signUp); // 'profileImage' is the name of the field in the form-data. upload.single is a middleware that will handle the file upload
authRouter.post("/login", logIn);
authRouter.post("/logout", signOut);
authRouter.get("/user", checkAuth, getUser);
