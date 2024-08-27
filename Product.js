const express = require('express');
const morgan = require('morgan');
const product = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.routes');
// console.log(users);

// Database Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/Product")
    .then(() => console.log("Database connection established successfully."))
    .catch((err) => console.log(err));


product.use(morgan("dev"));
product.use(express.json());
product.use(express.urlencoded({ extended: false }));

product.get("/", (req, res) => {
    res.send("Welcome to Express Server")
});

product.use("/api/pdetails", productRoutes);

product.listen(2304, () => {
    console.log('Server Start At http://localhost:2304');
})

