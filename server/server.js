const express = require("express");
require("dotenv").config();
const { chats } = require("./data/data");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const chat = chats.find((chat) => chat._id === id);
  res.send(chat);
});

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));
