// third-party libraries
const express = require("express");

// modules
const resourceRouter = require("./resources");
const mainRouter = express.Router();

mainRouter.use("/resources", resourceRouter);

module.exports = mainRouter;
