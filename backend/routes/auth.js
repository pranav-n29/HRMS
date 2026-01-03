import express from "express";
import { db } from "../db.js";

const router = express.Router();

/* LOGIN */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Missing credentials");
  }

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    (err, result) => {
      if (err) return res.status(500).send("DB error");
      if (result.length === 0) return res.status(401).send("Email not found");
      if (result[0].password !== password)
        return res.status(401).send("Incorrect password");

      res.json(result[0]);
    }
  );
});

/* REGISTER */
router.post("/register", (req, res) => {
  const { employee_id, name, email, password, role, phone, address } = req.body;

  db.query(
    `INSERT INTO users 
     (employee_id, name, email, password, role, phone, address)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [employee_id, name, email, password, role, phone, address],
    (err) => {
     if (err) {
  console.error("MYSQL ERROR:", err.code, err.sqlMessage);
  return res.status(400).send(err.sqlMessage);
}

      res.send("Registration successful");
    }
  );
});

export default router;
