// ------------------------------------------------- lec_5

const express = require('express');
const morgan = require('morgan');
const server = express();
const users = require('./friend.json');
// console.log(users);

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (req, res) => {
    res.send("Welcome to Express Server")
});

// CRUD
// Create User
server.post("/user", (req, res) => {
    console.log(req.body);
    // users.push(req.body);
    // res.json({ message: "User Added Success" });
});

// READ - Get All Users
server.get("/user", (req, res) => {
    res.json(users);
});

// READ - Get single Users
server.get("/user/:id", (req, res) => {
    let id = +req.params.id;
    let iteam = users.find((user) => user.id === id)
    res.json(iteam);
});

server.listen(2304, () => {
    console.log('server start at http://localhost:2304');
})
