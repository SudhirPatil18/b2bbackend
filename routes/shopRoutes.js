
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
const upload = require('../middleware/uploadMiddleware'); // Multer middleware for file uploads

router.post('/shops', upload.fields([
    { name: 'shopPhoto', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 },
    { name: 'panCard', maxCount: 1 },
    { name: 'idVerification', maxCount: 1 },
    { name: 'phoneVerification', maxCount: 1 }
]), shopController.registerShop);
router.get('/shops', shopController.getShops);
router.post('/shops/login', shopController.login);
router.post('/shops/getUsername', shopController.getUsername);
router.put('/shops/approve/:id', shopController.approveShop); // Approve a shop
router.put('/shops/reject/:id', shopController.rejectShop);   // Reject a shop
router.put('/shop/update-password/:phone', shopController.updatePassword);
module.exports = router;