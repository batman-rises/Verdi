import express from "express";
import {
  getMe,
  login,
  signOut,
  signup,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/me", verifyToken, getMe);
router.post("/logout", verifyToken, signOut);

export default router;
// This code sets up the authentication routes for login and registration.
// It imports the necessary modules, defines the routes, and exports the router.
// The `login` route handles user login, while the `register` route handles user registration.
// The `auth.controller.js` file contains the logic for these operations.
// The `verifyToken` middleware is used to protect the `getMe` and `signOut` routes,
// ensuring that only authenticated users can access their own information and log out.
