const express = require('express');
const morgan = require('morgan');
const product = express();
const productRoutes = require('./routes/product.routes');
// console.log(users);

product.use(morgan("dev"));
product.use(express.json());
product.use(express.urlencoded({ extended: false }));

product.get("/", (req, res) => {
    res.send("Welcome to Express Server")
});

product.use("/pdetails", productRoutes);

product.listen(2304, () => {
    console.log('Server Start At http://localhost:2304');
})
