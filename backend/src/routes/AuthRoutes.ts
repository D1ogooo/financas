import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import {
  HandleSignInUser,
  HandleSignUpUser
} from "../controllers/authController";

const authRoutes = express.Router();

authRoutes.post(
  "/signin",
  HandleSignInUser,
);

authRoutes.post(
  "/signup",
  HandleSignUpUser,
);


export { authRoutes }