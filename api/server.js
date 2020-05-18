const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Require
const apiRouter = require("./apiRouter.js");
// const configureMiddleware = require("./configMiddleware.js");

const server = express();

// configureMiddleware(server);
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/", apiRouter);

module.exports = server;
