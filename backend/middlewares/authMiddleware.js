import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
  const token =
    req.cookies?.token ||
    req.headers["authorization"]?.split(" ")[1] ||
    req.body.token ||
    req.query.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
