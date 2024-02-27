import { Router } from "express";
import passport from "passport";
import {
  AddBuyers,
  AllBuyers,
  oneBuyers,
} from "../controllers/buyerscontroller";
import { AddSuppliers, AllSuppliers, oneSuppliers } from "../controllers/suppliersController";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const suppliers = await AllSuppliers(req.query);
      res.send(suppliers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const suppliers = await oneSuppliers(req.query);
      res.send(suppliers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post("/", async (req, res) => {
  try {
    const suppliers = await AddSuppliers(req.body);
    res.send(suppliers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
});

export default router;
