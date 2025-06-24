// routes/shopRoutes.js
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/ProfileSettingsController');

router.get('/api/shops/:username', shopController.getShopProfile);
router.put('/api/shops/updateProfile', shopController.updateShopProfile);

module.exports = router;
