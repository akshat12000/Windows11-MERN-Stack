const express = require("express");
const {createFolder,getFolders,getFolder,updateFolder,deleteFolder, getFolderContent} = require("../controllers/FolderController");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

const folderRouter = express.Router()

folderRouter.route("/create").post(isAuthenticated,createFolder);
folderRouter.route("/:parentFolder").get(isAuthenticated,getFolders);
folderRouter.route("/one/:id").get(isAuthenticated,getFolder);
folderRouter.route("/content/:id").get(isAuthenticated,getFolderContent);
folderRouter.route("/update/:id").put(isAuthenticated,updateFolder);
folderRouter.route("/delete/:id").delete(isAuthenticated,deleteFolder);

module.exports = folderRouter;


