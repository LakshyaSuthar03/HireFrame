import connection from "../database/connection.js";
const dashboard = async (req, res) => {
  try {
    const userId = req.user.id;
    const query = `SELECT l.* FROM users as u JOIN layouts as l ON u.id = l.user_id`;
    connection.query(query, [userId], (error, result) => {
      if (error) {
        return res.status(error.code).json({ message: error.message });
      }
      return res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const createLayout = async (req, res) => {
  const userId = req.user.id;
  const query = `INSERT INTO LAYOUTS (user_id,name) VALUES (?,?)`;
  connection.query(query, [userId, req.body.name], (error, result) => {
    if (error) {
      return res.status(error.code).json({ message: error.message });
    }
    return res.status(201).json({ message: "Layout created successfully" });
  });
};

export { dashboard, createLayout };
