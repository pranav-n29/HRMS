import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",   // keep ONE correct password
  database: "dayflow_hrms"
});

db.connect(err => {
  if (err) {
    console.error("❌ Database connection failed", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});
