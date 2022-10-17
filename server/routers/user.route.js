const express = require("express");
const userRouter = express.Router();
const { registerUser, authUser } = require("../controllers/user.controller");

userRouter.post("/", registerUser);
userRouter.post("/login", authUser);

module.exports = userRouter;
