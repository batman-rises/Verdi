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
// This is typically used to protect routes that require authentication, ensuring that only authenticated users can access them.
// The `verifyToken` function checks for the presence of a JWT token in the request cookies, verifies it using a secret key,
// and if valid, attaches the user information to the request object for further processing in subsequent middleware or route handlers.
// If the token is missing or invalid, it responds with an error message and appropriate status code.
// This is commonly used in Express.js applications to secure routes and ensure that only authenticated users can access certain resources.
