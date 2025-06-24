const FarmerOrder = require('../models/farmerOrderModel');

// GET all farmer orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await FarmerOrder.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single farmer order
exports.getOrderById = async (req, res) => {
  try {
    const order = await FarmerOrder.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new farmer order
exports.createOrder = async (req, res) => {
  const order = new FarmerOrder({
    name: req.body.name,
    orders: req.body.orders,
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update farmer order
exports.updateOrder = async (req, res) => {
  try {
    const order = await FarmerOrder.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.name = req.body.name;
    order.orders = req.body.orders;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE farmer order
exports.deleteOrder = async (req, res) => {
  try {
    const order = await FarmerOrder.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await order.remove();
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// PATCH accept farmer order
exports.acceptOrder = async (req, res) => {
  try {
    const order = await FarmerOrder.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.status = 'accepted'; // Assuming there's a status field
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// PATCH cancel farmer order
exports.cancelOrder = async (req, res) => {
  console.log(req.params.id)
  try {
    const order = await FarmerOrder.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.status = 'cancelled'; // Assuming there's a status field
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


