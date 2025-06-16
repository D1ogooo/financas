import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import {
  HandleFinancesCreate, HandleFinancesRead,
  HandleFinancesUpdate, HandleFinancesDelete,
} from "../controllers/financasController";

const finanscasRoutes = express.Router();

finanscasRoutes.post(
  "/create",
  HandleFinancesCreate,
);

finanscasRoutes.post(
  "/read",
  HandleFinancesRead,
);

finanscasRoutes.post(
  "/update",
  HandleFinancesUpdate,
  AuthMiddleware
);

finanscasRoutes.post(
  "/delete",
  HandleFinancesDelete,
  AuthMiddleware
);

export { finanscasRoutes }