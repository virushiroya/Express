const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAllUsers,
    getSingleUser,
    replaceUsers,
    updateUsers,
    deleteUsers
} = require("../controller/user.controller")


userRoutes.post("/", addNewUser);

// READ - Get All Users
userRoutes.get("/", getAllUsers);

// READ - Get single Users
userRoutes.get("/get-user", getSingleUser);

// // REPLACE data - put
// userRoutes.put("/:id", replaceUsers);

// // UPDATE data - patch
// userRoutes.patch("/:id", updateUsers);

// // DELETE data - delete
// userRoutes.delete("/:id", deleteUsers);

module.exports = userRoutes;