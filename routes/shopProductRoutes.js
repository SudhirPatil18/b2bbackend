const express = require('express');
const router = express.Router();
const shopProductController = require('../controllers/shopProductController');
const shopProductUpload = require('../middleware/shopProductUpload');

router.post('/add', shopProductUpload, shopProductController.addProduct);
router.get('/', shopProductController.getAllProducts);
router.get('/:productId', shopProductController.getProduct);
router.put('/:productId', shopProductUpload, shopProductController.updateProduct);
router.delete('/:productId', shopProductController.deleteProduct);

module.exports = router;
