const PayRequestFarmer = require('../models/payRequestFarmerModel');

exports.createPayRequest = async (req, res) => {
    try {
        const { farmerName, farmerPhone, farmerAddress, verificationStatus, requestedAmount, remainingAmount, bankName, ifscCode, holderName, branchName } = req.body;
        const passbookPhoto = req.file.path;

        const newPayRequest = new PayRequestFarmer({
            farmerName,
            farmerPhone,
            farmerAddress,
            verificationStatus,
            requestedAmount,
            remainingAmount,
            bankName,
            ifscCode,
            holderName,
            branchName,
            passbookPhoto
        });

        await newPayRequest.save();

        res.status(201).json({ success: true, message: 'Pay request submitted successfully' });
    } catch (error) {
        console.error('Error creating pay request:', error);
        res.status(500).json({ success: false, message: 'Error submitting pay request' });
    }
};


exports.getAllPayRequestFarmers = async (req, res) => {
    try {
        const payRequestFarmers = await PayRequestFarmer.find();
        res.json(payRequestFarmers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deletePayRequestFarmer = async (req, res) => {
    try {
        const result = await PayRequestFarmer.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).send('Payment request not found.');
        res.status(200).send('Payment request deleted.');
    } catch (error) {
        console.error('Error deleting payment request:', error);
        res.status(500).send('Server error.');
    }
};
