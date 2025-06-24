const bcrypt = require('bcryptjs');
const Shop = require('../models/shopModel');  // Update this to point to the correct model

// Change Password Function for Shops
exports.changePassword = async (req, res) => {
  const { username, currentPassword, newPassword } = req.body;

  try {
    // Find the shop by username
    const shop = await Shop.findOne({ username });
    if (!shop) {
      return res.status(404).json({ success: false, message: 'Shop not found' });
    }

    // Compare current password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(currentPassword, shop.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Current password is incorrect' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the shop's password in the database
    shop.password = hashedPassword;
    await shop.save();

    res.json({ success: true, message: 'Password changed successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};
