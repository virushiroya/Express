// ----------------------------------------------------- lec_10
require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const server = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/user.routes.js');
const Portno = process.env.port_No
// console.log(users);

// Database Connection
mongoose
    .connect(process.env.mongo_URL)
    .then(() => console.log("Database connection established successfully."))
    .catch((err) => console.log(err));

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
    res.send("Welcome to Express Server")
});

server.use("/api/user", userRoutes);

server.listen(Portno, () => {
    // mongoose
    // .connect("mongodb://127.0.0.1?27017/db1")
    // .then(() => console.log("Database connection established successfully."))
    // .catch((err) => console.log(err));
    console.log('Server Start At http://localhost:${Portno}');
})

