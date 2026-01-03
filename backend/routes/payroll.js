import express from "express";
import { db } from "../db.js";

const router = express.Router();

/* EMPLOYEE PAYROLL VIEW */
router.get("/payroll/:userId", (req, res) => {
  db.query(
    "SELECT * FROM payroll WHERE user_id=?",
    [req.params.userId],
    (err, result) => res.json(result[0])
  );
});

export default router;
