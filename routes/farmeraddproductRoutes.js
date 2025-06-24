const express = require('express');
const router = express.Router();
const farmeraddproductController = require('../controllers/farmeraddproductController');
const farmerproductupload = require('../middleware/farmerproductupload');

// Add a new product
router.post('/add', farmeraddproductController.addProduct); // Apply middleware here
// Get all products
router.get('/', farmeraddproductController.getAllProducts);
// Get a single product by ID
router.get('/:productId', farmeraddproductController.getProduct);
// Update a product by ID
router.put('/:productId', farmerproductupload, farmeraddproductController.updateProduct); // Ensure this is correct
// Delete a product by ID
router.delete('/:productId', farmeraddproductController.deleteProduct);

module.exports = router; // Corrected the syntax here
