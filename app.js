const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const formatLog = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLog));

app.use(cors());

app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server errpr" } = err;
  res.status(status).json({ message });
});

module.exports = app;
