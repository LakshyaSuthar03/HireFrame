import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L@kshya2003",
  database: "HIREFRAME",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Database connected");
});

export default connection;
