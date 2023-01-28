const express = require('express');
const { register, login, logout, getUserProfile } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');

const userRouter = express.Router()

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/logout",isAuthenticated,logout)
userRouter.get("/profile",isAuthenticated,getUserProfile)

module.exports = userRouter
