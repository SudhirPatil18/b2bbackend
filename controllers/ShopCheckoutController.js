const ShopCheckoutModel = require('../models/ShopCheckoutModel');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        // Destructure data from the request body
        const { 
            productname,farmerusername,farmername, productprice,quantity, firstname, lastname, country, 
            streetaddress, apartment, towncity, postcodezip, phone, 
            emailaddress,username, payment_method, terms 
        } = req.body;

        // Create a new order
        const newOrder = new ShopCheckoutModel({
            productname,
            quantity,
            username,
            farmername,
            farmerusername,
            productprice,
            firstname,
            lastname,
            country,
            streetaddress,
            apartment: apartment || null,  // Optional field
            towncity,
            postcodezip,
            phone,
            emailaddress,
            payment_method,
            terms
        });

        // Save the new order to the database
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);  // Return the saved order with status 201 (Created)
    } catch (error) {
        res.status(500).json({ message: 'Error saving order', error });
    }
};

// Get all orders or filter by certain fields
exports.getOrders = async (req, res) => {
    try {
        const filter = req.query || {};  // You can add filters by using query params
        const orders = await ShopCheckoutModel.find(filter);
        res.status(200).json(orders);  // Return the orders with status 200 (OK)
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error });
    }
};

// Get a single order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await ShopCheckoutModel.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);  // Return the found order with status 200 (OK)
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order', error });
    }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await ShopCheckoutModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(updatedOrder);  // Return the updated order with status 200 (OK)
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await ShopCheckoutModel.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};
