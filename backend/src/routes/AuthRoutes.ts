import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import {
  HandleSignInUser,
  HandleSignOutUser,
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

authRoutes.post(
  "/signout",
  HandleSignOutUser,
  [AuthMiddleware, HandleSignOutUser]
);

export { authRoutes }