// ----------------------------------------------------- lec_7

const express = require('express');
const morgan = require('morgan');
const server = express();
const userRoutes = require('./routes/user.routes.js');
// console.log(users);

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
    res.send("Welcome to Express Server")
});

server.use("/user", userRoutes);

server.listen(2304, () => {
    console.log('Server Start At http://localhost:2304');
})
