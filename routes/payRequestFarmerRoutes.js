const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const payRequestFarmerController = require('../controllers/payRequestFarmerController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'farmer-payrequest-images/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

router.post('/payRequestFarmer', upload.single('passbookPhoto'), payRequestFarmerController.createPayRequest);
router.get('/farmer-pay-requests', payRequestFarmerController.getAllPayRequestFarmers);
router.delete('/farmer-pay-requests/:id', payRequestFarmerController.deletePayRequestFarmer);
module.exports = router;
