import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import BuyersRoutes from "./buyersRoutes";
import SuppliersRoutes from "./suppliersRoutes";

router.use("/api/users", userRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/buyers", BuyersRoutes);
router.use("/api/suppliers", SuppliersRoutes);


export default router;
