
const Shop = require('../models/shopModel');

exports.getShopProfile = async (req, res) => {
  try {
    const shop = await Shop.findOne({ username: req.params.username });
    if (!shop) {
      return res.status(404).json({ success: false, message: 'Shop not found' });
    }
    res.json(shop);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateShopProfile = async (req, res) => {
  try {
    const { username, name, phone } = req.body;
    const updatedShop = await Shop.findOneAndUpdate(
      { username },
      { name, phone },
      { new: true, runValidators: true }
    );
    if (!updatedShop) {
      return res.status(404).json({ success: false, message: 'Shop not found' });
    }
    res.json({ success: true, data: updatedShop });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
