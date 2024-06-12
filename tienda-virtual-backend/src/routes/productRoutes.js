// File: /tienda-virtual-backend/src/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Create a new product
router.post('/', ProductController.createProduct);

// Get all products
router.get('/', ProductController.getAllProducts);

// Get a specific product by ID
router.get('/:id', ProductController.getProductById);

// Update a product
router.put('/:id', ProductController.updateProduct);

// Delete a product
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
