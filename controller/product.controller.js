const pdetails = require('../Product.json');

exports.addNewProduct = (req,res) => { 
    pdetails.push(req.body); 
    res.json({message : "Product added Successfully"}) 
}

// READ - Get All Users
exports.getAllProduct = (req, res) => {
    res.json(pdetails);
}

// REPLACE data - put
exports.replaceProducts = (req, res) => {
    let id = +req.params.id;
    let productIndex = pdetails.findIndex((item) => item.id === id)
    pdetails.splice(productIndex, 1, req.body);
    res.json({ message: "Product Replaced Successfully" });
}

// UPDATE data - patch
exports.updateProducts = (req, res) => {
    let id = +req.params.id;
    let productIndex = pdetails.findIndex((item) => item.id === id)
    let product = pdetails[productIndex];
    pdetails.splice(productIndex, 1, {...product,...req.body});
    res.json({ message: "product Updated Successfully" });
}

// DELETE data - delete
exports.deleteProducts = (req, res) => {
    let id = +req.params.id;
    let productIndex = pdetails.findIndex((item) => item.id === id)
    pdetails.splice(productIndex, 1);
    res.json({ message: "product delete Successfully" });
}