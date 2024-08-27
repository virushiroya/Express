const express = require('express');
const userRoutes = express.Router();
const {
    registerUser,
    loginUser,
    getProfile
} = require("../controller/user.controller");
const { verifyToken } = require('../helpers/verifyToken')


userRoutes.post("/register", registerUser);
userRoutes.post("/loginUser", loginUser);
userRoutes.get("/me", verifyToken, getProfile);

module.exports = userRoutes;
