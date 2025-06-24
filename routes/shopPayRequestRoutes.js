// routes/shopPayRequestRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
// Import controller functions
const { createShopPayRequest, getAllShopPayRequests, deleteShopPayRequest } = require('../controllers/shopPayRequestController');

// Setup multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'shop-payrequest-images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/payRequestShop', upload.single('passbookPhoto'), createShopPayRequest);
router.get('/shop-pay-requests', getAllShopPayRequests);
router.delete('/shop-pay-requests/:id', deleteShopPayRequest); 
module.exports = router;
