const Shop = require('../models/shopModel');
const bcrypt = require('bcrypt');
const path = require('path')
exports.registerShop = async (req, res) => {
  try {
      const { name, address, phone, username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const shop = new Shop({
          name,
          address,
          phone,
          username,
          password: hashedPassword,
          shopPhoto: req.files.shopPhoto ? req.files.shopPhoto[0].path : null,
          aadharCard: req.files.aadharCard ? req.files.aadharCard[0].path : null,
          panCard: req.files.panCard ? req.files.panCard[0].path : null,
          idVerification: req.files.idVerification ? req.files.idVerification[0].path : null,
          phoneVerification: req.files.phoneVerification ? req.files.phoneVerification[0].path : null,
          status: 'pending' // Shop starts with 'pending' status
      });

      await shop.save();
      res.status(201).json({ success: true, message: 'Shop registered successfully! Awaiting admin approval.' });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
};


exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.status(200).json(shops);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Handle login
// exports.login = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//       // Find shop by username
//       const shop = await Shop.findOne({ username });

//       // Check if shop exists
//       if (!shop) {
//           return res.status(400).json({ success: false, message: 'Invalid username or password' });
//       }

//       // Check if password matches
//       const isMatch = await bcrypt.compare(password, shop.password);

//       if (!isMatch) {
//           return res.status(400).json({ success: false, message: 'Invalid username or password' });
//       }

//       // Authentication successful
//       res.json({ success: true, message: 'Login successful' });
//   } catch (error) {
//       res.status(500).json({ success: false, message: 'Server error' });
//   }
// };
// Handle login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
      // Find shop by username
      const shop = await Shop.findOne({ username });

      // Check if shop exists
      if (!shop) {
          return res.status(400).json({ success: false, message: 'Invalid username or password' });
      }

      // Check if shop is approved
      if (shop.status !== 'approved') {
          return res.status(403).json({ success: false, message: `Shop is ${shop.status}. Please wait for admin approval.` });
      }

      // Check if password matches
      const isMatch = await bcrypt.compare(password, shop.password);

      if (!isMatch) {
          return res.status(400).json({ success: false, message: 'Invalid username or password' });
      }

      // Authentication successful
      res.json({ success: true, message: 'Login successful' });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
  }
};


exports.getUsername = async (req, res) => {
  try {
    const shop=await Shop.find()
    res.status(201).json(shop)
        } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Added Approve And Reject Shop
// Approve a shop (admin)
exports.approveShop = async (req, res) => {
  try {
      const shopId = req.params.id;
      const shop = await Shop.findByIdAndUpdate(shopId, { status: 'approved' }, { new: true });
      if (!shop) {
          return res.status(404).json({ success: false, message: 'Shop not found' });
      }
      res.json({ success: true, message: 'Shop approved successfully!', shop });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
};

// Reject a shop (admin)
exports.rejectShop = async (req, res) => {
  try {
      const shopId = req.params.id;
      const shop = await Shop.findByIdAndUpdate(shopId, { status: 'rejected' }, { new: true });
      if (!shop) {
          return res.status(404).json({ success: false, message: 'Shop not found' });
      }
      res.json({ success: true, message: 'Shop rejected successfully!', shop });
  } catch (error) {
      res.status(500).json({ success: false, message: error.message });
  }
};
exports.updatePassword = async (req, res) => {
  console.log(req.body)
  const { phone } = req.params; // Fetch phone from URL params
  const { newPassword } = req.body; // Fetch new password from request body

  try {
    // Find user by phone number
    const user = await Shop.findOne({ phone: phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

