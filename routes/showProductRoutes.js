const express = require('express');
const router = express.Router();
const showproductController = require('../controllers/showProductController');
router.post('/add', showproductController.showSingleProduct);
router.get('/', showproductController.getSingleProducts);
router.delete('/', showproductController.deleteSingleProduct);
router.get('/deletedItems', showproductController.getDeletedItems);
router.put('/cancelOrders/:id', showproductController.getCancelOrders);
module.exports = router;