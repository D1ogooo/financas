import express from "express";

const router = express.Router();

import { authRoutes } from "./AuthRoutes";
import { finanscasRoutes } from "./financasRoutes";

// Routes - Auth
router.use("/auth", authRoutes)

// Routes - Valores
finanscasRoutes.use('/financas', finanscasRoutes)

export { router };