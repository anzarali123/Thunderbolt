const express = require("express");
const userRouter = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/user.controller");

userRouter.post("/", registerUser);
userRouter.get("/", protect, allUsers);
userRouter.post("/login", authUser);

module.exports = userRouter;
