// controllers/shopPayRequestController.js
const ShopPayRequest = require('../models/shopPayRequestModel');

const createShopPayRequest = async (req, res) => {
  try {
    const { 
      shopName, shopPhone, shopAddress, verificationStatus, 
      requestedAmount, remainingAmount, bankName, ifscCode, 
      holderName, branchName 
    } = req.body;
    const passbookPhoto = req.file ? req.file.path : '';

    const newPayRequest = new ShopPayRequest({
      shopName, shopPhone, shopAddress, verificationStatus,
      requestedAmount, remainingAmount, bankName, ifscCode,
      holderName, branchName, passbookPhoto
    });

    await newPayRequest.save();

    res.status(201).json({ success: true, message: 'Pay request submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getAllShopPayRequests = async (req, res) => {
    try {
        const requests = await ShopPayRequest.find();
        console.log(requests); // Check if dates are correctly formatted here
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch payment requests' });
    }
};
const deleteShopPayRequest = async (req, res) => {
    try {
        const result = await ShopPayRequest.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).send('Payment request not found.');
        res.status(200).send('Payment request deleted.');
    } catch (error) {
        console.error('Error deleting payment request:', error);
        res.status(500).send('Server error.');
    }
};
module.exports = {
  createShopPayRequest,
  getAllShopPayRequests, 
  deleteShopPayRequest
};
