const express = require('express');
const router = express.Router();
const { upload, createPayRequestShop } = require('../controllers/payRequestShopController');

router.post('/', upload, createPayRequestShop);

module.exports = router;