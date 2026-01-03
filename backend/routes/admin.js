import express from "express";
import { db } from "../db.js";

const router = express.Router();

/* VIEW ALL LEAVES */
router.get("/admin/leaves", (req, res) => {
  db.query("SELECT * FROM leaves", (err, result) => {
    res.json(result);
  });
});

/* APPROVE LEAVE */
router.put("/admin/leave/:id", (req, res) => {
  db.query(
    "UPDATE leaves SET status='Approved' WHERE id=?",
    [req.params.id],
    () => res.send("Leave approved")
  );
});

/* VIEW EMPLOYEES */
router.get("/admin/employees", (req, res) => {
  db.query(
    "SELECT employee_id,name,email FROM users WHERE role='employee'",
    (err, result) => res.json(result)
  );
});

/* ATTENDANCE REPORT */
router.get("/admin/attendance", (req, res) => {
  db.query(
    `SELECT u.name, a.date, a.status
     FROM attendance a
     JOIN users u ON a.user_id=u.id`,
    (err, result) => res.json(result)
  );
});

/* PAYROLL REPORT */
router.get("/admin/payroll", (req, res) => {
  db.query(
    "SELECT user_id, net_salary FROM payroll",
    (err, result) => res.json(result)
  );
});

export default router;
