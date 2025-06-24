const ShopFarmerOrder = require('../models/shopFarmerOrderModel');

// Get all shop-farmer orders
exports.getShopFarmerOrders = async (req, res) => {
  try {
    const orders = await ShopFarmerOrder.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

// Create a new shop-farmer order
exports.createShopFarmerOrder = async (req, res) => {
  const { name, orders, address,shopusername } = req.body;
  try {
    const newOrder = new ShopFarmerOrder({ name, orders, address,shopusername });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Delete a shop-farmer order
exports.deleteShopFarmerOrder = async (req, res) => {
  try {
    await ShopFarmerOrder.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};
// Accept an order
exports.acceptOrder = async (req, res) => {
  console.log(req.body)
  try {
      const order = await ShopFarmerOrder.findByIdAndUpdate(req.params.orderId, { status: 'Accepted',farmerusername:req.body.farmerusername });
      res.status(200).json(order);
  } catch (error) {
      res.status(500).json({ message: 'Failed to accept order', error });
  }
};

// Cancel an order
exports.cancelOrder = async (req, res) => {
  try {
      const order = await ShopFarmerOrder.findByIdAndUpdate(req.params.orderId, { status: 'Cancelled' });
      res.status(200).json(order);
  } catch (error) {
      res.status(500).json({ message: 'Failed to cancel order', error });
  }
};

// Update order status (progress/completed)
exports.updateOrderStatus = async (req, res) => {
  try {
      const { status } = req.body;
      const order = await ShopFarmerOrder.findByIdAndUpdate(req.params.orderId, { status });
      res.status(200).json(order);
  } catch (error) {
      res.status(500).json({ message: 'Failed to update order status', error });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
      await ShopFarmerOrder.findByIdAndDelete(req.params.orderId);
      res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Failed to delete order', error });
  }
};