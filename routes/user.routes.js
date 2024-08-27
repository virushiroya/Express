const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
} = require("../controller/user.controller")


userRoutes.post("/", addNewUser);

// READ - Get All Users
userRoutes.get("/", getAllUsers);

// READ - Get single Users
userRoutes.get("/get-user", getSingleUser);

// UPDATE data - patch
userRoutes.put("/", updateUser);

// DELETE data - delete
userRoutes.delete("/", deleteUser);

module.exports = userRoutes;