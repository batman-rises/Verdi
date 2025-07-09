import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import { errorHandler } from "../utils/error.js";
import { verifyToken } from "../utils/verifyToken.js";

export const signup = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "Email already registered"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    await newUser.save();
    res.status(201).json("New user created successfully");
  } catch (e) {
    next(e);
  }
};
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(401, "Invalid credentials"));
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .status(200)
      .json({ message: "Login successful" });
  } catch (e) {
    next(e);
  }
};
//getMe is your secure, backend-powered "Who am I?" check, used to tell the frontend who the current user is based on the cookie token.
export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

//sign out function to clear the cookie
export const signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Signed out successfully" });
};

// This code defines the authentication controller for user signup, login, fetching user details, and signing out.
// It includes functions to handle user registration, login, retrieving user information, and signing out.
// The signup function checks for existing users, hashes the password, and saves the new user.
// The login function verifies the user's credentials, generates a JWT token, and sets it as a cookie.
// The getMe function retrieves the current user's details based on the token in the request.
// The signOut function clears the authentication cookie to log the user out.
