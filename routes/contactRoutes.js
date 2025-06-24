const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/contact', contactController.createContact);
router.get('/contacts', contactController.getContacts);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
