const express = require('express');
const router = express.Router();
const imageController = require('../controllers/uploadImageController');
const uploadsController = require('../controllers/uploadsImageController');
const shopPayRequestImagesController = require('../controllers/ShopPayRequestImageController');
const farmerPayRequestImagesController = require('../controllers/farmerPayRequestImageController');
const productImagesController = require('../controllers/productImagesController');

// Route to get uploaded images
router.get('/shop-product-images', imageController.getImages);
router.get('/uploads', uploadsController.getImages);
router.get('/shop-payrequest-images', shopPayRequestImagesController.getImages);
router.get('/farmer-payrequest-images', farmerPayRequestImagesController.getImages);
router.get('/product-images', productImagesController.getImages);

module.exports = router;
