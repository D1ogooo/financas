import express from "express";
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
);

finanscasRoutes.post(
  "/delete",
  HandleFinancesDelete,
);

export { finanscasRoutes }