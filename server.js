const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const classRouter = require("./classes/class-router");
const userRouter = require("./users/user-router");
const sampleRouter = require('./samples/sample-router');

require('dotenv').config();

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(cookieParser())
server.use("/classes", classRouter);
server.use("/users", userRouter);
server.use(sampleRouter);

server.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    message: "A server error has occurred",
  });
});

module.exports = server;
