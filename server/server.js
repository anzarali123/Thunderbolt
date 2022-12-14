const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const { chatRouter } = require("./routers/chat.route");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const userRouter = require("./routers/user.route");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));
