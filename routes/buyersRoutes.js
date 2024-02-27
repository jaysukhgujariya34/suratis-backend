import { Router } from "express";
import passport from "passport";
import { AddBuyers, AllBuyers, oneBuyers } from "../controllers/buyerscontroller";

const router = Router();

router.get("/",async (req, res) => {
    try {
      const buyers = await AllBuyers(req.query);
      res.send(buyers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.get("/:id",passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
      const buyers = await oneBuyers(req.query);
        if (!buyers) {
          return res.send({ message: "Not Found" });
        }
      res.send(buyers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post("/", async (req, res) => {
  console.log("buyers add data",req.body);
    try {
      const buyers = await AddBuyers(req.body);
      res.send(buyers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);


export default router;
