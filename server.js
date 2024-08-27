// ----------------------------------------------------- lec_8

const express = require('express');
const morgan = require('morgan');
const server = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/user.routes.js');
// console.log(users);

// Database Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/db1")
    .then(() => console.log("Database connection established successfully."))
    .catch((err) => console.log(err));

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
    res.send("Welcome to Express Server")
});

server.use("/api/user", userRoutes);

server.listen(2304, () => {
    // mongoose
    // .connect("mongodb://127.0.0.1?27017/db1")
    // .then(() => console.log("Database connection established successfully."))
    // .catch((err) => console.log(err));
    console.log('Server Start At http://localhost:2304');
})
