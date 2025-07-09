import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
};
// This middleware function verifies the JWT token from the request cookies.
// If the token is valid, it attaches the user information to the request object and calls the `next` function to proceed to the next middleware or route handler.
// If the token is missing or invalid, it responds with an appropriate error message and status code
// (401 for unauthorized, 403 for forbidden).
