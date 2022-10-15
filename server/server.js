const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");

const { chats } = require("./data/data");

const userRouter = require("./routers/user.route");

connectDB();
const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));
