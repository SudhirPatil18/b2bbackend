const Razorpay = require('razorpay');

// Configure Razorpay instance
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY,   // Store your key in environment variables
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Function to fetch payment history
exports.getPaymentHistory = async (req, res) => {
    try {
        const options = {
            from: req.query.from || Date.now() - 7 * 24 * 60 * 60 * 1000, // Last 7 days by default
            to: req.query.to || Date.now(),   // Till current date
            count: req.query.count || 10,     // Default 10 records
            skip: req.query.skip || 0         // Skip 0 by default
        };

        // Fetch payment history
        const payments = await razorpayInstance.payments.all(options);

        // Send the payment history as a response
        res.status(200).json({
            success: true,
            data: payments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch payment history",
            error: error.message
        });
    }
};
