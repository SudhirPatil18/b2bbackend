const Checkout = require('../models/checkoutModel');

// Create a new checkout entry
exports.createCheckout = async (req, res) => {
  try {
    console.log("Received Checkout Data:", req.body); // Log incoming data

    const { 
      ProductName, 
      quantity, 
      price, 
      firstname, 
      lastname, 
      country, 
      streetaddress, 
      apartment, 
      towncity, 
      postcodezip, 
      phone, 
      emailaddress, 
      payment_method, 
      terms, 
      shoptoken 
    } = req.body;

    // Create new checkout data with required fields
    const checkoutData = new Checkout({
      ProductName,
      quantity,
      price,
      firstname,
      lastname,
      country,
      streetaddress,
      apartment,
      towncity,
      postcodezip,
      phone,
      emailaddress,
      payment_method,
      terms,
      shoptoken
    });

    // Save the data to the database
    const newCheckout = await checkoutData.save();
    res.status(201).json(newCheckout);
  } catch (err) {
    console.error('Error in createCheckout:', err.message); // Log error details
    res.status(400).json({ message: err.message }); // Respond with the error message
  }
};

// Retrieve all checkout data
exports.checkoutData = async (req, res) => {
  try {
    const checkoutData = await Checkout.find({});
    console.log("Checkout data:", checkoutData); // Log retrieved data
    res.status(200).json(checkoutData);
  } catch (err) {
    console.error('Error retrieving checkout data:', err.message); // Log error details
    res.status(500).json({ message: err.message }); // Respond with the error message
  }
};

// Cancel an order
exports.cancelOrder = async (req, res) => {
  const { orderId } = req.params; // Get the order ID from the URL parameters
  try {
    const updatedOrder = await Checkout.findByIdAndUpdate(
      orderId,
      { status: 'cancelled' }, // Update the status to 'cancelled'
      { new: true } // Return the updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' }); // Handle case where order does not exist
    }

    res.status(200).json(updatedOrder); // Return the updated order
  } catch (err) {
    console.error('Error canceling order:', err.message); // Log error details
    res.status(500).json({ message: err.message }); // Respond with the error message
  }
};
