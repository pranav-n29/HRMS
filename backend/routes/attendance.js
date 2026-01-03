import express from "express";
import { db } from "../db.js";

const router = express.Router();

/* CHECK-IN */
router.post("/attendance", (req, res) => {
  const { user_id } = req.body;

  db.query(
    "INSERT INTO attendance (user_id, date, check_in, status) VALUES (?,CURDATE(),CURTIME(),'Present')",
    [user_id],
    () => res.send("Attendance marked")
  );
});

/* EMPLOYEE VIEW ATTENDANCE */
router.get("/attendance/user/:id", (req, res) => {
  db.query(
    "SELECT date, status FROM attendance WHERE user_id=?",
    [req.params.id],
    (err, result) => res.json(result)
  );
});

export default router;
