import express from "express";

const router = express.Router();

import { authRoutes } from "./AuthRoutes";
import { finanscasRoutes } from "./financasRoutes";
import { AuthMiddleware } from "../middlewares/authMiddleware";

// Routes - Auth
router.use("/auth", authRoutes)

// Routes - Valores
router.use('/financas', AuthMiddleware, finanscasRoutes)

export { router };