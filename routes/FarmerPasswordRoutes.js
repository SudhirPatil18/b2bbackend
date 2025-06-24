const express = require('express');
const router = express.Router();
const authController = require('../controllers/farmerPassswordController');

// Route to change password
router.post('/farmer/changePassword', authController.changePassword);

module.exports = router;
