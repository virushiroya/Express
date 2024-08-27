const express = require('express');
const morgan = require('morgan');
const product = express();
const pdetails = require('./Product.json');
// console.log(pdetails);

product.use(morgan("dev"));
product.use(express.json());
product.use(express.urlencoded({ extended: false }));

// product.get("/", (req, res) => {
//     res.send("Welcome to Express Server")
// });

product.post('/pdetails' , (req,res) => { 
    pdetails.push(req.body); 
    res.json({message : "Product added Successfully"}) 
}) 

// READ - Get All Users
product.get("/pdetails", (req, res) => {
    res.json(pdetails);
});

// REPLACE data - put
product.put("/pdetails/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = pdetails.findIndex((item) => item.id === id)
    pdetails.splice(productIndex, 1, req.body);
    res.json({ message: "Product Replaced Successfully" });
});

// UPDATE data - patch
product.patch("/pdetails/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = pdetails.findIndex((item) => item.id === id)
    let product = pdetails[productIndex];
    pdetails.splice(productIndex, 1, {...product,...req.body});
    res.json({ message: "product Updated Successfully" });
});

// DELETE data - delete
product.delete("/pdetails/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = pdetails.findIndex((item) => item.id === id)
    pdetails.splice(productIndex, 1);
    res.json({ message: "product delete Successfully" });
});


product.listen(2309, () => {
    console.log('Server Start At http://localhost:2309');
})