// ----------------------------------------------------- lec_15
require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const server = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/user.routes.js');
const Portno = process.env.port_No
const cors = require('cors');
const path = require('path');
const ejs = require('ejs');
// console.log(users);

// Database Connection
// mongoose
//     .connect("mongodb://localhost:27017/db2")
//     .then(() => console.log("Database connection established successfully."))
//     .catch((err) => console.log(err));
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/public/images", express.static(path.join(__dirname, "public/images")))

server.set("view engine", 'ejs');

server.get("/", (req, res) => {
    res.send("Welcome to Express Server")
});

server.use("/api/user", userRoutes);

server.listen(Portno, () => {
    mongoose
    .connect("mongodb://127.0.0.1:27017/db1")
    .then(() => console.log("Database connection established successfully."))
    .catch((err) => console.log(err));
    console.log(`Server Start At http://localhost:${Portno}`);
})

