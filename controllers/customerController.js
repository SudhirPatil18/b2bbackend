const Customer = require('../models/customerModel');

exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ success: true, message: 'Customer created successfully' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const { customerId } = req.params;
  const { name, surname, phone, email, address } = req.body;

  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      { name, surname, phone, email, address },
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }

    res.json({ success: true, data: updatedCustomer });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  const { customerId } = req.params;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);

    if (!deletedCustomer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }

    res.json({ success: true, message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};