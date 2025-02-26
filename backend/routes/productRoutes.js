const express = require('express');
const { getProducts, addProducts, updateProduct, deleteProduct, getProductsbyId } = require('../controllers/productController');

const productRoutes = express.Router()


productRoutes.get('/get-products',getProducts);

productRoutes.get('/product/:id', getProductsbyId)

productRoutes.post('/add-products',addProducts)

       
productRoutes.put('/update-products/:id',updateProduct)

productRoutes.delete('/delete-products/:id',deleteProduct)

module.exports = productRoutes;