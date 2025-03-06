const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Define product routes
router.get('/', getProducts);           // Get all products
router.post('/', createProduct);        // Create a new product
router.put('/:id', updateProduct);      // Update product by ID
router.delete('/:id', deleteProduct);   // Delete product by ID

module.exports = router;
