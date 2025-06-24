const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);
// PUT route to update a customer
router.put('/customers/:customerId', customerController.updateCustomer);

// DELETE route to delete a customer
router.delete('/customers/:customerId', customerController.deleteCustomer);

module.exports = router;
