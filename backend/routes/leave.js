import express from "express";
import { db } from "../db.js";

const router = express.Router();

/* APPLY LEAVE */
router.post("/leave", (req, res) => {
  const { user_id, leave_type, start_date, end_date, reason } = req.body;

  db.query(
    "INSERT INTO leaves (user_id,leave_type,start_date,end_date,reason) VALUES (?,?,?,?,?)",
    [user_id, leave_type, start_date, end_date, reason],
    () => res.send("Leave applied")
  );
});

export default router;
