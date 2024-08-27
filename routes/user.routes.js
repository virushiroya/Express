const express = require('express');
const userRoutes = express.Router();
const {
    registerUser,
    loginUser,
    getProfile,
    updateProfile
} = require("../controller/user.controller");
const { verifyToken } = require('../helpers/verifyToken')
const { upload } = require("../helpers/imageUpload")


userRoutes.post("/register", upload.single('profileImage'), registerUser);
userRoutes.post("/loginUser", loginUser);
userRoutes.get("/me", verifyToken, getProfile);
userRoutes.get("/updateProfile", verifyToken, updateProfile);


module.exports = userRoutes;
