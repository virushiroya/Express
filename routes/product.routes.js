const express = require('express');
const productRoutes = express.Router();
const {
    addNewProduct,
    getAllProduct,
    replaceProducts,
    updateProducts,
    deleteProducts
} = require("../controller/product.controller")


productRoutes.post("/", addNewProduct);

// READ - Get All Users
productRoutes.get("/", getAllProduct);

// REPLACE data - put
productRoutes.put("/:id", replaceProducts);

// UPDATE data - patch
productRoutes.patch("/:id", updateProducts);

// DELETE data - delete
productRoutes.delete("/:id", deleteProducts);

module.exports = productRoutes;