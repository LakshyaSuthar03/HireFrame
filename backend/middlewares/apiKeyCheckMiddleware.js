const apiKeyCheckMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== "1234567890") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  next();
};
export default apiKeyCheckMiddleware;
