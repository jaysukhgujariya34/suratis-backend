import { Router } from "express";
import passport from "passport";
import {
  AddBuyers,
  AllBuyers,
  oneBuyers,
} from "../controllers/buyerscontroller";
import { AddSuppliers, AllSuppliers, oneSuppliers } from "../controllers/suppliersController";
import multer from "multer";

const router = Router();

const upload = multer({ dest: "uploads/" });

router.get("/",async (req, res) => {
    try {
      const suppliers = await AllSuppliers(req.query);
      res.send(suppliers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.get( "/:id",async (req, res) => {
    try {
      const suppliers = await oneSuppliers(req.query);
      res.send(suppliers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post("/", upload.array("images"), async (req, res) => {
  console.log(req.body)
  try {
    const suppliers = await AddSuppliers(req.body);
    res.send(suppliers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
});

export default router;
