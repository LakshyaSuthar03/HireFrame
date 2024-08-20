import bcrypt from "bcrypt";
import connection from "../database/connection.js";
import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10).then((hash) => hash);
    const query = `INSERT INTO users (email, password_hash) VALUES (?, ?)`;

    connection.query(query, [email, hashedPassword], (error, result) => {
      if (error) {
        return res.status(400).json({ message: "User already exists" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const query = `SELECT * FROM users WHERE email= ?`;
    connection.query(query, [email], async (error, result) => {
      if (error) {
        return res.status(400).json({ message: "User does not exist" });
      }
      if (result.length === 0) {
        return res.status(400).json({ message: "User does not exist" });
      }
      const user = result[0];
      if (await bcrypt.compare(password, user.password_hash)) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
          expiresIn: "30d",
        });
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Set to true in production for HTTPS
          maxAge: 360000000000, //
          sameSite: "Strict", // 'Strict' or 'Lax' depending on your needs
        });
        const { password_hash, created_at, updated_at, ...userData } = user;
        return res.status(200).json({ token, userData });
      } else {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { register, login };
