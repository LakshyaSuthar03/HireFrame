import connection from "../database/connection.js";
const apiKeyCheckMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({ error: "API key is missing" });
  }

  // Assuming you're using MySQL or any similar database query
  connection.query(
    "SELECT * FROM users WHERE api_key = ?",
    [apiKey],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid API key" });
      }
      req.user = results[0];
      next();
    }
  );
};
export default apiKeyCheckMiddleware;
