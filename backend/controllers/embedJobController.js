import connection from "../database/connection.js";
const embedJobController = (req, res) => {
  const userId = req.user.id;

  const { layoutId } = req.body;
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const query = "SELECT * FROM jobs WHERE user_id = ? AND layouts_id = ?";
  connection.query(query, [userId, layoutId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(results);
  });
};

export { embedJobController };
