const express = require('express');
const router = express.Router();
const authController = require('../controllers/currentPasswordController');

// Route to change password
router.post('/changePassword', authController.changePassword);

module.exports = router;
