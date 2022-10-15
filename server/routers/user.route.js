const express = require("express");
const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", authUser);

module.exports = userRouter;
