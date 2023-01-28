const express = require("express");
const { createFile, getFiles, getFile, updateFile, deleteFile } = require("../controllers/FileController");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

const fileRouter = express.Router();

fileRouter.route("/create").post(isAuthenticated,createFile);
fileRouter.route("/:parent").get(isAuthenticated,getFiles);
fileRouter.route("/:id").get(isAuthenticated,getFile);
fileRouter.route("/update/:id").put(isAuthenticated,updateFile);
fileRouter.route("/delete/:id").delete(isAuthenticated,deleteFile);

module.exports = fileRouter;

