const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerProfileController'); // Adjust the path if needed

// Route to update Farmer profile
router.put('/updateProfile', farmerController.updateFarmerProfile);

module.exports = router;
